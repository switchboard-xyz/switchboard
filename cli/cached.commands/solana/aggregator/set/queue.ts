import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  OracleQueueAccount,
} from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetQueue extends BaseCommand {
  static description = "set an aggregator's oracle queue";

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
      name: "queueKey",
      description: "public key of the oracle queue",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetQueue);

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    const [oracleQueue, queue] = await this.loadQueue(args.aggregatorKey);

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const txn = await this.program.rpc.aggregatorSetQueue(
      {},
      {
        accounts: {
          aggregator: aggregatorAccount.publicKey,
          authority: authority.publicKey,
          queue: oracleQueue.publicKey,
        },
        signers: [authority],
      }
    );

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Aggregator oracle queue set successfully`
        )}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator's history buffer");
  }
}
