import { Args, Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";

export default class QueueSet extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new oracle queue";

  static aliases = ["near:create:queue"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the queue",
    }),
    name: Flags.string({
      description: "name of the queue for easier identification",
      required: false,
    }),
    metadata: Flags.string({
      description: "metadata of the queue for easier identification",
      required: false,
    }),
    minStake: Flags.string({
      description: "minimum stake required by an oracle to join the queue",
      required: false,
    }),
    reward: Flags.string({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      required: false,
    }),
    oracleTimeout: Flags.integer({
      description: "number of oracles to add to the queue",
      required: false,
    }),
    slashingEnabled: Flags.boolean({
      description: "permit slashing malicous oracles",
      required: false,
    }),
    unpermissionedFeeds: Flags.boolean({
      description: "permit unpermissioned feeds",
      required: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description: "permit unpermissioned VRF accounts",
      required: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description: "enable oracles to fulfill buffer relayer requests",
      required: false,
    }),
  };

  static args = {
    queueAddress: Args.string({
      description: "address of the queue in Uint8 or Base58 encoding",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(QueueSet);

    const [queue, initialQueueData] = await this.loadQueue(args.queueAddress);

    // TODO: Check authority matches

    const txnReceipt = await queue.setConfigs({
      authority: flags.authority || this.program.account.accountId,
      name: flags.name ? Buffer.from(flags.name) : undefined,
      metadata: flags.metadata ? Buffer.from(flags.metadata) : undefined,
      reward: flags.reward ? Number.parseFloat(flags.reward) : undefined,
      minStake: flags.minStake ? Number.parseFloat(flags.minStake) : undefined,
      oracleTimeout: flags.oracleTimeout ?? undefined,
      slashingEnabled: flags.slashingEnabled ?? undefined,
      unpermissionedFeeds: flags.unpermissionedFeeds ?? undefined,
      unpermissionedVrf: flags.unpermissionedVrf ?? undefined,
      enableBufferRelayers: flags.enableBufferRelayers ?? undefined,
    });

    const queueData = await queue.loadData();

    if (flags.json) {
      return this.normalizeAccountData(queue.address, queueData);
    }

    this.logger.info(this.toUrl(txnReceipt.transaction.hash));
    this.logger.info(JSON.stringify(queueData, this.jsonReplacers, 2));
  }

  async catch(error: any) {
    super.catch(error, "Failed to set near oracle queue config");
  }
}
