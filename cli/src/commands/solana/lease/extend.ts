import { Args, Flags } from "@oclif/core";
import * as anchor from "@coral-xyz/anchor";
import {
  AggregatorAccount,
  LeaseAccount,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString, CHECK_ICON } from "../../../utils";

export default class LeaseExtend extends BaseCommand {
  static description = "fund and re-enable an aggregator lease";

  static aliases = [
    "solana:aggregator:fund",
    "solana:aggregator:deposit",
    "solana:aggregator:extend",
  ];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: true,
      description: "amount to deposit into the lease escrow",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  static examples = [
    "$ sbv2 solana:aggregator:fund GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(LeaseExtend);

    const amount = Number(flags.amount);
    if (amount <= 0) {
      throw new Error("amount to deposit must be greater than 0");
    }

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const [queueAccount] = await QueueAccount.load(
      this.program,
      aggregatorData.queuePubkey.toBase58()
    );
    const [leaseAccount] = LeaseAccount.fromSeed(
      this.program,
      queueAccount.publicKey,
      aggregatorAccount.publicKey
    );
    const lease = await leaseAccount.loadData().catch(() => {
      throw new Error(`Failed to load lease account. Has it been created yet?`);
    });

    const [funderTokenWallet, wrapFundsTxn] =
      await this.program.mint.getOrCreateWrappedUserInstructions(this.payer, {
        fundUpTo: amount,
      });

    const initialLeaseBalance = await this.program.mint.fetchBalance(
      lease.escrow
    );

    if (!this.silent) {
      const initialFunderBalance = await this.program.mint.fetchBalance(
        funderTokenWallet
      );
      this.logger.log(
        chalkString("Initial Lease Balance", initialLeaseBalance, 24)
      );
      this.logger.log(
        chalkString("Initial Funder Balance", initialFunderBalance, 24)
      );
    }

    const txn = await leaseAccount.extendInstruction(this.payer, {
      fundAmount: amount,
      funderTokenWallet: funderTokenWallet,
      funderAuthority: this.program.wallet.payer,
    });
    const signature = await this.signAndSend(
      wrapFundsTxn ? wrapFundsTxn.combine(txn) : txn
    );

    if (!this.silent) {
      const newBalance = await this.program.mint.fetchBalance(lease.escrow);
      this.logger.log(chalkString("Final Lease Balance", newBalance, 24));
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Deposited ${amount} into aggregator lease`)}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to deposit into aggregator lease account");
  }
}
