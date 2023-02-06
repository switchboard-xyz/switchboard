import { Args, Flags } from "@oclif/core";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { TransactionObject } from "@switchboard-xyz/solana.js";
import { SolanaWithSignerBaseCommand as BaseCommand } from "../solana/index";

/** Get the IDL address for a given programId
 * @param programId the programId for a given on-chain program
 * @return the publicKey of the IDL address
 */
export const getIdlAddress = async (
  programId: PublicKey
): Promise<PublicKey> => {
  const base = (await PublicKey.findProgramAddress([], programId))[0];
  return PublicKey.createWithSeed(base, "anchor:idl", programId);
};

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

  static args = {
    placeholder: Args.string({
      description: "",
      required: false,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(SandboxCommand);

    const programId = new PublicKey(
      "2n97njHWjiWGx8T7ps8Ap79HUSprqXzdowSmnESUnMQE"
    );
    const idlAddress = await getIdlAddress(programId);

    const space = 15686;
    const lamports =
      await this.program.connection.getMinimumBalanceForRentExemption(space);

    const baseKeypair = Keypair.generate();

    const createIxn = SystemProgram.createAccountWithSeed({
      fromPubkey: this.program.walletPubkey,
      newAccountPubkey: idlAddress,
      basePubkey: baseKeypair.publicKey,
      seed: "anchor:idl",
      space,
      lamports,
      programId,
    });
    const txn = new TransactionObject(
      this.program.walletPubkey,
      [createIxn],
      [baseKeypair]
    );
    const signature = await this.program.signAndSend(txn);
    console.log(signature);

    // const [aggregatorAccount, aggregator] = await AggregatorAccount.load(
    //   this.program,
    //   "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"
    // );

    // console.log(aggregatorAccount.size);

    // const buffer = Buffer.alloc(aggregatorAccount.size, 0);
    // types.AggregatorAccountData.discriminator.copy(buffer, 0);
    // const decodedAggregator = types.AggregatorAccountData.decode(buffer);
    // console.log(decodedAggregator.toJSON());

    // const [aggregatorAccount, aggregator] = await this.loadAggregator(
    //   "5Uu6Lvyoanx2Q5vDMwuov6i8z5YSfz5cguqrHA7nsUqP"
    // );
    // console.log(aggregator.resolutionMode);

    const genesis = await this.program.connection.getGenesisHash();
    console.log(genesis);
  }

  async catch(error: any) {
    super.catch(error, "sandbox command failed");
  }
}
