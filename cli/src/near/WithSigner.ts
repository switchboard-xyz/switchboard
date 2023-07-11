import { AuthorityMismatch } from "../types";

import { NearBaseCommand as BaseCommand } from "./BaseCommand";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import { EscrowAccount, SwitchboardProgram } from "@switchboard-xyz/near.js";
import type { Account } from "near-api-js";

export abstract class NearWithSignerBaseCommand extends BaseCommand {
  static enableJsonFlag = true;

  static flags = {
    ...BaseCommand.flags,
    accountName: Flags.string({
      description: "Named account to load from your nearCredentialsDir",
      required: true,
    }),
  };

  public hasSigner = true;

  public program: SwitchboardProgram;

  // public signer: Account;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    // override program with a keypair
    // TODO: Allow loading GCP/AWS Keypair with SwitchboardProgram.loadFromKeypair
    this.program = await SwitchboardProgram.loadFromFs(
      this.networkId,
      this.rpcUrl,
      (flags as any).accountName,
      (flags as any).nearCredentialsDir
    );

    this.logConfig({ signer: this.program.account.accountId }, false);
  }

  getAuthority(authorityFlag?: string, expectedAuthority?: string): Account {
    const authority = authorityFlag
      ? this.getSigner(authorityFlag)
      : this.program.account;

    if (expectedAuthority && expectedAuthority !== authority.accountId) {
      throw new AuthorityMismatch();
    }

    return authority;
  }

  async loadEscrow(): Promise<EscrowAccount> {
    return await EscrowAccount.getOrCreateStaticAccount(this.program);
  }
}
