import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { bs58, buf2String } from "@switchboard-xyz/common";
import { FunctionAccount } from "@switchboard-xyz/solana.js";

export default class FunctionGet extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a function account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      description: "filter functions by authority pubkey",
    }),
  };

  async run() {
    const { flags } = await this.parse(FunctionGet);

    const authority = flags.authority
      ? new PublicKey(flags.authority)
      : undefined;

    const getProgramAccountsResponse =
      await this.program.connection.getProgramAccounts(
        this.program.attestationProgramId,
        {
          filters: [
            {
              memcmp: {
                offset: 0,
                bytes: bs58.encode(
                  new Uint8Array([76, 139, 47, 44, 240, 182, 148, 200])
                ),
              },
            },
          ],
        }
      );

    this.log(
      `Found ${getProgramAccountsResponse.length} total function accounts`
    );

    for (const { account, pubkey } of getProgramAccountsResponse) {
      const [functionAccount, functionState] = await FunctionAccount.decode(
        this.program,
        account
      );
      if (!authority || functionState.authority.equals(authority)) {
        this.log(
          `${buf2String(functionState.name) ?? "undefined"} - ${pubkey}`
        );
      }
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to get functions");
  }
}
