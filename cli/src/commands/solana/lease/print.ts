import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { LeaseAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

export default class LeasePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a lease account";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = {
    leaseKey: Args.string({
      description: "public key of the lease account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(LeasePrint);

    const leaseAccount = new LeaseAccount(
      this.program,
      new PublicKey(args.leaseKey)
    );
    const lease = await leaseAccount.loadData();
    const balance = await leaseAccount.fetchBalance(lease.escrow);

    if (flags.json) {
      return this.normalizeAccountData(leaseAccount.publicKey, {
        ...lease.toJSON(),
        balance,
      });
    }

    this.prettyPrintLease(lease, leaseAccount.publicKey, balance);
  }

  async catch(error) {
    super.catch(error, "failed to print lease");
  }
}
