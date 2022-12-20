import { Flags } from "@oclif/core";
import { Keypair } from "@solana/web3.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";
import { CHECK_ICON, normalizeFilePath } from "../../../utils";
import chalk from "chalk";
import fs from "fs";
import { SwitchboardNetwork, NetworkJSON } from "@switchboard-xyz/solana.js";

export default class NetworkCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create an oracle queue";

  static flags = {
    ...BaseCommand.flags,
    inputFile: Flags.string({
      description: "",
      required: true,
    }),
    outputFile: Flags.string({
      description: "",
      required: false,
    }),
    force: Flags.boolean({
      description: "",
    }),
  };

  async run() {
    const { flags } = await this.parse(NetworkCreate);

    const inputFile = this.normalizePath(flags.inputFile);
    const json: NetworkJSON = new NetworkJSON(
      JSON.parse(fs.readFileSync(inputFile, "utf8"))
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
        dataBufferKeypair: json.queue.dataBuffer,
        authority: json.queue.authority,
        cranks: json.cranks,
        oracles: json.oracles,
        aggregators: json.aggregators,
      }
    );
    const signatures = await this.signAndSendAll(
      txns,
      { skipPreflight: true },
      undefined,
      "Creating Switchboard Network"
    );

    this.logger.info(
      `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
        network.queue.account.publicKey
      }`
    );
    for (const crank of network.cranks)
      this.logger.info(
        `${chalk.green(CHECK_ICON, "successfully created a crank")} - ${
          crank.account.publicKey
        }`
      );

    for (const oracle of network.oracles) {
      this.logger.info(
        `${chalk.green(CHECK_ICON, "successfully created an oracle")} - ${
          oracle.account.publicKey
        }`
      );
    }

    for (const aggregator of network.aggregators) {
      this.logger.info(
        `${chalk.green(CHECK_ICON, "successfully created an aggregator")} - ${
          aggregator.account.publicKey
        }`
      );
    }

    this.logger.info(`Loading SwitchboardNetwork accounts ...`);
    const loadedNetwork = await network.load();

    this.logger.info(
      `${chalk.green(
        CHECK_ICON,
        "successfully loaded SwitchboardNetwork accounts"
      )}`
    );

    if (flags.outputFile) {
      const outputFile = normalizeFilePath(flags.outputFile);
      if (fs.existsSync(outputFile) && !flags.force) {
        throw new Error(
          `--outputFile already exists, use --force to overwrite`
        );
      }

      fs.writeFileSync(
        outputFile,
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
    //   `${chalk.green(CHECK_ICON, "successfully created an oracle queue")} - ${
    //     queueAccount.publicKey
    //   }`
    // );

    // this.logger.info("Transaction Signature:", this.toUrl(signature));
  }

  async catch(error) {
    super.catch(error, "Failed to create a switchboard network");
  }
}

const keypairToString = (keypair: Keypair): string => `[${keypair.secretKey}]`;
