import { Args, Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { QueueAccount } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON } from "../../../utils";

export default class OracleCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new oracle account for a given queue";

  static examples = [
    "$ sbv2 solana:oracle:create F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy --name oracle-1 --stakeAmount 1",
  ];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      char: "n",
      description: "name of the oracle for easier identification",
      default: "",
    }),
    authority: Flags.string({
      char: "a",
      description:
        "keypair to delegate authority to for managing the oracle account",
    }),
    enable: Flags.boolean({
      description: "enable oracle heartbeat permissions",
    }),
    queueAuthority: Flags.string({
      description: "alternative keypair to use for queue authority",
    }),
    stakeAmount: Flags.string({
      required: false,
      description: "token amount to load into the oracle's staking wallet.",
    }),
  };

  static args = {
    queueKey: Args.string({
      description: "public key of the oracle queue account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(OracleCreate);

    const authority = await this.loadAuthority(flags.authority);

    const stakeAmount = Number(flags.stakeAmount);
    if (stakeAmount < 0) {
      throw new Error("amount to stake must be greater than 0");
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      args.queueKey
    );

    let queueAuthority: Keypair | undefined;
    if (flags.queueAuthority) {
      queueAuthority = await this.loadAuthority(
        flags.queueAuthority,
        queue.authority
      );
    }

    const [oracleAccount, txns] = await queueAccount.createOracleInstructions(
      this.payer,
      {
        name: flags.name,
        metadata: flags.metadata,
        authority: authority,
        stakeAmount: stakeAmount,
        enable: flags.enable ?? false,
        queueAuthority: queueAuthority,
      }
    );
    const signatures = await this.signAndSendAll(txns);

    if (flags.silent) {
      this.logger.info(signatures.join("\n"));
      return;
    }

    if (flags.json) {
      const accounts = await oracleAccount.toAccountsJSON();
      return this.normalizeAccountData(oracleAccount.publicKey, accounts);
    }

    this.logger.log(
      `${chalk.green(
        `${CHECK_ICON}Oracle Account created successfully:`,
        oracleAccount.publicKey.toBase58()
      )}`
    );

    if (signatures.length === 1) {
      this.logger.info(this.toUrl(signatures[0]));
    } else {
      for (const [index, signature] of signatures.entries())
        this.logger.info(`Txn #${index}: ${this.toUrl(signature)}`);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to create an oracle account");
  }
}
