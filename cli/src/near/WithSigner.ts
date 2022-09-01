import { Flags } from "@oclif/core";
import { Input } from "@oclif/parser";
import { EscrowAccount, PID } from "@switchboard-xyz/near.js";
import { Account } from "near-api-js";
import { AuthorityMismatch } from "../types";
import { NearBaseCommand as BaseCommand } from "./BaseCommand";

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

  public signer: Account;

  async init() {
    await super.init();
    const { flags } = await this.parse((<Input<any>>this.constructor) as any);
    BaseCommand.flags = flags as any;

    this.signer = this.getSigner((flags as any).accountName);

    this.logConfig({ signer: this.signer.accountId }, false);
  }

  getAuthority(authorityFlag?: string, expectedAuthority?: string): Account {
    const authority = authorityFlag
      ? this.getSigner(authorityFlag)
      : this.signer;

    if (expectedAuthority && expectedAuthority !== authority.accountId) {
      throw new AuthorityMismatch();
    }

    return authority;
  }

  async loadEscrow(
    mint = "wrap.test",
    seedString = "PayerWalletSeed"
  ): Promise<[EscrowAccount, any]> {
    const seedBytes = Buffer.alloc(32);
    seedBytes.write(seedString, "utf8");
    const seed = new Uint8Array(seedBytes.slice(0, 32));
    const escrowKey = EscrowAccount.keyFromSeed(seed);

    let escrowAccount: EscrowAccount;
    let escrowData: any;
    try {
      escrowAccount = new EscrowAccount({
        connection: this.near.connection,
        address: escrowKey,
      });
      escrowData = await escrowAccount.loadData();
    } catch (error) {
      await this.signer.functionCall({
        contractId: PID,
        methodName: "escrow_init",
        args: {
          ix: {
            seed: [...seed],
            authority: this.signer.accountId,
            mint: mint,
          },
        },
      });
      escrowAccount = new EscrowAccount({
        connection: this.signer.connection,
        address: escrowKey,
      });
      escrowData = await escrowAccount.loadData();
    }

    return [escrowAccount, escrowData];
  }
}
