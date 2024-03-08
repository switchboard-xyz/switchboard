import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { parseRawMrEnclave, SwitchboardSecrets } from "@switchboard-xyz/common";
import chalk from "chalk";
import fs from "fs";
import nacl from "tweetnacl";

export default class DeleteSecret extends BaseCommand {
  static enableJsonFlag = true;

  static description = "delete a switchboard secret for a given user";

  static examples = [""];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    secretName: Args.string({
      description: "the name of the secret to create",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(DeleteSecret);

    const sbSecrets = new SwitchboardSecrets();

    const userSecrets = await sbSecrets.getUserSecrets(
      this.program.walletPubkey.toBase58(),
      "ed25519"
    );
    if (!userSecrets.some((s) => s.secret_name === args.secretName)) {
      // throw new Error(`No secret found for ${args.secretName}`);
      this.log(`No secret found for ${args.secretName}`);
      return;
    }

    const request = sbSecrets.createDeleteSecretRequest(
      this.program.walletPubkey.toBase58(),
      "ed25519",
      args.secretName
    );
    const encodedMessage = request.toEncodedMessage();

    const signature = nacl.sign.detached(
      new Uint8Array(encodedMessage),
      this.program.wallet.payer.secretKey
    );
    const signatureEncoded = Buffer.from(signature).toString("base64");

    await sbSecrets.deleteSecret(request, signatureEncoded);

    this.log(`${CHECK_ICON} Deleted secret ${args.secretName}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to create secret");
  }
}
