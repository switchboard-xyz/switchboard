import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";

import { Args, Flags } from "@oclif/core";
import { createOracle } from "@switchboard-xyz/aptos.js";

export default class CreateOracle extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a oracle for a given queue";

  static aliases = ["aptos:create:oracle"];

  static flags = {
    ...BaseCommand.flags,
    authority: Flags.string({
      char: "a",
      description:
        "alternate named account that will be the authority for the oracle",
    }),
    name: Flags.string({
      description: "name of the oracle for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the oracle for easier identification",
    }),
    new: Flags.boolean({
      description:
        "create account at new AptosAccount with authority set to --account",
    }),
  };

  static args = {
    queueHexString: Args.string({
      description: "HexString address of the queue",
      required: true,
    }),
  };

  async run() {
    const { flags, args } = await this.parse(CreateOracle);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    const [oracleAccount, sig1] = await createOracle(
      this.aptos,
      this.signer,
      {
        authority: flags.authority
          ? this.parseAddress(flags.authority)
          : this.signer.address(), // not --new keypair cuz we didnt back it up
        queue: args.queueHexString,
        name: flags.name ?? "",
        metadata: flags.metadata ?? "",
        coinType: "0x1::aptos_coin::AptosCoin",
      },
      this.programId.toString()
    );

    this.logger.info(`Oracle HexString: ${oracleAccount.address}`);
    this.logger.info(this.toUrl(sig1));
    const oracleData = await oracleAccount.loadData();

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address.toString(), {
        ...oracleData,
        permission: undefined,
      });
    }

    this.logger.info(
      this.normalizeAccountData(oracleAccount.address.toString(), oracleData)
    );
  }

  async catch(error: any) {
    super.catch(error, "Failed to create oracle");
  }
}
