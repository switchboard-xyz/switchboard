import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

import { Args, Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { JobAccount } from "@switchboard-xyz/near.js";

export default class CreateJob extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a job on near";

  static aliases = ["near:create:job"];

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
  };

  static args = {
    jobDefinition: Args.string({
      description: "filesystem path to job definition",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateJob);

    const oracleJob = this.loadJobDefinition(args.jobDefinition);
    const data = Buffer.from(OracleJob.encodeDelimited(oracleJob).finish());

    const jobAccount = await JobAccount.create(this.program, {
      authority: flags.authority || this.program.account.accountId,
      data: data,
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
    });
    const accountData = await jobAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(jobAccount.address, accountData);
    }

    this.logger.info(
      `Job Key (Uint8Array): [${jobAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Job Key (Base58): ${this.encodeAddress(jobAccount.address)}`
    );
    this.logger.info(JSON.stringify(accountData, this.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create near job account");
  }
}
