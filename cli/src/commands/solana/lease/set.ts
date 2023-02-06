import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { AggregatorAccount, QueueAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana/index";

export default class AggregatorLeaseSet extends BaseCommand {
  static description = "set a lease's withdraw authority";

  static aliases = ["solana:aggregator:lease:set"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate keypair delegated as the authority for managing the lease account",
    }),
    queuePubkey: Flags.string({
      description:
        "override the aggregators current queue. useful for withdrawing from a lease after moving to a new queue",
    }),
    newAuthority: Flags.string({
      description:
        "new lease withdraw authority. if not set, defaults to the aggregator authority",
    }),
  };

  static args = {
    aggregatorKey: Args.string({
      description: "public key of the aggregator account",
      required: true,
    }),
  };

  static examples = [
    "$ sbv2 solana:lease:set GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR --keypair ../payer-keypair.json",
  ];

  async run() {
    const { args, flags } = await this.parse(AggregatorLeaseSet);

    // load aggregator & related accounts
    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await QueueAccount.load(
      this.program,
      flags.queuePubkey ?? aggregator.queuePubkey.toBase58()
    );
    const { leaseAccount } = aggregatorAccount.getAccounts(
      queueAccount,
      queueData.authority
    );
    const leaseData = await leaseAccount.loadData().catch(() => {
      throw new Error(`Failed to load lease account. Has it been created yet?`);
    });

    // verify authority
    const authority = await this.loadAuthority(
      flags.authority,
      leaseData.withdrawAuthority
    );

    // console.log(`Old Authority: ${leaseData.withdrawAuthority}`);
    // console.log(
    //   `New Authority: ${
    //     flags.newAuthority
    //       ? new PublicKey(flags.newAuthority)
    //       : aggregator.authority
    //   }`
    // );

    // this.exit(1);

    const txn = leaseAccount.setAuthorityInstruction(
      this.program.walletPubkey,
      {
        newAuthority: flags.newAuthority
          ? new PublicKey(flags.newAuthority)
          : aggregator.authority,
        withdrawAuthority: authority,
      }
    );

    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.log(this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "failed to set aggregator lease withdraw authority");
  }
}
