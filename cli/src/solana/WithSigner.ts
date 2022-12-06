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

const DEFAULT_LEDGER_PATH = "44'/501'";

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
  };

  public hasSigner = true;

  public signerType: "keypair" | "ledger";

  public ledger?: Solana;

  public keypair?: Keypair;

  public payer: PublicKey;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    SolanaBaseCommand.flags = flags as any;

    if (flags.ledger) {
      this.signerType = "ledger";

      const transport = await TransportNodeHid.open();
      this.logConfig({ ledger: transport.deviceModel.productName }, false);
      this.ledger = new Solana(transport);
      this.payer = await this.ledger
        .getAddress(DEFAULT_LEDGER_PATH, false)
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
        if (!partiallySignedTxn.signatures[0].publicKey.equals(this.payer)) {
          throw new Error(`Missing payer`);
        }
        console.log(`generating signature: ...`);
        const { signature } = await this.ledger!.signTransaction(
          DEFAULT_LEDGER_PATH,
          partiallySignedTxn.serialize({ requireAllSignatures: false })
        );
        console.log(`adding signature: ${signature}`);
        partiallySignedTxn.addSignature(this.payer, signature);

        console.log(`sending`);
        const txnSignature = await sendAndConfirmRawTransaction(
          this.program.connection,
          partiallySignedTxn.serialize()
        );
        return txnSignature;
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
