import { SolanaWithSignerBaseCommand as BaseCommand } from "../../solana";

export default class SolanaVersion extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a Switchboard account";

  static flags = {
    ...BaseCommand.flags,
  };

  async run(): Promise<any> {
    const { args, flags } = await this.parse(SolanaVersion);

    const attestationProgramVersion =
      await this.program.getAttestationGitVersion();
    this.logger.info(`Attestation Git Version: ${attestationProgramVersion}`);
  }

  async catch(error: any) {
    super.catch(error, "Failed to get the version of the Solana program");
  }
}
