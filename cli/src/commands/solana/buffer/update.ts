import { PublicKey } from "@solana/web3.js";
import {
  AggregatorAccount,
  BufferRelayerAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { AggregatorIllegalRoundOpenCall } from "../../../types";
import { CHECK_ICON } from "../../../utils";

export default class BufferRelayerUpdate extends BaseCommand {
  static description = "request a new buffer relayer result";

  static aliases = ["solana:buffer:open-round"];

  static examples = [
    "$ sbv2 solana buffer update J7j9xX8JP2B2ErvUzuqGAKBGeggsxPyFXj5MqZcYDxfa --keypair ../payer-keypair.json",
  ];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "bufferRelayerKey",
      description:
        "public key of the aggregator account to request an update for",
      require: true,
    },
  ];

  async run() {
    const { args } = await this.parse(BufferRelayerUpdate);

    const [bufferRelayerAccount, bufferRelayer] =
      await BufferRelayerAccount.load(this.program, args.bufferRelayerKey);

    const [payerTokenWallet, wrapTxn] =
      await this.program.mint.getOrCreateWrappedUserInstructions(
        this.payer,
        { fundUpTo: 0.0002 } // TODO: Calculate the real value
      );

    const updateTxn = await bufferRelayerAccount.openRoundInstructions(
      this.payer,
      {
        tokenWallet: payerTokenWallet,
        bufferRelayer,
      }
    );

    const txn = wrapTxn ? wrapTxn.combine(updateTxn) : updateTxn;

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(
      `${chalk.green(`${CHECK_ICON}Aggregator update request sent to oracles`)}`
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

    super.catch(error, "failed to open a new aggregator update round");
  }
}
