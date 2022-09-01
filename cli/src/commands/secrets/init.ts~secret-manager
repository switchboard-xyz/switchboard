import { Flags } from "@oclif/core";
import { CliBaseCommand as BaseCommand } from "../../BaseCommand";
import { SwitchboardSecretManager } from "@switchboard-xyz/secret-manager";

export default class SecretsInit extends BaseCommand {
  static description = "initialize a switchboard secret registry";

  static flags = {
    ...BaseCommand.flags,
    registryLocation: Flags.string({
      description: "name of the job account for easier identification",
      required: false,
    }),
  };

  static args = [];

  async run() {
    const { args, flags } = await this.parse(SecretsInit);

    const registry = await SwitchboardSecretManager.init(
      flags.registryLocation
    );
  }

  async catch(error) {
    super.catch(error, "secret init command failed");
  }
}
