import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString, CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { OracleAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class OracleWithdraw extends BaseCommand {
  static description = "withdraw from an oracle's staking wallet";

  // static examples = [
  //   "$ sb solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1",
  // ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair for the oracle authority",
    }),
    force: Flags.boolean({
      char: "f",
      description:
        "allow withdrawing more than the queues minStake requirement",
    }),
    amount: Flags.string({
      required: true,
      description: "amount to withdraw",
    }),
    unwrap: Flags.boolean({
      required: false,
      description: "whether to unwrap the withdrawed funds",
    }),
    withdrawDestination: Flags.string({
      description:
        "the account to withdraw funds to. if unwrap is set, this should be a SystemProgram owned account. if unwrap is not set, this should be a TokenAccount.",
    }),
  };

  static args = {
    oracleKey: Args.string({
      description: "public key of the oracle account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(OracleWithdraw);

    const [oracleAccount, oracle] = await OracleAccount.load(
      this.program,
      args.oracleKey
    );

    const oracleBalance = await oracleAccount.fetchBalance();

    const authority = await this.loadAuthority(
      flags.authority,
      oracle.oracleAuthority
    );

    const amount: number =
      (flags.amount ?? "").toLowerCase() === "all"
        ? oracleBalance
        : Number.parseFloat(flags.amount);

    if (amount < 0) {
      throw new Error("amount to withdraw must be greater than 0");
    }

    const finalBalance = oracleBalance - amount;
    const finalBalanceBN = this.program.mint.toTokenAmountBN(finalBalance);
    if (!flags.force) {
      const [_, queueData] = await QueueAccount.load(
        this.program,
        oracle.queuePubkey
      );
      if (
        !queueData.minStake.isZero() &&
        finalBalanceBN.lt(queueData.minStake)
      ) {
        throw new Error(
          `provide the '--force' flag to withdraw more than the oracles minStake requirement`
        );
      }
    }

    const txn = await oracleAccount.withdrawInstruction(this.payer, {
      amount: amount,
      authority,
      unwrap: flags.unwrap,
      withdrawAccount: flags.withdrawDestination
        ? new PublicKey(flags.withdrawDestination)
        : undefined,
    });
    const signature = await this.signAndSend(txn);

    if (!this.silent) {
      const newBalance = await this.program.mint.fetchBalance(
        oracle.tokenAccount
      );
      this.logger.log(chalkString("Final Wallet Balance", newBalance ?? 0, 24));
    }

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Withdrew ${amount} from oracle's staking wallet`
      )}`
    );
    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to withdraw from oracle's staking wallet");
  }
}
