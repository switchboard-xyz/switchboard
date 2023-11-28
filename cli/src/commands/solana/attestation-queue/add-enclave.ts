import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { parseRawMrEnclave, sleep } from "@switchboard-xyz/common";
import { TransactionObject } from "@switchboard-xyz/solana.js";
import {
  AttestationQueueAccount,
  containsMrEnclave,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";

export default class AttestationQueueAddEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "add enclave(s) to an attestation queue's config";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the attestation queue and is required to approve config changes",
    }),
    mrEnclave: Flags.string({
      description:
        "Hex encoded MRENCLAVE's to add to the attestation queue's config",
      required: true,
      multiple: true,
    }),
    force: Flags.boolean({
      description:
        "remove old enclaves if the addition will exceed the maximum allowable enclaves (32)",
    }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the attestation queue account",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AttestationQueueAddEnclave);

    const [attestationQueueAccount, attestationQueue] =
      await AttestationQueueAccount.load(this.program, args.queueKey);

    const authority = await this.loadAuthority(
      flags.authority,
      attestationQueue.authority
    );

    const mrEnclaves = flags.mrEnclave
      .map((rawMrEnclave) => parseRawMrEnclave(rawMrEnclave))
      .filter(
        (e) =>
          !containsMrEnclave(
            attestationQueue.mrEnclaves.slice(
              0,
              attestationQueue.mrEnclavesLen
            ),
            e
          )
      );

    if (mrEnclaves.length === 0) {
      throw new Error(
        `No MRENCLAVE value(s) found to add to the attestation queue's config`
      );
    }

    const txns: TransactionObject[] = [];

    const removeCount = 32 - attestationQueue.mrEnclavesLen;
    if (removeCount > 0) {
      if (!flags.force) {
        throw new Error(
          `Please remove ${removeCount} MRENCLAVE value(s) from the queue's config or use the --force flag to auto-remove old enclaves`
        );
      }

      // Add the attestation_queue_remove_mr_enclave instructions
      txns.push(
        ...attestationQueue.mrEnclaves.slice(0, removeCount).map((mrEnclave) =>
          attestationQueueAccount.removeMrEnclaveInstruction(this.payer, {
            authority,
            mrEnclave,
          })
        )
      );
    }

    // Add the attestation_queue_add_mr_enclave instructions
    txns.push(
      ...mrEnclaves.map((mrEnclave) =>
        attestationQueueAccount.addMrEnclaveInstruction(this.payer, {
          authority,
          mrEnclave,
        })
      )
    );

    const txnBundle = TransactionObject.pack(txns);
    const signatures = await this.signAndSendAll(txnBundle);

    if (flags.json) {
      await sleep(1000);
      const attestationQueue = await attestationQueueAccount.loadData();
      return this.normalizeAccountData(
        attestationQueueAccount.publicKey,
        attestationQueue
      );
    }

    if (this.silent) {
      this.logger.info(signatures.join("\n"));
      return;
    }

    // handle nicer logging here
    this.logger.info(
      `${chalk.green(
        CHECK_ICON,
        "successfully added enclave(s) to attestation queue config"
      )} - ${attestationQueueAccount.publicKey}`
    );

    if (signatures.length === 1) {
      this.logger.info(this.toUrl(signatures[0]));
    } else {
      for (const [index, signature] of signatures.entries())
        this.logger.info(`Txn #${index}: ${this.toUrl(signature)}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "Failed to add enclave(s) to attestation queue config");
  }
}
