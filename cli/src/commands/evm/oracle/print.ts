import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { Permissions } from "@switchboard-xyz/evm.js";

export default class OraclePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an oracle";

  static examples = [
    "$ sb evm oracle print 0x5eeFE1CA9D1093a59aC9278cC6D296A4eeDd6385 --arbitrum --testnet",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    oracleAddress: Args.string({
      description: "address of the oracle account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(OraclePrint);

    const [oracleAccount, oracle] = await this.loadOracle(args.oracleAddress);

    let permissions: string | undefined;
    try {
      // permissions = await Permissions.getSwitchboardPermissions(
      //   this.program,
      //   oracle.queueAddress,
      //   oracleAccount.address
      // );
    } catch {}

    const oracleData = {
      ...oracle,
      permissions,
    };

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, oracleData);
    }

    this.prettyPrintOracle(oracleAccount.address, oracleData);

    this.log(chalkString("permissions", permissions, 24));
  }

  async catch(error: any) {
    super.catch(error, "failed to print oracle");
  }
}
