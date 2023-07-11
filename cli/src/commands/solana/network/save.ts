import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { CHECK_ICON } from "../../../utils/index";

import { Flags } from "@oclif/core";
import type { Keypair } from "@solana/web3.js";
import { QueueAccount, SwitchboardNetwork } from "@switchboard-xyz/solana.js";
import chalk from "chalk";
import fs from "fs";

export default class NetworkSave extends BaseCommand {
  static enableJsonFlag = true;

  static description = "save an existing switchboard network";

  static flags = {
    ...BaseCommand.flags,
    queueKey: Flags.string({
      description: "queue account to load",
      required: true,
    }),
    outputFile: Flags.string({
      description: "outputFile to save accounts in JSON format",
      required: true,
    }),
    force: Flags.boolean({
      description: "",
    }),
  };

  async run(): Promise<any> {
    const { flags } = await this.parse(NetworkSave);

    const outputFile = this.normalizePath(flags.outputFile);
    if (fs.existsSync(outputFile) && !flags.force) {
      throw new Error(`Output file already exists, use --force to overwrite`);
    }

    const [queueAccount, queue] = await QueueAccount.load(
      this.program,
      flags.queueKey
    );

    const network = await SwitchboardNetwork.fromQueue(queueAccount);

    fs.writeFileSync(
      outputFile,
      JSON.stringify(network.toJSON(), this.jsonReplacers, 2)
    );

    if (flags.json) {
      return network.toJSON();
    }

    this.logger.info(
      `${chalk.green(
        CHECK_ICON,
        "successfully saved SwitchboardNetwork accounts"
      )}`
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to create a switchboard network");
  }
}

const keypairToString = (keypair: Keypair): string => `[${keypair.secretKey}]`;
