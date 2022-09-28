import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../../near";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/near.js";
import base58 from "bs58";
import { FinalExecutionOutcome } from "near-api-js/lib/providers";

export default class AggregatorRemoveJob extends BaseCommand {
  static description = "remove a job to an aggregator";

  static aliases = ["near:aggregator:job:remove"];

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

  static args = [
    {
      name: "aggregatorAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorRemoveJob);

    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      address: this.parseAddress(args.aggregatorAddress),
    });
    const aggregatorData = await aggregatorAccount.loadData();

    const authority = this.getAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const txns: FinalExecutionOutcome[] = [];

    for (const jobKey of flags.jobAddress) {
      const jobAccount = new JobAccount({
        program: this.program,
        address: this.parseAddress(jobKey),
      });
      await jobAccount.loadData();
      const jobAddressBase58 = base58.encode(jobAccount.address);
      const jobIdx = (aggregatorData.jobs as Array<Uint8Array>).findIndex(
        (jobAddress: Uint8Array) =>
          base58.encode(jobAddress) === jobAddressBase58
      );
      if (jobIdx === -1) {
        throw new Error(
          `Failed to find job ${jobAddressBase58} for the given aggregator`
        );
      }
      const removeTxn = await aggregatorAccount.removeJob({
        idx: jobIdx,
      });

      if (flags.json) {
        return {
          signature: removeTxn.transaction.hash,
          url: this.toUrl(removeTxn.transaction.hash),
          ...removeTxn,
        };
      }

      this.logger.info(`${this.toUrl(removeTxn.transaction.hash)}`);

      txns.push(removeTxn);
    }
  }

  async catch(error) {
    super.catch(error, "Failed to remove job account from aggregator");
  }
}
