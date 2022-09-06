import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { QueueAccount } from "@switchboard-xyz/near.js";

export default class QueueCreate extends BaseCommand {
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
    }),
    metadata: Flags.string({
      description: "metadata of the queue for easier identification",
    }),
    minStake: Flags.integer({
      description: "minimum stake required by an oracle to join the queue",
      default: 0,
    }),
    reward: Flags.integer({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      default: 0,
    }),
    oracleTimeout: Flags.integer({
      description: "number of oracles to add to the queue",
      default: 180,
    }),
    queueSize: Flags.integer({
      description: "maximum number of oracles the queue can support",
      default: 100,
    }),
    slashingEnabled: Flags.boolean({
      description: "permit slashing malicous oracles",
      default: false,
    }),
    unpermissionedFeeds: Flags.boolean({
      description: "permit unpermissioned feeds",
      default: false,
    }),
    unpermissionedVrf: Flags.boolean({
      description: "permit unpermissioned VRF accounts",
      default: false,
    }),
    enableBufferRelayers: Flags.boolean({
      description: "enable oracles to fulfill buffer relayer requests",
      default: false,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(QueueCreate);

    const queueAccount = await QueueAccount.create(this.program, {
      authority: flags.authority || this.program.account.accountId,
      name: Buffer.from(flags.name || ""),
      metadata: Buffer.from(flags.metadata || ""),
      mint: "wrap.test",
      reward: flags.reward,
      minStake: flags.minStake,
      queueSize: flags.queueSize,
      oracleTimeout: flags.oracleTimeout,
      slashingEnabled: flags.slashingEnabled,
      unpermissionedFeeds: flags.unpermissionedFeeds,
      unpermissionedVrf: flags.unpermissionedVrf,
      enableBufferRelayers: flags.enableBufferRelayers,
    });
    const queueData = await queueAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(queueAccount.address, queueData);
    }

    this.logger.info(
      `Queue Key (Uint8Array): [${queueAccount.address
        .map((e) => (e as any).toString())
        .join(",")}]`
    );
    this.logger.info(
      `Queue Key (Base58): ${this.encodeAddress(queueAccount.address)}`
    );
    this.logger.info(JSON.stringify(queueData, this.fs.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to create near oracle queue");
  }
}
