import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  attestationTypes,
  FunctionServiceAccount,
  ServiceWorkerAccount,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class ServiceWorkerRemoveService extends BaseCommand {
  static enableJsonFlag = true;

  static description = "remove a service from the worker";

  static examples = [];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair of the service worker's authority that is permitted to make account changes",
    }),

    service: Flags.string({
      multiple: true,
      description:
        "The highest amount of enclave space, in MB, allowed for a single service",
    }),
  };

  static args = {
    serviceWorkerKey: Args.string({
      description: "public key of the service worker account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(ServiceWorkerRemoveService);

    const [serviceWorkerAccount, serviceWorkerState] =
      await ServiceWorkerAccount.load(this.program, args.serviceWorkerKey);

    const authority = await this.loadAuthority(
      flags.authority,
      serviceWorkerState.authority
    );

    const serviceAccounts = await Promise.all(
      (flags.service ?? []).map((s) =>
        FunctionServiceAccount.load(this.program, s)
      )
    );
    if (serviceAccounts.length === 0) {
      return;
    }

    const txns = await Promise.all(
      serviceAccounts.map(([serviceAccount, serviceData]) => {
        return serviceWorkerAccount.removeServiceInstruction(
          this.payer,
          authority,
          serviceAccount.publicKey,
          serviceData.function
        );
      })
    );

    const packedTxns = TransactionObject.pack(txns, { computeUnitPrice: 100 });

    const signatures = await this.signAndSendAll(packedTxns);
    console.log(signatures);

    if (flags.silent) {
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}ServiceWorker Account updated successfully:`,
        serviceWorkerAccount.publicKey.toBase58()
      )}`
    );

    for (const sig of signatures) {
      this.logger.info(this.toUrl(sig));
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to configure the service worker account");
  }
}
