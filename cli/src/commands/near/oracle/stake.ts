import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { OracleAccount, SwitchboardDecimal } from "@switchboard-xyz/near.js";

export default class OracleStake extends BaseCommand {
  static enableJsonFlag = true;

  static description = "deposit funds to an oracle's staking wallet";

  static flags = {
    ...BaseCommand.flags,
    amount: Flags.string({
      required: true,
      description: "amount of Near to deposit into oracle staking wallet",
    }),
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the oracle in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(OracleStake);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
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
    }

    const stakeReceipt = await oracleAccount.stake(
      escrowAccount,
      Number(flags.amount)
    );

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, {
        ...(await oracleAccount.loadData()).toJSON(),
        escrow: (await oracleAccount.escrow.loadData()).toJSON(),
      });
    }
  }

  async catch(error) {
    super.catch(error, "Failed to stake funds for near oracle");
  }
}
