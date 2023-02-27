import * as dotenv from "dotenv";
import * as anchor from "@coral-xyz/anchor";
import { Flags } from "@oclif/core";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { ChildProcess, spawn } from "child_process";
import { DockerOracle } from "@switchboard-xyz/common";
import {
  getIdlAddress,
  getProgramDataAddress,
} from "@switchboard-xyz/solana.js";
import { sleep } from "@switchboard-xyz/common";
import { CliBaseCommand as BaseCommand } from "../../../BaseCommand";
import path from "path";
import fs from "fs";
import { SBV2_DEVNET_PID } from "@switchboard-xyz/solana.js";
import toml from "toml";
import { loadKeypairFs } from "../../../utils/keypair";
import { SolanaTestValidator } from "../../../providers/solana";

function getRequiredVariable(key: string): string {
  if (!(key in process.env)) {
    throw new Error(
      `Failed to find ${key}, try adding it to Anchor.toml or provide --switchboardDir with the value defined in switchboard.env`
    );
  }

  return process.env[key]!;

  // return new PublicKey(process.env[key]);
}

function getAnchorToml(filePath: string): AnchorToml | undefined {
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const rawToml = toml.parse(fs.readFileSync(filePath, "utf-8"));
  const anchorToml: AnchorToml = JSON.parse(JSON.stringify(rawToml));
  return anchorToml;
}

interface AnchorToml {
  workspace?: { members?: Array<string> };
  features: { seeds?: boolean; "skip-lint"?: boolean };
  programs?: { localnet?: Record<string, string> };
  registry?: { url?: string };
  provider?: { cluster?: string; wallet?: string };
  scripts?: Record<string, string>;
  test?: {
    startup_wait?: number;
    genesis?: Array<{ address?: string; program?: string }>;
    validator?: {
      url?: string;
      clone?: Array<{ address?: string }>;
      account?: Array<{ address?: string; filename?: string }>;
    };
  };
}

export default class AnchorTest extends BaseCommand {
  static description = "run anchor test and a switchboard oracle in parallel";

  static aliases = ["anchor:test"];

  anchorChildProcess?: ChildProcess = undefined;

  solanaTestValidator?: SolanaTestValidator = undefined;

  docker?: DockerOracle = undefined;

  timestamp: number = Date.now();

