import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../../aptos";
import { OracleJob } from "@switchboard-xyz/common";
import { AggregatorAccount, JobAccount } from "@switchboard-xyz/aptos.js";
import { AptosAccount } from "aptos";

export default class AggregatorAddJob extends BaseCommand {
  static description = "add a job to an aggregator";

  static aliases = ["aptos:aggregator:job:add"];

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

  static args = [
    {
      name: "aggregatorHexString",
      description: "HexString address of the aggregator",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorAddJob);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorHexString
    );

    let jobAccount: JobAccount;
    if (flags.jobDefinition) {
      const oracleJob = this.loadJobJson(flags.jobDefinition);

      const account = new AptosAccount();
      // await this.faucet.fundAccount(account.address(), 5000);

      [jobAccount] = await JobAccount.init(
        this.aptos,
        account,
        {
          name: flags.name || "",
          metadata: flags.metadata || "",
          authority: flags.authority
            ? this.parseAddress(flags.authority)
            : this.signer.address(),
          data: Buffer.from(
            OracleJob.encodeDelimited(oracleJob).finish()
          ).toString("hex"),
        },
        this.programId
      );
    } else if (flags.jobKey) {
      const jobAddress = this.parseAddress(flags.jobKey);
      jobAccount = new JobAccount(this.aptos, jobAddress, this.programId);
    } else {
      throw new Error(
        `Failed to read job account from --jobDefinition or --jobKey`
      );
    }

    const sig = await aggregatorAccount.addJob(this.signer, {
      job: jobAccount.address,
      weight: flags.jobWeight,
    });

    const newAggregatorData = await aggregatorAccount.loadData();
    const aggregatorJobs: [JobAccount, OracleJob][] = await Promise.all(
      newAggregatorData.jobKeys.map(async (jobAddress) => {
        const jobAccount = new JobAccount(
          this.aptos,
          jobAddress,
          this.programId
        );
        const jobData = await jobAccount.loadData();
        const oracleJob = OracleJob.decodeDelimited(jobData.data);
        return [jobAccount, oracleJob];
      })
    );

    this.logger.info(`JobAccount HexString: ${jobAccount.address}`);
    this.logger.info(
      JSON.stringify(
        this.normalizeAccountData(
          jobAccount.address,
          await jobAccount.loadData()
        ),
        undefined,
        2
      )
    );

    // aggregatorJobs.map(([jobAccount, oracleJob]) => {
    //   this.logger.info(JSON.stringify(oracleJob, undefined, 2));
    // });
  }

  async catch(error) {
    super.catch(error, "Failed to add job account to aggregator");
  }
}
