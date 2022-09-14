import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

export default class CreateAggregator extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set a near aggregator's config";

  static aliases = ["near:set:aggregator"];

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
    job: Flags.string({
      char: "j",
      description: "filesystem path to job definition file",
      multiple: true,
    }),
    rewardEscrow: Flags.string({
      description: "where to send rewards. defaults to user's escrow account",
      required: false,
    }),
    historyLimit: Flags.integer({
      description: "number of samples to store in aggregator's history",
      default: 1000,
    }),
    enable: Flags.boolean({
      description:
        "if required and queue authority is provided, enable permissions",
    }),
  };

  static args = [
    {
      name: "aggregatorAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
      required: true,
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateAggregator);

    const [aggregator, aggregatorData] = await this.loadAggregator(
      args.aggregatorAddress
    );

    await aggregator.setConfigs({
      minUpdateDelaySeconds: flags.updateInterval,
    });
  }

  async catch(error) {
    super.catch(error, "Failed to set near aggregator config");
  }
}
