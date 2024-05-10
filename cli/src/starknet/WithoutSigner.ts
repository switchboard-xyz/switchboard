import { StarknetBaseCommand } from "./BaseCommand";

import type { Input } from "@oclif/parser";
import type { SwitchboardProgram } from "@switchboard-xyz/starknet.js";

export abstract class StarknetWithoutSignerBaseCommand extends StarknetBaseCommand {
  static flags = { ...StarknetBaseCommand.flags };

  public hasSigner = false;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    StarknetBaseCommand.flags = flags as any;

    this.program = await this.loadProgram();
  }
}
