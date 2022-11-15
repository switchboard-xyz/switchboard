import { Flags } from "@oclif/core";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorSetAuthority extends BaseCommand {
  static description = "set a weight for an aggregator's existing job";

  static flags = {
    ...BaseCommand.flags,
    job: Flags.string({
      char: "j",
      description: "job account public key to assign a new weight for",
    }),
    weight: Flags.integer({
      char: "w",
      description: "the job weight to assign",
    }),
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
  ];

  //   static examples = ["$ sbv2 aggregator:set:authority"];

  async run() {
    const { args, flags } = await this.parse(AggregatorSetAuthority);

    const weight = flags.weight;
    if (weight <= 0) {
      throw new Error(`Job weight must be greater than 0`);
    }

    const [aggregatorAccount, aggregator] = await this.loadAggregator(
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const [jobAccount, jobData] = await this.loadJob(flags.job);

    const txn = await this.program.methods
      .aggregatorAddJob({ weight })
      .accounts({
        aggregator: aggregatorAccount.publicKey,
        authority: authority.publicKey,
        job: jobAccount.publicKey,
      })
      .preInstructions([
        await this.program.methods
          .aggregatorRemoveJob({})
          .accounts({
            aggregator: aggregatorAccount.publicKey,
            authority: authority.publicKey,
            job: jobAccount.publicKey,
          })
          .instruction(),
      ])
      .signers([authority])
      .rpc();

    if (this.silent) {
      console.log(txn);
    } else {
      this.logger.log(
        `${chalk.green(`${CHECK_ICON}Aggregator job weight set successfully`)}`
      );
      this.logger.log(this.toUrl(txn));
    }
  }

  async catch(error) {
    super.catch(error, "failed to set aggregator job weight");
  }
}
