import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString } from "../../../utils/misc";

export default class AggregatorPrintHistory extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator's history'";

  static flags = {
    ...BaseCommand.flags,
    metrics: Flags.boolean({
      description:
        "print metrics on an aggregators history like average update interval",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorPrintHistory);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    if (aggregator.historyBuffer.equals(PublicKey.default)) {
      throw new Error(`Aggregator does not have history enabled`);
    }
    const history = await aggregatorAccount.loadHistory();

    const parsedHistory = history.map((row) => {
      return {
        timestamp: row.timestamp.toNumber(),
        value: row.value.toBig().toString(),
      };
    });

    if (flags.metrics) {
      const numSamples = parsedHistory.length;

      const timestamps = parsedHistory.map((r) => r.timestamp);
      const values = parsedHistory.map((r) => Number(r.value));

      const startTimestamp = Math.min(...timestamps);
      const start = parsedHistory.find((r) => r.timestamp === startTimestamp);
      const endTimestamp = Math.max(...timestamps);
      const end = parsedHistory.find((r) => r.timestamp === endTimestamp);

      const minValue = Math.min(...values);
      const min = parsedHistory.find((r) => Number(r.value) === minValue);
      const maxValue = Math.max(...values);
      const max = parsedHistory.find((r) => Number(r.value) === maxValue);

      const averageUpdateDelay = (endTimestamp - startTimestamp) / numSamples;

      if (flags.json) {
        return {
          numSamples: numSamples,
          averageUpdateDelay: averageUpdateDelay,
          start: start,
          end: end,
          min: min,
          max: max,
        };
      }

      this.logger.info(chalkString("numSamples", numSamples));
      this.logger.info(
        chalkString(
          "avgUpdateDelay",
          Math.round(averageUpdateDelay * 10000) / 10000
        )
      );
      this.logger.info(
        chalkString("start", `[${startTimestamp}, ${start.value}]`)
      );
      this.logger.info(chalkString("end", `[${endTimestamp}, ${end.value}]`));
      this.logger.info(chalkString("min", `[${min.timestamp}, ${minValue}]`));
      this.logger.info(chalkString("max", `[${max.timestamp}, ${maxValue}]`));

      return;
    }

    if (flags.json) {
      return parsedHistory;
    }

    for (const row of parsedHistory) {
      this.logger.info(chalkString(row.timestamp.toString(), row.value));
    }
  }

  async catch(error) {
    super.catch(error, "failed to print aggregator history");
  }
}
