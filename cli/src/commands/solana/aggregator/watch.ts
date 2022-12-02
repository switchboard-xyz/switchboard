import { Flags } from "@oclif/core";
import { BorshAccountsCoder } from "@project-serum/anchor";
import { types } from "@switchboard-xyz/solana.js";
import fs from "fs";
import path from "path";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON, sleep } from "../../../utils";

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

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

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

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
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

  async catch(error) {
    super.catch(error, "failed to lock aggregator configuration");
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
      `timestamp,value\n${Array.from(items.entries())
        .map((i) => i.join(","))
        .join("\n")}`
    );
  }
}

function printResults(items: Map<number, string>) {
  console.clear();
  console.table(
    Array.from(items.entries()).map((i) => {
      return { timestamp: i[0], value: i[1] };
    })
  );
}
