import { Flags } from "@oclif/core";
import { NearWithSignerBaseCommand as BaseCommand } from "../../../near";
import { getWrappedMint, QueueAccount } from "@switchboard-xyz/near.js";
import { BN } from "bn.js";

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
    minStake: Flags.string({
      description: "minimum stake required by an oracle to join the queue",
      default: "0",
    }),
    reward: Flags.string({
      char: "r",
      description:
        "oracle rewards for successfully responding to an update request",
      default: "0",
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
      mint: this.program.mint.address,
      reward: new BN(flags.reward ?? 0),
      minStake: new BN(flags.minStake ?? 0),
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
    this.logger.info(JSON.stringify(queueData, this.jsonReplacers, 2));
  }

  async catch(error) {
    super.catch(error, "Failed to create near oracle queue");
  }
}
