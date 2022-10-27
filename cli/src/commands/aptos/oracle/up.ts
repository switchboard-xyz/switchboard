import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import {
  OracleAccount,
  SwitchboardDecimal,
  toBase58,
} from "@switchboard-xyz/near.js";
import { DockerOracle } from "../../../providers/docker";
import path from "path";
import { sleep } from "../../../utils";

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
      default: "dev-v2-10-18-22",
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
      name: "oracleHexString",
      description: "HexString address of the oracle",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(AptosDockerOracle);

    const [oracleAccount, oracleData] = await this.loadOracle(
      args.oracleHexString
    );

    // TODO: Add mounts for AWS creds
    const docker = new DockerOracle(
      {
        chain: "aptos",
        network: flags.networkId as "testnet" | "devnet",
        rpcUrl: this.rpcUrl,
        oracleKey: oracleAccount.address.toString(),
        secretPath: this.normalizePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    ).start();

    await sleep(120000);
  }

  async catch(error) {
    super.catch(error, "Failed to start aptos oracle");
  }
}
