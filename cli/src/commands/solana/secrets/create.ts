import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { parseRawMrEnclave, SwitchboardSecrets } from "@switchboard-xyz/common";
import chalk from "chalk";
import fs from "fs";
import nacl from "tweetnacl";

export default class CreateSecret extends BaseCommand {
  static enableJsonFlag = true;

  static description = "creates a switchboard secret";

  static examples = [""];

  sbSecrets = new SwitchboardSecrets();

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    mrEnclave: Flags.string({
      char: "m",
      required: false,
      description: "optional mrEnclave to add to the secret",
    }),
    secret: Flags.string({
      description: "the value of the secret to create",
      exclusive: ["secretFile"],
      exactlyOne: ["secret", "secretFile"],
    }),
    secretFile: Flags.string({
      description: "the file containing the value of the secret to create",
      exclusive: ["secret"],
      exactlyOne: ["secret", "secretFile"],
    }),
  };

  static args = {
    secretName: Args.string({
      description: "the name of the secret to create",
      required: true,
    }),
  };

  async createUser() {
    // user might not exist, lets create it
    const request = this.sbSecrets.createOrUpdateUserRequest(
      this.program.walletPubkey.toBase58(),
      "ed25519",
      ""
    );

    const signature = nacl.sign.detached(
      new Uint8Array(request.toEncodedMessage()),
      this.program.wallet.payer.secretKey
    );

    try {
      await this.sbSecrets.createOrUpdateUser(
        request,
        Buffer.from(signature).toString("base64")
      );

      this.log(
        `${CHECK_ICON}Created new user ${this.program.walletPubkey.toBase58()}`
      );
    } catch (error) {
      this.log(`Failed to create user - the user may already exist: ${error}`);
    }
  }

  async getOrCreateUser() {
    try {
      await this.sbSecrets.getUser(
        this.program.walletPubkey.toBase58(),
        "ed25519"
      );
    } catch {
      this.log(`Failed to fetch user, attempting to create the user`);
      await this.createUser();
    }
  }

  async run() {
    const { args, flags } = await this.parse(CreateSecret);

    const sbSecrets = new SwitchboardSecrets();

    let secretValue = "";
    if (flags.secret) {
      secretValue = flags.secret;
    } else if (flags.secretFile) {
      secretValue = fs.readFileSync(flags.secretFile, "utf-8");
      this.debug(`Read secret from file: ${flags.secretFile}`);
    }

    if (!secretValue) {
      throw new Error(`Failed to read secret value`);
    }

    let mrEnclave: Uint8Array | undefined;
    if (flags.mrEnclave) {
      mrEnclave = parseRawMrEnclave(flags.mrEnclave, false);
    }

    await this.getOrCreateUser();

    const secrets = await sbSecrets.getUserSecrets(
      this.program.walletPubkey.toBase58(),
      "ed25519"
    );
    if (secrets.some((s) => s.secret_name === args.secretName)) {
      throw new Error(`Found existing secret for ${args.secretName}`);
    }

    const request = sbSecrets.createSecretRequest(
      this.program.walletPubkey.toBase58(),
      "ed25519",
      args.secretName,
      secretValue
    );

    const signature = nacl.sign.detached(
      new Uint8Array(request.toEncodedMessage()),
      this.program.wallet.payer.secretKey
    );

    await sbSecrets.createSecret(
      request,
      Buffer.from(signature).toString("base64")
    );

    this.log(`${CHECK_ICON}Created new secret ${args.secretName}`);

    if (mrEnclave) {
      const request = sbSecrets.createAddMrEnclaveRequest(
        this.program.walletPubkey.toBase58(),
        "ed25519",
        Buffer.from(mrEnclave).toString("hex"),
        [args.secretName]
      );

      const signature = nacl.sign.detached(
        new Uint8Array(request.toEncodedMessage()),
        this.program.wallet.payer.secretKey
      );

      await sbSecrets.addMrEnclave(
        request,
        Buffer.from(signature).toString("base64")
      );

      this.log(`${CHECK_ICON}MrEnclave added to secret`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to create secret");
  }
}
