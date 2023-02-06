import { Args } from "@oclif/core";
import { NearWithoutSignerBaseCommand as BaseCommand } from "../../../near";
import { toBase58 } from "@switchboard-xyz/near.js";
import chalk from "chalk";
import { pqSort } from "../../../utils/crank";

export default class CrankList extends BaseCommand {
  static description = "pop the crank";

  static aliases = ["near:pop:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    crankAddress: Args.string({
      description: "address of the crank in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CrankList);

    const [crank, crankData] = await this.loadCrank(args.crankAddress);
    const sorted = pqSort(crankData.data);

    this.logger.log(
      sorted
        .map(
          (row) =>
            `${chalk.yellow(row.nextTimestamp.toNumber())}, ${chalk.blue(
              toBase58(row.uuid)
            )}`
        )
        .join("\n")
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to pop near crank");
  }
}
