import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

import { DockerOracle } from "../../../providers/docker";
import path from "path";
import { sleep } from "../../../utils";
import { PublicKey } from "@solana/web3.js";
import { SwitchboardTestContext } from "@switchboard-xyz/sbv2-utils";
import { AnchorProvider } from "@project-serum/anchor";

export default class SolanaDockerOracle extends BaseCommand {
  static description = "start a solana docker oracle";

  static flags = {
    ...BaseCommand.flags,
    switchboardDir: Flags.string({
      char: "d",
      description:
        "directory with switchboard.env to load a switchboard environment",
    }),
    oracleKey: Flags.string({
      description: "public key of the oracle to start-up",
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_11_10_22__19_19",
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

    let oraclePubkey: PublicKey;
    if (flags.oracleKey) {
      oraclePubkey = new PublicKey(flags.oracleKey);
    } else {
      const switchboard = await SwitchboardTestContext.loadFromEnv(
        this.program.provider as AnchorProvider,
        flags.switchboardDir || undefined
      );
      oraclePubkey = switchboard.oracle.publicKey;
    }

    // TODO: Check if docker is running

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle(
      {
        chain: "solana",
        network: "devnet",
        rpcUrl: this.rpcUrl,
        oracleKey: oraclePubkey.toBase58(),
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
