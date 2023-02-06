import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { PLUS_ICON, normalizeFilePath } from "../../../utils";
import chalk from "chalk";
import fs from "fs";
import { SwitchboardNetwork, NetworkJSON } from "@switchboard-xyz/solana.js";

export default class NetworkCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an oracle queue";

  static flags = {
    ...BaseCommand.flags,
    configFile: Flags.string({
      description: "",
      required: true,
    }),
    schemaFile: Flags.string({
      description: "",
      required: true,
    }),
    force: Flags.boolean({
      description: "",
    }),
  };

  async run() {
    const { flags } = await this.parse(NetworkCreate);

    const configFile = this.normalizePath(flags.configFile);
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
    const signatures = await this.signAndSendAll(
      txns,
      { skipPreflight: true },
      undefined,
      "Creating Switchboard Network"
    );

    this.logger.info(
      `${chalk.green(PLUS_ICON, "Queue")} - ${network.queue.account.publicKey}`
    );
    for (const crank of network.cranks)
      this.logger.info(
        `${chalk.green(PLUS_ICON, " ", "Crank")} - ${crank.account.publicKey}`
      );

    for (const oracle of network.oracles) {
      this.logger.info(
        `${chalk.green(PLUS_ICON, " ", "Oracle")} - ${oracle.account.publicKey}`
      );
    }

    for (const aggregator of network.aggregators) {
      this.logger.info(
        `${chalk.green(PLUS_ICON, " ", "Aggregator")} - ${
          aggregator.account.publicKey
        }`
      );
    }

    for (const vrf of network.vrfs) {
      this.logger.info(
        `${chalk.green(PLUS_ICON, " ", "VRF Account")} - ${
          vrf.account.publicKey
        }`
      );
    }

    for (const bufferRelayer of network.bufferRelayers) {
      this.logger.info(
        `${chalk.green(PLUS_ICON, " ", "BufferRelayer")} - ${
          bufferRelayer.account.publicKey
        }`
      );
    }

    const loadedNetwork = await network.load();

    if (flags.schemaFile) {
      const schemaFile = normalizeFilePath(flags.schemaFile);
      if (fs.existsSync(schemaFile) && !flags.force) {
        throw new Error(
          `--schemaFile already exists, use --force to overwrite`
        );
      }

      fs.writeFileSync(
        schemaFile,
        JSON.stringify(loadedNetwork.toJSON(), this.jsonReplacers, 2)
      );
    }

    // if (flags.json) {
    //   const accounts = await queueAccount.toAccountsJSON();
    //   return this.normalizeAccountData(queueAccount.publicKey, accounts);
    // }

    // if (this.silent) {
    //   this.logger.info(signature);
    //   return;
    // }

    // // handle nicer logging here
    // this.logger.info(
    //   `${chalk.green(PLUS_ICON, "successfully created an oracle queue")} - ${
    //     queueAccount.publicKey
    //   }`
    // );

    // this.logger.info("Transaction Signature:", this.toUrl(signature));
  }

  async catch(error: any) {
    super.catch(error, "Failed to create a switchboard network");
  }
}

const keypairToString = (keypair: Keypair): string => `[${keypair.secretKey}]`;
