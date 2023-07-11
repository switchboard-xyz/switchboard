import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana/index";
import { sleep } from "../../../utils/index";

import { Args, Flags } from "@oclif/core";
import type { PublicKey } from "@solana/web3.js";
import { SYSVAR_CLOCK_PUBKEY } from "@solana/web3.js";
import { OracleAccount, SolanaClock, types } from "@switchboard-xyz/solana.js";
import chalk from "chalk";

const switchboardOracles: Map<string, string> = new Map([
  // Mainnet Permissioned
  ["AbJWhpmJfAsSHJ2gECRE7ZAxwsVSJtFhWhDEpQCTvcbZ", "idx-1"],
  ["3ZGWCgx5VsfjDsuNsgYpkYVN7M24thVL3uqrM4SPF79n", "idx-2"],
  ["6wTyY1JKzcTKfTVN7M7rQcBo15FkDEZA4eoWk3rBGVdP", "idx-3"],
  ["G2434YvZY4KWojTKqhL8EZJMxsRLtbhUe6RfA1KziGGe", "idx-4"],
  ["6EBJV2LPV4NDoysJPzabd5SAwtBSvwQxDs4CPaC1GXpX", "idx-5"],
  ["GZyuePbLkoNzMVT3dMoU8SfbnH4hA2RCv5mum6PWiPcc", "idx-6"],
  ["3CxZoxbW9PQCPHwgXoxmsUDgPc7LiPX1cFXQyTHncgBU", "kiln"],
  ["63e6z9ik4NWcSYKGjHHfFHLrvZo1njbQ6dPWWoUyW3ee", "infstones"],
  ["GiGsLuwTn1yTZyHM15PKwvDKeKaFsH3zVgHz4nCL95CQ", "infstones"],
  ["Fy8aq9Vh7HSbwsGxxsG8p7MwSjv4xCDRJ81tuHxvsjft", "infstones"],
  // Mainnet Permissionless
  ["C5Hz71MS6gxEyqCXsWrGE7wqsNTZafg4qR3WF5s57AtR", "idx-1"],
  ["FQ9QUwF3QxT4rUWAvWHaSR4JxidVvSPQVCAGAF5UTXN9", "idx-2"],
  ["AGYdbiu4DdxbhfqasZ9PXmxmtZhXXkq3mLrSaV7Riyt2", "idx-3"],
  ["FXvMyUbj72BmK9sYj2w62AKmoPHttthWzvQWwms9r8fE", "idx-4"],
  ["CYagyWjtbFR2f4ABAuYDZm7wH5nr5B179Gy1X5pGdPX9", "idx-5"],
  ["8jaeqPoYL97Uea9ZqU9A87CUtJaVZfTSRZa7mWrBhMaZ", "idx-6"],
  ["E5bevfntBy5nFwGpCD7knPT1fjHV4WBXp49MZ8JC8hJV", "kiln"],
  ["Eze6dbKcWtvW7oUSZq9wSEsA8GBANvyPLiNdnfvDk1b", "infstones"],
  ["6SbNNRm9AspyuTkB4mEGfY771kX3Xr9hUNpvnyJNiJtC", "infstones"],
  // Devnet Permissioned
  ["EWJrECCPq5s5iCjdN9rJ75GqWDgxT8PKrcm11kUGRyG7", "idx-1"],
  ["3TESg5g8n242evFtQ7wr5cS885EgnSbZM9cammi8wB2w", "idx-2"],
  ["7xNQyZJ5YtSdeQnkUQtPQpWJ1r6kW7GfrV7DqRJ7CE76", "idx-3"],
  ["7DKvkiQ8znLZWmbbqwgD7rojEpj6vrdk9vWoDr3ENnoH", "idx-4"],
  ["2JeWDzkAYskB1RhTpvdjZmwZvijpF3fc7cEuLC6yQrqR", "idx-5"],
  ["AFbi9w8szmnBeoCMG1jLHKJQBDE2pZQ38ChZAtdoeCJ", "idx-6"],
  ["CVy22KiH9oTWJx9Um8UpuNx826csC2fJ937Js6naNx1L", "CMS"],
  // Devnet Permissionless
  ["44t6hGnG69DsVfahNBWL1mhxRx6pJS6ZTpEFXdKNpNbB", "idx-1"],
  ["DewYWoFZP2oXVNBw52oDM4bMPhutu99zX2rBYTwVNWPK", "idx-2"],
  ["9YcWfQiQXznbm8zKNWxGkh1awFKjZbGb2J2yWN44SHoJ", "idx-3"],
  ["43QqvSxJkFSZ9yARrDdeCWBc6KSvkx9HdxvcUGHhzDjx", "idx-4"],
  ["ChiZ7HAMPLUsMJWfAH9gJrs1ssKpQWu7rdffTMMcvzKH", "idx-5"],
  ["GEFENFya32FoM6z8K2zDQMPfpEuVTHDTJU1UNu6cACqo", "idx-6"],
]);

