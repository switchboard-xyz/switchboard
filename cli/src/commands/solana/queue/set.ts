import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";
import chalk from "chalk";

export default class QueueSet extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set an oracle queue's config";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the queue and is required to approve permissions",
    }),
    name: Flags.string({
      description: "name of the aggregator",
    }),
    metadata: Flags.string({
      description: "metadata of the aggregator",
    }),
    reward: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.",
    }),
    minStake: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before heartbeating",
    }),
    oracleTimeout: Flags.integer({
      description:
        "time period (in seconds) we should remove an oracle after if no response",
    }),
    slashingEnabled: Flags.boolean({
      description: "whether slashing is enabled on this queue.",
    }),
    permissionedFeeds: Flags.boolean({
      description:
        "enabling this setting means data feeds need explicit permission to join the queue.",
    }),
    unpermissionedVrf: Flags.boolean({
      description:
        "enabling this setting means data feeds do not need explicit permission to request VRF proofs and verifications from this queue.",
    }),
    enableBufferRelayers: Flags.boolean({
      description:
        "enabling this setting will allow buffer relayer accounts to call openRound.",
    }),
    consecutiveFeedFailureLimit: Flags.integer({
      description:
        "consecutive failure limit for a feed before feed permission is revoked.",
    }),
    consecutiveOracleFailureLimit: Flags.integer({
      description:
        "consecutive failure limit for an oracle before oracle permission is revoked.",
    }),
  };

  static args = [
    {
      name: "queueKey",
      description: "public key of the queue account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(QueueSet);

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );

    let authority: Keypair;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority, queue.authority);
    }

    const txn = await queueAccount.setConfigInstruction(this.payer, {
      name: flags.name,
      metadata: flags.metadata,
      reward: Number(flags.reward),
      minStake: Number(flags.minStake),
      oracleTimeout: flags.oracleTimeout,
      slashingEnabled: flags.slashingEnabled,
      consecutiveFeedFailureLimit: flags.consecutiveFeedFailureLimit,
      consecutiveOracleFailureLimit: flags.consecutiveOracleFailureLimit,
      unpermissionedFeedsEnabled: flags.permissionedFeeds
        ? !flags.permissionedFeeds
        : undefined,
      unpermissionedVrfEnabled: flags.unpermissionedVrf,
      enableBufferRelayers: flags.enableBufferRelayers,
      authority: authority,
    });
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.log(signature);
      return;
    }

    if (flags.json) {
      return this.normalizeAccountData(
        queueAccount.publicKey,
        (await queueAccount.loadData()).toJSON()
      );
    }

    // handle nicer logging here
    this.log(
      `${chalk.green(CHECK_ICON, "successfully set the queue's config")} - ${
        queueAccount.publicKey
      }`
    );

    this.log("Transaction Signature:", this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "Failed to set the oracle queue config");
  }
}
