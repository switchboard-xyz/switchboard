import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana/index";
import fs from "fs";
import {
  LoadedSwitchboardNetwork,
  NetworkJSON,
  SwitchboardNetwork,
  TransactionObject,
} from "@switchboard-xyz/solana.js";
import { DockerOracle } from "../../../providers/docker";
import { sleep } from "@switchboard-xyz/common";
import { clusterApiUrl } from "@solana/web3.js";

export default class NetworkStart extends BaseCommand {
  static enableJsonFlag = true;

  static description = "start a switchboard network from a JSON file";

  oracles: Array<DockerOracle> = [];

  static flags = {
    ...BaseCommand.flags,
    configFile: Flags.string({
      description: "",
      required: false,
    }),
    schemaFile: Flags.string({
      description: "",
      required: false,
    }),
    nodeImage: Flags.string({
      description: "public key of the oracle to start-up",
      default: "dev-v2-RC_01_05_23_05_52",
    }),
    arm: Flags.boolean({
      description: "apple silicon needs to use a docker image for linux/arm64",
    }),
    timeout: Flags.integer({
      char: "t",
      description: "number of seconds before ending the docker process",
      default: 300,
    }),
    silent: Flags.boolean({
      char: "s",
      description: "suppress docker logging",
    }),
  };

  startOracles() {
    for (const oracle of this.oracles) {
      try {
        oracle.start();
      } catch {}
    }
  }

  stopOracles() {
    for (const oracle of this.oracles) {
      try {
        oracle.stop();
      } catch {}
    }
  }

  async loadFromSchema(
    schemaFilePath: string
  ): Promise<LoadedSwitchboardNetwork> {
    const schemaFile = this.normalizePath(schemaFilePath);
    if (!this.verifyFileExists(schemaFile)) {
      throw new Error(`Schema does not exist, ${schemaFile}`);
    }

    const network = SwitchboardNetwork.from(
      this.program,
      JSON.parse(fs.readFileSync(schemaFile, "utf-8"))
    );
    const loadedNetwork = await network.load();
    return loadedNetwork;
  }

  async configToNetwork(
    configFilePath: string
  ): Promise<[SwitchboardNetwork, Array<TransactionObject>]> {
    const configFile = this.normalizePath(configFilePath);
    if (!this.verifyFileExists(configFile)) {
      throw new Error(`ConfigFile does not exist, ${configFile}`);
    }

    const json: NetworkJSON = new NetworkJSON(
      JSON.parse(fs.readFileSync(configFile, "utf8"))
    );

    const [txns, network] = await SwitchboardNetwork.createInstructions(
      this.program,
      this.payer,
      {
        name: json.queue.name,
        metadata: json.queue.metadata,
        reward: json.queue.reward,
        minStake: json.queue.minStake,
        feedProbationPeriod: json.queue.feedProbationPeriod,
        oracleTimeout: json.queue.oracleTimeout,
        slashingEnabled: json.queue.slashingEnabled,
        consecutiveFeedFailureLimit: json.queue.consecutiveFeedFailureLimit,
        consecutiveOracleFailureLimit: json.queue.consecutiveOracleFailureLimit,
        queueSize: json.queue.queueSize,
        unpermissionedFeeds: json.queue.unpermissionedFeeds,
        unpermissionedVrf: json.queue.unpermissionedVrf,
        enableBufferRelayers: json.queue.enableBufferRelayers,
        keypair: json.queue.keypair,
        dataBufferKeypair: json.queue.dataBufferKeypair,
        authority: json.queue.authority,
        cranks: json.cranks,
        oracles: json.oracles,
        aggregators: json.aggregators,
        vrfs: json.vrfs,
      }
    );

    return [network, txns];
  }

  async run() {
    const { flags } = await this.parse(NetworkStart);

    let loadedNetwork: LoadedSwitchboardNetwork;

    if (flags.schemaFile) {
      loadedNetwork = await this.loadFromSchema(flags.schemaFile);
    }

    if (flags.configFile) {
      const [network, txns] = await this.configToNetwork(flags.configFile);

      try {
        loadedNetwork = await network.load();
      } catch {
        // try to create
        await this.signAndSendAll(
          txns,
          { skipPreflight: true },
          undefined,
          "Creating Switchboard Network"
        );
        loadedNetwork = await network.load();
      }
    }

    if (loadedNetwork === undefined || loadedNetwork.oracles.length === 0) {
      throw new Error(`No oracles to start`);
    }

    for (const oracle of loadedNetwork.oracles ?? []) {
      if (!oracle.state.oracleAuthority.equals(this.program.walletPubkey)) {
        throw new Error(`Oracle authority must match --keypair flag`);
      }
      this.oracles.push(
        new DockerOracle(
          {
            chain: "solana",
            network: this.network,
            rpcUrl:
              flags.cluster === "localnet"
                ? "http://host.docker.internal:8899"
                : flags.rpcUrl ?? clusterApiUrl("devnet"),
            oracleKey: oracle.account.publicKey.toBase58(),
            secretPath: this.normalizePath(flags.keypair),
          },
          flags.nodeImage,
          flags.arm ? "linux/arm64" : "linux/amd64",
          undefined,
          flags.silent
        )
      );
    }

    // console.log(`Starting ${this.oracles.length} oracles ...`);
    this.startOracles();

    // console.log(`Sleeping for ${flags.timeout} seconds`);
    await sleep(flags.timeout * 1000);

    // console.log(`Stopping ${this.oracles.length} oracles ...`);
    this.stopOracles();
  }

  async catch(error) {
    try {
      this.stopOracles();
    } catch {}
    super.catch(error, "Failed to create a switchboard network");
  }
}
