import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana/index";

import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount } from "@switchboard-xyz/solana.js";

export default class AggregatorAuthority extends BaseCommand {
  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair that is the authority for the aggregator and required to make config changes",
    }),
    newAuthority: Flags.string({
      description: "",
      required: true,
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator ",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(AggregatorAuthority);

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );

    const authority = await this.loadAuthority(
      flags.authority,
      aggregator.authority
    );

    const txn = aggregatorAccount.setAuthorityInstruction(
      this.program.walletPubkey,
      { newAuthority: new PublicKey(flags.newAuthority), authority: authority }
    );
    const signature = await this.signAndSend(txn);

    this.logger.info(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to set aggregator authority");
  }
}