  detach = false;

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
      default: "dev-v2-RC_02_24_23_18_43",
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
    testValidatorArgs: Flags.string({
      description: "additional args passed to the local solana validator",
    }),
  };

  async run() {
    const { flags } = await this.parse(AnchorTest);

    let isFinished = false;
    this.detach = flags.detach; // only set this after validator has started
    let cloneUrl = clusterApiUrl("devnet");

    const switchboardDir = this.normalizeDirPath(
      flags.switchboardDir ?? ".switchboard"
    );
    if (fs.existsSync(switchboardDir)) {
      const envPath = path.join(switchboardDir, "switchboard.env");
      if (fs.existsSync(envPath)) {
        dotenv.config({
          path: envPath,
        });
      }
    }

    const oracle = flags.oracleKey
      ? flags.oracleKey
      : getRequiredVariable("ORACLE");
    const oraclePubkey = new PublicKey(oracle);

    const anchorFile = path.join(process.cwd(), "Anchor.toml");
    const anchorToml = getAnchorToml(anchorFile);

    let cluster: "localnet" | "devnet" | "mainnet-beta" = flags.cluster as any;
    if (
      anchorToml &&
      "provider" in anchorToml &&
      "cluster" in anchorToml.provider!
    ) {
      const anchorCluster = anchorToml?.provider?.cluster?.toLowerCase();
      if (anchorCluster === "localnet" || anchorCluster === "devnet") {
        cluster = anchorCluster;
      }
    }

    // get keypair from flag or from Anchor.toml
    let keypairPath: string | undefined;
    if (flags.keypair) {
      keypairPath = this.normalizePath(flags.keypair!);
    } else {
      // read anchor.toml
      if (!anchorToml) {
        throw new Error(
          `--keypair flag not provided and failed to locate Anchor.toml`
        );
      }
      if ("provider" in anchorToml && "wallet" in anchorToml.provider!) {
        keypairPath = this.normalizePath(anchorToml.provider.wallet!);
      }
    }
    if (!keypairPath) {
      throw new Error(
        `Failed to load a keypair path. Try providing the--keypair flag`
      );
    }
    const payerKeypair = loadKeypairFs(keypairPath);
    this.logProperty("payerKeypair", payerKeypair.publicKey.toBase58());

    const rpcUrl =
      cluster === "localnet"
        ? "http://host.docker.internal:8899"
        : flags.rpcUrl ?? clusterApiUrl(cluster);

    ////////////////////////////////////////////////////////////
    ///// SOLANA LOCALNET VALIDATOR
    ////////////////////////////////////////////////////////////
    if (cluster === "localnet") {
      const cloneJson: Array<string> = [];
      const cloneAccounts: Array<string> = [];
      const clonePrograms: Array<string> = [];

      if (
        anchorToml &&
        "test" in anchorToml &&
        typeof anchorToml.test === "object"
      ) {
        if (
          "genesis" in anchorToml.test &&
          Array.isArray(anchorToml.test.genesis)
        ) {
          // TODO: handle cloning programDataAddress
          for (const program of anchorToml.test.genesis) {
            if ("address" in program && "program" in program) {
              clonePrograms.push(`${program.address} ${program.program}`);
            }
          }
        }
        if (
          "validator" in anchorToml.test &&
          typeof anchorToml.test.validator === "object"
        ) {
          // get clone url
          if (
            "url" in anchorToml.test.validator &&
            typeof anchorToml.test.validator.url === "string"
          ) {
            cloneUrl = anchorToml.test.validator.url;
          }
          // clone accounts from a network
          if (
            "clone" in anchorToml.test.validator &&
            Array.isArray(anchorToml.test.validator.clone)
          ) {
            for (const account of anchorToml.test.validator.clone) {
              if ("address" in account && typeof account.address === "string") {
                cloneAccounts.push(account.address);
              }
            }
          }
          // clone accounts from a file
          if (
            "account" in anchorToml.test.validator &&
            Array.isArray(anchorToml.test.validator.account)
          ) {
            for (const account of anchorToml.test.validator.account) {
              if ("filename" in account) {
                cloneAccounts.push(account.filename!);
              }
            }
          }
        }
      }

      const programId = process.env.SWITCHBOARD_PROGRAM_ID
        ? new PublicKey(process.env.SWITCHBOARD_PROGRAM_ID)
        : SBV2_DEVNET_PID;
      const idlAddress = await getIdlAddress(programId);
      const programDataAddress = getProgramDataAddress(programId);
      const [programStateAccount] =
        anchor.utils.publicKey.findProgramAddressSync(
          [Buffer.from("STATE")],
          programId
        );
      const vault = getRequiredVariable("SWITCHBOARD_VAULT");
      const queue = getRequiredVariable("ORACLE_QUEUE");
      const queueAuthority = getRequiredVariable("ORACLE_QUEUE_AUTHORITY");
      const queueBuffer = getRequiredVariable("ORACLE_QUEUE_BUFFER");
      const oracleAuthority = getRequiredVariable("ORACLE_AUTHORITY");
      const oracleEscrow = getRequiredVariable("ORACLE_ESCROW");
      const oraclePermissions = getRequiredVariable("ORACLE_PERMISSIONS");
      if (oracleAuthority !== payerKeypair.publicKey.toBase58()) {
        throw new Error(
          `Provided keypair does not match the oracle authority, expected ${oracleAuthority}, received ${payerKeypair.publicKey.toBase58()}`
        );
      }
      cloneAccounts.push(
        programId.toBase58(),
        idlAddress.toBase58(),
        programDataAddress.toBase58(),
        programStateAccount.toBase58(),
        vault,
        queue,
        queueAuthority,
        queueBuffer,
        oracle,
        oracleAuthority,
        oracleEscrow,
        oraclePermissions
      );

      this.logger.info(`Starting local validator`);
      this.solanaTestValidator = SolanaTestValidator.init({
        detached: this.detach,
        quiet: true,
        cloneUrl: cloneUrl,
        cloneAccounts: [...new Set(cloneAccounts)], // remove dupes
        clonePrograms: [...new Set(clonePrograms)],
        cloneJson: [...new Set(cloneJson)],
        additionalArgs: flags.testValidatorArgs ?? "",
      });
      await this.solanaTestValidator.awaitReady();
    }

    ////////////////////////////////////////////////////////////
    ///// SWITCHBOARD DOCKER ORACLE
    ////////////////////////////////////////////////////////////
    this.docker = new DockerOracle(
      flags.nodeImage,
      {
        chain: "solana",
        network: cluster as "localnet" | "devnet",
        rpcUrl: rpcUrl,
        taskRunnerSolanaRpc: flags.mainnetRpcUrl,
        oracleKey: oracle,
        secretPath: keypairPath,
        arch: flags.arm ? "linux/arm64" : "linux/amd64",
      },

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
    if (this.detach && this.solanaTestValidator) {
      this.log(
        `Solana local validator process (${this.solanaTestValidator.pid}) still running`
      );
    }
    process.exit();
  }

  async catch(error: any) {
    await this.endProcesses();
    if (this.detach && this.solanaTestValidator) {
      this.log(
        `Solana local validator process (${this.solanaTestValidator.pid}) still running`
      );
    }
    super.catch(error, "Failed to create localnet test environment");
  }

  async endProcesses() {
    if (this.solanaTestValidator && !this.detach) {
      try {
        const isKilled = this.solanaTestValidator.stop();
        if (isKilled) {
          this.log(`Solana localnet validator process killed`);
          this.solanaTestValidator = undefined;
        }
      } catch {}
    }

    if (this.anchorChildProcess) {
      try {
        const isKilled = this.anchorChildProcess.kill();
        if (isKilled) {
          this.log(`Anchor test process killed`);
          this.anchorChildProcess = undefined;
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
}
