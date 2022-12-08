import { PublicKey } from "@solana/web3.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";

export default class SolanaPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a Switchboard account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "pubkey",
      required: true,
      description: "publicKey of the Switchboard account to search for",
    },
  ];

  async run(): Promise<any> {
    const { args, flags } = await this.parse(SolanaPrint);

    const pubkey = new PublicKey(args.pubkey);

    const accountInfo = await this.program.connection.getAccountInfo(pubkey);
    if (accountInfo === null) {
      throw new Error(
        `Failed to fetch accountInfo for address ${pubkey.toBase58()}`
      );
    }

    const response = await this.printAccount(pubkey, accountInfo, flags.json);
    if (flags.json && response) {
      return response;
    }
  }

  async catch(error) {
    super.catch(error, "Failed to print Switchboard account");
  }
}
