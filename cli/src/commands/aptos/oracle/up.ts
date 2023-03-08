import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { sleep } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { DockerOracle } from "@switchboard-xyz/oracle";

export default class AptosDockerOracle extends BaseCommand {
  static description = "start an aptos docker oracle";

  static flags = {
    ...BaseCommand.flags,
    switchboardDir: Flags.string({
      char: "d",
      description:
        "directory with switchboard.env to load a switchboard environment",
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_02_24_23_18_43",
    }),
    arm: Flags.boolean({
      description: "apple silicon needs to use a docker image for linux/arm64",
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress docker logging",
    }),
  };

  static args = {
    oracleHexString: Args.string({
      description: "HexString address of the oracle",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(AptosDockerOracle);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleHexString
    );

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle({
      chain: "aptos",
      network: flags.networkId as "testnet" | "devnet",
      rpcUrl: this.rpcUrl,
      oracleKey: oracleAccount.address.toString(),
      secretPath: this.normalizePath(flags.keypair!),
      arch: flags.arm ? "linux/arm64" : "linux/amd64",
      envVariables: {
        PROGRAM_ID: this.programId.toString(),
      },
      imageTag: flags.nodeImage,
      switchboardDirectory: flags.switchboardDir,
      silent: flags.silent,
    });
    docker.start();

    await sleep(120_000);
  }

  async catch(error: any) {
    super.catch(error, "Failed to start aptos oracle");
  }
}
