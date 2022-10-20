import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import {
  OracleAccount,
  OracleQueueAccount,
  Permission,
} from "@switchboard-xyz/aptos.js";
import { AptosAccount, HexString } from "aptos";

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

  static args = [
    {
      name: "queueHexString",
      description: "HexString address of the queue",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CreateOracle);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    let account: AptosAccount;
    if (flags.new) {
      account = new AptosAccount();
      // await this.faucet.fundAccount(account.address(), 100000);
    } else {
      account = this.signer;
    }

    const [oracleAccount, sig1] = await OracleAccount.init(
      this.aptos,
      account,
      {
        authority: flags.authority
          ? this.parseAddress(flags.authority)
          : this.signer.address(), // not --new keypair cuz we didnt back it up
        queue: args.queueHexString,
        name: flags.name || "",
        metadata: flags.metadata || "",
        coinType: "0x1::aptos_coin::AptosCoin",
      },
      this.programId
    );
    this.logger.info(`Oracle HexString: ${oracleAccount.address}`);
    this.logger.info(this.toUrl(sig1));
    const oracleData = await oracleAccount.loadData();

    const [permissionAccount, sig2] = await Permission.init(
      this.aptos,
      account,
      {
        authority: queueData.authority,
        granter: queue.address,
        grantee: oracleAccount.address,
      },
      this.programId
    );
    this.logger.info(this.toUrl(sig1));

    if (flags.json) {
      return this.normalizeAccountData(oracleAccount.address, {
        ...oracleData,
        permission: undefined,
      });
    }

    this.logger.info(
      this.normalizeAccountData(oracleAccount.address, oracleData)
    );
    this.logger.info(this.toUrl(sig2));
  }

  async catch(error) {
    super.catch(error, "Failed to create oracle");
  }
}
