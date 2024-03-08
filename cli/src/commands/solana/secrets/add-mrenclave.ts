import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { parseRawMrEnclave, SwitchboardSecrets } from "@switchboard-xyz/common";
import chalk from "chalk";
import nacl from "tweetnacl";

export default class SecretsAddMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "";

  static examples = [
    "sb solana secrets add-mrenclave --mrEnclave a4e00d5ef4d89e046aa134f9930069f261268574b6e7f3e48dad963d86cbbffb --secret FFF_MAINNET_SERVICE_RPC_URL --keypair ~/.config/solana/id.json",
  ];

  static flags = {
    ...BaseCommand.flags,
    // Metadata
    mrEnclave: Flags.string({
      char: "m",
      required: true,
      description: "",
    }),
    secret: Flags.string({
      required: true,
      description: "name of the secret(s) to add the MrEnclave measurement to",
      multiple: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(SecretsAddMrEnclave);

    const secrets = flags.secret ?? [];
    if (secrets.length === 0) {
      this.error("At least one secret must be provided");
    }

    const mrEnclave = parseRawMrEnclave(flags.mrEnclave, false);
    const mrEnclaveEncoded = Buffer.from(mrEnclave).toString("hex");

    const sbSecrets = new SwitchboardSecrets();
    const request = sbSecrets.createAddMrEnclaveRequest(
      this.program.walletPubkey.toBase58(),
      "ed25519",
      mrEnclaveEncoded,
      secrets
    );

    const signature = nacl.sign.detached(
      new Uint8Array(request.toEncodedMessage()),
      this.program.wallet.payer.secretKey
    );

    await sbSecrets.addMrEnclave(
      request,
      Buffer.from(signature).toString("base64")
    );

    this.log(`${CHECK_ICON}MrEnclave added to secret(s)`);
  }

  async catch(error: any) {
    super.catch(error, "failed to add MrEnclave to secret{s}");
  }
}
