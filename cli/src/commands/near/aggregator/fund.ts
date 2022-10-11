import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  AggregatorAccount,
  QueueAccount,
  SwitchboardDecimal,
  types,
} from "@switchboard-xyz/near.js";
import Big from "big.js";
import { Action } from "near-api-js/lib/transaction";
import { Gas, NEAR } from "near-units";
import { utils } from "near-api-js";
import BN from "bn.js";

export default class AggregatorFund extends BaseCommand {
  static description = "";

  static aliases = ["near:fund:aggregator"];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      char: "a",
      required: true,
      description: "amount to deposit into the aggregator's lease",
    }),
  };

  static args = [
    {
      name: "aggregatorAddress",
      description: "address of the aggregator in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AggregatorFund);

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorAddress
    );

    const escrowAccount = await this.loadEscrow();
    const escrowState = await escrowAccount.loadData();
    const escrowBalance = new SwitchboardDecimal(
      escrowState.amount,
      this.program.mint.metadata.decimals
    ).toBig();

    if (escrowBalance.toNumber() < Number(flags.amount) + 0.05) {
      // wrap any needed funds and deposit into the program
      const fundReceipt = await escrowAccount.fundUpTo(
        Number(flags.amount) + 0.05
      );
      console.log("Wrapping Near", this.toUrl(fundReceipt.transaction.hash));
    }

    const aggReceipt = await aggregatorAccount.fund({
      funder: escrowAccount.address,
      amount: Number(flags.amount),
    });
    console.log("Fund aggregator", this.toUrl(aggReceipt.transaction.hash));
  }

  async catch(error) {
    super.catch(error, "Failed to fund near aggregator");
  }
}
