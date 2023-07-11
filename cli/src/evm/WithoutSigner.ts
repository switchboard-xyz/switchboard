import { EvmBaseCommand as BaseCommand } from "./BaseCommand";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import { SwitchboardProgram } from "@switchboard-xyz/evm.js";
import { providers } from "ethers";

export abstract class EvmWithoutSignerBaseCommand extends BaseCommand {
  static flags = {
    ...BaseCommand.flags,
    // namedAccount: Flags.string({
    //   description: "Named account to load from your nearCredentialsDir",
    //   required: true,
    // }),
  };

  public hasSigner = false;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    const readonlyProvider = new providers.JsonRpcProvider(this.rpcUrl);
    this.program = await SwitchboardProgram.load(
      readonlyProvider,
      this.programId
    );
  }
}
