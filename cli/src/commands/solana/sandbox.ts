import { Flags } from "@oclif/core";
import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { SwitchboardDecimal } from "@switchboard-xyz/common";
import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";

export default class SandboxCommand extends BaseCommand {
  static description = "sandbox";

  static hidden = true;

  static flags = {
    ...BaseCommand.flags,
    // name: Flags.string({
    //   char: "n",
    //   description: "name of the job account for easier identification",
    //   default: "",
    // }),
  };

  static args = [
    {
      name: "placeholder",
      required: false,
      description: "",
    },
  ];

  async run() {
    const { args, flags } = await this.parse(SandboxCommand);

    const historyAccountInfo = await this.program.connection.getAccountInfo(
      new PublicKey("7LLvRhMs73FqcLkA8jvEE1AM2mYZXTmqfUv8GAEurymx")
    );

    console.log(`[${historyAccountInfo.data.slice(0, 8)}]`);

    // const [aggregatorAccount, aggregator] = await this.loadAggregator(
    //   "5Uu6Lvyoanx2Q5vDMwuov6i8z5YSfz5cguqrHA7nsUqP"
    // );
    // console.log(aggregator.resolutionMode);

    // const genesis = await this.program.connection.getGenesisHash();
    // console.log(genesis);
  }

  async catch(error) {
    super.catch(error, "sandbox command failed");
  }
}
