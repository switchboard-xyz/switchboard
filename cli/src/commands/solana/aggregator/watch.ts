import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON, sleep } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { AggregatorAccount, types } from "@switchboard-xyz/solana.js";
import fs from "fs";
import path from "path";

export default class AggregatorWatch extends BaseCommand {
  static description = "watch an aggregator account and stream the results";

  static flags = {
    ...BaseCommand.flags,
    timeout: Flags.integer({
      char: "t",
      description: "time to watch feed for updates",
    }),
    outfile: Flags.string({
      char: "f",
      description: "save results to a file",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorWatch);

    const items: Map<number, string> = new Map();

    const handleValueUpdate = (data: types.AggregatorAccountData) => {
      const value = data.latestConfirmedRound.result.toString();
      const timestamp = data.latestConfirmedRound.roundOpenTimestamp.toNumber();
      items.set(timestamp, value);
      printResults(items);
      writeResults(items, flags.outfile);
    };

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    // Print initial value and subscribe to account changes to listen for more
    handleValueUpdate(aggregatorData);
    const ws = aggregatorAccount.onChange(handleValueUpdate);

    // Wait for timeout.
    await sleep((flags.timeout ?? 120) * 1000);
    await this.program.connection.removeAccountChangeListener(ws);

    // Write final results.
    writeResults(items, flags.outfile);
    this.logger.info(
      `${CHECK_ICON} Results saved to file successfully, ${flags.outfile}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to watch aggregator's state");
  }
}

function writeResults(items: Map<number, string>, outfile?: string) {
  if (outfile) {
    const outpath =
      outfile.startsWith("/") || outfile.startsWith("C:")
        ? outfile
        : path.join(process.cwd(), outfile);
    fs.writeFileSync(
      outpath,
      `timestamp,value\n${[...items.entries()]
        .map((index) => index.join(","))
        .join("\n")}`
    );
  }
}

function printResults(items: Map<number, string>) {
  console.clear();
  console.table(
    [...items.entries()].map((index) => {
      return { timestamp: index[0], value: index[1] };
    })
  );
}
