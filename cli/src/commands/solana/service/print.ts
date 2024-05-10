import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { attestationTypes, FunctionAccount } from "@switchboard-xyz/solana.js";

export default class ServicePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a service account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    serviceKey: Args.string({
      description: "public key of the service account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(ServicePrint);

    const servicePubkey = new PublicKey(args.serviceKey);
    const state = await attestationTypes.FunctionServiceAccountData.fetch(
      this.program,
      servicePubkey
    );

    if (!state) {
      throw new Error(`Service not found`);
    }

    if (flags.json) {
      return this.normalizeAccountData(servicePubkey, {
        ...state.toJSON(),
      });
    }

    this.prettyPrintService(state, servicePubkey);
  }

  async catch(error: any) {
    super.catch(error, "failed to print service");
  }
}
