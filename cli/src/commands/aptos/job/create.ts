import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { AptosAccount, HexString } from "aptos";
import {
  CrankAccount,
  JobAccount,
  OracleAccount,
  OracleQueueAccount,
} from "@switchboard-xyz/aptos.js";
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

  static args = [
    {
      name: "queueHexString",
      description: "HexString address of the queue",
    },
    {
      name: "jobDefinition",
      required: true,
      description: "filesystem path to job definition",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(JobCreate);

    const oracleJob = this.loadJobJson(args.jobDefinition);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    let account: AptosAccount;
    if (flags.new) {
      account = new AptosAccount();
      await this.faucet.fundAccount(account.address(), 5000);
    } else {
      account = this.signer;
    }

    const [crank, sig] = await JobAccount.init(
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
        weight: flags.weight || 1,
      },
      this.programId
    );
    const crankData = await crank.loadData();

    this.logger.info(`Job HexString: ${crank.address}`);
    this.logger.info(JSON.stringify(crankData, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to create aptos crank");
  }
}
