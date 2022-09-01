import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import { Keypair } from "@solana/web3.js";
import { SolanaBaseCommand } from "./BaseCommand";

export abstract class SolanaWithSignerBaseCommand extends SolanaBaseCommand {
  static flags = {
    ...SolanaBaseCommand.flags,
    keypair: Flags.string({
      char: "k",
      description:
        "keypair that will pay for onchain transactions. defaults to new account authority if no alternate authority provided",
    }),
  };

  public hasSigner = true;

  public signer: Keypair;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    SolanaBaseCommand.flags = flags as any;

    this.signer = await this.getSigner((flags as any).keypair);
    this.program = await this.loadProgram(this.signer);

    this.logConfig({ signer: this.signer.publicKey.toString() }, false);
  }
}
