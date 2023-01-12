import { Flags } from "@oclif/core";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { SwitchboardTestContext } from "@switchboard-xyz/solana.js";
import { CHECK_ICON } from "../../../utils/icons";
import { PublicKey } from "@solana/web3.js";

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

    if (
      !testEnvironment.oracle ||
      testEnvironment.oracle.equals(PublicKey.default)
    ) {
      throw new Error(`Failed to create an oracle`);
    }

    this.logger.info("");
    testEnvironment.writeAll(outputDir);

    fs.writeFileSync(
      path.join(outputDir, "README.md"),
      `# Switchboard Localnet Instructions
  
The outputted files will help you copy your newly created Switchboard devnet environment to localnet to assist with any testing.

## Quick Method

This command will parse the switchboardDir, read the env file, then spin up a local validator and oracle. It will then call \`anchor test --skip-local-validator\` and close the validator and oracle upon completion.

\`\`\`bash
sbv2 solana anchor test --keypair "${
        testEnvironment.payerKeypairPath
      }" --switchboardDir "${outputDir}"
\`\`\`

## Using Anchor TOML

Copy the contents of \`${path
        .join(outputDir, "Anchor.switchboard.toml")
        .replace(
          process.cwd(),
          "."
        )}\` into your \`Anchor.toml\` file. Then start your tests

\`\`\`bash
anchor test
\`\`\`

## Multiple Shells

This method may be useful if you want to leave your local validator and oracle running between tests.

In shell #1, start the local validator

\`\`\`bash
${path.join(outputDir, "start-local-validator.sh")}
\`\`\`

In shell #2, start the oracle

\`\`\`bash
SBV2_ORACLE_VERSION=dev-v2-RC_01_05_23_03_24 ${path.join(
        outputDir,
        "start-oracle.sh"
      )}
\`\`\`

Then in another shell start your test suite (your command may be different)

\`\`\`bash
anchor test --skip-local-validator
\`\`\`

`
    );

    this.logger.info(
      `${chalk.green(CHECK_ICON, "README File saved to:")} ${path
        .join(outputDir, "README.md")
        .replace(process.cwd(), ".")}`
    );
    this.logger.info(
      `${chalk.green(CHECK_ICON, "Env File saved to:")} ${path
        .join(outputDir, "switchboard.env")
        .replace(process.cwd(), ".")}`
    );
    this.logger.info(
      `${chalk.green(CHECK_ICON, "Docker-Compose saved to:")} ${path
        .join(outputDir, "docker-compose.switchboard.yml")
        .replace(process.cwd(), ".")}`
    );
    this.logger.info(
      `${chalk.green(CHECK_ICON, "Anchor.toml saved to:")} ${path
        .join(outputDir, "Anchor.switchboard.toml")
        .replace(process.cwd(), ".")}`
    );
    this.logger.info(
      `${chalk.green(CHECK_ICON, "Bash script saved to:")} ${path
        .join(outputDir, "start-local-validator.sh")
        .replace(process.cwd(), ".")}`
    );
    this.logger.info(
      `${chalk.green(CHECK_ICON, "Bash script saved to:")} ${path
        .join(outputDir, "start-oracle.sh")
        .replace(process.cwd(), ".")}`
    );

    this.logger.info(
      `\nCheck out the README for instructions on spinning up a localnet Switchboard environment.`
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create localnet environment");
  }
}
