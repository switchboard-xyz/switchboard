import { PublicKey } from "@solana/web3.js";
import { PermissionAccount } from "@switchboard-xyz/solana.js";
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

    const [aggregatorAccount, aggregatorData] = await this.loadAggregator(
      args.aggregatorKey
    );
    const [queueAccount, queueData] = await this.loadQueue(
      aggregatorData.queuePubkey.toBase58()
    );

    Promise.resolve().then(() => {});
    // Check if permission account already exists
    try {
      const [permissionAccount] = PermissionAccount.fromSeed(
        this.program,
        queueData.authority,
        queueAccount.publicKey,
        aggregatorAccount.publicKey
      );
      // If `loadData` completes without throwing, the account already exists.
      await permissionAccount.loadData();
      throw new Error(
        `Permission Account already exists: ${permissionAccount.publicKey}`
      );
    } catch {
      const [permissionAccount, signature] = await PermissionAccount.create(
        this.program,
        {
          granter: queueAccount.publicKey,
          grantee: aggregatorAccount.publicKey,
          authority: queueData.authority,
        }
      );

      if (this.silent) {
        console.log(this.toUrl(signature));
      } else {
        this.logger.log(this.toUrl(signature));
        this.logger.log(
          `${chalk.green(
            `${CHECK_ICON}Job succesfully removed from aggregator account\r\n`
          )}`
        );
      }
    }
  }

  async catch(error) {
    super.catch(error, "failed to create permission account for aggregator");
  }
}
