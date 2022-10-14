import { Flags } from "@oclif/core";
import { OracleAccount, types } from "@switchboard-xyz/aptos.js";
import { HexString, MaybeHexString } from "aptos";
import BN from "bn.js";
import chalk from "chalk";
import { AptosWithoutSignerBaseCommand as BaseCommand } from "../../../aptos";
import { pqSort } from "../../../utils/crank";

export default class OracleMetrics extends BaseCommand {
  static enableJsonFlag = true;

  static description = "list oracle metrics";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "oracleHexString",
      description: "HexString address of the crank",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(OracleMetrics);

    const oracleAccount = new OracleAccount(
      this.aptos,
      this.parseAddress(args.oracleHexString),
      this.programId
    );

    const oracleTypes = new Set([
      `${this.programId}::oracle::Oracle`,
      `${this.programId}::oracle::OracleData`,
      `${this.programId}::oracle::OracleConfig`,
      `${this.programId}::oracle::OracleMetrics`,
    ]);
    const datas = await oracleAccount.client.getAccountResources(
      oracleAccount.address
    );
    const oracleData = datas.filter((resource) =>
      oracleTypes.has(resource.type)
    );

    // merge queue data
    const data = oracleData.reduce(
      (prev, curr) => ({ ...prev, ...curr.data }),
      {}
    );
    console.log(JSON.stringify(data, undefined, 2));
    const oracle = types.Oracle.fromMoveStruct(data as any);
    console.log(oracle.toJSON());
  }

  async catch(error) {
    super.catch(error, "Failed to sort crank");
  }
}
