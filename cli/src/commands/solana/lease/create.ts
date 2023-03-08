import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import {
  AggregatorAccount,
  LeaseAccount,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class LeaseCreate extends BaseCommand {
  static description = "fund and re-enable an aggregator lease";

  static examples = [
    "$ sbv2 solana lease create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json",
  ];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: false,
      description:
        "token amount to load into the lease escrow. If decimals provided, amount will be normalized to raw tokenAmount",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(LeaseCreate);

    const amount = Number(flags.amount);
    if (amount <= 0) {
      throw new Error("amount to deposit must be greater than 0");
    }

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await QueueAccount.load(
      this.program,
      aggregatorData.queuePubkey.toBase58()
    );
    const { leaseAccount } = aggregatorAccount.getAccounts(
      queueAccount,
      queueData.authority
    );

    // Check that funder account has a large enough balance
    const funder = this.program.mint.getAssociatedAddress(
      this.program.walletPubkey
    );
    const funderBalance = await this.program.connection
      .getTokenAccountBalance(funder)
      .then((balance) => new anchor.BN(balance.value.amount));
    if (this.getTokenAmount(amount.toString()).gt(funderBalance)) {
      throw new Error(
        `not enough token balance to load lease\nLoadAmount: ${amount}\nBalance: ${funderBalance.toString()}`
      );
    }

    // Check that lease account doesnt already exist
    const leaseData = await leaseAccount.loadData().catch(() => {});
    if (leaseData) throw new Error("lease account already exists");

    // create lease account
    const [newLeaseAccount, txn] = await LeaseAccount.createInstructions(
      this.program,
      this.payer,
      {
        fundAmount: amount,
        aggregatorAccount,
        queueAccount,
        funderTokenWallet: funder,
        jobAuthorities: [],
      }
    );
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Lease Account created and funded successfully:`,
        newLeaseAccount.publicKey.toBase58()
      )}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to create a lease account");
  }
}
