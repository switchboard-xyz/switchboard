import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { isBase58 } from "@switchboard-xyz/common";
import {
  FunctionAccount,
  FunctionRoutineAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionRoutineCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new routine account for a given function";

  static examples = [
    '$ sb solana routine create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana --schedule "*/10 * * * * *" --params=xyz',
  ];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    name: Flags.string({
      char: "n",
      description: "name of the function for easier identification",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the function for easier identification",
      default: "",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    // fundAmount: Flags.string({
    //   required: false,
    //   description: "token amount to load into the function's escrow wallet.",
    //   default: "0.0",
    // }),
    schedule: Flags.string({ description: "cron schedule", required: true }),
    parameters: Flags.string({
      description: "parameters to pass to the function",
      default: "",
      required: false,
      aliases: ["params"],
    }),
    // enable: Flags.boolean({
    //   description: "enable oracle heartbeat permissions",
    // }),
    // functionAuthority: Flags.string({
    //   description: "alternative keypair to use for function authority",
    // }),
    // wallet: Flags.string({
    //   description:
    //     "public key of the Switchboard wallet to use for the function escrow",
    // }),
    // walletAuthority: Flags.string({
    //   description:
    //     "alternative keypair to use for wallet authority to authorize new functions",
    // }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionRoutineCreate);

    let authority: PublicKey | undefined;
    if (flags.authority) {
      if (isBase58(flags.authority)) {
        authority = new PublicKey(flags.authority);
      } else {
        const authorityKeypair = await this.loadAuthority(flags.authority);
        authority = authorityKeypair.publicKey;
      }
    }

    const fundAmount = flags.fundAmount ? Number(flags.fundAmount) : undefined;
    if (fundAmount && fundAmount < 0) {
      throw new Error("amount to fund must be greater than 0");
    }

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    // const [attestationQueueAccount, attestationQueue] =
    //   await AttestationQueueAccount.load(
    //     this.program,
    //     functionState.attestationQueue
    //   );

    const [routineAccount, txn] =
      await FunctionRoutineAccount.createInstruction(this.program, this.payer, {
        name: flags.name ?? "",
        metadata: flags.metadata ?? "",
        schedule: flags.schedule,
        functionAccount,
        containerParams: Buffer.from(flags.parameters),
        authority: authority ?? this.payer,
      });

    // if (fundAmount) {
    //   const wallet = await functionAccount.wallet;
    //   txn.add(
    //     attestationTypes.walletFund(
    //       this.program,
    //       {
    //         params: {
    //           // eslint-disable-next-line unicorn/no-null
    //           transferAmount: null,
    //           wrapAmount: this.program.mint.toTokenAmountBN(fundAmount),
    //         },
    //       },
    //       {
    //         wallet: wallet.publicKey,
    //         mint: this.program.mint.address,
    //         authority: authority ?? this.payer,
    //         attestationQueue: attestationQueueAccount.publicKey,
    //         tokenWallet: wallet.tokenWallet,
    //         funderWallet: SB_ATTESTATION_PID,
    //         funder: this.payer,
    //         state: this.program.attestationProgramState.publicKey,
    //         tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
    //         systemProgram: anchor.web3.SystemProgram.programId,
    //       }
    //     )
    //   );
    // }

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Routine Account created successfully:`,
        routineAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a routine account");
  }
}
