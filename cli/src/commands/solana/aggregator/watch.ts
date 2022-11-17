import { Flags } from "@oclif/core";
import { BorshAccountsCoder } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/sbv2-utils";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import Big from "big.js";
import chalk from "chalk";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

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
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorWatch);

    const items: Map<number, string> = new Map();

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );
    const value = await aggregatorAccount.getLatestValue(aggregator);
    const timestamp = await aggregatorAccount.getLatestFeedTimestamp(
      aggregator
    )!;
    items.set(timestamp.toNumber(), value.toString());

    const coder = new BorshAccountsCoder(this.program.idl);

    const ws = this.program.provider.connection.onAccountChange(
      aggregatorAccount.publicKey,
      async (accountInfo, context) => {
        const aggregator = coder.decode(
          AggregatorAccount.accountName,
          accountInfo.data
        );
        const value = await aggregatorAccount.getLatestValue(aggregator);
        const timestamp = await aggregatorAccount.getLatestFeedTimestamp(
          aggregator
        )!;
        items.set(timestamp.toNumber(), value.toString());
        printResults(items);
      }
    );

    printResults(items);

    await sleep((flags.timeout ?? 120) * 1000);
  }

  async catch(error) {
    super.catch(error, "failed to lock aggregator configuration");
  }
}

function printResults(items: Map<number, string>) {
  console.clear();
  console.table(
    Array.from(items.entries()).map((i) => {
      return {
        timestamp: i[0],
        value: i[1],
      };
    })
  );
}
