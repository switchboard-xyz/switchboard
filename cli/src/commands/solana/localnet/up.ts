import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { DockerOracle } from "../../../providers/docker";
import { sleep } from "../../../utils";
import { execSync } from "child_process";

export default class SolanaValidatorUp extends BaseCommand {
  static description =
    "start a local solana validator with a switchboard environment and oracle running alongside it";

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

  async run() {
    const { flags } = await this.parse(SolanaValidatorUp);

    if (this.network !== "localnet") {
      throw new Error(`This command can only be run with a localnet cluster`);
    }

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

    const docker = new DockerOracle(
      {
        chain: "solana",
        network: this.network,
        rpcUrl: this.rpcUrl,
        oracleKey: flags.oracleKey,
        secretPath: this.normalizePath(flags.keypair),
      },
      flags.nodeImage,
      flags.arm ? "linux/arm64" : "linux/amd64",
      flags.switchboardDir,
      flags.silent
    );

    docker.start();
    await sleep(flags.timeout * 1000);
    docker.stop();
  }

  async catch(error) {
    super.catch(
      error,
      "Failed to start a localnet solana validator with the switchboard environment pre-loaded"
    );
  }
}
