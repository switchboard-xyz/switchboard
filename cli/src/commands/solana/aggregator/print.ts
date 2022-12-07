import { Flags } from "@oclif/core";
import { buf2String } from "@switchboard-xyz/common";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString } from "../../../utils";
import chalk from "chalk";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set an aggregators config";

  // static examples = ["$ sbv2 solana:aggregator:add:job"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const accounts = await aggregatorAccount.toAccountsJSON();

    if (flags.json) {
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    const SPACING = 24;

    this.logger.info(
      chalk.underline(
        chalkString("## Aggregator", aggregatorAccount.publicKey, SPACING)
      )
    );

    this.logger.info(
      chalkString(
        "latestResult",
        aggregator.latestConfirmedRound.result.toBig(),
        SPACING
      )
    );
    this.logger.info(chalkString("name", buf2String(aggregator.name), SPACING));
    this.logger.info(
      chalkString("metadata", buf2String(aggregator.name), SPACING)
    );
    this.logger.info(chalkString("authority", aggregator.authority, SPACING));
    this.logger.info(
      chalkString("queuePubkey", aggregator.queuePubkey, SPACING)
    );
    this.logger.info(
      chalkString("crankPubkey", aggregator.crankPubkey, SPACING)
    );
    this.logger.info(
      chalkString("historyBuffer", aggregator.historyBuffer, SPACING)
    );
    this.logger.info(
      chalkString(
        "minUpdateDelaySeconds",
        aggregator.minUpdateDelaySeconds,
        SPACING
      )
    );
    this.logger.info(
      chalkString("jobPubkeysSize", aggregator.jobPubkeysSize, SPACING)
    );
    this.logger.info(
      chalkString("minJobResults", aggregator.minJobResults, SPACING)
    );
    this.logger.info(
      chalkString(
        "oracleRequestBatchSize",
        aggregator.oracleRequestBatchSize,
        SPACING
      )
    );
    this.logger.info(
      chalkString("minOracleResults", aggregator.minOracleResults, SPACING)
    );
    this.logger.info(
      chalkString(
        "varianceThreshold",
        aggregator.varianceThreshold.toBig(),
        SPACING
      )
    );
    this.logger.info(
      chalkString("forceReportPeriod", aggregator.forceReportPeriod, SPACING)
    );
    this.logger.info(chalkString("isLocked", aggregator.isLocked, SPACING));
    // this.logger.info(chalkString("", undefined, SPACING));
    // this.logger.info(chalkString("", undefined, SPACING));
    // this.logger.info(chalkString("", undefined, SPACING));
    // this.logger.info(chalkString("", undefined, SPACING));
    // this.logger.info(chalkString("", undefined, SPACING));
  }

  async catch(error) {
    super.catch(error, "failed to set an aggregator's config");
  }
}
