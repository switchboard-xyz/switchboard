import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { AttestationQueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AttestationQueuePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print an attestation queue account";

  static flags = {
    ...BaseCommand.flags,
    // verifiers: Flags.boolean({
    //   description: "print the attestation queue's verifier oracles",
    // }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AttestationQueuePrint);

    const [attestationQueueAccount, attestationQueue] =
      await AttestationQueueAccount.load(this.program, args.queueKey);

    // const verifiers = flags.verifiers
    //   ? await attestationQueueAccount.loadVerifierOracles()
    //   : undefined;

    if (flags.json) {
      return this.normalizeAccountData(
        attestationQueueAccount.publicKey,
        attestationQueue
      );
    }

    this.prettyPrintAttestationQueue(
      attestationQueue,
      attestationQueueAccount.publicKey
    );

    this.log(
      chalk.underline(
        chalkString(
          "\n## Verifier Oracles",
          Array.from({ length: 44 }).join(" ")
        )
      )
    );
    const verifierOracles = attestationQueue.data.slice(
      0,
      attestationQueue.dataLen
    );
    if (verifierOracles.length > 0) {
      for (const [n, verifier] of verifierOracles.entries()) {
        this.logger.info(chalkString(`# ${n + 1}`, verifier.toBase58()));
      }
    } else {
      this.log("No verifiers for this attestation queue");
    }

    // if (flags.verifiers) {
    //   this.log(
    //     chalk.underline(
    //       chalkString("\n## Oracles", Array.from({ length: 44 }).join(" "))
    //     )
    //   );

    //   if (verifiers) {
    //     for (const [n, verifier] of verifiers.entries()) {
    //       this.logger.info(
    //         chalkString(`# ${n + 1}`, verifier.publicKey.toBase58())
    //       );
    //     }
    //   } else {
    //     this.log("No verifiers found");
    //   }
    // }
  }

  async catch(error: any) {
    super.catch(error, "failed to print attestation queue");
  }
}
