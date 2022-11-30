import { Flags } from "@oclif/core";
import { OracleJob } from "@switchboard-xyz/common";
import { prettyPrintJob } from "@switchboard-xyz/sbv2-utils";
import {
  JobAccount,
  ProgramStateAccount,
  programWallet,
} from "@switchboard-xyz/switchboard-v2";
import fs from "fs";
import path from "path";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import * as anchor from "@project-serum/anchor";
import * as spl from "@solana/spl-token-v2";
import { Job } from "@switchboard-xyz/near.js/lib/cjs/generated";

export default class JobCreate extends BaseCommand {
  static description = "create a job account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that will be the account authority",
    }),
    name: Flags.string({
      char: "n",
      description: "name of the buffer account",
    }),
  };

  static args = [
    {
      name: "jobDefinition",
      required: true,
      description: "filesystem path to job definition",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(JobCreate);
    const payerKeypair = this.signer;
    const authority = await this.loadAuthority(flags.authority);

    const [programStateAccount, stateBump] = ProgramStateAccount.fromSeed(
      this.program
    );

    const userTokenWallet = await spl.getAssociatedTokenAddress(
      spl.NATIVE_MINT,
      payerKeypair.publicKey
    );

    const jobDefinitionPath = args.jobDefinition.startsWith("/")
      ? args.jobDefinition
      : path.join(process.cwd(), args.jobDefinition);
    if (!fs.existsSync(jobDefinitionPath)) {
      throw new Error(`jobDefinitionPath does not exist, ${jobDefinitionPath}`);
    }

    const oracleJob = OracleJob.fromObject(
      JSON.parse(
        fs
          .readFileSync(jobDefinitionPath, "utf-8")
          .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "")
      )
    );

    const jobKeypair = anchor.web3.Keypair.generate();

    const data = Buffer.from(
      OracleJob.encodeDelimited(
        OracleJob.create({
          tasks: oracleJob.tasks,
        })
      ).finish()
    );

    const createJobIxn = await this.program.methods
      .jobInit({
        name: Buffer.from("").slice(0, 32),
        data: data,
        variables: new Array<Buffer>(),
        authorWallet: payerKeypair.publicKey,
        stateBump,
        size: null,
      })
      .accounts({
        job: jobKeypair.publicKey,
        authorWallet: userTokenWallet,
        authority: payerKeypair.publicKey,
        programState: programStateAccount.publicKey,
      })
      .signers([payerKeypair, jobKeypair])
      .rpc();

    const jobAccount = new JobAccount({
      program: this.program,
      publicKey: jobKeypair.publicKey,
      keypair: jobKeypair,
    });

    if (this.silent) {
      this.logger.info(jobAccount.publicKey.toString());
      return;
    }

    const jobData = await jobAccount.loadData();
    this.logger.info(await prettyPrintJob(jobAccount, jobData));
  }

  async catch(error) {
    super.catch(error, "failed to create job account");
  }
}
