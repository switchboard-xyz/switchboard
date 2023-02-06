import { Args } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { JobAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class JobPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an job and it's associated accounts";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    jobKey: Args.string({
      description: "public key of the job account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(JobPrint);

    const [jobAccount, job] = await JobAccount.load(this.program, args.jobKey);

    const oracleJob = OracleJob.decodeDelimited(job.data);

    if (flags.json) {
      return this.normalizeAccountData(jobAccount.publicKey, {
        ...job,
        ...oracleJob.toJSON(),
      });
    }

    this.prettyPrintJob(job, jobAccount.publicKey, oracleJob.tasks);
  }

  async catch(error: any) {
    super.catch(error, "failed to print job");
  }
}
