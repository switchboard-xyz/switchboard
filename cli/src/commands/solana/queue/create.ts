import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class QueueCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an oracle queue";

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
        "keypair to use for the oracle queue account. This will be the account's publicKey",
    }),
    dataBufferKeypair: Flags.string({
      description: "keypair to use for the oracle queue data buffer account.",
    }),
    size: Flags.integer({
      description: "set the size of the queue",
      default: 100,
    }),
    name: Flags.string({
      description: "name of the aggregator",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the aggregator",
      default: "",
    }),
    reward: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.",
      default: "0",
    }),
    minStake: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before heartbeating",
      default: "0",
    }),
    oracleTimeout: Flags.integer({
      description:
        "time period (in seconds) we should remove an oracle after if no response",
      default: 180,
    }),
    slashingEnabled: Flags.boolean({
      description: "whether slashing is enabled on this queue.",
      default: false,
    }),
    permissionedFeeds: Flags.boolean({
      description:
        "enabling this setting means data feeds need explicit permission to join the queue.",
      default: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description:
        "enabling this setting means data feeds do not need explicit permission to request VRF proofs and verifications from this queue.",
      default: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description:
        "enabling this setting will allow buffer relayer accounts to call openRound.",
      default: false,
    }),
    feedProbationPeriod: Flags.integer({
      description:
        "After a feed lease is funded or re-funded, it must consecutively succeed N amount of times or its authorization to use the queue is auto-revoked.",
      default: 1000,
    }),
    consecutiveFeedFailureLimit: Flags.integer({
      description:
        "consecutive failure limit for a feed before feed permission is revoked.",
      default: 1000,
    }),
    consecutiveOracleFailureLimit: Flags.integer({
      description:
        "consecutive failure limit for an oracle before oracle permission is revoked.",
      default: 1000,
    }),
  };

  async run() {
    const { flags } = await this.parse(QueueCreate);

    let authority: Keypair | undefined;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority);
    }

    let queueKeypair: Keypair | undefined;
    if (flags.queueKeypair) {
      queueKeypair = await this.loadKeypair(flags.queueKeypair);
      await this.program.verifyNewKeypair(queueKeypair);
    }

    let dataBufferKeypair: Keypair | undefined;
    if (flags.dataBufferKeypair) {
      dataBufferKeypair = await this.loadKeypair(flags.dataBufferKeypair);
      await this.program.verifyNewKeypair(dataBufferKeypair);
    }

    const [queueAccount, txn] = await QueueAccount.createInstructions(
      this.program,
      this.payer,
      {
        name: flags.name,
        metadata: flags.metadata,
        reward: Number(flags.reward),
        minStake: Number(flags.minStake),
        feedProbationPeriod: flags.feedProbationPeriod,
        oracleTimeout: flags.oracleTimeout,
        slashingEnabled: flags.slashingEnabled,
        consecutiveFeedFailureLimit: flags.consecutiveFeedFailureLimit,
        consecutiveOracleFailureLimit: flags.consecutiveOracleFailureLimit,
        queueSize: flags.size,
        unpermissionedFeeds: !flags.permissionedFeeds,
        unpermissionedVrf: flags.unpermissionedVrf,
        enableBufferRelayers: flags.enableBufferRelayers,
        authority: authority ? authority.publicKey : undefined,
        keypair: queueKeypair,
        dataBufferKeypair: dataBufferKeypair,
      }
    );
    const signature = await this.signAndSend(txn);

    if (flags.json) {
      const accounts = await queueAccount.toAccountsJSON();
      return this.normalizeAccountData(queueAccount.publicKey, accounts);
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
        queueAccount.publicKey
      }`
    );

    this.logger.info(`Transaction Signature: ${this.toUrl(signature)}`);
  }

  async catch(error: any) {
    super.catch(error, "Failed to create oracle queue account");
  }
}
