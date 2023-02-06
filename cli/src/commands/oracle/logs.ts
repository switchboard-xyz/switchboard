import { OutputFileBaseCommand } from "../../OutputFileBaseCommand";
import fetch from "node-fetch";
import { Args } from "@oclif/core";

export default class OracleLogs extends OutputFileBaseCommand {
  //   static enableJsonFlag = true;

  static description = "fetch logs for a switchboard oracle";

  static flags = {
    ...OutputFileBaseCommand.flags,
  };

  //   static examples = ["$ sbv2 config:print"];

  static args = {
    network: Args.string({
      description: "network to parse logs for",
      required: true,
      options: [
        "solana-mainnet",
        "solana-devnet",
        "aptos-mainnet",
        "aptos-testnet",
        "near-mainnet",
        "near-testnet",
      ],
    }),
    searchString: Args.string({
      description: "string to search for in the oracle logs",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(OracleLogs);

    const response = await fetch("https://stats.switchboard.xyz/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        network: args.network,
        query:
          args.searchString ?? "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Switchboard oracle logs`);
    }

    const payload = await response.json();
    // this.logger.info(JSON.stringify(payload, undefined, 2));
    this.logger.info(payload);
  }

  async catch(error: any) {
    super.catch(error, "Failed to fetch oracle logs");
  }
}
