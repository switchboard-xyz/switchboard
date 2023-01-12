/* eslint-disable unicorn/prevent-abbreviations */

import * as dotenv from "dotenv";
import * as anchor from "@project-serum/anchor";
import { Flags } from "@oclif/core";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { ChildProcess, exec, spawn } from "child_process";
import { DockerOracle } from "../../../providers/docker";
import {
  getIdlAddress,
  getProgramDataAddress,
} from "@switchboard-xyz/solana.js";
import { sleep } from "@switchboard-xyz/common";
import { CliBaseCommand as BaseCommand } from "../../../BaseCommand";
import path from "path";
import fs from "fs";
import { normalizeFilePath } from "../../../utils/io";
import { SBV2_DEVNET_PID } from "@switchboard-xyz/solana.js";

function getRequiredVariable(key: string): PublicKey {
  if (!(key in process.env)) {
    throw new Error(`Failed to find ${key} in switchboard.env`);
  }

  return new PublicKey(process.env[key]);
}

export default class AnchorTest extends BaseCommand {
  static description = "run anchor test and a switchboard oracle in parallel";

  anchorChildProcess?: ChildProcess = undefined;

  localValidatorProcess?: ChildProcess = undefined;

  docker?: DockerOracle = undefined;

  timestamp: number = Date.now();

  detach = false;

  async endProcesses() {
    if (this.localValidatorProcess && !this.detach) {
      try {
        this.localValidatorProcess.kill();
      } catch {}
    }

    if (this.anchorChildProcess) {
      try {
        this.anchorChildProcess.kill();
      } catch {}
    }

    if (this.docker) {
      try {
        this.docker.stop();
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
      required: true,
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
    oracleDelay: Flags.integer({
      description:
        "the number of milliseconds after starting the validator to start the Switchboard oracle",
      default: 5000,
    }),
    delay: Flags.integer({
      description:
        "the number of milliseconds after starting the Switchboard oracle to start running the Anchor test suite",
      default: 30000,
    }),
    detach: Flags.boolean({
      description: "keep the localnet rpc running",
    }),
  };

  async run() {
    const { flags } = await this.parse(AnchorTest);

    this.detach = flags.detach;

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

    // TODO: Read Anchor.toml and get additional accounts to clone

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

    let isFinished = false;

    this.docker = new DockerOracle(
      {
        chain: "solana",
        network: flags.cluster as "localnet" | "devnet",
        rpcUrl:
          flags.cluster === "localnet"
            ? "http://host.docker.internal:8899"
            : flags.rpcUrl ?? clusterApiUrl("devnet"),
        oracleKey: oracle.toBase58(),
        secretPath: normalizeFilePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    );

    this.logger.info(`Starting local validator`);
    // lets start local validator with account set cloned
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
      }
    );

    await sleep(Math.max(2500, flags.oracleDelay));

    this.logger.info(`Starting oracle`);

    this.docker.start();

    // TODO: Read logs to determine when oracle is ready
    await sleep(Math.max(15000, flags.delay));

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

    let timeout = Math.max(flags.timeout, 30);
    while (timeout > 0) {
      if (isFinished) {
        break;
      }
      await sleep(1000);
      timeout--;
    }

    await this.endProcesses();
  }

  async catch(error) {
    await this.endProcesses();
    super.catch(error, "Failed to create localnet test environment");
  }
}
