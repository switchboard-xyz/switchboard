import { Args } from "@oclif/core";
import { HexString } from "aptos";
import { BN } from "@switchboard-xyz/common";
import chalk from "chalk";
import { AptosWithoutSignerBaseCommand as BaseCommand } from "../../../aptos";
import { pqSort } from "../../../utils/crank";

export default class CrankList extends BaseCommand {
  static enableJsonFlag = true;

  static description = "sort the crank";

  static aliases = ["aptos:list:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    crankHexString: Args.string({
      description: "HexString address of the crank",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankList);

    const [crankAccount, crankData] = await this.loadCrank(args.crankHexString);

    const pqData: { nextTimestamp: BN; aggregatorAddr: string }[] =
      crankData.heap.map((v: { timestamp: BN; aggregatorAddr: any }) => {
        return {
          nextTimestamp: new BN(v.timestamp),
          aggregatorAddr: HexString.ensure(v.aggregatorAddr).toString(),
        };
      });
    const sorted = pqSort(pqData);

    this.logger.log(
      sorted
        .map(
          (row) =>
            `${chalk.yellow(row.nextTimestamp.toNumber())}, ${chalk.blue(
              row.aggregatorAddr.toString()
            )}`
        )
        .join("\n")
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to sort crank");
  }
}
