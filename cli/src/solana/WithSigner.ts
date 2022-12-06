import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import {
  Keypair,
  PublicKey,
  sendAndConfirmRawTransaction,
  TransactionSignature,
} from "@solana/web3.js";
import { SolanaBaseCommand } from "./BaseCommand";
import TransportNodeHid from "@ledgerhq/hw-transport-node-hid-singleton";
import Solana from "@ledgerhq/hw-app-solana";
import { TransactionObject } from "@switchboard-xyz/solana.js";
import bs58 from "bs58";

export abstract class SolanaWithSignerBaseCommand extends SolanaBaseCommand {
  static flags = {
    ...SolanaBaseCommand.flags,
    keypair: Flags.string({
      char: "k",
      exclusive: ["ledger"],
      description:
        "keypair that will pay for onchain transactions. defaults to new account authority if no alternate authority provided",
    }),
    ledger: Flags.boolean({
      description: "enable ledger support",
      exclusive: ["keypair"],
    }),
    ledgerPath: Flags.string({
      description: "HID path to the ledger",
      default: "44'/501'",
      dependsOn: ["ledger"],
    }),
  };

  public hasSigner = true;

  public signerType: "keypair" | "ledger";

  public ledger?: Solana;

  public ledgerPath: string;

  public keypair?: Keypair;

  public payer: PublicKey;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    SolanaBaseCommand.flags = flags as any;

    this.ledgerPath = (flags as any).ledgerPath ?? "44'/501'";

    if (flags.ledger) {
      this.signerType = "ledger";

      const transport = await TransportNodeHid.open();
      this.logConfig({ ledger: transport.deviceModel.productName }, false);
      this.ledger = new Solana(transport);
      this.payer = await this.ledger
        .getAddress(this.ledgerPath, false)
        .then(
          ({ address }: { address: Buffer }): PublicKey =>
            new PublicKey(bs58.encode(new Uint8Array(address)))
        );

      const ledgerConfig = await this.ledger.getAppConfiguration();
      if (
        !("blindSigningEnabled" in ledgerConfig) ||
        !Boolean(ledgerConfig.blindSigningEnabled)
      ) {
        // TODO: Add instructions link to ledger docs to enable this
        throw new Error(`Ledger requires bind signing to be enabled`);
      }
    } else {
      this.signerType = "keypair";

      const keypairPath =
        (flags as any).keypair ||
        this.ctx.getDefaultAccount("solana", this.network);
      if (!keypairPath || keypairPath === undefined) {
        throw new Error(`Command requires '--keypair' flag to be provided`);
      }

      this.keypair = await this.getSigner(keypairPath);
      this.payer = this.keypair.publicKey;
    }

    this.program = await this.loadProgram(this.keypair);
    this.logConfig({ signer: this.payer.toString() }, false);
  }

  public async signAndSend(
    txn: TransactionObject
  ): Promise<TransactionSignature> {
    switch (this.signerType) {
      case "keypair": {
        return await this.program.signAndSend(txn);
      }
      case "ledger": {
        const blockhash = await this.program.connection.getLatestBlockhash();
        const partiallySignedTxn = txn.sign(blockhash);
        const feePayer = partiallySignedTxn.signatures[0].publicKey;
        if (!feePayer.equals(this.payer)) {
          throw new Error(
            `Transaction payer does not match ledger, expected ${this.payer}, received ${feePayer}`
          );
        }

        try {
          const signedTxn = await this.ledger
            .signTransaction(
              this.ledgerPath,
              partiallySignedTxn.serializeMessage()
            )
            .then((r) => {
              partiallySignedTxn.addSignature(this.payer, r.signature);
              return partiallySignedTxn;
            });

          const txnSignature = await sendAndConfirmRawTransaction(
            this.program.connection,
            signedTxn.serialize()
          );
          return txnSignature;
        } catch (error) {
          const errorString: string =
            "toString" in error && typeof error.toString === "function"
              ? error.toString()
              : (error as any).toString();
          if (errorString.includes("0x6985")) {
            throw new Error(`User cancelled the transaction`);
          }
          throw error;
        }
      }
      default: {
        throw new Error(`Failed to match signerType to a txn signer handler`);
      }
    }
  }

  public async signAndSendAll(
    txns: Array<TransactionObject>
  ): Promise<Array<TransactionSignature>> {
    switch (this.signerType) {
      case "keypair": {
        return await this.program.signAndSendAll(txns);
      }
      case "ledger": {
        const txnSignatures: Array<TransactionSignature> = [];
        for await (const txn of txns) {
          const txnSignature = await this.signAndSend(txn);
          txnSignatures.push(txnSignature);
        }
        return txnSignatures;
      }
      default: {
        throw new Error(`Failed to match signerType to a txn signer handler`);
      }
    }
  }
}
