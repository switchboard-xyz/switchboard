import * as dotenv from "dotenv";
import * as anchor from "@project-serum/anchor";
import { Flags } from "@oclif/core";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { ChildProcess, execSync, spawn } from "child_process";
import { DockerOracle } from "../../../providers/docker";
import {
  getIdlAddress,
  getProgramDataAddress,
} from "@switchboard-xyz/solana.js";
import { sleep } from "@switchboard-xyz/common";
import { CliBaseCommand as BaseCommand } from "../../../BaseCommand";
import path from "path";
import fs from "fs";
import os from "os";
import { SBV2_DEVNET_PID } from "@switchboard-xyz/solana.js";
import toml from "toml";
import { loadKeypairFs } from "../../../utils/keypair";

function getRequiredVariable(key: string): PublicKey {
  if (!(key in process.env)) {
    throw new Error(`Failed to find ${key} in switchboard.env`);
  }

  return new PublicKey(process.env[key]);
}

export async function waitForSolanaValidator(
  rpcUrl = "http://localhost:8899",
  maxRetries: number = 30
): Promise<boolean> {
  const localnetConnection = new Connection(
    rpcUrl === "http://host.docker.internal:8899"
      ? "http://localhost:8899"
      : rpcUrl
  );
  let numRetries = maxRetries * 2;
  while (numRetries) {
    try {
      const blockHeight = await localnetConnection.getBlockHeight();
      if (blockHeight > 0) {
        return true;
      }
    } catch {}
    --numRetries;
    await sleep(500);
  }

  throw new Error(`Failed to start Solana validator in ${maxRetries} seconds`);
}

export default class AnchorTest extends BaseCommand {
  static description = "run anchor test and a switchboard oracle in parallel";

  static aliases = ["anchor:test"];

  anchorChildProcess?: ChildProcess = undefined;

  localValidatorProcess?: ChildProcess = undefined;

  docker?: DockerOracle = undefined;

  timestamp: number = Date.now();

  detach = false;

  async endProcesses() {
    if (this.localValidatorProcess && !this.detach) {
      try {
        const isKilled = this.localValidatorProcess.kill();
        if (isKilled) {
          this.log(`Solana localnet validator process killed`);
          this.localValidatorProcess = undefined;
        }
      } catch {}
    }

    if (this.anchorChildProcess) {
      try {
        const isKilled = this.anchorChildProcess.kill();
        if (isKilled) {
          this.log(`Anchor test process killed`);
          this.localValidatorProcess = undefined;
        }
      } catch {}
    }

    if (this.docker) {
      try {
        this.docker.stop();
        this.log(`Switchboard docker oracle killed`);
        this.docker = undefined;
      } catch {}
    }
  }

