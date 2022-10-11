import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";

export default class OracleUp extends BaseCommand {
  static description = "start an aptos oracle in docker";

  static aliases = ["aptos:oracle:start"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that is the authority for the oracle",
    }),
  };

  static args = [
    {
      name: "oracleHexString",
      description: "HexString address of the oracle",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(OracleUp);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);
  }

  async catch(error) {
    super.catch(error, "Failed to start oracle");
  }
}
