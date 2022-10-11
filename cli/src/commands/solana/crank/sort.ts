import { Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { CrankAccount, CrankRow } from "@switchboard-xyz/switchboard-v2";
import * as fs from "fs";
import * as path from "path";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import chalk from "chalk";
import { pqPop, pqSort } from "../../../utils/crank";

export default class CrankSort extends BaseCommand {
  static description = "list the pubkeys currently on the crank";

  static flags = {
    ...BaseCommand.flags,
    force: Flags.boolean({ description: "overwrite output file if exists" }),
  };

  static args = [
    {
      name: "crankKey",
      description: "public key of the crank",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(CrankSort);

    const crankAccount = new CrankAccount({
      program: this.program,
      publicKey: new PublicKey(args.crankKey),
    });

    const crank = await crankAccount.loadData();
    let pqData: CrankRow[] = crank.pqData;

    const sorted: CrankRow[] = pqSort(pqData);

    this.logger.log(
      sorted
        .map(
          (row) =>
            `${chalk.yellow(row.nextTimestamp.toNumber())}, ${chalk.blue(
              row.pubkey.toString()
            )}`
        )
        .join("\n")
    );
  }

  async catch(error) {
    super.catch(error, "failed to print the cranks pubkeys");
  }
}
