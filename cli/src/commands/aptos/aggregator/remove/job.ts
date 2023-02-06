import { Flags, Args } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../../aptos";
import { JobAccount } from "@switchboard-xyz/aptos.js";
import { HexString } from "aptos";

export default class AggregatorRemoveJob extends BaseCommand {
  static hidden = true;

  static description = "remove a job from an aggregator";

  static aliases = ["aptos:aggregator:job:add"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    jobAddress: Flags.string({
      char: "j",
      description:
        "public key of an existing job account to remove from an aggregator",
      multiple: true,
    }),
  };

  static args = {
    aggregatorHexString: Args.string({
      description: "HexString address of the aggregator",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AggregatorRemoveJob);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorHexString
    );

    const authority = await this.getAuthority(
      flags.authority,
      aggregatorData.authority.toString()
    );

    for (const jobKey of flags.jobAddress) {
      const jobAccount = new JobAccount(
        this.aptos,
        this.parseAddress(jobKey).toString(),
        this.programId.toString()
      );
      await jobAccount.loadData();

      const jobIdx = (aggregatorData.jobKeys as Array<any>).findIndex(
        (jobAddress: HexString) =>
          jobKey.toLowerCase() === jobAddress.toString().toLowerCase()
      );
      if (jobIdx === -1) {
        throw new Error(
          `Failed to find job ${jobKey} for the given aggregator`
        );
      }
      // const removeTxn = await aggregatorAccount.removeJob(authority, {
      //   idx: jobIdx,
      // });

      // this.logger.info(`${this.toUrl(removeTxn.transaction.hash)}`);

      // txns.push(removeTxn);
    }
  }

  async catch(error) {
    super.catch(error, "Failed to remove job account from aggregator");
  }
}
