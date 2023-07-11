import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { sleep } from "../../../utils";

import { Args, Flags } from "@oclif/core";
import type { IOracleConfig } from "@switchboard-xyz/oracle";
import { NodeOracle } from "@switchboard-xyz/oracle";

export default class AptosDockerOracle extends BaseCommand {
  static description = "start an aptos docker oracle";

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

    const baseConfig: IOracleConfig = {
      chain: "aptos",
      network: flags.networkId as "testnet" | "devnet",
      rpcUrl: this.rpcUrl,
      oracleKey: oracleAccount.address.toString(),
      secretPath: this.normalizePath(flags.keypair!),
      envVariables: {
        PROGRAM_ID: this.programId.toString(),
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
    super.catch(error, "Failed to start aptos oracle");
  }
}
