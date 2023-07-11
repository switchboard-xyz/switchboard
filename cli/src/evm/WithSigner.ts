import { AuthorityMismatch } from "../types";

import { EvmBaseCommand as BaseCommand } from "./BaseCommand";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import { SwitchboardProgram } from "@switchboard-xyz/evm.js";
import type { Signer, Wallet } from "ethers";

export abstract class EvmWithSignerBaseCommand extends BaseCommand {
  static flags = {
    ...BaseCommand.flags,
    account: Flags.string({
      description:
        "Path to file containing the private key for the payer account",
      required: true,
    }),
  };

  public hasSigner = true;

  public _signer: Wallet;

  public address: string;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this._signer = await this.getSigner((flags as any).account);
    this.program = await SwitchboardProgram.load(this.signer, this.programId);
    this.address = await this.signer.getAddress();

    this.logConfig({ signer: this.address }, false);
  }

  get signer(): Signer {
    return this._signer;
  }

  async getAuthority(
    authorityFlag?: string,
    expectedAuthority?: string
  ): Promise<Signer> {
    const authority = authorityFlag
      ? await this.getSigner(authorityFlag)
      : this.signer;

    const authorityAddress = await authority.getAddress();

    if (
      expectedAuthority &&
      expectedAuthority.toLowerCase() !== authorityAddress.toLowerCase()
    ) {
      throw new AuthorityMismatch();
    }

    return authority;
  }
}
