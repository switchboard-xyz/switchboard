import { Flags } from "@oclif/core";
import { BN } from "@project-serum/anchor";
import { SwitchboardDecimal } from "@switchboard-xyz/common";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";

export default class SandboxCommand extends BaseCommand {
  static description = "sandbox";

  static hidden = true;

  static flags = {
    ...BaseCommand.flags,
    // name: Flags.string({
    //   char: "n",
    //   description: "name of the job account for easier identification",
    //   default: "",
    // }),
  };

  static args = [
    {
      name: "placeholder",
      required: false,
      description: "",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(SandboxCommand);

    const genesis = await this.program.connection.getGenesisHash();
    console.log(genesis);
  }

  async catch(error) {
    super.catch(error, "sandbox command failed");
  }
}
