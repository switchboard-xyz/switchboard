import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetForceReportPeriod extends BaseCommand {
  static description = "set an aggregator's force report period";

  static aliases = ["solana:aggregator:set:forceReport"];

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
      description: "public key of the aggregator",
    },
    {
      name: "forceReportPeriod",
      description:
        "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
    },
  ];

  static examples = [
    "$ sbv2 aggregator:set:forceReportPeriod GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR 300 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetForceReportPeriod);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const txn = await this.program.methods
      .aggregatorSetForceReportPeriod({
        forceReportPeriod: args.forceReportPeriod,
      })
      .accounts({
        aggregator: aggregatorAccount.publicKey,
        authority: authority.publicKey,
      })
      .signers([authority])
      .rpc();

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Aggregator force report period set successfully`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator's force report period");
  }
}
