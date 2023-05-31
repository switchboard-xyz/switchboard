import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString, stripTrailingZeros } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Permissions } from "@switchboard-xyz/evm.js";
import chalk from "chalk";

export default class AggregatorPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an aggregator";

  static flags = {
    ...BaseCommand.flags,
    results: Flags.boolean({
      description: "print the current results for the aggregator",
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorPrint);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorAddress
    );

    let permissions: string | undefined;
    try {
      permissions = await Permissions.getSwitchboardPermissions(
        this.program,
        aggregator.queueAddress,
        aggregatorAccount.address
      );
    } catch (error) {
      console.error(error);
    }

    const aggregatorData = {
      ...aggregator,
      permissions,
    };

    if (flags.json) {
      return this.normalizeAccountData(
        aggregatorAccount.address,
        aggregatorData
      );
    }

    this.prettyPrintAggregator(aggregatorData, aggregatorAccount.address);

    if (flags.results) {
      const results = await aggregatorAccount.fetchAllResults();
      this.log(
        chalk.underline(
          chalkString("\n## Results", Array.from({ length: 44 }).join(" "))
        )
      );
      if (results && results.length > 0) {
        for (const result of results) {
          this.logger.info(
            chalkString(
              result.timestamp.toString(),
              stripTrailingZeros(result.result.toString())
            )
          );
        }
      } else {
        this.log("No results found");
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print aggregator");
  }
}
