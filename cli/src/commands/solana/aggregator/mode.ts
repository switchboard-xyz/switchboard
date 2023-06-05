import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

import { Args, Flags } from "@oclif/core";
import { AggregatorAccount, types } from "@switchboard-xyz/solana.js";

export default class AggregatorMode extends BaseCommand {
  static enableJsonFlag = true;

  static description = "set an aggregators resolution mode config";

  // static examples = ["$ sbv2 solana:aggregator:add:job"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the aggregator and required to make config changes",
    }),
    slidingWindow: Flags.boolean({
      description: "enable sliding window mode",
      exclusive: ["roundResolution"],
      exactlyOne: ["slidingWindow", "roundResolution"],
    }),
    roundResolution: Flags.boolean({
      description: "enable sliding window mode",
      exclusive: ["slidingWindow"],
      exactlyOne: ["slidingWindow", "roundResolution"],
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorMode);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregatorData.authority
    );

    let mode: types.AggregatorResolutionModeKind;
    if (flags.slidingWindow) {
      mode = new types.AggregatorResolutionMode.ModeSlidingResolution();
    } else if (flags.roundResolution) {
      mode = new types.AggregatorResolutionMode.ModeRoundResolution();
    } else {
      throw new Error(`need to provide --slidingWindow or --roundResolution`);
    }

    const setResolutionModeTxn = aggregatorAccount.setSlidingWindowInstruction(
      this.payer,
      {
        authority,
        mode: mode,
      }
    );

    const signature = await this.signAndSend(setResolutionModeTxn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    if (flags.json) {
      const accounts = await aggregatorAccount.toAccountsJSON();
      return this.normalizeAccountData(aggregatorAccount.publicKey, accounts);
    }

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to set an aggregator's resolution mode");
  }
}
