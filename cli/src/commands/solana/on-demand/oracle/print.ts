import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../../solana";
import { chalkString } from "../../../../utils";

import * as anchor from "@coral-xyz/anchor";
import { Args, Flags } from "@oclif/core";
import { PublicKey } from "@solana/web3.js";
import { Oracle, SB_ON_DEMAND_PID } from "@switchboard-xyz/on-demand";
import chalk from "chalk";

export default class OraclePrint extends BaseCommand {
  static enableJsonFlag = true;

  static description = "print a oracle account";

  static flags = {
    ...BaseCommand.flags,
    oracles: Flags.boolean({ description: "print the oracle oracles" }),
  };

  static args = {
    oracleKey: Args.string({
      description: "public key of the oracle account",
      required: true,
    }),
  };

  async run() {
    const { args, flags } = await this.parse(OraclePrint);
    const wallet = this.program.provider.wallet;
    const provider = this.program.provider;

    const idl = await anchor.Program.fetchIdl(SB_ON_DEMAND_PID, provider);
    const program = new anchor.Program(idl!, SB_ON_DEMAND_PID, provider);

    const oracleAccount = new Oracle(program, new PublicKey(args.oracleKey));
    const oracle = await oracleAccount.loadData();

    console.log(this.prettyPrintOracle(oracle, oracleAccount.pubkey));
  }

  prettyPrintOracle(oracle: any, publicKey: PublicKey, SPACING = 36): string {
    const output: string[] = [];

    output.push(chalk.underline(chalkString("## Oracle", publicKey, SPACING)));
    output.push(chalkString("authority", oracle.authority, SPACING));
    output.push(chalkString("queue", oracle.queue, SPACING));
    output.push(
      chalkString(
        "createdAt",
        new Date(oracle.createdAt * 1000).toISOString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "lastHeartbeat",
        new Date(oracle.lastHeartbeat * 1000).toISOString(),
        SPACING
      )
    );
    output.push(chalkString("rewardEscrow", oracle.rewardEscrow, SPACING));
    output.push(chalkString("stakeEscrow", oracle.stakeEscrow, SPACING));
    output.push(
      chalkString(
        "gatewayUri",
        Buffer.from(oracle.gatewayUri).toString("utf8").replace(/\0/g, ""),
        SPACING
      )
    );
    output.push(
      chalkString("permissions", oracle.permissions.toString(), SPACING)
    );
    output.push(chalkString("isOnQueue", oracle.isOnQueue.toString(), SPACING));
    output.push(chalkString("## Enclave Info", "", SPACING));
    const quote = oracle.enclave;
    output.push(chalkString("enclaveSigner", quote.enclaveSigner, SPACING));
    output.push(
      chalkString(
        "mrEnclave",
        Buffer.from(quote.mrEnclave).toString("hex"),
        SPACING
      )
    );
    output.push(
      chalkString(
        "verificationStatus",
        quote.verificationStatus.toString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "verificationTimestamp",
        new Date(quote.verificationTimestamp * 1000).toISOString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "validUntil",
        new Date(quote.validUntil * 1000).toISOString(),
        SPACING
      )
    );
    output.push(
      chalkString(
        "quoteRegistry",
        Buffer.from(quote.quoteRegistry).toString("utf8").replace(/\0/g, ""),
        SPACING
      )
    );
    output.push(
      chalkString(
        "registryKey",
        Buffer.from(quote.registryKey).toString("utf8").replace(/\0/g, ""),
        SPACING
      )
    );
    console.log(Buffer.from(quote.secp256K1Signer).toString("hex"));
    output.push(
      chalkString(
        "secp256k1Signer",
        Buffer.from(quote.secp256K1Signer).toString("hex"),
        SPACING
      )
    );
    output.push(
      chalkString("lastEd25519Signer", quote.lastEd25519Signer, SPACING)
    );
    output.push(
      chalkString(
        "lastSecp256k1Signer",
        Buffer.from(quote.lastSecp256K1Signer).toString("hex"),
        SPACING
      )
    );
    output.push(
      chalkString("lastRotateSlot", quote.lastRotateSlot.toString(), SPACING)
    );
    output.push(
      chalkString(
        "guardianApproversLen",
        quote.guardianApproversLen.toString(),
        SPACING
      )
    );
    output.push(chalkString(`guardianApprovers`, "", SPACING));
    for (let i = 0; i < quote.guardianApproversLen; i++) {
      output.push(
        chalkString(
          `    guardianApprover-${i}`,
          quote.guardianApprovers[i],
          SPACING
        )
      );
    }

    // // Display Epoch
    // output.push(chalkString("## Finished Epoch Info", "", SPACING));
    // output.push(
    // chalkString("epochId", oracle.finalizedEpoch.id.toString(), SPACING)
    // );
    // output.push(
    // chalkString(
    // "slotStart",
    // oracle.finalizedEpoch.slotStart.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString("slotEnd", oracle.finalizedEpoch.slotEnd.toString(), SPACING)
    // );
    // output.push(
    // chalkString(
    // "slashScore",
    // oracle.finalizedEpoch.slashScore.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString(
    // "rewardScore",
    // oracle.finalizedEpoch.rewardScore.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString(
    // "stakeScore",
    // oracle.finalizedEpoch.stakeScore.toString(),
    // SPACING
    // )
    // );
    //
    // output.push(chalkString("## Current Epoch Info", "", SPACING));
    // output.push(
    // chalkString("epochId", oracle.currentEpoch.id.toString(), SPACING)
    // );
    // output.push(
    // chalkString(
    // "slotStart",
    // oracle.currentEpoch.slotStart.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString("slotEnd", oracle.currentEpoch.slotEnd.toString(), SPACING)
    // );
    // output.push(
    // chalkString(
    // "slashScore",
    // oracle.currentEpoch.slashScore.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString(
    // "rewardScore",
    // oracle.currentEpoch.rewardScore.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString(
    // "stakeScore",
    // oracle.currentEpoch.stakeScore.toString(),
    // SPACING
    // )
    // );
    //
    // // Display MegaSlotInfo
    // output.push(chalkString("## Mega Slot Info", "", SPACING));
    // output.push(
    // chalkString(
    // "slotStart",
    // oracle.megaSlotInfo.slotStart.toString(),
    // SPACING
    // )
    // );
    // output.push(
    // chalkString("slotEnd", oracle.megaSlotInfo.slotEnd.toString(), SPACING)
    // );
    // output.push(
    // chalkString("perfGoal", oracle.megaSlotInfo.perfGoal.toString(), SPACING)
    // );
    // output.push(
    // chalkString(
    // "currentSignatureCount",
    // oracle.megaSlotInfo.currentSignatureCount.toString(),
    // SPACING
    // )
    // );

    // Additional fields can be added here as needed

    return output.join("\n");
  }

  async catch(error: any) {
    super.catch(error, "failed to print oracle");
  }
}
