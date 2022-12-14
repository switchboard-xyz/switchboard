import { Flags } from "@oclif/core";
import { CrankAccount, OracleAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class OraclePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an oracle account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "oracleKey",
      description: "public key of the oracle account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(OraclePrint);

    const [oracleAccount, oracle] = await OracleAccount.load(
      this.program,
      args.oracleKey
    );
    const balance = await oracleAccount.fetchBalance(oracle.tokenAccount);

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.publicKey, {
        ...oracle.toJSON(),
        balance: balance,
      });
    }

    this.prettyPrintOracle(oracle, oracleAccount.publicKey, balance);
  }

  async catch(error) {
    super.catch(error, "failed to print oracle");
  }
}
