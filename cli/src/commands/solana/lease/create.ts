import { Flags } from "@oclif/core";
import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { LeaseAccount } from "@switchboard-xyz/solana.js";
import { BN } from "bn.js";
// import {
//   getOrCreateSwitchboardTokenAccount,
//   prettyPrintLease,
// } from "@switchboard-xyz/sbv2-utils";
// import {
//   AggregatorAccount,
//   LeaseAccount,
//   OracleQueueAccount,
//   programWallet,
// } from "@switchboard-xyz/switchboard-v2";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class LeaseCreate extends BaseCommand {
  static description = "fund and re-enable an aggregator lease";

  static aliases = ["solana:aggregator:lease:create"];

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: false,
      description:
        "token amount to load into the lease escrow. If decimals provided, amount will be normalized to raw tokenAmount",
    }),
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator to extend a lease for",
    },
  ];

  static examples = [
    "$ sbv2 lease:create GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --amount 1.5 --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(LeaseCreate);

    const amount = Number(flags.amount);
    if (amount <= 0) {
      throw new Error("amount to deposit must be greater than 0");
    }

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await this.loadQueue(
      aggregatorData.queuePubkey.toBase58()
    );
    const { leaseAccount } = aggregatorAccount.getAccounts({
      queueAccount,
      queueAuthority: queueData.authority,
    });

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
    const leaseData = await leaseAccount.loadData().catch(() => null);
    if (leaseData) throw new Error("lease account already exists");

    // create lease account
    const [newLeaseAccount, signature] = await LeaseAccount.create(
      this.program,
      {
        loadAmount: amount,
        aggregatorAccount,
        queueAccount,
        funder: funder,
        mint: this.program.mint.address,
        jobAuthorities: [],
      }
    );

    if (this.silent) {
      console.log(this.toUrl(signature));
    } else {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Lease Account created and funded successfully:`,
          newLeaseAccount.publicKey.toBase58()
        )}`
      );
      this.logger.log(this.toUrl(signature));
    }
  }

  async catch(error) {
    super.catch(error, "failed to create a lease account");
  }
}
