import { Flags } from "@oclif/core";
import { OracleAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class OracleWithdraw extends BaseCommand {
  static description = "withdraw from an oracle's staking wallet";

  // static examples = [
  //   "$ sbv2 solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1",
  // ];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair for the oracle authority",
    }),
    amount: Flags.string({
      required: true,
      description: "amount to withdraw",
    }),
  };

  static args = [
    {
      name: "oracleKey",
      description: "public key of the oracle",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(OracleWithdraw);

    const [oracleAccount, oracle] = await OracleAccount.load(
      this.program,
      args.oracleKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      oracle.oracleAuthority
    );

    const amount = Number(flags.amount);
    if (amount < 0) {
      throw new Error("amount to withdraw must be greater than 0");
    }

    const txn = await oracleAccount.withdrawInstruction(this.payer, {
      amount: amount,
      authority,
    });

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    if (flags.json) {
      const accounts = await oracleAccount.toAccountsJSON();
      return this.normalizeAccountData(oracleAccount.publicKey, accounts);
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}successfully withdrew ${amount} from oracle's staking wallet`,
        oracleAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to withdraw from oracle's staking wallet");
  }
}
