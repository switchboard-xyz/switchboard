import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  AggregatorAccount,
  PermissionAccount,
  SwitchboardDecimal,
} from "@switchboard-xyz/near.js";
import { Big } from "@switchboard-xyz/common";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a near aggregator for a given queue";

  static aliases = ["near:create:aggregator"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    crankAddress: Flags.string({
      description: "optional, address of the crank to add the aggregator to",
    }),
    name: Flags.string({
      description: "name of the crank for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
    }),
    forceReportPeriod: Flags.integer({
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
      default: 0,
    }),
    batchSize: Flags.integer({
      description: "number of oracles requested for each open round call",
    }),
    minJobs: Flags.integer({
      description: "number of jobs that must respond before an oracle responds",
    }),
    minOracles: Flags.integer({
      description:
        "number of oracles that must respond before a value is accepted on-chain",
    }),
    updateInterval: Flags.integer({
      description: "set an aggregator's minimum update delay",
      required: true,
    }),
    varianceThreshold: Flags.string({
      description:
        "percentage change between a previous accepted result and the next round before an oracle reports a value on-chain. Used to conserve lease cost during low volatility",
      default: "0",
    }),
    // job: Flags.string({
    //   char: "j",
    //   description: "filesystem path to job definition file",
    //   multiple: true,
    // }),
    rewardEscrow: Flags.string({
      description: "where to send rewards. defaults to user's escrow account",
      required: false,
    }),
    enable: Flags.boolean({
      description:
        "if required and queue authority is provided, enable permissions",
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const [queueAccount, queue] = await this.loadQueue(args.queueAddress);
    const escrow = await this.loadEscrow();

    const aggregator = await AggregatorAccount.create(this.program, {
      authority: flags.authority ?? this.program.account.accountId,
      queue: queueAccount.address,
      crank: flags.crankAddress
        ? this.parseAddress(flags.crankAddress)
        : undefined,
      name: Buffer.from(flags.name ?? ""),
      metadata: Buffer.from(flags.name ?? ""),
      batchSize: flags.batchSize ?? 1,
      minJobResults: flags.minJobs ?? 1,
      minOracleResults: flags.minOracles ?? 1,
      minUpdateDelaySeconds: flags.updateInterval ?? 30,
      startAfter: 0,
      forceReportPeriod: flags.forceReportPeriod ?? 0,
      varianceThreshold: flags.varianceThreshold
        ? SwitchboardDecimal.fromBig(new Big(flags.varianceThreshold))
        : SwitchboardDecimal.fromBig(new Big(0)),
      rewardEscrow: escrow.address,
    });

    this.logger.info(`created agg`);

    const permission = await PermissionAccount.create(this.program, {
      authority: this.program.account.accountId,
      granter: queueAccount.address,
      grantee: aggregator.address,
    });

    const data = {
      address: aggregator.address,
      addressBase58: this.encodeAddress(aggregator.address),
      ...(await aggregator.loadData()),
      permission: {
        address: permission.address,
        addressBase58: this.encodeAddress(permission.address),
        ...(await permission.loadData()),
      },
      // jobs: jobData,
    };

    if (flags.json) {
      return this.normalizeAccountData(aggregator.address, data);
    }

    this.logger.info(
      JSON.stringify(
        this.normalizeAccountData(aggregator.address, data),
        this.jsonReplacers,
        2
      )
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create near aggregator");
  }
}
