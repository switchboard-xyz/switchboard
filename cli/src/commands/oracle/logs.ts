import { OutputFileBaseCommand } from "../../OutputFileBaseCommand";

import { Args } from "@oclif/core";
import fetch from "node-fetch";

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
        cluster: args.network,
        query:
          args.searchString ?? "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR",
        number: 10,
        severity: "INFO",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Switchboard oracle logs`);
    }

    console.log(await response.text());
    console.log(await response.json());
    console.log(JSON.stringify(response.body, undefined, 2));

    const payload = await response.json();
    // this.logger.info(JSON.stringify(payload, undefined, 2));
    this.logger.info(JSON.stringify(payload, undefined, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to fetch oracle logs");
  }
}
