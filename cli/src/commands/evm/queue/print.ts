import { EvmWithSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args } from "@oclif/core";
import { AttestationQueueAccount } from "@switchboard-xyz/evm.js";

export default class AttestationQueuePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Print an attestation queue account";

  static examples = [
    "$ sb evm queue print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --chain arbitrum --network testnet --programId 0x4F706C62535d171883A6cc9384f3f3d926A6BA49",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    queueKey: Args.string({
      description: "address of the attestation queue",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AttestationQueuePrint);

    const attestationQueue = await AttestationQueueAccount.load(
      this.program,
      args.queueKey
    );

    if (flags.json) {
      return this.normalizeAccountData(
        attestationQueue.address,
        attestationQueue.data
      );
    }

    this.prettyPrintAttestationQueue(
      attestationQueue.address,
      attestationQueue.data
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to print a attestation queue account");
  }
}
