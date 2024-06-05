import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import * as spl from "@solana/spl-token";
import type { TransactionInstruction } from "@solana/web3.js";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import {
  Mint,
  NativeMint,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class SolanaTokenClose extends BaseCommand {
  static enableJsonFlag = true;

  static description = "close a token account";

  static examples = [
    "sb solana token close --keypair ~/switchboard_environments_v2/mainnet/upgrade_authority/upgrade_authority.json --mainnetBeta --expirationDays 30",
  ];

  static flags = {
    ...BaseCommand.flags,
    mint: Flags.string({
      description: "token mint to close account for",
      required: false,
      default: "So11111111111111111111111111111111111111112",
    }),
    expirationDays: Flags.integer({
      description:
        "expiration time in days. if the account hasnt been used in this time, it will be closed",
      default: 30,
    }),
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(SolanaTokenClose);

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationDays = Math.abs(flags.expirationDays);
    const expirationTimestamp =
      currentTimestamp - expirationDays * 24 * 60 * 60;
    this.debug(`Expiration timestamp: ${expirationTimestamp}`);

    const mintPubkey = new PublicKey(flags.mint);
    const mintAccountInfo = await this.program.connection.getAccountInfo(
      mintPubkey
    );
    if (!mintAccountInfo) {
      throw new Error(`Failed to find mint ${mintPubkey}`);
    }
    const mintAccount = spl.MintLayout.decode(mintAccountInfo.data);
    const mint = new Mint(this.program.provider, {
      address: mintPubkey,
      decimals: mintAccount.decimals,
    });

    const associatedTokenAddress = anchor.utils.token.associatedAddress({
      owner: this.program.walletPubkey,
      mint: mint.address,
    });

    const tokenAccounts = await this.program.connection.getTokenAccountsByOwner(
      this.program.walletPubkey,
      { mint: mint.address }
    );

    const parsedTokenAccounts: PublicKey[] = [];
    const rawTxns: TransactionObject[] = [];

    let balance = 0;

    for (const tokenAccount of tokenAccounts.value) {
      if (tokenAccount.pubkey.equals(associatedTokenAddress)) {
        this.debug(`Found associated address, skipping ...`);
        continue;
      }

      try {
        const splTokenAccount = spl.AccountLayout.decode(
          tokenAccount.account.data
        );

        const signatures =
          await this.program.provider.connection.getSignaturesForAddress(
            tokenAccount.pubkey
          );

        const lastSignature = signatures.shift();
        if (lastSignature) {
          const lastUsedDaysAgo = Math.floor(
            (currentTimestamp - (lastSignature.blockTime ?? 0)) / 24 / 60 / 60
          );
          if (expirationDays > lastUsedDaysAgo) {
            this.log(
              `Skipping ${tokenAccount.pubkey.toBase58()} because it was last used ${lastUsedDaysAgo} days ago, which is less than ${expirationDays} days ago`
            );
            continue;
          }
        }

        const tokenAmount = mint.fromTokenAmount(splTokenAccount.amount);
        this.debug(
          `TokenAccount ${tokenAccount.pubkey.toBase58()}, Balance = ${tokenAmount}`
        );
        balance += tokenAmount;
        parsedTokenAccounts.push(tokenAccount.pubkey);

        if (mint.address.equals(NativeMint.address)) {
          // closing will automatically unwrap the tokens
          rawTxns.push(
            new TransactionObject(
              this.program.walletPubkey,
              [
                spl.createCloseAccountInstruction(
                  tokenAccount.pubkey,
                  this.program.walletPubkey,
                  this.program.walletPubkey
                ),
              ],
              []
            )
          );
        } else {
          // we need to transfer the tokens first
          rawTxns.push(
            new TransactionObject(
              this.program.walletPubkey,
              [
                spl.createTransferInstruction(
                  tokenAccount.pubkey,
                  associatedTokenAddress,
                  this.program.walletPubkey,
                  splTokenAccount.amount
                ),
                spl.createCloseAccountInstruction(
                  tokenAccount.pubkey,
                  this.program.walletPubkey,
                  this.program.walletPubkey
                ),
              ],
              []
            )
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (rawTxns.length === 0) {
      this.log(`No token accounts to close`);
      return;
    }

    this.log(
      `Found ${balance} tokens in ${tokenAccounts.value.length} accounts for mint ${mint.address}`
    );

    const txns: TransactionObject[] = TransactionObject.pack(rawTxns);
    this.log(`Packed into ${txns.length} transactions`);

    const preBalance = await this.program.provider.connection.getBalance(
      this.program.walletPubkey
    );
    this.log(`[PRE] Balance: ${preBalance / LAMPORTS_PER_SOL} SOL`);

    const signatures = await this.program.signAndSendAll(txns);
    for (const signature of signatures) {
      this.log(`Signature: ${signature} - ${this.toUrl(signature)}`);
    }

    this.log(`Recovered ${balance} tokens`);

    const postBalance = await this.program.provider.connection.getBalance(
      this.program.walletPubkey
    );
    this.log(`[POST] Balance: ${postBalance / LAMPORTS_PER_SOL} SOL`);
  }

  async catch(error: any) {
    super.catch(error, "failed to close token account");
  }
}
