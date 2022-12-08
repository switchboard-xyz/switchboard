import { Flags } from "@oclif/core";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { SwitchboardTestContext } from "@switchboard-xyz/solana.js/test";

export default class LocalnetEnvironment extends BaseCommand {
  static description = "create a localnet switchboard environment";

  static flags = {
    ...BaseCommand.flags,
    force: Flags.boolean({
      description: "overwrite output file if existing",
    }),
    outputDir: Flags.string({
      char: "o",
      description: "output directory for scripts",
      default: "./.switchboard",
    }),
  };

  async run() {
    const { flags } = await this.parse(LocalnetEnvironment);

    const outputDir = this.normalizeDirPath(flags.outputDir);

    if (!flags.force) {
      const files = [
        "switchboard.env",
        "switchboard.json",
        "start-local-validator.sh",
        "start-oracle.sh",
        "Anchor.switchboard.toml",
        "docker-compose.switchboard.yml",
      ];
      for (const file of files) {
        if (fs.existsSync(path.join(outputDir, file))) {
          throw new Error(`${file} already exists, use --force to overwrite`);
        }
      }
    }

    const testEnvironment = await SwitchboardTestContext.createEnvironment(
      this.normalizePath((flags as any).keypair),
      this.programId
    );

    testEnvironment.writeAll(outputDir);

    this.logger.info(
      chalk.blue(
        `\nYou may also copy the accounts from Anchor.switchboard.toml into your projects Anchor.toml and run the following command to create an oracle and run 'anchor test' with a local validator running:`
      )
    );

    this.logger.info(
      chalk.yellow(
        `\tsbv2 solana anchor test \\
  --keypair \"${testEnvironment.payerKeypairPath}\" \\
  --oracleKey ${testEnvironment.oracle} \\
  --switchboardDir \"${outputDir}\"`
      )
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create localnet environment");
  }
}
