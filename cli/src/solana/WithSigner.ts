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

    if (!flags.keypair) {
      throw new Error(`Must provide --keypair arguement to use this command`);
    }

    const keypairPath =
      (flags as any).keypair ||
      this.ctx.getDefaultAccount("solana", this.network);

    if (!keypairPath || keypairPath === undefined) {
      throw new Error(`Command requires '--keypair' flag to be provided`);
    }

    this.signer = await this.getSigner(keypairPath);
    this.program = await this.loadProgram(this.signer);

    this.logConfig({ signer: this.signer.publicKey.toString() }, false);
  }
}
