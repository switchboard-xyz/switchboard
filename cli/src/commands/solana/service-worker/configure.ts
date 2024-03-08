import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  attestationTypes,
  ServiceWorkerAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class ServiceWorkerConfigure extends BaseCommand {
  static enableJsonFlag = true;

  static description = "configure a service worker";

  static examples = [];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair of the service worker's authority that is permitted to make account changes",
    }),

    region: Flags.string({
      description:
        "The geographical region where the service worker will be run",
      options: [
        "UnitedStates",
        "Canada",
        "UnitedKingdom",
        "Europe",
        "Asia",
        "Russia",
        "SouthAmerica",
        "LatinAmerica",
      ],
      required: false,
    }),
    zone: Flags.string({
      description: "The geographical zone where the service worker will be run",
      options: [
        "North",
        "NorthEast",
        "East",
        "SouthEast",
        "South",
        "SouthWest",
        "West",
        "NorthWest",
      ],
      required: false,
    }),
    permissionsRequired: Flags.boolean({
      description:
        "Whether the service worker requires permissions for services to join",
      required: false,
      exclusive: ["permissionsNotRequired"],
    }),
    permissionsNotRequired: Flags.boolean({
      description:
        "Whether the service worker requires permissions for services to join",
      required: false,
      exclusive: ["permissionsRequired"],
    }),
    availableEnclaveSize: Flags.integer({
      description:
        "The total amount of enclave space, in MB, available to the service worker",
    }),
    maxEnclaveSize: Flags.integer({
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
    const { args, flags } = await this.parse(ServiceWorkerConfigure);

    const [serviceWorkerAccount, serviceWorkerState] =
      await ServiceWorkerAccount.load(this.program, args.serviceWorkerKey);

    const authority = await this.loadAuthority(
      flags.authority,
      serviceWorkerState.authority
    );

    let permissionsRequired: boolean | undefined;
    if (flags.permissionsRequired !== undefined) {
      permissionsRequired = flags.permissionsRequired;
    } else if (flags.permissionsNotRequired !== undefined) {
      permissionsRequired = !flags.permissionsNotRequired;
    }

    const txn = await serviceWorkerAccount.setConfigInstruction(this.payer, {
      authority,

      region: flags.region
        ? attestationTypes.ServerRegion.fromJSON({
            kind: flags.region as any,
          })
        : undefined,
      zone: flags.zone
        ? attestationTypes.ServerZone.fromJSON({
            kind: flags.zone as any,
          })
        : undefined,
      permissionsRequired: permissionsRequired,
      availableEnclaveSize: flags.availableEnclaveSize,
      maxEnclaveSize: flags.maxEnclaveSize,
    });

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}ServiceWorker Account updated successfully:`,
        serviceWorkerAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to configure the service worker account");
  }
}
