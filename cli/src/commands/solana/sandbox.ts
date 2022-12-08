import { Flags } from "@oclif/core";
import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { SwitchboardDecimal } from "@switchboard-xyz/common";
import { AggregatorAccount, types } from "@switchboard-xyz/solana.js";
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

    const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
      this.program,
      "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"
    );

    console.log(aggregatorAccount.size);

    const buffer = Buffer.alloc(aggregatorAccount.size, 0);
    types.AggregatorAccountData.discriminator.copy(buffer, 0);
    const decodedAggregator = types.AggregatorAccountData.decode(buffer);
    console.log(decodedAggregator.toJSON());

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
