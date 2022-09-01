import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  CrankAccount,
  EscrowAccount,
  QueueAccount,
} from "@switchboard-xyz/near.js";

export default class CrankPop extends BaseCommand {
  static description = "pop the crank";

  static aliases = ["near:pop:crank"];

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "crankAddress",
      description: "address of the crank in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CrankPop);

    const crankAccount = new CrankAccount({
      connection: this.near.connection,
      address: this.parseAddress(args.crankAddress),
    });
    const crankData = await crankAccount.loadData();

    const queueAccount = new QueueAccount({
      connection: this.near.connection,
      address: crankData.queue,
    });
    const queueData = await queueAccount.loadData();

    const [escrowAccount, escrowData] = await this.loadEscrow(queueData.mint);

    const popTxn = await crankAccount.pop(this.signer, {
      rewardRecipient: escrowAccount.address,
    });

    if (flags.json) {
      return {
        signature: popTxn.transaction.hash,
        url: this.toUrl(popTxn.transaction.hash),
        ...popTxn,
      };
    }

    this.logger.info(JSON.stringify(popTxn, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to pop near crank");
  }
}
