import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  AggregatorHistoryBuffer,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorAddHistory extends BaseCommand {
  static description = "add a history buffer to an aggregator";

  static examples = ["$ sbv2 solana:aggregator:add:history"];

  static flags = {
    ...BaseCommand.flags,
    force: Flags.boolean({
      description: "overwrite an existing history buffer if one already exists",
    }),
    historyLimit: Flags.integer({
      required: true,
      description:
        "the number of samples to store before overwriting old samples",
    }),
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorAddHistory);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    if (
      !aggregatorData.historyBuffer.equals(PublicKey.default) &&
      Boolean(flags.force ?? false) === false
    ) {
      throw new Error(
        `Aggregator has an existing history buffer tied to this account. Use --force to overwrite it`
      );
    }

    if (flags.historyLimit <= 0) {
      throw new Error(`--historyLimit must be greater than 0`);
    }

    const [historyBuffer, setHistoryTxn] =
      await AggregatorHistoryBuffer.createInstructions(
        this.program,
        this.payer,
        {
          maxSamples: flags.historyLimit,
          aggregatorAccount,
          aggregatorAuthority: authority,
        }
      );

    const signature = await this.signAndSend(setHistoryTxn);

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}History buffer added to aggregator successfully!`
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to add a history buffer on the aggregator");
  }
}
