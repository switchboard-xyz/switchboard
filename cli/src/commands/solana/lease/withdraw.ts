import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString, CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AggregatorLeaseWithdraw extends BaseCommand {
  static description = "withdraw funds from an aggregator lease";

  static aliases = ["solana:aggregator:withdraw"];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: true,
      description: "token amount to withdraw from lease account",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair delegated as the authority for managing the lease account",
    }),
    queuePubkey: Flags.string({
      description:
        "override the aggregators current queue. useful for withdrawing from a lease after moving to a new queue",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  static examples = [
    "$ sbv2 solana:aggregator:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorLeaseWithdraw);

    const amount = Number(flags.amount);
    if (amount <= 0) {
      throw new Error("amount to withdraw must be greater than 0");
    }

    // load aggregator & related accounts
    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await QueueAccount.load(
      this.program,
      flags.queuePubkey ?? aggregatorData.queuePubkey.toBase58()
    );
    const { leaseAccount } = aggregatorAccount.getAccounts(
      queueAccount,
      queueData.authority
    );
    const leaseData = await leaseAccount.loadData().catch(() => {
      throw new Error(`Failed to load lease account. Has it been created yet?`);
    });

    // verify authority
    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const [
      tokenWallet,
      userInitTxn,
    ] = await this.program.mint.getOrCreateWrappedUserInstructions(this.payer, {
      fundUpTo: 0,
    });
    if (!this.silent) {
      const [withdrawerBalance, leaseBalance] = await Promise.all([
        this.program.mint.fetchBalance(tokenWallet),
        this.program.mint.fetchBalance(leaseData.escrow),
      ]);
      this.logger.log(
        chalkString("Initial Lease Balance", leaseBalance ?? 0, 24)
      );
      this.logger.log(
        chalkString("Initial Withdrawer Balance", withdrawerBalance ?? 0, 24)
      );
    }

    const txn = await leaseAccount.withdrawInstruction(this.payer, {
      amount,
      withdrawAuthority: authority,
      withdrawWallet: tokenWallet,
      unwrap: false,
    });
    const signature = await this.signAndSend(
      userInitTxn ? userInitTxn.combine(txn) : txn
    );

    if (!this.silent) {
      const [leaseBalance] = await Promise.all([
        this.program.mint.fetchBalance(leaseData.escrow),
      ]);
      this.logger.log(
        chalkString("Final Lease Balance", leaseBalance ?? 0, 24)
      );
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Withdrew ${amount} tokens from aggregator lease`
      )}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to withdraw from aggregator lease account");
  }
}
