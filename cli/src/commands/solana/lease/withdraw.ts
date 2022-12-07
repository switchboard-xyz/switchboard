import { Flags } from "@oclif/core";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString, CHECK_ICON } from "../../../utils";

export default class AggregatorLeaseWithdraw extends BaseCommand {
  static description = "withdraw funds from an aggregator lease";

  static aliases = ["solana:aggregator:lease:withdraw"];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: true,
      description:
        "token amount to withdraw from lease account. If decimals provided, amount will be normalized to raw tokenAmount",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair delegated as the authority for managing the oracle account",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator to extend a lease for",
      required: true,
    },
  ];

  static examples = [
    "$ sbv2 aggregator:lease:withdraw GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.1 --keypair ../payer-keypair.json",
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
      aggregatorData.queuePubkey.toBase58()
    );
    const { leaseAccount } = aggregatorAccount.getAccounts({
      queueAccount,
      queueAuthority: queueData.authority,
    });
    const leaseData = await leaseAccount.loadData().catch(() => {
      throw new Error(`Failed to load lease account. Has it been created yet?`);
    });

    // verify authority
    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    const tokenWallet = this.program.mint.getAssociatedAddress(
      this.program.walletPubkey
    );
    if (!this.silent) {
      const [withdrawerBalance, leaseBalance] = await Promise.all([
        this.program.connection.getTokenAccountBalance(tokenWallet),
        this.program.connection.getTokenAccountBalance(leaseData.escrow),
      ]);
      this.logger.log(
        chalkString(
          "Initial Lease Balance",
          leaseBalance.value.uiAmountString,
          24
        )
      );
      this.logger.log(
        chalkString(
          "Initial Withdrawer Balance",
          withdrawerBalance.value.uiAmountString,
          24
        )
      );
    }

    const txn = await leaseAccount.withdrawInstruction(this.payer, {
      amount,
      withdrawAuthority: authority,
      withdrawWallet: tokenWallet,
    });
    const signature = await this.signAndSend(txn);

    if (!this.silent) {
      const [leaseBalance] = await Promise.all([
        this.program.connection.getTokenAccountBalance(leaseData.escrow),
      ]);
      this.logger.log(
        chalkString(
          "Final Lease Balance",
          leaseBalance.value.uiAmountString,
          24
        )
      );
    }

    if (this.silent) {
      this.log(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Withdrew ${amount} tokens from aggregator lease`
      )}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to withdraw from aggregator lease account");
  }
}
