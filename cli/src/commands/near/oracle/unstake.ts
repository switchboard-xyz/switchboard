import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { EscrowAccount } from "@switchboard-xyz/near.js";

export default class OracleUnstake extends BaseCommand {
  static enableJsonFlag = true;

  static description = "deposit funds to an oracle's staking wallet";

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: true,
      description: "amount of Near to unstake from oracle staking wallet",
    }),
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the oracle in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(OracleUnstake);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    const escrowAccount = await EscrowAccount.getOrCreateStaticAccount(
      this.program
    );

    const unstakeReceipt = await oracleAccount.unstake({
      destinationEscrow: escrowAccount,
      amount: Number(flags.amount),
    });

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, {
        ...(await oracleAccount.loadData()).toJSON(),
        escrow: (await oracleAccount.escrow.loadData()).toJSON(),
      });
    }
  }

  async catch(error) {
    super.catch(error, "Failed to unstake funds from near oracle");
  }
}
