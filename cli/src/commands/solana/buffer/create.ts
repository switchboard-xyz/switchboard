import { Flags } from "@oclif/core";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../../../solana";

export default class BufferCreate extends BaseCommand {
  static description = "create a buffer relayer account";

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description: "alternate keypair that will be the aggregator authority",
    }),
    name: Flags.string({
      char: "n",
      description: "name of the buffer account",
    }),
    minUpdateDelaySeconds: Flags.integer({
      description: "minimum number of seconds between update calls",
      default: 30,
    }),
    jobDefinition: Flags.string({
      description: "filesystem path to job definition",
      exclusive: ["jobKey"],
    }),
    jobKey: Flags.string({
      description: "public key of existing job account",
      exclusive: ["jobDefinition"],
    }),
  };

  static args = [
    {
      name: "queueKey",
      description: "oracle queue to create BufferRelayer account on",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(BufferCreate);

    throw new Error(`Not implemented currently`);
  }

  async catch(error) {
    super.catch(error, "failed to create buffer relayer account");
  }
}
