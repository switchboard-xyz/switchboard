import { Flags } from "@oclif/core";
import { VrfAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class VrfPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a VRF and it's associated accounts";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "vrfKey",
      description: "public key of the vrf account",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(VrfPrint);

    const [vrfAccount, vrf] = await VrfAccount.load(this.program, args.vrfKey);

    const accounts = await vrfAccount.fetchAccounts(vrf);

    if (flags.json) {
      return accounts;
    }

    this.prettyPrintVrfAccounts(accounts);
  }

  async catch(error) {
    super.catch(error, "failed to print vrf");
  }
}
