import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { sleep } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import { toBase58 } from "@switchboard-xyz/near.js";
import { IOracleConfig, NodeOracle } from "@switchboard-xyz/oracle";
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

    const baseConfig: IOracleConfig = {
      chain: "near",
      network: flags.networkId as "testnet" | "localnet",
      rpcUrl: this.rpcUrl,
      oracleKey: toBase58(oracleAccount.address),
      secretPath: path.join(
        flags.nearCredentialsDir,
        flags.networkId,
        flags.accountName + ".json"
      ),
      envVariables: {
        NEAR_NAMED_ACCOUNT: flags.accountName,
      },
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

    await sleep(120_000);
    oracle.stop();
  }

  async catch(error: any) {
    super.catch(error, "Failed to start near oracle");
  }
}
