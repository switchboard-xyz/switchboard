import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { sleep } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { toBase58 } from "@switchboard-xyz/near.js";
import { DockerOracle } from "@switchboard-xyz/oracle";
import path from "path";

export default class NearDockerOracle extends BaseCommand {
  static description = "start a near docker oracle";

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
    oracleAddress: Args.string({
      description: "address of the oracle in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(NearDockerOracle);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle({
      chain: "near",
      network: flags.networkId as "testnet" | "localnet",
      rpcUrl: this.rpcUrl,
      oracleKey: toBase58(oracleAccount.address),
      secretPath: path.join(
        flags.nearCredentialsDir,
        flags.networkId,
        flags.accountName + ".json"
      ),
      arch: flags.arm ? "linux/arm64" : "linux/amd64",
      envVariables: {
        NEAR_NAMED_ACCOUNT: flags.accountName,
      },
      imageTag: flags.nodeImage,
      switchboardDirectory: flags.switchboardDir,
      silent: flags.silent,
    });
    docker.start();

    await sleep(120_000);
  }

  async catch(error: any) {
    super.catch(error, "Failed to start near oracle");
  }
}
