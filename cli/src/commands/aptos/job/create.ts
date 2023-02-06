import { Args, Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { AptosAccount, HexString } from "aptos";
import { JobAccount } from "@switchboard-xyz/aptos.js";
import { OracleJob } from "@switchboard-xyz/common";

export default class JobCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new job";

  static aliases = ["aptos:create:job"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the job account",
    }),
    name: Flags.string({
      description: "name of the job for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the job for easier identification",
    }),
    new: Flags.boolean({
      description:
        "create account at new AptosAccount with authority set to --account",
    }),
    weight: Flags.integer({
      description: "job weight to assign",
      default: 1,
    }),
  };

  static args = {
    queueHexString: Args.string({
      description: "HexString address of the queue",
      required: true,
    }),
    jobDefinition: Args.string({
      description: "filesystem path to job definition",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(JobCreate);

    const oracleJob = this.loadJobDefinition(args.jobDefinition);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    const account = flags.new ? this.program.newAccount : this.signer;

    const [job, sig] = await JobAccount.init(
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
        ).toString(),
        weight: flags.weight || 1,
      },
      this.programId.toString()
    );
    const jobData = await job.loadData();

    // const hexString = jobData.data.startsWith("0x")
    //   ? (jobData.data as string).slice(2)
    //   : jobData.data;

    // var numBytes = hexString.length / 2;
    // var byteArray = new Uint8Array(numBytes);
    // for (var i = 0; i < numBytes; i++) {
    //   byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    // }

    if (flags.json) {
      return {
        ...jobData,
        tasks: this.deserializeJobData(jobData.data),
      };
    }

    this.logger.info(`Job HexString: ${job.address}`);
    this.logger.info(JSON.stringify(jobData, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to create aptos crank");
  }
}
