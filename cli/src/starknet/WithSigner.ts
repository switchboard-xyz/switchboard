import { AuthorityMismatch } from "../types";

import { StarknetBaseCommand } from "./BaseCommand";

import { Flags } from "@oclif/core";
import type { Input } from "@oclif/parser";
import type { SwitchboardProgram } from "@switchboard-xyz/starknet.js";
import { Account } from "starknet";

export abstract class StarknetWithSignerBaseCommand extends StarknetBaseCommand {
  static flags = {
    ...StarknetBaseCommand.flags,
    accountAddress: Flags.string({
      description: "The payer account public address",
      required: true,
    }),
    accountPrivateKey: Flags.string({
      description: "The signing private key for the payer account",
      required: true,
    }),
  };

  public hasSigner = true;

  public _signer: Account;

  public program: SwitchboardProgram;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    StarknetBaseCommand.flags = flags as any;

    this.program = await this.loadProgram();
    this._signer = new Account(
      this.program.provider,
      flags.accountAddress,
      flags.accountPrivateKey
    );
    // TODO: Find a better way to load user account.
    // this._signer = await this.getAccount(
    //   flags.accountAddress,
    //   flags.accountPrivateKeyPath
    // );

    this.logConfig({ signer: this.address }, false);
  }

  get account(): Account {
    return this._signer;
  }

  get address(): string {
    return this.account.address;
  }

  async getAuthority(expected?: string): Promise<Account> {
    const authority = this.account;
    const authorityAddr = authority.address;
    if (!expected || expected.toLowerCase() === authorityAddr.toLowerCase()) {
      return authority;
    }
    throw new AuthorityMismatch();
  }
}
