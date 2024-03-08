import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../solana/index";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/solana.js";

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

  static args = {
    placeholder: Args.string({
      description: "",
      required: false,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(SandboxCommand);

    console.log(
      "Attestation Program ID",
      this.program.attestationProgramId.toBase58()
    );

    // const [functionAccount, functionState] = await FunctionAccount.load(
    //   this.program,
    //   "33wNREhMu5vKrcx7qPtw8KHvndRv5d1UiwWkyi8DfyJS"
    // );

    // const functionAccountInfo =
    //   await this.program.provider.connection.getAccountInfo(
    //     functionAccount.publicKey
    //   );

    // const functionAccountData = functionAccountInfo?.data ?? Buffer.from("");

    // console.log(`SIZE\n${functionAccountData.length}\n`);

    // console.log(
    //   `FUNCTION ACCOUNT DATA\n[${new Uint8Array(functionAccountData)}]\n`
    // );

    // console.log(
    //   `FUNCTION ACCOUNT HEX\n0x${functionAccountData.toString("hex")}\n`
    // );

    // console.log(
    //   `FUNCTION ACCOUNT HEX (NO DISC)\n0x${functionAccountData
    //     .slice(8)
    //     .toString("hex")}\n`
    // );
  }

  async catch(error: any) {
    super.catch(error, "sandbox command failed");
  }
}
