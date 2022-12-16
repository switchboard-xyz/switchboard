import { Flags } from "@oclif/core";
import { AptosWithSignerBaseCommand as BaseCommand } from "../../../aptos";
import { AptosAccount, HexString } from "aptos";
import { CrankAccount, OracleQueueAccount } from "@switchboard-xyz/aptos.js";

export default class CrankCreate extends BaseCommand {
  static enableJsonFlag = true;

  static description = "create a new crank";

  static aliases = ["aptos:create:crank"];

  static flags = {
    ...BaseCommand.flags,
    name: Flags.string({
      description: "name of the queue for easier identification",
    }),
    metadata: Flags.string({
      description: "metadata of the queue for easier identification",
    }),
    maxRows: Flags.integer({
      description: "maximum number of rows on the crank",
      default: 100,
    }),
    new: Flags.boolean({
      description:
        "create account at new AptosAccount with authority set to --account",
    }),
  };

  static args = [
    {
      name: "queueHexString",
      description: "HexString of the oracle queue to create a crank for",
    },
  ];

  async run() {
    const { flags, args } = await this.parse(CrankCreate);

    const [queue, queueData] = await this.loadQueue(args.queueHexString);

    let account: AptosAccount;
    if (flags.new) {
      account = new AptosAccount();
      // await this.faucet.fundAccount(account.address(), 10000000);
    } else {
      account = this.signer;
    }

    const [crank, sig] = await CrankAccount.init(
      this.aptos,
      this.signer,
      {
        queueAddress: HexString.ensure(args.queueHexString).toString(),
        coinType: "0x1::aptos_coin::AptosCoin",
      },
      this.programId.toString()
    );
    const crankData = await crank.loadData();

    if (flags.json) {
      return this.normalizeAccountData(crank.address.toString(), {
        ...crankData,
      });
    }

    this.logger.info(`Crank Key: ${crank.address}`);
    this.logger.info(
      this.normalizeAccountData(crank.address.toString(), crankData)
    );
  }

  async catch(error) {
    super.catch(error, "Failed to create aptos crank");
  }
}
