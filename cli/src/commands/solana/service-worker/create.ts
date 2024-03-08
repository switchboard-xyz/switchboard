import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  AttestationQueueAccount,
  attestationTypes,
  ServiceWorkerAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class ServiceWorkerCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new service worker account";

  static examples = [
    "$ sb solana service-worker create CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE",
  ];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the routine account",
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
    }),
    availableEnclaveSize: Flags.integer({
      description:
        "The total amount of enclave space, in MB, available to the service worker",
      default: 10 * 1024, // 10 GB
    }),
    maxEnclaveSize: Flags.integer({
      description:
        "The highest amount of enclave space, in MB, allowed for a single service",
      default: 1 * 1024, // 1 GB
    }),
    // enclaveCost: Flags.string({
    //   description:
    //     "Not Used. The cost associated with using the service workers enclave",
    //   required: false,
    //   default: "0.000",
    // }),
    maxServices: Flags.integer({
      description:
        "The maximum number of services allowed to join the ServiceWorker",
      default: 128,
    }),
  };

  static args = {
    attestationQueueKey: Args.string({
      description: "public key of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(ServiceWorkerCreate);

    const [attestationQueueAccount, attestationQueueState] =
      await AttestationQueueAccount.load(
        this.program,
        args.attestationQueueKey
      );

    const authority = await this.loadAuthority(flags.authority);

    const sbWallet = undefined;

    const [serviceWorkerAccount, txn] =
      await ServiceWorkerAccount.createInstruction(
        this.program,
        this.payer,
        {
          attestationQueue: attestationQueueAccount.publicKey,

          region: attestationTypes.ServerRegion.fromJSON({
            kind: (flags.region ?? "UnitedStates") as any,
          }),
          zone: attestationTypes.ServerZone.fromJSON({
            kind: (flags.zone ?? "West") as any,
          }),

          permissionsRequired: flags.permissionsRequired,
          availableEnclaveSize: flags.availableEnclaveSize,
          maxEnclaveSize: flags.maxEnclaveSize,
          maxServices: flags.maxServices,
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
        `${CHECK_ICON}ServiceWorker Account created successfully:`,
        serviceWorkerAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a service worker account");
  }
}
