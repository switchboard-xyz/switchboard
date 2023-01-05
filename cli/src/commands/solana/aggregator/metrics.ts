import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  AggregatorHistoryBuffer,
} from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { chalkString } from "../../../utils/misc";

export default class AggregatorMetrics extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator's metrics'";

  static flags = {
    ...BaseCommand.flags,
    period: Flags.integer({
      description:
        "the period to collect metrics for. Ex. 3600 will collect update metrics for the last 1hr",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

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

    const {
      history,
      period,
      numSamples,
      minUpdateDelaySeconds,
      maxUpdateIntervalWithJitter,
      averageUpdateDelay,
      updateCoefficient,
      averageValue,
      standardDeviation,
      start,
      end,
      min,
      max,
    } = AggregatorHistoryBuffer.collectMetrics(
      rawHistory,
      aggregator.minUpdateDelaySeconds,
      flags.period
    );

    if (flags.json) {
      return {
        period,
        numSamples,
        updateInterval: aggregator.minUpdateDelaySeconds,
        maxUpdateIntervalWithJitter,
        averageUpdateDelay,
        updateCoefficient,
        start,
        end,
        min,
        max,
      };
    }

    this.logger.info(chalkString("period", `${period} seconds`, 24));
    this.logger.info(chalkString("numSamples", `${numSamples} updates`, 24));
    this.logger.info(
      chalkString(
        "updateInterval",
        `${aggregator.minUpdateDelaySeconds} seconds`,
        24
      )
    );
    this.logger.info(
      chalkString(
        "maxUpdateIntervalWithJitter",
        `${maxUpdateIntervalWithJitter} seconds`,
        24
      )
    );
    this.logger.info(
      chalkString("avgUpdateDelay", `${averageUpdateDelay} seconds`, 24)
    );

    this.logger.info(
      chalkString("avgUpdateCoefficient", `${updateCoefficient}`, 24)
    );
    this.logger.info(chalkString("averageValue", `${averageValue}`, 24));
    this.logger.info(
      chalkString("standardDeviation", `${standardDeviation}`, 24)
    );

    this.logger.info(
      chalkString(
        "start",
        `[${start.timestamp.toNumber()}, ${start.value}]`,
        24
      )
    );
    this.logger.info(
      chalkString("end", `[${end.timestamp.toNumber()}, ${end.value}]`, 24)
    );
    this.logger.info(
      chalkString(
        "min",
        `[${min.timestamp.toNumber()}, ${min.value.toBig()}]`,
        24
      )
    );
    this.logger.info(
      chalkString(
        "max",
        `[${max.timestamp.toNumber()}, ${max.value.toBig()}]`,
        24
      )
    );
  }

  async catch(error) {
    super.catch(error, "failed to print aggregator update metrics");
  }
}
