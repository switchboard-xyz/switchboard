import { Flags } from "@oclif/core";
import { types } from "@switchboard-xyz/solana.js";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";
import { chalkString, normalizeFilePath } from "../../utils";
import chalk from "chalk";
import fs from "fs";

function toArray<
  T extends
    | types.AggregatorAccountData
    | types.BufferRelayerAccountData
    | types.CrankAccountData
    | types.JobAccountData
    | types.LeaseAccountData
    | types.OracleAccountData
    | types.PermissionAccountData
    | types.SbState
    | types.OracleQueueAccountData
    | types.SlidingResultAccountData
    | types.VrfAccountData
>(map: Map<string, T>): Array<any> {
  return Array.from(map.entries()).map(([pubkey, account]) => {
    return {
      publicKey: pubkey,
      ...account.toJSON(),
    };
  });
}

export default class Solana extends BaseCommand {
  // static enableJsonFlag = true; // string is too long
  static hidden = true;

  static description = "fetch the Switchboard program accounts on Solana";

  static flags = {
    ...BaseCommand.flags,
    outputFile: Flags.string({
      description: "file to save solana account definitions to",
      parse: async (rawPath) => normalizeFilePath(rawPath),
    }),
  };

  async run() {
    const { args, flags } = await this.parse(Solana);

    if (flags.outputFile) {
      if (this.verifyFileExists(flags.outputFile)) {
        throw new Error(`Existing file found at ${flags.outputFile}`);
      }
    }

    const accounts = await this.program.getProgramAccounts();
    const accountsJson = {
      aggregators: toArray(accounts.aggregators),
      bufferRelayers: toArray(accounts.bufferRelayers),
      cranks: toArray(accounts.cranks),
      jobs: toArray(accounts.jobs),
      leases: toArray(accounts.leases),
      oracles: toArray(accounts.oracles),
      permissions: toArray(accounts.permissions),
      programState: toArray(accounts.programState),
      slidingResult: toArray(accounts.slidingResult),
      queues: toArray(accounts.queues),
      vrfs: toArray(accounts.vrfs),
    };

    if (flags.outputFile) {
      fs.writeFileSync(flags.outputFile, "");
      for (const key of Object.keys(accountsJson)) {
        if (key === "buffers") {
          continue;
        }
        fs.appendFileSync(flags.outputFile, JSON.stringify(accountsJson[key]));
      }
    }

    if (flags.json) {
      return accountsJson;
    }

    const SPACING = 24;

    this.logger.info(
      chalk.underline(
        chalkString("## Switchboard", this.program.programId, SPACING)
      )
    );

    this.logger.info(
      chalkString("aggregators", accounts.aggregators.size, SPACING)
    );
    this.logger.info(chalkString("buffers", accounts.buffers.size, SPACING));
    this.logger.info(
      chalkString("bufferRelayers", accounts.bufferRelayers.size, SPACING)
    );
    this.logger.info(chalkString("cranks", accounts.cranks.size, SPACING));
    this.logger.info(chalkString("jobs", accounts.jobs.size, SPACING));
    this.logger.info(chalkString("leases", accounts.leases.size, SPACING));
    this.logger.info(chalkString("oracles", accounts.oracles.size, SPACING));
    this.logger.info(
      chalkString("permissions", accounts.permissions.size, SPACING)
    );
    this.logger.info(
      chalkString("programState", accounts.programState.size, SPACING)
    );
    this.logger.info(
      chalkString("slidingResult", accounts.slidingResult.size, SPACING)
    );
    this.logger.info(chalkString("queues", accounts.queues.size, SPACING));
    this.logger.info(chalkString("vrfs", accounts.vrfs.size, SPACING));
  }

  async catch(error) {
    super.catch(error, "failed to get switchboard accounts");
  }
}
