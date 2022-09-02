import { Flags } from "@oclif/core";
import { CliBaseCommand as BaseCommand } from "../../BaseCommand";

export default class ConfigSet extends BaseCommand {
  hidden = true;

  static description = "set a configuration option";

  static flags = {
    ...BaseCommand.flags,
    reset: Flags.boolean({
      char: "r",
      description: "remove value or set to default rpc",
    }),
  };

  static args = [
    {
      name: "chain",
      required: true,
      options: ["solana", "near", "aptos"],
      description: "chain to set a config parameter",
    },
    {
      name: "network",
      required: true,
      options: ["localnet", "testnet", "betanet", "devnet", "mainnet"],
      description: "network of chain to set parameter",
    },
    {
      name: "parameter",
      required: true,
      options: ["rpc", "default-account", "account"],
      description: "parameter to set",
    },
    {
      name: "value",
      required: false,
      description: "value of the param to set",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(ConfigSet);

    if (!flags.reset && !args.value) {
      throw new Error(`Need to provide value if --reset is not set`);
    }

    if (args.parameter === "rpc") {
      this.ctx.setRpcUrl(
        args.chain,
        args.network,
        flags.reset ? undefined : args.value
      );
    }

    // this.ctx.set(args.param, flags.reset ? undefined : args.value);
  }

  async catch(error) {
    super.catch(error, "failed to set config option");
  }
}
