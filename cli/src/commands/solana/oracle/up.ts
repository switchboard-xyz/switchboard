import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

import { DockerOracle } from "../../../providers/docker";
import path from "path";
import { sleep } from "../../../utils";

export default class SolanaDockerOracle extends BaseCommand {
  static description = "start a solana docker oracle";

  static flags = {
    ...BaseCommand.flags,
    switchboardDir: Flags.string({
      char: "d",
      description:
        "directory with switchboard.env to load a switchboard environment",
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_11_10_22__19_19",
    }),
    arm: Flags.boolean({
      description: "apple silicon needs to use a docker image for linux/arm64",
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress docker logging",
    }),
    timeout: Flags.integer({
      char: "t",
      description: "number of seconds before ending the docker process",
      default: 120,
    }),
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the oracle in Uint8 or Base58 encoding",
      required: true,
    },
  ];

  async run() {
    const { flags, args } = await this.parse(SolanaDockerOracle);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    // TODO: Check if docker is running

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle(
      {
        chain: "solana",
        network: "devnet",
        rpcUrl: this.rpcUrl,
        oracleKey: oracleAccount.publicKey.toBase58(),
        secretPath: this.normalizePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
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
