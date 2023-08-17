import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args } from "@oclif/core";
import { EnclaveAccount } from "@switchboard-xyz/evm.js";

export default class EnclavePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Print an enclave's state";

  static examples = [
    "$ sb evm enclave print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    enclaveKey: Args.string({
      description: "address of the enclave",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(EnclavePrint);

    const enclaveAccount = await EnclaveAccount.load(
      this.program,
      args.enclaveKey
    );

    if (flags.json) {
      return this.normalizeAccountData(
        enclaveAccount.address,
        enclaveAccount.data
      );
    }

    this.prettyPrintEnclave(enclaveAccount.address, enclaveAccount.data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print enclave");
  }
}
