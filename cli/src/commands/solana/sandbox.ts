import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../solana";

import type * as borsh from "@coral-xyz/borsh";
import { Keypair, PublicKey } from "@solana/web3.js";
import { sleep } from "@switchboard-xyz/common";
import { attestationTypes, parseRawBuffer } from "@switchboard-xyz/solana.js";
import nacl from "tweetnacl";

export default class SolanaSandbox extends BaseCommand {
  static hidden = true;

  static enableJsonFlag = true;

  static description = "testing stuff";

  static flags = {
    ...BaseCommand.flags,
    // aggregator flags
  };

  async run() {
    const { flags } = await this.parse(SolanaSandbox);

    // devnet - 9noXMrBqCPAFa5N7cvKneqNDfGNHvp5Nx5xh2nFRSoVL
    // mainnet - 6P741mydsHXx1JKnc5cvVv5CvvZSyF8uaFowTfC7PzWH

    const keypair = Keypair.generate();
    console.log(`keypair: [${keypair.secretKey}]`);
    console.log(`pubkey: [${keypair.publicKey.toBytes()}]`);
    console.log(`pubkey: ${keypair.publicKey.toBase58()}`);

    const message =
      "74d6a32748cca8cadeddf0f11ec52bb6bdb7716dc5800b259ed667fba4bb9fd7";
    const messageEncoded = new Uint8Array(Buffer.from(message, "hex"));
    console.log(`msg: "${Buffer.from(messageEncoded).toString("utf-8")}"`);
    // const messageEncoded = new TextEncoder().encode(message);

    const signature = nacl.sign.detached(messageEncoded, keypair.secretKey);
    console.log(`signature: [${signature}]`);
    console.log(
      `signature (base64): ${Buffer.from(signature).toString("base64")}`
    );

    const verified = nacl.sign.detached.verify(
      messageEncoded,
      signature,
      keypair.publicKey.toBytes()
    );
    console.log(`verified: ${verified}`);

    // const pubkey = new PublicKey(
    //   "FiDmUK83DTc1ijEyVnwMoQwJ6W4gC2S8JhncKsheDQTJ"
    // );

    // const preAccountInfo =
    //   await this.program.provider.connection.getAccountInfo(pubkey);

    // if (!preAccountInfo) {
    //   throw new Error(`Failed to fetch account ${pubkey}`);
    // }

    // const preNum = preAccountInfo.data.slice(2888, 2888 + 1);
    // console.log([...preNum][0]);

    // const preFunctionState = attestationTypes.FunctionAccountData.decode(
    //   preAccountInfo.data
    // );

    // console.log(preFunctionState.routinesDisabled);

    // // LETS OVERRIDE SOME STUFF
    // const program = await this.program.attestationProgram;

    // const signature = await program.methods
    //   .functionConfigOverride()
    //   .accounts({
    //     authority: this.payer,
    //     function: pubkey,
    //   })
    //   .rpc();
    // console.log(this.toUrl(signature));

    // await sleep(1000);

    // const postAccountInfo =
    //   await this.program.provider.connection.getAccountInfo(
    //     new PublicKey("9noXMrBqCPAFa5N7cvKneqNDfGNHvp5Nx5xh2nFRSoVL")
    //   );

    // if (!postAccountInfo) {
    //   throw new Error(
    //     `Failed to fetch account 9noXMrBqCPAFa5N7cvKneqNDfGNHvp5Nx5xh2nFRSoVL`
    //   );
    // }

    // const postNum = postAccountInfo.data.slice(2888, 2888 + 1);
    // console.log([...postNum][0]);

    // const postFunctionState = attestationTypes.FunctionAccountData.decode(
    //   postAccountInfo.data
    // );

    // console.log(postFunctionState.routinesEnabled);
  }

  async catch(error: any) {
    super.catch(error, "Sandbox command failed");
  }
}
