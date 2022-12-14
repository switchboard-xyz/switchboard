import { ProgramStateAccount } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../solana";

export default class ProgramInit extends BaseCommand {
  static enableJsonFlag = true;

  static description = "get or create the program state";

  static flags = {
    ...BaseCommand.flags,
    // aggregator flags
  };

  async run() {
    const { flags } = await this.parse(ProgramInit);

    const [programStateAccount, bump] = await ProgramStateAccount.getOrCreate(
      this.program
    );

    const programState = await programStateAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(
        programStateAccount.publicKey,
        programState.toJSON()
      );
    }

    this.prettyPrintSbstate(programState, programStateAccount.publicKey);
  }

  async catch(error) {
    super.catch(error, "Failed to get or create program state account");
  }
}