export default class OracleEvents extends BaseCommand {
  static description = "watch an oracle account and stream the on-chain events";

  static hidden = true;

  static flags = {
    ...BaseCommand.flags,
    timeout: Flags.integer({
      char: "t",
      description: "time to watch feed for updates",
    }),
    outfile: Flags.string({
      char: "f",
      description: "save results to a file",
    }),
  };

  static args = {
    oracleKey: Args.string({
      description: "public key of the oracle account",
      required: true,
    }),
  };

  subscriptions: Array<number> = [];

  async closeSubscriptions() {
    await Promise.all(
      this.subscriptions.map(async (ws) => {
        try {
          await this.program.removeEventListener(ws);
        } catch {}
      })
    );
    this.subscriptions = [];
  }

  async run() {
    const { args, flags } = await this.parse(OracleEvents);

    const [oracleAccount, oracleData] = await OracleAccount.load(
      this.program,
      args.oracleKey
    );

    const events: Array<[string, number]> = [];
    const finishedEvents: Array<[string, number, number]> = [];

    let solanaTime: number = Math.round(Date.now() / 1000);

    this.subscriptions.push(
      this.program.connection.onAccountChange(
        SYSVAR_CLOCK_PUBKEY,
        (accountInfo) => {
          const clock = SolanaClock.decode(accountInfo.data);
          solanaTime = clock.unixTimestamp.toNumber();
        }
      )
    );

    let oracle: types.OracleAccountData = oracleData;
    this.subscriptions.push(
      this.program.connection.onAccountChange(
        oracleAccount.publicKey,
        (accountInfo) => {
          oracle = types.OracleAccountData.decode(accountInfo.data);
        }
      )
    );

    this.subscriptions.push(
      this.program.addEventListener(
        "AggregatorOpenRoundEvent",
        (event, slot) => {
          const idx = event.oraclePubkeys.findIndex((value) =>
            value.equals(oracleAccount.publicKey)
          );
          if (idx !== -1) {
            events.push([event.feedPubkey.toBase58(), slot]);
          }
        }
      )
    );
    this.subscriptions.push(
      this.program.addEventListener(
        "AggregatorSaveResultEvent",
        (event, slot) => {
          if (event.oraclePubkey.equals(oracleAccount.publicKey)) {
            const idx = events.findIndex(
              (myEvent) => event.feedPubkey.toBase58() === myEvent[0]
            );
            if (idx === -1) {
              return;
            }

            const finishedEvent = events.splice(idx, 1)[0];
            finishedEvents.push([
              finishedEvent[0],
              finishedEvent[1],
              event.slot.toNumber(),
            ]);
          }
        }
      )
    );

    setInterval(() => {
      this.printEvents(oracleAccount.publicKey, events, finishedEvents);
    }, 1000);

    await (flags.timeout && flags.timeout > 0
      ? sleep(flags.timeout * 1000)
      : sleep(1800 * 1000));

    await this.closeSubscriptions();
  }

  async catch(error: any) {
    try {
      await this.closeSubscriptions();
    } catch {}

    super.catch(error, "failed to watch aggregator events");
  }

  printEvents(
    oraclePubkey: PublicKey,
    events: Array<[string, number]>,
    finishedEvents: Array<[string, number, number]>
  ): void {
    console.clear();
    console.log(chalk.blue(`Watching oracle ${oraclePubkey}`));

    // open events
    console.log(chalk.bgYellow(chalk.underline(`LIVE Events`.padEnd(64, " "))));
    console.log(
      chalk.underline(
        chalk.blue(
          `${"Open".padEnd(10, " ")}${"Closed".padEnd(10, " ")}${"Feed".padEnd(
            44,
            " "
          )}`
        )
      )
    );
    for (const myEvent of events) {
      console.log(
        `${myEvent[1].toString().padEnd(10, " ")}${"".padEnd(
          10,
          " "
        )}${myEvent[0].toString().padEnd(44, " ")}`
      );
    }

    // closed events
    console.log(
      chalk.bgYellow(chalk.underline(`Finished Events`.padEnd(64, " ")))
    );
    const closedEvents = finishedEvents
      .sort((a, b) => b[2] - a[2])
      .slice(0, 10);
    console.log(
      chalk.underline(
        chalk.blue(
          `${"Open".padEnd(10, " ")}${"Closed".padEnd(10, " ")}${"Feed".padEnd(
            44,
            " "
          )}`
        )
      )
    );
    for (const myEvent of closedEvents) {
      console.log(
        `${myEvent[1].toString().padEnd(10, " ")}${myEvent[2]
          .toString()
          .padEnd(10, " ")}${myEvent[0].toString().padEnd(44, " ")}`
      );
    }
  }
}
