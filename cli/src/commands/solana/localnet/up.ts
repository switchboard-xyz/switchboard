import { Flags } from "@oclif/core";
import * as anchor from "@project-serum/anchor";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { DockerOracle } from "@switchboard-xyz/common";
import { CHECK_ICON, sleep } from "../../../utils";
import { ChildProcess, exec, execSync } from "child_process";
import { Connection, Keypair } from "@solana/web3.js";
import chalk from "chalk";
import {
  AnchorWallet,
  SBV2_DEVNET_PID,
  SwitchboardNetwork,
  SwitchboardProgram,
} from "@switchboard-xyz/solana.js";
import fs from "fs";
import path from "path";

export default class SolanaValidatorUp extends BaseCommand {
  static description =
    "start a local solana validator with a switchboard environment and oracle running alongside it";

  solanaChildProcess: ChildProcess | undefined = undefined;

  docker: DockerOracle | undefined = undefined;

  static flags = {
    ...BaseCommand.flags,
    // keypair flags for deterministically loading the same accounts each time
    queueKeypair: Flags.string({
      description:
        "keypair to use for the oracle queue account. This will be the account's publicKey",
    }),
    oracleStakingWalletKeypair: Flags.string({
      description:
        "keypair to use for the oracle staking wallet. Using a static staking wallet with the same queue will produce the same oracle pubkey each time.",
      dependsOn: ["queueKeypair"],
    }),
    // docker flags
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_01_17_23_16_22",
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
    // queue flags
    reward: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: A reward of 0.0000075 with a feed with a batchSize of 4 would deduct (4 * 0.0000075) wSOL from an aggregators lease each round.",
      default: "0",
    }),
    minStake: Flags.string({
      description:
        "the reward payed out to oracles for responding to an update request on-chain, Ex: 2 requires oracles to have 2 wSOL in their staking wallet before heartbeating",
      default: "0",
    }),
    oracleTimeout: Flags.integer({
      description:
        "time period (in seconds) we should remove an oracle after if no response",
      default: 180,
    }),
    slashingEnabled: Flags.boolean({
      description: "whether slashing is enabled on this queue.",
      default: false,
    }),
    permissionedFeeds: Flags.boolean({
      description:
        "enabling this setting means data feeds need explicit permission to join the queue.",
      default: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description:
        "enabling this setting means data feeds do not need explicit permission to request VRF proofs and verifications from this queue.",
      default: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description:
        "enabling this setting will allow buffer relayer accounts to call openRound.",
      default: false,
    }),
  };

  async endProcesses() {
    try {
      if (this.solanaChildProcess) {
        this.solanaChildProcess.kill();
      }

      if (this.docker) {
        this.docker.stop();
      }
    } catch {}
  }

  async run() {
    const { flags } = await this.parse(SolanaValidatorUp);

    try {
      const stdout = execSync(`solana --version`, { stdio: "pipe" });
    } catch {
      this.logError(
        `You need the Solana toolchain installed to run this command`
      );
      return;
    }

    try {
      const stdout = execSync(`docker info`, { stdio: "pipe" });
    } catch {
      this.logError(
        `You need to start the Docker daemon before running this command`
      );
      return;
    }

    this.logger.info(`Starting a localnet Solana validator ...`);

    fs.mkdirSync(path.join(".switchboard", "test-ledger"), { recursive: true });

    this.solanaChildProcess = exec(
      `solana-test-validator -q -r --ledger .switchboard/test-ledger --mint ${this.program.walletPubkey} --bind-address 0.0.0.0 --url https://api.devnet.solana.com --rpc-port 8899 --clone 2TfB33aLaneQb5TNVwyDz3jSZXS6jdW2ARw1Dgf84XCG --clone J4CArpsbrZqu1axqQ4AnrqREs3jwoyA1M5LMiQQmAzB9 --clone CKwZcshn4XDvhaWVH9EXnk3iu19t6t5xP2Sy2pD6TRDp --clone BYM81n8HvTJuqZU1PmTVcwZ9G8uoji7FKM6EaPkwphPt --clone FVLfR6C2ckZhbSwBzZY4CX7YBcddUSge5BNeGQv5eKhy`,
      (error, stdout, stderr) => {
        // if (error) {
        //   console.error(`exec error: ${error}`);
        //   return;
        // }
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
      }
    );
    this.solanaChildProcess.on("exit", () => {
      this.solanaChildProcess = undefined;
    });

    await sleep(10_000);

    this.logger.info(
      `${chalk.green(CHECK_ICON)} Started localnet Solana validator`
    );

    const queueKeypair = flags.queueKeypair
      ? await this.loadKeypair(flags.queueKeypair)
      : Keypair.generate();

    const oracleStakingKeypair = flags.oracleStakingWalletKeypair
      ? await this.loadKeypair(flags.oracleStakingWalletKeypair)
      : Keypair.generate();

    const anchorProgram = new anchor.Program(
      this.program.idl,
      SBV2_DEVNET_PID,
      new anchor.AnchorProvider(
        new Connection("http://localhost:8899"),
        new AnchorWallet(this.program.wallet.payer),
        {}
      )
    );

    const program = new SwitchboardProgram(
      anchorProgram,
      "localnet",
      this.program.mint
    );

    this.logger.info(`Creating a localnet Switchboard network`);

    const [network] = await SwitchboardNetwork.create(program, {
      keypair: queueKeypair,
      name: "Queue-1",
      reward: Number.parseFloat(flags.reward ?? "0"),
      minStake: Number.parseFloat(flags.minStake ?? "0"),
      oracleTimeout: flags.oracleTimeout,
      slashingEnabled: flags.slashingEnabled,
      unpermissionedFeeds: !flags.permissionedFeeds,
      unpermissionedVrf: flags.unpermissionedVrf,
      enableBufferRelayers: flags.enableBufferRelayers,
      oracles: [
        {
          name: "Oracle-1",
          stakingWalletKeypair: oracleStakingKeypair,
        },
      ],
    });
    if (network.oracles.length === 0) {
      throw new Error(`Failed to create the Switchboard oracle`);
    }

    const oracle = network.oracles[0];

    this.logger.info(`${chalk.green(CHECK_ICON)} Switchboard network created`);
    this.logger.info(`Queue: ${network.queue.account.publicKey}`);
    this.logger.info(`Oracle: ${oracle.account.publicKey}`);

    this.docker = new DockerOracle(
      {
        chain: "solana",
        network: "localnet",
        rpcUrl: "http://host.docker.internal:8899",
        oracleKey: oracle.account.publicKey.toBase58(),
        secretPath: this.normalizePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      undefined,
      flags.silent
    );

    this.docker.start();

    // await logs for event listeners

    await sleep(flags.timeout * 1000);

    this.logger.info(`Solana oracle complete, exiting`);

    await this.endProcesses();
  }

  async catch(error) {
    await this.endProcesses();
    super.catch(
      error,
      "Failed to start a localnet solana validator with the switchboard environment pre-loaded"
    );
  }
}
