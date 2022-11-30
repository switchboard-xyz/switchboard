import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {} from "@switchboard-xyz/sbv2-utils";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetMinOracleResults extends BaseCommand {
  static description =
    "set an aggregator's minimum number of oracles that must respond before a result is accepted on-chain";

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
      name: "minOracleResults",
      description:
        "number of oracles that must respond before a value is accepted on-chain",
    },
  ];

  //   static examples = ["$ sbv2 aggregator:set:authority"];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetMinOracleResults);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    const minOracleResults = Number.parseInt(args.minOracleResults, 10);
    if (minOracleResults <= 0 || minOracleResults > 16) {
      throw new Error(`Invalid min oracle size (1 - 16), ${minOracleResults}`);
    }

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const transaction = await aggregatorAccount.setConfigTxn({
      // authority,
      batchSize: aggregator.oracleRequestBatchSize,
      minJobResults: aggregator.minJobResults,
      minOracleResults: minOracleResults,
      minUpdateDelaySeconds: aggregator.minUpdateDelaySeconds,
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
          `${CHECK_ICON}Aggregator minimum oracles set successfully`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator minimum oracles");
  }
}
