import { Flags } from "@oclif/core";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class CrankCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new crank account";

  // static examples = [
  //   "$ sbv2 solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1",
  // ];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the crank for easier identification",
      default: "",
    }),
    metadata: Flags.string({
      description: "metadata of the crank for easier identification",
      default: "",
    }),
    size: Flags.integer({
      char: "s",
      required: true,
      description: "maximum number of rows a crank can support",
    }),
  };

  static args = [
    {
      name: "queueKey",
      description: "public key of the oracle queue to create a crank for",
      required: true,
    },
  ];

  async run() {
    const { args, flags } = await this.parse(CrankCreate);

    if (flags.size <= 0) {
      throw new Error(`--size must be greater than 0`);
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );

    const [crankAccount, txn] = await queueAccount.createCrankInstructions(
      this.payer,
      {
        name: flags.name,
        metadata: flags.metadata,
        maxRows: flags.size,
      }
    );
    const signature = await this.signAndSend(txn);

    if (flags.silent) {
      this.logger.info(signature);
      return;
    }

    if (flags.json) {
      const accounts = await crankAccount.toAccountsJSON();
      return this.normalizeAccountData(crankAccount.publicKey, accounts);
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Crank created successfully`,
        crankAccount.publicKey.toBase58()
      )}`
    );

    this.logger.info(this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "failed to create a crank account");
  }
}
