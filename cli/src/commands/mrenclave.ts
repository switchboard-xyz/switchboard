import { CliBaseCommand as BaseCommand } from "../BaseCommand";

import { Flags } from "@oclif/core";
import { getMrEnclave } from "@switchboard-xyz/function-simulator";

export default class GetMrEnclave extends BaseCommand {
  static enableJsonFlag = true;

  static aliases = ["enclave"];

  static description = "Fetch the MrEnclave value for a given container";

  static flags = {
    ...BaseCommand.flags,
    container: Flags.string({
      char: "c",
      description: "the name of the container",
      required: true,
    }),
    containerRegistry: Flags.string({
      description:
        "the container registry to fetch from. Currently only dockerhub is supported",
    }),
    version: Flags.string({
      description: "the version of the container, defaults to 'latest'",
    }),
  };

  async run() {
    const { flags } = await this.parse(GetMrEnclave);

    let container = flags.container;
    let version = flags.version;
    if (!version && container.includes(":")) {
      [container, version] = container.split(":", 2);
    }

    const mrEnclave = await getMrEnclave(
      container,
      version,
      flags.containerRegistry
    );

    if (flags.json) {
      return { mrEnclave };
    }

    if (flags.silent) {
      this.logger.info(mrEnclave);
      return;
    }

    this.logger.info(`MRENCLAVE: ${mrEnclave}`);
  }

  async catch(error: any) {
    super.catch(error, "failed to fetch the MrEnclave measurement");
  }
}
