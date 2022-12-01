import { Flags } from "@oclif/core";
import { Keypair, PublicKey } from "@solana/web3.js";
import { JobInitParams, QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";
import chalk from "chalk";

export default class QueueCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an oracle queue";

  static flags = {
    ...BaseCommand.flags,
    // aggregator flags
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the queue and is required to approve permissions",
    }),
    queueKeypair: Flags.string({
      description:
        "keypair to use for the oracle queue account. This will be the account's publicKey",
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
        "the reward payed out to oracles for responding to an update request on-chain, ex: 0.0000075",
      default: "0",
    }),
    minStake: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, ex: 0.0000075",
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

    let authority: Keypair;
    if (flags.authority) {
      authority = await this.loadAuthority(flags.authority);
    }

    let keypair: Keypair;
    if (flags.queueKeypair) {
      keypair = await this.loadKeypair(flags.queueKeypair);
      const keypairAccountInfo = await this.program.connection.getAccountInfo(
        keypair.publicKey
      );
      if (keypairAccountInfo !== null) {
        throw new Error(
          `--queueKeypair must point to a non-existant account, ${this.toAccountUrl(
            keypair.publicKey.toBase58()
          )}`
        );
      }
    }

    const [queueAccount, signature] = await QueueAccount.create(this.program, {
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
    });
    console.log("Transaction Signature:", this.toUrl(signature));

    if (flags.json) {
      return this.normalizeAccountData(
        queueAccount.publicKey,
        (await queueAccount.loadData()).toJSON()
      );
    } else if (flags.silent) {
      return;
    }

    // handle nicer logging here
    this.log(
      `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
        queueAccount.publicKey
      }`
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create oracle queue account");
  }
}
