import { StarknetWithoutSignerBaseCommand } from "../../../starknet";

import { Args } from "@oclif/core";
import { AttestationQueueAccount } from "@switchboard-xyz/starknet.js";

export default class AttestationQueuePrint extends StarknetWithoutSignerBaseCommand {
  static enableJsonFlag = true;

  static description = "Print an attestation queue's state";

  static examples = [
    "$ sb starknet queue print 0xaA43ba6f18b138A0B3313dDbFaC2b920D240108E --network testnet",
  ];

  static flags = {
    ...StarknetWithoutSignerBaseCommand.flags,
  };

  static args = {
    attestationQueueId: Args.string({
      description: "id of the attestation queue",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AttestationQueuePrint);
    const attestationQueueAccount = new AttestationQueueAccount(
      this.program,
      args.attestationQueueId
    );
    const data = await attestationQueueAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(attestationQueueAccount.address, data);
    }

    this.prettyPrintAttestationQueue(args.attestationQueueId, data);
  }

  async catch(error: any) {
    super.catch(error, "failed to print attestation queue");
  }
}
