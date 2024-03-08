import { StarknetWithoutSignerBaseCommand } from "../../../starknet";

import { Args } from "@oclif/core";
import { VerifierAccount } from "@switchboard-xyz/starknet.js";

export default class VerifierPrint extends StarknetWithoutSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Print a verifier's state";

  static examples = [
    "$ sb starknet verifier print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --network testnet",
  ];

  static flags = {
    ...StarknetWithoutSignerBaseCommand.flags,
  };

  static args = {
    verifierId: Args.string({
      description: "id of the verifier",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(VerifierPrint);
    const verifierAccount = new VerifierAccount(this.program, args.verifierId);
    const data = await verifierAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(verifierAccount.address, data);
    }

    this.prettyPrintVerifier(args.verifierId, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print verifier");
  }
}
