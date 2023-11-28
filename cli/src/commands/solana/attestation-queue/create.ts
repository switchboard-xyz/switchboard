import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/common";
import { AttestationQueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AttestationQueueCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an attestation queue";

  static flags = {
    ...BaseCommand.flags,
    // queue flags
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the queue and is required to approve permissions",
    }),
    queueKeypair: Flags.string({
      description:
        "keypair to use for the attestation queue account. This will be the account's publicKey",
    }),
    reward: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.",
      default: "0",
    }),
    allowAuthorityOverrideAfter: Flags.integer({
      description:
        "Allow authority to force add a node after X seconds with no heartbeat.",
      default: 86_400, // 1 day
    }),
    maxQuoteVerificationAge: Flags.integer({
      description:
        "The maximum allowable time until a EnclaveAccount needs to be re-verified on-chain.",
      default: 604_800, // 1 week
    }),
    nodeTimeout: Flags.integer({
      description:
        "The maximum allowable time until a node needs to send a heartbeat.",
      default: 86_400, // 1 day
    }),
    requireAuthorityHeartbeatPermissions: Flags.boolean({
      description:
        "Even if a heartbeating machine quote verifies with proper measurement, require authority signoff.",
    }),
    requireUsagePermissions: Flags.boolean({
      description:
        "Require FunctionAccounts to have PermitQueueUsage before they are executed.",
    }),
  };

  async run() {
    const { flags } = await this.parse(AttestationQueueCreate);

    let authority: Keypair | undefined;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority);
    }

    let queueKeypair: Keypair = Keypair.generate();
    if (flags.queueKeypair) {
      queueKeypair = await this.loadKeypair(flags.queueKeypair);
    }
    await this.program.verifyNewKeypair(queueKeypair);

    const [attestationQueueAccount, txn] =
      AttestationQueueAccount.createInstruction(this.program, this.payer, {
        authority: authority,
        reward: Number(flags.reward),
        allowAuthorityOverrideAfter: flags.allowAuthorityOverrideAfter,
        maxQuoteVerificationAge: flags.maxQuoteVerificationAge,
        requireAuthorityHeartbeatPermission:
          flags.requireAuthorityHeartbeatPermissions,
        requireUsagePermissions: flags.requireUsagePermissions,
        nodeTimeout: flags.nodeTimeout,
        keypair: queueKeypair,
      });
    const signature = await this.signAndSend(txn);

    if (flags.json) {
      await sleep(1000);
      const attestationQueue = await attestationQueueAccount.loadData();
      return this.normalizeAccountData(
        attestationQueueAccount.publicKey,
        attestationQueue
      );
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(
        CHECK_ICON,
        "successfully created an attestation queue"
      )} - ${attestationQueueAccount.publicKey}`
    );

    this.logger.info(`Transaction Signature: ${this.toUrl(signature)}`);
  }

  async catch(error: any) {
    super.catch(error, "Failed to create attestation queue account");
  }
}
