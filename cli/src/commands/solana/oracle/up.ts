import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { DockerOracle } from "@switchboard-xyz/common";
import { sleep } from "../../../utils";
import { execSync } from "child_process";
import { clusterApiUrl } from "@solana/web3.js";

export default class SolanaDockerOracle extends BaseCommand {
  static description = "start a solana docker oracle";

  static flags = {
    ...BaseCommand.flags,
    oracleKey: Flags.string({
      description: "public key of the oracle to start-up",
      required: true,
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_01_17_23_16_22",
    }),
    arm: Flags.boolean({
      description: "apple silicon needs to use a docker image for linux/arm64",
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

    const docker = new DockerOracle(
      {
        chain: "solana",
        network: this.network,
        rpcUrl:
          flags.cluster === "localnet"
            ? "http://host.docker.internal:8899"
            : flags.rpcUrl ?? clusterApiUrl("devnet"),
        oracleKey: flags.oracleKey,
        secretPath: this.normalizePath(flags.keypair),
        arch: flags.arm ? "linux/arm64" : "linux/amd64",
      },
      flags.nodeImage,
      flags.switchboardDir,
      flags.silent
    );

    docker.start();
    await sleep(flags.timeout * 1000);
    docker.stop();
  }

  async catch(error) {
    super.catch(error, "Failed to start solana oracle");
  }
}
