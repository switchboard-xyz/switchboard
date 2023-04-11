import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { sleep } from "../../../utils";

import { Flags } from "@oclif/core";
import { clusterApiUrl } from "@solana/web3.js";
import { IOracleConfig, NodeOracle } from "@switchboard-xyz/oracle";
import { execSync } from "child_process";

export default class SolanaDockerOracle extends BaseCommand {
  static description = "start a solana docker oracle";

  static flags = {
    ...BaseCommand.flags,
    oracleKey: Flags.string({
      description: "public key of the oracle to start-up",
      required: true,
    }),
    releaseChannel: Flags.string({
      description: "the oracle release channel",
      default: "testnet",
      options: ["testnet", "mainnet"],
      exclusive: ["nodeImage"],
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_04_11_23_17_12",
      exclusive: ["releaseChannel"],
    }),
    timeout: Flags.integer({
      char: "t",
      description: "number of seconds before ending the docker process",
      default: 120,
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress docker logging",
    }),
  };

  async run() {
    const { flags } = await this.parse(SolanaDockerOracle);

    if (this.network === "mainnet-beta") {
      throw new Error(`This command should not be used for a mainnet oracle`);
    }

    try {
      const stdout = execSync(`docker info`, { stdio: "pipe" });
    } catch {
      this.logError(
        `You need to start the Docker daemon before running this command`
      );
      return;
    }

    const baseConfig: IOracleConfig = {
      chain: "solana",
      network: this.network,
      rpcUrl:
        flags.cluster === "localnet"
          ? "http://localhost:8899"
          : flags.rpcUrl ?? clusterApiUrl("devnet"),
      oracleKey: flags.oracleKey,
      secretPath: this.normalizePath(flags.keypair!),
      switchboardDirectory: flags.switchboardDir,
      silent: flags.silent,
    };

    const oracle = flags.nodeImage
      ? new NodeOracle({ ...baseConfig, imageTag: flags.nodeImage })
      : await NodeOracle.fromReleaseChannel({
          ...baseConfig,
          releaseChannel:
            (flags.releaseChannel as "testnet" | "mainnet") || "testnet",
        });

    for (const signal of ["SIGTERM", "SIGEXIT", "exit"]) {
      this.logger.debug(`${signal} received`);
      oracle.stop();
    }

    await oracle.startAndAwait(60);

    await sleep(flags.timeout * 1000);
    oracle.stop();
  }

  async catch(error: any) {
    super.catch(error, "Failed to start solana oracle");
  }
}
