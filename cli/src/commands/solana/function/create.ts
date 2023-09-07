import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { isBase58, parseRawMrEnclave } from "@switchboard-xyz/common";
import {
  AttestationQueueAccount,
  attestationTypes,
  FunctionAccount,
  SB_ATTESTATION_PID,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new function account for a given queue";

  static examples = [
    "$ sb solana function create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE --name function-1 --fundAmount 1.25 --container switchboardlabs/basic-oracle-function --version solana",
  ];

  static flags = {
    ...BaseCommand.flags,
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
    fundAmount: Flags.string({
      required: false,
      description: "token amount to load into the function's escrow wallet.",
      default: "0.0",
    }),
    schedule: Flags.string({
      description:
        "the cron schedule to execute the function periodically (Ex. '15 * * * * *' will execute the function every 15 seconds)",
      required: false,
      default: "",
    }),
    container: Flags.string({
      description:
        "the location of the container (Ex. switchboardlabs/basic-oracle-function)",
      required: true,
    }),
    containerRegistry: Flags.string({
      description:
        "the registry to pull the container from (Ex. Docker or IPFS)",
      options: ["dockerhub", "ipfs"],
      default: "dockerhub",
    }),
    version: Flags.string({
      description:
        "the version of the container to pull from the registry (Ex. 'latest' or 'mainnet')",
      default: "latest",
    }),
    mrEnclave: Flags.string({
      description:
        "the MrEnclave value to set for the function - if not provided, will be set automatically after its first run",
    }),
    requestsDisabled: Flags.string({
      description: "whether custom requests can be created for this function",
    }),
    requestsFee: Flags.string({
      required: false,
      description:
        "the costs each request must pay the function authority for each sub-request (Ex. 0.00002)",
      default: "0.0",
    }),
    requestsRequireAuthorization: Flags.string({
      description:
        "whether custom requests require the function authority to authorize",
    }),
    // enable: Flags.boolean({
    //   description: "enable oracle heartbeat permissions",
    // }),
    // queueAuthority: Flags.string({
    //   description: "alternative keypair to use for queue authority",
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
    queueKey: Args.string({
      description: "public key of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionCreate);

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

    const [attestationQueueAccount, attestationQueue] =
      await AttestationQueueAccount.load(this.program, args.queueKey);

    let containerRegistry: "dockerhub" | "ipfs" | undefined;
    if (flags.containerRegistry) {
      if (
        flags.containerRegistry !== "dockerhub" &&
        flags.containerRegistry !== "ipfs"
      ) {
        throw new Error(
          `--containerRegistry needs to be 'dockerhub' or 'ipfs'`
        );
      }
      containerRegistry = flags.containerRegistry;
    }

    const [functionAccount, txn] = await FunctionAccount.createInstruction(
      this.program,
      this.payer,
      {
        name: flags.name,
        metadata: flags.metadata,
        authority: authority,
        schedule: flags.schedule,
        container: flags.container,
        containerRegistry: containerRegistry,
        version: flags.version,
        mrEnclave: parseRawMrEnclave(flags.mrEnclave ?? ""),
        attestationQueue: attestationQueueAccount,
      }
    );

    if (fundAmount) {
      const wallet = await functionAccount.wallet;
      txn.add(
        attestationTypes.walletFund(
          this.program,
          {
            params: {
              // eslint-disable-next-line unicorn/no-null
              transferAmount: null,
              wrapAmount: this.program.mint.toTokenAmountBN(fundAmount),
            },
          },
          {
            wallet: wallet.publicKey,
            mint: this.program.mint.address,
            authority: authority ?? this.payer,
            attestationQueue: attestationQueueAccount.publicKey,
            tokenWallet: wallet.tokenWallet,
            funderWallet: SB_ATTESTATION_PID,
            funder: this.payer,
            state: this.program.attestationProgramState.publicKey,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            systemProgram: anchor.web3.SystemProgram.programId,
          }
        )
      );
    }

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Function Account created successfully:`,
        functionAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a function account");
  }
}
