import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { attestationTypes } from "@switchboard-xyz/solana.js";

export default class ServiceWorkerPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a service worker account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    serviceWorkerKey: Args.string({
      description: "public key of the service worker account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(ServiceWorkerPrint);

    const serviceWorkerPubkey = new PublicKey(args.serviceWorkerKey);
    const state = await attestationTypes.ServiceWorkerAccountData.fetch(
      this.program,
      serviceWorkerPubkey
    );

    if (!state) {
      throw new Error(`Service Worker not found`);
    }

    if (flags.json) {
      return this.normalizeAccountData(serviceWorkerPubkey, {
        ...state.toJSON(),
      });
    }

    this.prettyPrintServiceWorker(state, serviceWorkerPubkey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print service worker");
  }
}
