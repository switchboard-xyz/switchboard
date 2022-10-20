import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { AptosAccount } from "aptos";
import { OracleQueueAccount } from "@switchboard-xyz/aptos.js";

export default class QueueCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new oracle queue";

  static aliases = ["aptos:create:queue"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate account HexString that will be the authority for the queue",
    }),
    name: Flags.string({
      description: "name of the queue for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the queue for easier identification",
    }),
    minStake: Flags.integer({
      description: "minimum stake required by an oracle to join the queue",
      default: 0,
    }),
    reward: Flags.integer({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      default: 0,
    }),
    oracleTimeout: Flags.integer({
      description: "number of oracles to add to the queue",
      default: 180,
    }),
    queueSize: Flags.integer({
      description: "maximum number of oracles the queue can support",
      default: 100,
    }),
    slashingEnabled: Flags.boolean({
      description: "permit slashing malicous oracles",
      default: false,
    }),
    unpermissionedFeeds: Flags.boolean({
      description: "permit unpermissioned feeds",
      default: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description: "permit unpermissioned VRF accounts",
      default: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description: "enable oracles to fulfill buffer relayer requests",
      default: false,
    }),
    lockLeaseFunding: Flags.boolean({
      description: "lock lease funding",
      default: false,
    }),
    new: Flags.boolean({
      default: false,
      description:
        "create account at new AptosAccount with authority set to --account",
    }),
  };

  async run() {
    const { flags, args } = await this.parse(QueueCreate);

    let account: AptosAccount;
    if (flags.new) {
      account = new AptosAccount();
      // await this.faucet.fundAccount(account.address(), 10000000);
    } else {
      account = this.signer;
    }

    const [queue, sig] = await OracleQueueAccount.init(
      this.aptos,
      account, // TODO: Use --self flag to publish account at signer address
      {
        name: flags.name ?? "",
        metadata: flags.metadata ?? "",
        authority: flags.authority
          ? this.parseAddress(flags.authority)
          : this.signer.address(), // not --new keypair cuz we didnt back it up
        oracleTimeout: flags.oracleTimeout,
        reward: flags.reward,
        minStake: flags.minStake,
        slashingEnabled: flags.slashingEnabled,
        varianceToleranceMultiplierValue: 0,
        varianceToleranceMultiplierScale: 0,
        feedProbationPeriod: 0,
        consecutiveFeedFailureLimit: 0,
        consecutiveOracleFailureLimit: 0,
        unpermissionedFeedsEnabled: flags.unpermissionedFeeds,
        unpermissionedVrfEnabled: flags.unpermissionedVrf,
        lockLeaseFunding: flags.lockLeaseFunding,
        enableBufferRelayers: flags.enableBufferRelayers,
        maxSize: flags.queueSize,
        coinType: "0x1::aptos_coin::AptosCoin",
      },
      this.programId
    );
    const queueData = await queue.loadData();

    if (flags.json) {
      return this.normalizeAccountData(queue.address, queueData);
    }

    this.logger.info(`Queue HexString: ${queue.address}`);
    this.logger.info(this.normalizeAccountData(queue.address, queueData));
    this.logger.info(this.toUrl(sig));
  }

  async catch(error) {
    super.catch(error, "Failed to create aptos oracle queue");
  }
}
