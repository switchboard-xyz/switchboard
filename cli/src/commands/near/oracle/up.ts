import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import {
  OracleAccount,
  SwitchboardDecimal,
  toBase58,
} from "@switchboard-xyz/near.js";
import { DockerOracle } from "../../../providers/docker";
import path from "path";
import { sleep } from "../../../utils";

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
      default: "dev-v2-RC_01_05_23_05_52",
    }),
    arm: Flags.boolean({
      description: "apple silicon needs to use a docker image for linux/arm64",
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress docker logging",
    }),
  };

  static args = [
    {
      name: "oracleAddress",
      description: "address of the oracle in Uint8 or Base58 encoding",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(NearDockerOracle);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleAddress
    );

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle(
      {
        chain: "near",
        network: flags.networkId as "testnet" | "localnet",
        rpcUrl: this.rpcUrl,
        oracleKey: toBase58(oracleAccount.address),
        secretPath: path.join(
          flags.nearCredentialsDir,
          flags.networkId,
          flags.accountName + ".json"
        ),
        nearNamedAccount: flags.accountName,
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    ).start();

    await sleep(120000);
  }

  async catch(error) {
    super.catch(error, "Failed to start near oracle");
  }
}
