import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";

export default class OraclePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an oracle";

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

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, oracleData);
    }

    this.prettyPrintOracle(oracleData, oracleAccount.address);

    let permissions: string = "N/A";
    try {
      const permissionBignum = await this.program.sb.permissions(
        oracleData.queueAddress,
        oracleAccount.address
      );
      permissions = permissionBignum.toNumber().toString();
    } catch {}

    this.log(chalkString("permissions", permissions));
  }

  async catch(error: any) {
    super.catch(error, "failed to print oracle");
  }
}
