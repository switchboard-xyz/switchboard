import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import {
  FunctionAccount,
  FunctionServiceAccount,
  ServiceWorkerAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionServiceSetWorker extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Set the service worker for a given service account";

  static examples = [];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    worker: Flags.string({
      char: "w",
      description:
        "public key of the ServiceWorker to set for the given service",
      required: true,
    }),
    authority: Flags.string({
      description:
        "alternative keypair designated as the service's authority. Required for making account changes.",
    }),
    // TODO: add worker authority keypair
    workerAuthority: Flags.string({
      description:
        "alternative keypair designated as the ServiceWorker's authority. Required to approve new services if permissionedRequired is set to true.",
    }),
    // TODO: ad
  };

  static args = {
    serviceKey: Args.string({
      description: "public key of the function service account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionServiceSetWorker);

    const [serviceAccount, serviceState] = await FunctionServiceAccount.load(
      this.program,
      args.serviceKey
    );
    const serviceAuthority = await this.loadAuthority(
      flags.authority,
      serviceState.authority
    );

    const [workerAccount, workerState] = await ServiceWorkerAccount.load(
      this.program,
      flags.worker
    );

    if (!serviceState.serviceWorker.equals(PublicKey.default)) {
      throw new Error(
        `Service account already has a worker set: ${serviceState.serviceWorker.toBase58()}`
      );
    }

    let txn = await serviceAccount.addWorkerInstruction(
      this.payer,
      serviceAuthority,
      workerAccount.publicKey
    );

    if (workerState.permissionsRequired) {
      const workerAuthority = await this.loadAuthority(
        flags.workerAuthority,
        workerState.authority
      );

      const approveServiceTxn = workerAccount.addServiceInstruction(
        this.payer,
        workerAuthority,
        serviceAccount.publicKey,
        serviceState.function
      );

      txn = txn.combine(approveServiceTxn);
    }

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
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
    super.catch(error, "failed to add service to service worker");
  }
}
