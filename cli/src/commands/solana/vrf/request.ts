import { Flags, Args } from "@oclif/core";
import { VrfAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { AggregatorIllegalRoundOpenCall } from "../../../types";
import { CHECK_ICON } from "../../../utils";

export default class VrfRequest extends BaseCommand {
  static description = "request a new vrf result from a set of oracles";

  static aliases = ["solana:vrf:update", "solana:vrf:open-round"];

  static examples = ["$ sbv2 solana vrf request"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      description: "alternative keypair that is the VRF authority",
    }),
  };

  static args = {
    vrfKey: Args.string({
      description: "public key of the VRF account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(VrfRequest);

    const [vrfAccount, vrf] = await VrfAccount.load(this.program, args.vrfKey);

    const authority = await this.loadAuthority(flags.authority, vrf.authority);

    const [payerTokenWallet, userInitTxn] =
      await this.program.mint.getOrCreateWrappedUserInstructions(this.payer, {
        fundUpTo: 0.002,
      });

    const txn = await vrfAccount.requestRandomnessInstruction(this.payer, {
      authority,
      vrf,
      payerTokenWallet,
    });
    const signature = await this.signAndSend(userInitTxn.combine(txn));

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Verifiable randomness requested!`)}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    if (
      error instanceof AggregatorIllegalRoundOpenCall ||
      error.toString().includes("0x177d")
    ) {
      this.logger.info(error.toString());
      this.exit(0);
    }

    super.catch(error, "failed to request randomness");
  }
}
