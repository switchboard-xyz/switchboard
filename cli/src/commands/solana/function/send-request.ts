import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Keypair } from "@solana/web3.js";
import {
  attestationTypes,
  FunctionAccount,
  FunctionRequestAccount,
  SB_ATTESTATION_PID,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import { functionRequestInitAndTrigger } from "@switchboard-xyz/solana.js/generated/instructions";
import chalk from "chalk";

export default class FunctionSendRequest extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Init and trigger a request to a function.";

  static flags = {
    ...BaseCommand.flags,
    parameters: Flags.string({
      description: "Parameters to pass to your function",
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(FunctionSendRequest);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const switchboardRequestKeypair = anchor.web3.Keypair.generate();
    const switchboardRequestEscrowPubkey = anchor.utils.token.associatedAddress(
      {
        mint: this.program.mint.address,
        owner: switchboardRequestKeypair.publicKey,
      }
    );

    const switchboardRequest = new FunctionRequestAccount(
      this.program,
      switchboardRequestKeypair.publicKey
    );
    console.log(`Request account: ${switchboardRequestKeypair.publicKey}`);
    const ix = functionRequestInitAndTrigger(
      this.program,
      {
        params: {
          /* eslint-disable unicorn/no-null */
          bounty: null,
          slotsUntilExpiration: null,
          maxContainerParamsLen: Buffer.from(flags.parameters ?? "").length,
          containerParams: Buffer.from(flags.parameters ?? ""),
          garbageCollectionSlot: null,
          validAfterSlot: null,
          /* eslint-enable unicorn/no-null */
        },
      },
      {
        function: functionAccount.publicKey,
        request: switchboardRequestKeypair.publicKey,
        authority: this.payer,
        functionAuthority: functionState.authority,
        escrow: switchboardRequestEscrowPubkey,
        mint: this.program.mint.address,
        state: this.program.attestationProgramState.publicKey,
        attestationQueue: functionState.attestationQueue,
        payer: this.payer,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      }
    );
    const payerKp = (this.program.provider.wallet as any).payer;
    const to = TransactionObject.packIxns(
      this.payer,
      [ix],
      [payerKp, switchboardRequestKeypair]
    )[0];
    const sig = await to.signAndSend(this.program.provider);
    console.log(sig);

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Function Request sent successfully:`, sig)}`
    );

    this.logger.info(this.toUrl(sig));
  }

  async catch(error: any) {
    super.catch(error, "failed to send function request");
  }
}
