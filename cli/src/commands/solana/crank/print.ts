import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";
import { chalkString } from "../../../utils/misc";

import { Args, Flags } from "@oclif/core";
import { CrankAccount, SolanaClock, types } from "@switchboard-xyz/solana.js";

export default class CrankPrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a crank";

  static flags = {
    ...BaseCommand.flags,
    rows: Flags.boolean({ description: "print the crank rows in order" }),
  };

  static args = {
    crankKey: Args.string({
      description: "public key of the crank account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(CrankPrint);

    const [crankAccount, crank] = await CrankAccount.load(
      this.program,
      args.crankKey
    );

    const rows: Array<types.CrankRow> = await crankAccount.loadCrank(true);
    const time = (
      await SolanaClock.fetch(this.program.connection)
    ).unixTimestamp.toNumber();

    if (flags.json) {
      if (rows.length > 0) {
        return this.normalizeAccountData(crankAccount.publicKey, {
          ...crank.toJSON(),
          time,
          rows,
        });
      }

      return this.normalizeAccountData(crankAccount.publicKey, crank.toJSON());
    }

    this.prettyPrintCrank(crank, crankAccount.publicKey);
    this.logger.info(
      chalkString(
        "solanaTime",
        `${time} (${Math.round(Date.now() / 1000) - time} sec behind)`,
        24
      )
    );

    const nextTimestamp = Math.min(
      ...rows.map((r) => r.nextTimestamp.toNumber())
    );
    const staleness = time - nextTimestamp;
    this.logger.info(chalkString("staleness", staleness, 24));

    if (flags.rows && rows.length > 0) {
      for (const row of rows)
        this.logger.info(
          chalkString(
            row.nextTimestamp.toNumber().toString(),
            row.pubkey.toBase58()
          )
        );
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to print crank");
  }
}
