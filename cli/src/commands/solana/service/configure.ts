import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import type { TransactionInstruction } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import {
  attestationTypes,
  FunctionServiceAccount,
  ServiceWorkerAccount,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class FunctionServiceConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "configure a service account for a given function";

  static examples = [];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair of the service's authority that is permitted to make account changes",
    }),

    name: Flags.string({
      char: "n",
      description: "name of the service for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the service for easier identification",
    }),
    parameters: Flags.string({
      description: "parameters to pass to the service",
      required: false,
      aliases: ["params"],
    }),
    enclaveSize: Flags.integer({
      description: "size of the enclave to create in MB",
    }),
    serviceWorker: Flags.string({
      description: "public key of the service worker",
    }),
  };

  static args = {
    serviceKey: Args.string({
      description: "public key of the service account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionServiceConfigure);

    const [serviceAccount, serviceState] = await FunctionServiceAccount.load(
      this.program,
      args.serviceKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      serviceState.authority
    );

    const ixns: TransactionInstruction[] = [];
    if (flags.serviceWorker) {
      const [serviceWorker, workerAccountData] =
        await ServiceWorkerAccount.load(this.program, flags.serviceWorker);

      if (!serviceState.serviceWorker.equals(PublicKey.default)) {
        ixns.push(
          attestationTypes.functionServiceRemoveWorker(
            this.program,
            // eslint-disable-next-line unicorn/no-null
            { params: { idx: null } },
            {
              serviceWorker: serviceState.serviceWorker,
              service: serviceAccount.publicKey,
              authority: authority.publicKey,
              function: serviceState.function,
            }
          )
        );
      }

      ixns.push(
        attestationTypes.functionServiceAddWorker(
          this.program,
          { params: {} },
          {
            serviceWorker: serviceWorker.publicKey,
            service: serviceAccount.publicKey,
            authority: authority.publicKey,
            function: serviceState.function,
          }
        )
      );
    }

    if (flags.name || flags.metadata || flags.enclaveSize || flags.parameters) {
      const setConfigIxn = await serviceAccount.setConfigInstruction(
        this.payer,
        {
          authority,
          name: flags.name,
          metadata: flags.metadata,
          enclaveSize: flags.enclaveSize,
          containerParams: flags.parameters,
        }
      );
      ixns.push(...setConfigIxn.ixns);
    }
    if (ixns.length === 0) {
      this.logger.info("No changes to make");
      return;
    }

    const txn = new TransactionObject(this.payer, ixns, [authority], {
      computeUnitPrice: 100,
    });

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Service Account updated successfully:`,
        serviceAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to configure the service account");
  }
}
