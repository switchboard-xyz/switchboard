import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import {
  buf2String,
  parseRawMrEnclave,
  SwitchboardSecrets,
} from "@switchboard-xyz/common";
import { getMrEnclave } from "@switchboard-xyz/function-simulator";
import { FunctionAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import nacl from "tweetnacl";

export default class FunctionSyncMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description =
    "Fetch the MrEnclave value for your function and add if neccessary, add it to the function config";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "keypair or public key to delegate authority to for managing the function account",
    }),
    setVersion: Flags.string({
      char: "a",
      description:
        "Set the version of the container before setting the enclave. If not set, the version from the current function config will be used.",
    }),
    force: Flags.boolean({
      description:
        "remove an enclave if the function's config has the maximum number of enclaves (32) already present",
    }),
    secret: Flags.string({
      description: "name of the secret(s) to add the MrEnclave measurement to",
      multiple: true,
      required: false,
    }),
  };

  static args = {
    functionKey: Args.string({
      description: "public key of the function account",
      required: true,
    }),
  };

  async updateSecrets(secrets: string[], mrEnclave: string) {
    if (secrets.length === 0) {
      return;
    }

    const sbSecrets = new SwitchboardSecrets();
    const request = sbSecrets.createAddMrEnclaveRequest(
      this.program.walletPubkey.toBase58(),
      "ed25519",
      mrEnclave,
      secrets
    );
    const signature = nacl.sign.detached(
      new Uint8Array(request.toEncodedMessage()),
      this.program.wallet.payer.secretKey
    );
    try {
      await sbSecrets.addMrEnclave(
        request,
        Buffer.from(signature).toString("base64")
      );
      this.log(
        `${CHECK_ICON}Added the MrEnclave value to the secret(s) successfully`
      );
    } catch (error) {
      this.error(`Failed to update secrets: ${error}`);
    }
  }

  async run() {
    const { args, flags } = await this.parse(FunctionSyncMrEnclave);

    const [functionAccount, functionState] = await FunctionAccount.load(
      this.program,
      args.functionKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      functionState.authority
    );

    const secrets = flags.secret ?? [];

    // TODO: display a warning if the function account is out of funds or has a bad status

    const container: string = buf2String(functionState.container).trim();
    const containerRegistry: string = buf2String(
      functionState.containerRegistry
    ).trim();

    const version: string =
      (flags.setVersion
        ? buf2String(flags.setVersion).trim()
        : buf2String(functionState.version).trim()) ?? "latest";

    this.log(
      `Fetching MrEnclave for ${container}:${version} in registry dockerhub`
    );

    const mrEnclave = await getMrEnclave(container, version, containerRegistry);

    this.logger.info(`MRENCLAVE: ${mrEnclave}`);

    const mrEnclaveBuffer = Buffer.from(
      mrEnclave.startsWith("0x") ? mrEnclave.slice(2) : mrEnclave,
      "hex"
    );

    const parsedMrEnclave = parseRawMrEnclave(mrEnclaveBuffer);

    const fnMrEnclaves: Array<number[]> = functionState.mrEnclaves.filter(
      (arr) => !arr.every((num) => num === 0)
    );

    /// Whether we need to update the container version, regardless of whether the MrEnclave changed
    /// We check this after we fetch the MrEnclave to make sure it exists
    const versionUpdateNeeded =
      flags.setVersion !== undefined &&
      buf2String(functionState.version).trim() !== flags.setVersion;

    /// Whether we need to update the containers MrEnclaves
    const mrEnclavesUpdateNeeded = !FunctionAccount.hasMrEnclave(
      fnMrEnclaves,
      parsedMrEnclave
    );

    // No action needed
    if (!mrEnclavesUpdateNeeded && !versionUpdateNeeded) {
      this.logger.info(
        `${CHECK_ICON}Function already has MrEnclave in its config - No action needed`
      );

      // attempt to update the secrets
      await this.updateSecrets(secrets, mrEnclaveBuffer.toString("hex"));

      return;
    }

    // If we only need to set the version
    if (!mrEnclavesUpdateNeeded && versionUpdateNeeded) {
      const txn = await functionAccount.setConfigInstruction(this.payer, {
        version: flags.setVersion,
      });
      const signature = await this.signAndSend(txn);

      if (flags.silent) {
        this.logger.info(signature);
        return;
      }

      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Function container version set to: ${flags.setVersion}`
        )}`
      );

      this.logger.info(this.toUrl(signature));

      // attempt to update the secrets
      await this.updateSecrets(secrets, mrEnclaveBuffer.toString("hex"));

      return;
    }

    if (mrEnclavesUpdateNeeded && fnMrEnclaves.length === 32 && !flags.force) {
      this.logger.error(
        `Function already has 32 enclaves in its config - use --force to remove one`
      );
      return;
    }

    const txn = await functionAccount.addMrEnclaveInstruction(
      this.payer,
      parsedMrEnclave,
      {
        authority,
        force: flags.force,
        functionState: functionState,
        newVersion: flags.setVersion,
      }
    );

    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    if (mrEnclavesUpdateNeeded) {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Added the MrEnclave value to function config successfully: ${Buffer.from(
            parsedMrEnclave
          ).toString("hex")}`
        )}`
      );
    }

    if (versionUpdateNeeded) {
      this.logger.log(
        `${chalk.green(
          `${CHECK_ICON}Function container version set to: ${flags.setVersion}`
        )}`
      );
    }

    this.logger.info(this.toUrl(signature));

    // attempt to update the secrets
    await this.updateSecrets(secrets, mrEnclaveBuffer.toString("hex"));
  }

  async catch(error: any) {
    super.catch(error, "failed to configure function account");
  }
}
