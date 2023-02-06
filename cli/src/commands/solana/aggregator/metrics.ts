import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  AggregatorHistoryBuffer,
  AggregatorHistoryMetrics,
} from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { chalkString } from "../../../utils/misc";

export default class AggregatorMetrics extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator's metrics'";

  static flags = {
    ...BaseCommand.flags,
    period: Flags.integer({
      multiple: true,
      description:
        "the period to collect metrics for. Ex. 3600 will collect update metrics for the last 1hr",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  metricToJson(
    metric: AggregatorHistoryMetrics,
    minUpdateDelay: number
  ): Record<string, any> {
    return {
      period: metric.period,
      numSamples: metric.numSamples,
      updateInterval: minUpdateDelay,
      maxUpdateIntervalWithJitter: metric.maxUpdateIntervalWithJitter,
      averageUpdateDelay: metric.averageUpdateDelay,
      updateCoefficient: metric.updateCoefficient,
      start: metric.start,
      end: metric.end,
      min: metric.min,
      max: metric.max,
    };
  }

  metricToConsole(
    metric: AggregatorHistoryMetrics,
    minUpdateDelay: number,
    SPACING = 24
  ): void {
    this.logger.info(chalkString("period", `${metric.period} seconds`, 24));
    this.logger.info(
      chalkString("numSamples", `${metric.numSamples} updates`, 24)
    );
    this.logger.info(
      chalkString("updateInterval", `${minUpdateDelay} seconds`, 24)
    );
    this.logger.info(
      chalkString(
        "maxUpdateIntervalWithJitter",
        `${metric.maxUpdateIntervalWithJitter} seconds`,
        24
      )
    );
    this.logger.info(
      chalkString("avgUpdateDelay", `${metric.averageUpdateDelay} seconds`, 24)
    );

    this.logger.info(
      chalkString("avgUpdateCoefficient", `${metric.updateCoefficient}`, 24)
    );
    this.logger.info(chalkString("averageValue", `${metric.averageValue}`, 24));
    this.logger.info(
      chalkString("standardDeviation", `${metric.standardDeviation}`, 24)
    );

    this.logger.info(
      chalkString(
        "start",
        `[${metric.start.timestamp.toNumber()}, ${metric.start.value}]`,
        24
      )
    );
    this.logger.info(
      chalkString(
        "end",
        `[${metric.end.timestamp.toNumber()}, ${metric.end.value}]`,
        24
      )
    );
    this.logger.info(
      chalkString(
        "min",
        `[${metric.min.timestamp.toNumber()}, ${metric.min.value.toBig()}]`,
        24
      )
    );
    this.logger.info(
      chalkString(
        "max",
        `[${metric.max.timestamp.toNumber()}, ${metric.max.value.toBig()}]`,
        24
      )
    );
  }

  async run(): Promise<any> {
    const { args, flags } = await this.parse(AggregatorMetrics);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    if (aggregator.historyBuffer.equals(PublicKey.default)) {
      throw new Error(`Aggregator does not have history enabled`);
    }
    const rawHistory = await aggregatorAccount.loadHistory();

    const periods = (flags.period ?? [])
      .map((p) => Number(p))
      .sort((a, b) => a - b);

    const metrics = periods.map((period) =>
      AggregatorHistoryBuffer.collectMetrics(
        rawHistory,
        aggregator.minUpdateDelaySeconds,
        period
      )
    );

    if (flags.json) {
      if (metrics.length === 1) {
        return this.metricToJson(metrics[0], aggregator.minUpdateDelaySeconds);
      }
      return metrics.map((m) =>
        this.metricToJson(m, aggregator.minUpdateDelaySeconds)
      );
    }

    if (metrics.length === 1) {
      this.metricToConsole(metrics[0], aggregator.minUpdateDelaySeconds);
    } else {
      for (const [i, metric] of metrics.entries()) {
        this.log(`Period = ${periods[i]}`);
        this.metricToConsole(metric, aggregator.minUpdateDelaySeconds);
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print aggregator update metrics");
  }
}
