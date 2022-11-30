import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {} from "@switchboard-xyz/sbv2-utils";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetUpdateInterval extends BaseCommand {
  static description = "set an aggregator's minimum update delay";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
    },
    {
      name: "updateInterval",
      description: "set an aggregator's minimum update delay",
    },
  ];

  static examples = [
    "$ sbv2 aggregator:set:updateInterval GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 60 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetUpdateInterval);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    if (aggregator.minUpdateDelaySeconds === args.updateInterval) {
      throw new Error(
        `Aggregator already has a minUpdateDelaySeconds of ${args.updateInterval}`
      );
    }

    if (args.updateInterval < 5) {
      throw new Error(
        `Update interval should be greater than 5 seconds, ${args.updateInterval}`
      );
    }

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const transaction = await aggregatorAccount.setConfigTxn({
      // authority,
      batchSize: aggregator.oracleRequestBatchSize,
      minJobResults: aggregator.minJobResults,
      minOracleResults: aggregator.minOracleResults,
      minUpdateDelaySeconds: Number.parseInt(args.updateInterval, 10),
    });
    const txn = (
      await this.program.provider.sendAll([
        {
          tx: transaction,
          signers: [authority],
        },
      ])
    )[0];

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Aggregator minimum update delay set successfully`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator minimum update delay");
  }
}
