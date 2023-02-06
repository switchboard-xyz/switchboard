import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../../near";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/near.js";
import { OracleJob } from "@switchboard-xyz/common";

export default class AggregatorAddJob extends BaseCommand {
  static description = "add a job to an aggregator";

  static aliases = ["near:aggregator:job:add"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that is the authority for the aggregator",
    }),
    name: Flags.string({
      description: "name of the job account",
      exclusive: ["jobKey"],
    }),
    metadata: Flags.string({
      description: "metadata of the job account",
      exclusive: ["jobKey"],
    }),
    jobDefinition: Flags.string({
      description: "filesystem path of job json definition file",
      exclusive: ["jobKey"],
    }),
    jobKey: Flags.string({
      description:
        "public key of an existing job account to add to an aggregator",
      exclusive: ["jobDefinition"],
    }),
    jobWeight: Flags.integer({
      description: "job weight",
      default: 1,
    }),
  };

  static args = {
    aggregatorAddress: Args.string({
      description: "address of the aggregator in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AggregatorAddJob);

    const aggregatorAccount = new AggregatorAccount({
      program: this.program,
      address: this.parseAddress(args.aggregatorAddress),
    });
    const aggregatorData = await aggregatorAccount.loadData();

    const authority = this.getAuthority(
      flags.authority,
      aggregatorData.authority
    );

    let jobAccount: JobAccount;
    if (flags.jobDefinition) {
      const oracleJob = this.loadJobDefinition(flags.jobDefinition);

      jobAccount = await JobAccount.create(this.program, {
        authority: flags.authority || this.program.account.accountId,
        data: Buffer.from(OracleJob.encodeDelimited(oracleJob).finish()),
        name: Buffer.from(flags.name || ""),
        metadata: Buffer.from(flags.metadata || ""),
      });
    } else if (flags.jobKey) {
      const jobAddress = this.parseAddress(flags.jobKey);
      jobAccount = new JobAccount({
        program: this.program,
        address: jobAddress,
      });
    } else {
      throw new Error(
        `Failed to read job account from --jobDefinition or --jobKey`
      );
    }

    const txnReceipt = await aggregatorAccount.addJob({
      job: jobAccount.address,
      weight: flags.jobWeight,
    });

    const newAggregatorData = await aggregatorAccount.loadData();
    const aggregatorJobs: [JobAccount, OracleJob][] = await Promise.all(
      (newAggregatorData.jobs as Array<Uint8Array>).map(async (jobAddress) => {
        const jobAccount = new JobAccount({
          program: this.program,
          address: new Uint8Array(jobAddress),
        });
        const jobData = await jobAccount.loadData();
        const oracleJob = OracleJob.decodeDelimited(jobData.data);
        return [jobAccount, oracleJob];
      })
    );

    this.logger.info(`JobAccount added to aggregator successfully`);

    if (flags.json) {
      return {
        signature: txnReceipt.transaction.hash,
        url: this.toUrl(txnReceipt.transaction.hash),
        ...txnReceipt,
      };
    }

    // aggregatorJobs.map(([jobAccount, oracleJob]) => {
    //   this.logger.info(JSON.stringify(oracleJob, undefined, 2));
    // });
  }

  async catch(error) {
    super.catch(error, "Failed to add job to aggregator");
  }
}