  static flags = {
    ...BaseCommand.flags,
    mainnetBeta: Flags.boolean({
      description: "WARNING: use mainnet-beta solana cluster",
      required: false,
      exclusive: ["cluster"],
      default: false,
    }),
    cluster: Flags.string({
      description: "cluster",
      default: "localnet",
      options: ["localnet", "devnet"],
    }),
    rpcUrl: Flags.string({
      char: "u",
      description: "alternate RPC url",
    }),
    mainnetRpcUrl: Flags.string({
      description: "Solana mainnet RPC URL to use for the oracle task runner",
      default: clusterApiUrl("mainnet-beta"),
    }),
    programId: Flags.string({
      description: "alternative Switchboard program ID to interact with",
    }),
    switchboardDir: Flags.string({
      char: "d",
      description:
        "directory with switchboard.env to load a switchboard environment",
    }),
    oracleKey: Flags.string({
      description: "public key of the oracle to start-up",
    }),
    keypair: Flags.string({
      char: "k",
      required: false,
      description:
        "keypair that will pay for onchain transactions. defaults to new account authority if no alternate authority provided",
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_01_05_23_03_24",
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
    detach: Flags.boolean({
      description: "keep the localnet rpc running",
    }),
  };

  async run() {
    const { flags } = await this.parse(AnchorTest);

    this.detach = flags.detach; // only set this after validator has started

    const switchboardDir = this.normalizeDirPath(
      flags.switchboardDir ?? ".switchboard"
    );
    if (!fs.existsSync(switchboardDir)) {
      throw new Error(`No --switchboardDir found`);
    }

    const envPath = path.join(switchboardDir, "switchboard.env");
    if (!fs.existsSync(envPath)) {
      throw new Error(`No switchboard.env file found`);
    }

    dotenv.config({
      path: envPath,
    });

    const anchorFile = path.join(process.cwd(), "Anchor.toml");

    // get keypair from flag or from Anchor.toml
    let keypairPath: string | undefined;
    if (flags.keypair) {
      keypairPath = this.normalizePath(flags.keypair);
    } else {
      // read anchor.toml
      if (!fs.existsSync(anchorFile)) {
        throw new Error(
          `--keypair flag not provided and failed to locate Anchor.toml`
        );
      }
      const anchorToml = toml.parse(fs.readFileSync(anchorFile, "utf-8"));
      if ("provider" in anchorToml && "wallet" in anchorToml.provider) {
        keypairPath = this.normalizePath(anchorToml.provider.wallet);
      }
    }
    if (!keypairPath) {
      throw new Error(
        `Failed to load a keypair path. Try providing the--keypair flag`
      );
    }
    const payerKeypair = loadKeypairFs(keypairPath);
    this.logProperty("payerKeypair", payerKeypair.publicKey.toBase58());

    let cluster: "localnet" | "devnet" | "mainnet-beta" = flags.cluster as any;
    if (fs.existsSync(anchorFile)) {
      const anchorToml = toml.parse(fs.readFileSync(anchorFile, "utf-8"));
      if ("provider" in anchorToml && "cluster" in anchorToml.provider) {
        if (
          anchorToml.provider.cluster === "localnet" ||
          anchorToml.provider.cluster === "devnet"
        ) {
          cluster = anchorToml.provider.cluster;
        }
      }
    }
    const rpcUrl =
      cluster === "localnet"
        ? "http://host.docker.internal:8899"
        : flags.rpcUrl ?? clusterApiUrl(cluster);

    let isFinished = false;

    ////////////////////////////////////////////////////////////
    ///// SOLANA LOCALNET VALIDATOR
    ////////////////////////////////////////////////////////////
    // gather accounts
    const programId = process.env.SWITCHBOARD_PROGRAM_ID
      ? new PublicKey(process.env.SWITCHBOARD_PROGRAM_ID)
      : SBV2_DEVNET_PID;
    const idlAddress = await getIdlAddress(programId);
    const programDataAddress = getProgramDataAddress(programId);
    const [programStateAccount] = anchor.utils.publicKey.findProgramAddressSync(
      [Buffer.from("STATE")],
      programId
    );
    const vault = getRequiredVariable("SWITCHBOARD_VAULT");
    const queue = getRequiredVariable("ORACLE_QUEUE");
    const queueAuthority = getRequiredVariable("ORACLE_QUEUE_AUTHORITY");
    const queueBuffer = getRequiredVariable("ORACLE_QUEUE_BUFFER");
    const oracle = getRequiredVariable("ORACLE");
    const oracleAuthority = getRequiredVariable("ORACLE_AUTHORITY");
    const oracleEscrow = getRequiredVariable("ORACLE_ESCROW");
    const oraclePermissions = getRequiredVariable("ORACLE_PERMISSIONS");
    if (!oracleAuthority.equals(payerKeypair.publicKey)) {
      throw new Error(
        `Provided keypair does not match the oracle authority, expected ${oracleAuthority.toBase58()}, received ${payerKeypair.publicKey.toBase58()}`
      );
    }
    const accountCloneString = [
      programId,
      idlAddress,
      programDataAddress,
      programStateAccount,
      vault,
      queue,
      queueAuthority,
      queueBuffer,
      oracle,
      oracleAuthority,
      oracleEscrow,
      oraclePermissions,
    ]
      .map((pubkey) => `--clone ${pubkey.toBase58()}`)
      .join(" ");
    try {
      if (os.platform() === "win32") {
        execSync(
          `netstat -ano | findstr :8899 | awk {'print $5'} | xargs -I {} taskkill /F /PID {} || exit 0`,
          {
            stdio: ["pipe", "pipe", "ignore"],
          }
        );
        execSync(
          `netstat -ano | findstr :9900 | awk {'print $5'} | xargs -I {} taskkill /F /PID {} || exit 0`,
          {
            stdio: ["pipe", "pipe", "ignore"],
          }
        );
      } else {
        execSync(`lsof -t -i :8899 | xargs kill -9 || exit 0`, {
          env: process.env,
          stdio: ["pipe", "pipe", "ignore"],
        });
        execSync(`lsof -t -i :9900 | xargs kill -9 || exit 0`, {
          env: process.env,
          stdio: ["pipe", "pipe", "ignore"],
        });
      }
    } catch {}
    this.logger.info(`Starting local validator`);
    this.localValidatorProcess = spawn(
      "solana-test-validator",
      [
        `-q -r --bind-address 0.0.0.0 --rpc-port 8899 --url ${clusterApiUrl(
          "devnet"
        )} ${accountCloneString}`,
      ],
      {
        shell: true,
        cwd: process.cwd(),
        env: process.env,
        stdio: "inherit",
        detached: flags.detach ?? false,
      }
    );
    await waitForSolanaValidator(rpcUrl);

    ////////////////////////////////////////////////////////////
    ///// SWITCHBOARD DOCKER ORACLE
    ////////////////////////////////////////////////////////////
    this.docker = new DockerOracle(
      {
        chain: "solana",
        network: cluster as "localnet" | "devnet",
        rpcUrl: rpcUrl,
        taskRunnerSolanaRpc: flags.mainnetRpcUrl,
        oracleKey: oracle.toBase58(),
        secretPath: keypairPath,
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    );

    this.logger.info(`Starting oracle`);
    this.docker.start();
    await this.docker.awaitReady();

    ////////////////////////////////////////////////////////////
    ///// ANCHOR TEST
    ////////////////////////////////////////////////////////////
    this.logger.info(`Starting anchor tests`);
    this.anchorChildProcess = spawn("anchor", ["test --skip-local-validator"], {
      shell: true,
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit",
    });
    this.anchorChildProcess.addListener("message", (data) => {
      if (data.toString().includes("✨  Done")) {
        isFinished = true;
        // process.exit(0);
      }
    });
    this.anchorChildProcess.addListener("close", (code) => {
      // console.log(`anchor test process closing ...`);
      isFinished = true;
      // process.exit(0);
    });

    // wait for it to finish
    let timeout = Math.max(flags.timeout, 30);
    while (timeout > 0) {
      if (isFinished) {
        break;
      }

      await sleep(1000);
      timeout--;
    }

    await this.endProcesses();
    if (this.detach && this.localValidatorProcess) {
      this.log(
        `Solana local validator process (${this.localValidatorProcess.pid}) still running`
      );
      process.exit();
    }
    return;
  }

  async catch(error) {
    await this.endProcesses();
    if (this.detach && this.localValidatorProcess) {
      this.log(
        `Solana local validator process (${this.localValidatorProcess.pid}) still running`
      );
    }
    super.catch(error, "Failed to create localnet test environment");
  }
}
