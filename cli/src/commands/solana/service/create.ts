import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  FunctionAccount,
  FunctionServiceAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionServiceCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new service account for a given function";

  static examples = [
    "$ sb solana service create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE",
  ];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    name: Flags.string({
      char: "n",
      description: "name of the service for easier identification",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the service for easier identification",
      default: "",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the routine account",
    }),
    parameters: Flags.string({
      description: "parameters to pass to the service",
      default: "",
      required: false,
      aliases: ["params"],
    }),
    enclaveSize: Flags.integer({
      description: "size of the enclave to create in MB",
      default: 256,
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionServiceCreate);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    if (functionState.servicesEnabled.kind.startsWith("False")) {
      throw new Error(`Services are not enabled for this function`);
    }

    const authority = await this.loadAuthority(flags.authority);

    // If the provided authority matches the function authority, then use the same SwitchboardWallet to simplify managing funds
    // We need the SbWallet authority to sign to approve new resources
    const sbWallet =
      this.payer.equals(authority.publicKey) &&
      functionState.authority.equals(authority.publicKey)
        ? await functionAccount.wallet
        : undefined;

    const [serviceAccount, txn] =
      await FunctionServiceAccount.createInstruction(
        this.program,
        this.payer,
        {
          functionAccount,

          name: flags.name ?? "",
          metadata: flags.metadata ?? "",
          enclaveSize: flags.enclaveSize,
          cpu: undefined,
          containerParams: Buffer.from(flags.parameters),

          authority: authority.publicKey,
        },
        sbWallet
      );

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Service Account created successfully:`,
        serviceAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a service account");
  }
}
