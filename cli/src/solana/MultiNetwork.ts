import { Command, Flags } from "@oclif/core";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import { SwitchboardProgram } from "@switchboard-xyz/solana.js";
import * as path from "path";
import {
  FsProvider,
  LogProvider,
  ConfigProvider,
  LoggerParameters,
} from "../providers";

export interface ClusterConfigs {
  devnet: SwitchboardProgram;
  mainnet: SwitchboardProgram;
}

export abstract class SolanaMultiNetworkBaseCommand extends Command {
  static flags = {
    help: Flags.help({ char: "h" }),
    verbose: Flags.boolean({
      char: "v",
      description: "log everything",
      default: false,
    }),
  };

  public logger: LogProvider;

  public fs: FsProvider;

  public cliConfig: ConfigProvider;

  public clusters: ClusterConfigs;

  async init() {
    const { flags } = (await this.parse(this.constructor as any)) as any;
    SolanaMultiNetworkBaseCommand.flags = flags as any;

    // setup logging
    const level = flags.silent ? "error" : flags.verbose ? "debug" : "info";
    const logFilename = path.join(this.config.cacheDir, "log.txt");
    const logParameters: LoggerParameters = {
      console: {
        level,
      },
      file: {
        level: "debug",
        filename: logFilename,
      },
      silent: flags.silent,
      verbose: flags.verbose,
    };
    this.logger = new LogProvider(logParameters);

    this.fs = new FsProvider(this.config.dataDir, this.logger);

    this.cliConfig = new ConfigProvider(this.config.dataDir);

    this.clusters = {
      devnet: await SwitchboardProgram.load(
        "devnet",
        new Connection(clusterApiUrl("devnet")),
        Keypair.fromSeed(new Uint8Array(32).fill(1))
      ),
      mainnet: await SwitchboardProgram.load(
        "mainnet-beta",
        new Connection(clusterApiUrl("mainnet-beta")),
        Keypair.fromSeed(new Uint8Array(32).fill(1))
      ),
    };
  }
}
