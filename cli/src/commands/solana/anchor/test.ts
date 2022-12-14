/* eslint-disable unicorn/prevent-abbreviations */

import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { ChildProcess, exec, spawn } from "child_process";
import { DockerOracle } from "../../../providers/docker";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { SwitchboardTestContext } from "@switchboard-xyz/solana.js/test";
import { sleep } from "@switchboard-xyz/common";
import { isBase58 } from "@switchboard-xyz/near.js";

export default class AnchorTest extends BaseCommand {
  static description = "run anchor test and a switchboard oracle in parallel";

  anchorChildProcess?: ChildProcess;

  timestamp: number = Date.now();

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
    cluster: Flags.string({
      description: "cluster",
      default: "localnet",
      options: ["localnet", "devnet"],
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
    const { flags } = await this.parse(AnchorTest);

    let oraclePubkey: PublicKey;
    if (flags.oracleKey) {
      oraclePubkey = new PublicKey(flags.oracleKey);
    } else {
      const switchboard = await SwitchboardTestContext.loadFromEnv(
        this.program.provider as any,
        flags.switchboardDir || undefined
      );
      if (process.env.ORACLE && isBase58(process.env.ORACLE)) {
        oraclePubkey = new PublicKey(process.env.ORACLE);
      }
    }
    if (!oraclePubkey) {
      throw new Error(
        `Failed to load oracle pubkey, try providing the --oracleKey flag`
      );
    }

    let isFinished = false;

    const docker = new DockerOracle(
      {
        chain: "solana",
        network: flags.cluster as "localnet" | "devnet",
        rpcUrl:
          flags.cluster === "localnet"
            ? "http://host.docker.internal:8899"
            : this.rpcUrl,
        oracleKey: oraclePubkey.toBase58(),
        secretPath: this.normalizePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    );

    // let isReady = false;
    // let retryCount = 30;
    // while (retryCount > 0) {
    //   if (docker.ready) {
    //     isReady = true;
    //     break;
    //   }
    //   await sleep(1 * 1000);
    //   --retryCount;
    // }
    // if (!isReady) {
    //   throw new Error(`Docker oracle failed to initialize in 30seconds`);
    // }

    this.anchorChildProcess = spawn("anchor", ["test"], {
      shell: true,
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
    });

    this.anchorChildProcess.on("message", (data) => {
      if (data.toString().includes("✨  Done")) {
        docker.stop();
        isFinished = true;
        process.exit(0);
      }
    });

    this.anchorChildProcess.on("close", (code) => {
      // console.log(`anchor test process closing ...`);
      docker.stop();
      isFinished = true;
      process.exit(0);
    });

    docker.start();

    await sleep(flags.timeout * 1000);

    try {
      this.anchorChildProcess.kill();
      docker.stop();
    } catch {}
  }

  async catch(error) {
    super.catch(error, "Failed to create localnet test environment");
  }
}
