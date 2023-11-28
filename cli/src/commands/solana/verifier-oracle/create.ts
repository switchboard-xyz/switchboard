import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/common";
import {
  AttestationQueueAccount,
  parseRawBuffer,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class VerifierCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a verifier oracle for a given attestation queue";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the verifier and is required to approve config changes and withdraw rewards",
    }),
    verifierKeypair: Flags.string({
      description:
        "keypair to use for the verifier account. This will be the account's publicKey",
    }),
    registryKey: Flags.string({
      description: "",
      default:
        "Key to lookup the buffer data on IPFS or an alternative decentralized storage solution.",
    }),
    enable: Flags.boolean({
      description: "enable verifier heartbeat permissions",
    }),
    queueAuthority: Flags.string({
      description: "alternative keypair to use for attestation queue authority",
      dependsOn: ["enable"],
    }),
    // stakeAmount: Flags.string({
    //   required: false,
    //   description: "token amount to load into the oracle's staking wallet.",
    // }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(VerifierCreate);

    const [attestationQueueAccount, attestationQueue] =
      await AttestationQueueAccount.load(this.program, args.queueKey);

    let authority: Keypair | undefined;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority);
    }

    let verifierKeypair: Keypair = Keypair.generate();
    if (flags.verifierKeypair) {
      verifierKeypair = await this.loadKeypair(flags.verifierKeypair);
    }
    await this.program.verifyNewKeypair(verifierKeypair);

    let queueAuthority: Keypair | undefined;
    if (flags.queueAuthority) {
      queueAuthority = await this.loadAuthority(
        flags.queueAuthority,
        attestationQueue.authority
      );
    }

    const [verifierAccount, txn] =
      await attestationQueueAccount.createVerifierInstruction(this.payer, {
        authority: authority ? authority.publicKey : this.payer,
        keypair: verifierKeypair,
        registryKey: parseRawBuffer(flags.registryKey),
        enable: flags.enable ?? false,
        queueAuthority: queueAuthority,
        queueAuthorityPubkey: attestationQueue.authority,
        createPermissions: true,
      });
    const signature = await this.signAndSend(txn);

    if (flags.json) {
      await sleep(1000);
      const verifierState = await verifierAccount.loadData();
      return this.normalizeAccountData(
        verifierAccount.publicKey,
        verifierState
      );
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(CHECK_ICON, "successfully created a verifier oracle")} - ${
        verifierAccount.publicKey
      }`
    );

    this.logger.info(`Transaction Signature: ${this.toUrl(signature)}`);
  }

  async catch(error: any) {
    super.catch(error, "Failed to create verifier oracle");
  }
}
