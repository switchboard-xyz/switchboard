import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

import { Args } from "@oclif/core";
import { BN } from "@switchboard-xyz/common";
import { CrankAccount } from "@switchboard-xyz/near.js";
import type { FinalExecutionOutcome } from "near-api-js/lib/providers";

export const parseTxn = (
  txnReceipt: FinalExecutionOutcome
): { success: boolean; logs: string[]; txnReceipt: FinalExecutionOutcome } => {
  // only get the logs for successful transactions
  const logs = txnReceipt.receipts_outcome.flatMap((outcome) => {
    if (
      typeof outcome.outcome.status !== "string" &&
      "SuccessValue" in outcome.outcome.status
    ) {
      return outcome.outcome.logs;
    }

    return [];
  });

  if (
    txnReceipt.status === "Failure" ||
    txnReceipt.transaction_outcome.outcome.status === "Failure" ||
    (typeof txnReceipt.transaction_outcome.outcome.status !== "string" &&
      "Failure" in txnReceipt.transaction_outcome.outcome.status)
  ) {
    return {
      success: false,
      logs,
      txnReceipt,
    };
  }

  return {
    success: true,
    logs,
    txnReceipt,
  };
};

export default class CrankPop extends BaseCommand {
  static description = "pop the crank";

  static aliases = ["near:pop:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    crankAddress: Args.string({
      description: "address of the crank in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankPop);

    const escrowAccount = await this.loadEscrow();

    const crankAccount = new CrankAccount({
      program: this.program,
      address: this.parseAddress(args.crankAddress),
    });
    const crankData = await crankAccount.loadData();

    // const queueAccount = new QueueAccount({
    //   program: this.program,
    //   address: crankData.queue,
    // });
    // const queueData = await queueAccount.loadData();

    const rows = crankData.data;
    if (!rows || rows.length === 0) {
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    const actions = rows
      .filter((r) => r.nextTimestamp.lte(new BN(now)))
      .map((i) =>
        crankAccount.popAction({
          rewardRecipient: escrowAccount.address,
        })
      );

    if (actions.length === 0) {
      this.error(`No crank elements ready`);
    }

    this.logger.info(`Popping ${actions.length} crank elements`);

    const popTxn = await this.program.sendActions(actions);
    const { success, logs } = parseTxn(popTxn);
    if (!success) {
      this.error(`Failed to pop the crank`);
    }

    const data = {
      signature: popTxn.transaction.hash,
      url: this.toUrl(popTxn.transaction.hash),
      logs,
      txnReceipt: popTxn,
    };

    if (flags.json) {
      return data;
    }

    this.logger.info(
      JSON.stringify(
        {
          ...data,
          txnReceipt: undefined,
        },
        this.jsonReplacers,
        2
      )
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to pop near crank");
  }
}
