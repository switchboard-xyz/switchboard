import {
  AggregatorAccount,
  PermissionAccount,
  QueueAccount,
} from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../../solana";
import { CHECK_ICON } from "../../../../utils";

export default class AggregatorPermissionCreate extends BaseCommand {
  static description = "create a permission account for an aggregator";

  static flags = {
    ...BaseCommand.flags,
  };

  static args = [
    {
      name: "aggregatorKey",
      description: "public key of the aggregator account",
      required: true,
    },
  ];

  async run() {
    const { args } = await this.parse(AggregatorPermissionCreate);

    const [aggregatorAccount, aggregatorData] = await AggregatorAccount.load(
      this.program,
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await QueueAccount.load(
      this.program,
      aggregatorData.queuePubkey.toBase58()
    );

    const [permissionAcct] = PermissionAccount.fromSeed(
      this.program,
      queueData.authority,
      queueAccount.publicKey,
      aggregatorAccount.publicKey
    );

    const permissionAccountInfo = await this.program.connection.getAccountInfo(
      permissionAcct.publicKey
    );

    // check if permission account already exists
    if (permissionAccountInfo !== null) {
      this.logger.info(
        `${chalk.yellow("Warning:")} Permission Account already exists: ${
          permissionAcct.publicKey
        }`
      );
      return;
    }

    const [permissionAccount, txn] = PermissionAccount.createInstruction(
      this.program,
      this.payer,
      {
        granter: queueAccount.publicKey,
        grantee: aggregatorAccount.publicKey,
        authority: queueData.authority,
      }
    );
    const signature = await this.signAndSend(txn);

    if (this.silent) {
      this.logger.info(signature);
      return;
    }

    this.logger.info(
      `${chalk.green(
        `${CHECK_ICON}Permission Account created successfully:`,
        permissionAccount.publicKey.toBase58()
      )}`
    );

    this.logger.log(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to create permission account for aggregator");
  }
}
