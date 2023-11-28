import { SolanaWithoutSignerBaseCommand as BaseCommand } from "../../../solana";

import { Program, Provider } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Flags } from "@oclif/core";
import {
  Cluster,
  Connection,
  Keypair,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import {
  AttestationQueueAccount,
  FunctionAccount,
  FunctionRequestAccount,
  FunctionRoutineAccount,
  SwitchboardProgram,
  VerifierAccount,
} from "@switchboard-xyz/solana.js";
import {
  FunctionAccountData,
  FunctionRequestAccountData,
  FunctionRoutineAccountData,
} from "@switchboard-xyz/solana.js/generated/accounts";
import chalk from "chalk";
import { exec, spawn } from "child_process";

// eslint-disable-next-line unicorn/prefer-module
const colorize = require("json-colorizer");
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as csp from "async-csp";

const COMMITMENT = "processed";

export default class FunctionTest extends BaseCommand {
  static description =
    "Simulate the switchboard function runtime to test your functions locally";

  static flags = {
    ...BaseCommand.flags,
    parameters: Flags.string({
      description: "Parameters to pass to your function",
    }),
    cluster: Flags.string({
      description: "The cluster to load if your function dynamically loads it",
    }),
    devnetSimulate: Flags.boolean({
      description: "If the cluster is set to devnet, attempt to simulate",
      default: false,
    }),
  };

  async run() {
    const { flags } = await this.parse(FunctionTest);

    const ch = new csp.Channel<any>();
    const params = Buffer.from(flags.parameters ?? "");
    const PID = "sbattyXrzedoNATfc4L31wC9Mhxsi1BmFhTiN8gDshx";
    const cluster = flags.cluster ?? "devnet";
    let fnKey = "funct1on11111111111111111111111111111111111";
    let routine = "rout1ne111111111111111111111111111111111111";
    let request = "request111111111111111111111111111111111111";
    let verifier = "ver1f1er11111111111111111111111111111111111";
    let verifierAuth = "ver1f1erAuthro1ty11111111111111111111111111";
    let queue = "queue11111111111111111111111111111111111111";
    let fnAuthority = "fnAuthor1ty11111111111111111111111111111111";
    let payer = "payer11111111111111111111111111111111111111";
    let rewardReceiver = "rewardRece1ver11111111111111111111111111111";
    let queueAuthority = "queueAuthor1ty11111111111111111111111111111";
    let verifierEnclaveSigner = "ver1f1erEnc1aveS1gner1111111111111111111111";
    fnKey = "9noXMrBqCPAFa5N7cvKneqNDfGNHvp5Nx5xh2nFRSoVL";
    routine = "6hfAjU7xXSYyHwjzinvEcaSXqc3Jt4qHi9eJZ8YgePxU";
    request = "Czt2sEABWZDZNSbQPPgsvAnPscGhTF2J3GGSE3jztbat";
    verifier = "FT41PAvhJj7YqQwuALeSr2PDh7kEub2wb9Ve64jPjDXk";
    verifierAuth = "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh";
    queue = "CkvizjVnm2zA5Wuwan34NhVT3zFc7vqUyGnA6tuEF5aE";
    fnAuthority = "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh";
    payer = "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh";
    rewardReceiver = "CRXGEGMz4RoRyjXhktMp7SzkcFLV3uevZcr2yCnnWpBt";
    queueAuthority = "2KgowxogBrGqRcgXQEmqFvC3PGtCu66qERNJevYW8Ajh";
    const signer = Keypair.generate();
    const programId = PID;
    const wallet = new anchor.Wallet(signer);
    // const fnBuffer = Buffer.alloc(3895);
    const fnBufferOut = Buffer.alloc(3895);
    // const routineBuffer = Buffer.alloc(1248);
    const routineBufferOut = Buffer.alloc(1247 + params.length);
    const reqBufferOut = Buffer.alloc(789 + params.length);
    // const reqBuffer = Buffer.alloc(789);
    const url = "https://api.devnet.solana.com";
    const connection = new Connection(url);
    const fnBuffer = (await connection.getAccountInfo(new PublicKey(fnKey)))!
      .data;
    const reqBuffer = (await connection.getAccountInfo(new PublicKey(request)))!
      .data;
    const routineBuffer = (await connection.getAccountInfo(
      new PublicKey(routine)
    ))!.data;
    const fnData = FunctionAccountData.layout.decode(fnBuffer.slice(8));
    const reqData = FunctionRequestAccountData.layout.decode(
      reqBuffer.slice(8)
    );
    const routineData = FunctionRoutineAccountData.layout.decode(
      // Buffer.alloc(1249)
      routineBuffer.slice(8)
    );
    const verifierData = await VerifierAccount.load(
      this.program,
      new PublicKey(verifier)
    );
    console.log(verifierData[1].enclave.enclaveSigner.toString());
    verifierEnclaveSigner = verifierData[1].enclave.enclaveSigner.toString();

    // console.log(routineData);
    // fnData.authority = new PublicKey(fnAuthority);
    // fnData.queueIdx = 1;
    // reqData.function = new PublicKey(fnKey);
    // // reqData.maxContainerParamsLength = params.length;
    routineData.function = new PublicKey(fnKey);

    routineData.containerParams = params;
    reqData.containerParams = params;
    FunctionAccountData.layout.encode(fnData, fnBufferOut);
    FunctionRequestAccountData.layout.encode(reqData, reqBufferOut);
    FunctionRoutineAccountData.layout.encode(routineData, routineBufferOut);
    const routineBufferOutAdjusted = Buffer.alloc(routineBufferOut.length - 1);
    routineBufferOut.copy(
      routineBufferOutAdjusted,
      2,
      0,
      routineBufferOut.length
    );
    // console.log(routineData);
    const env = {
      PAYER: payer,
      REWARD_RECEIVER: rewardReceiver,
      VERIFIER: verifier,
      VERIFIER_ENCLAVE_SIGNER: verifierEnclaveSigner,
      QUEUE_AUTHORITY: queueAuthority,
      CLUSTER: cluster,
      FUNCTION_KEY: fnKey,
      FUNCTION_DATA: fnBufferOut.toString("hex"),
      FUNCTION_REQUEST_KEY: request,
      FUNCTION_REQUEST_DATA: reqBufferOut.toString("hex"),
      FUNCTION_ROUTINE_KEY: routine,
      FUNCTION_ROUTINE_DATA: routineBufferOut.toString("hex"),
      SWITCHBOARD_FUNCTION_SIMULATION: "1",
    };
    const childProcess = spawn("cargo", ["run"], {
      env: { ...process.env, ...env },
    });
    let buf = "";
    let isFnOut = false;

    childProcess.stdout.on("data", (data) => {
      if (data.includes("FN_OUT") || isFnOut) {
        if (isFnOut === false) {
          process.stdout.write("FN_OUT: ...\n");
        }
        isFnOut = true;
      } else {
        process.stdout.write(data);
      }
      // This will be triggered every time cargo run outputs something to stdout
      buf += data.toString();
    });

    childProcess.stderr.on("data", (data: any) => {
      // This will be triggered every time cargo run outputs something to stderr
      process.stderr.write(data.toString());
    });

    childProcess.on("exit", (code: any) => {
      if (code === 0) {
        log(chalk.green("cargo run completed successfully."));
        // Check for function result
        try {
          const functionResult = JSON.parse(
            Buffer.from(
              filterLinesStartingWith(buf, "FN_OUT")[0].split(" ").at(-1)!,
              "hex"
            ).toString()
          );
          ch.put(functionResult);
        } catch (error) {
          console.log(error);
          console.log("Error: Failed to parse function result");
        }
      } else {
        console.error(error(`cargo run exited with code ${code}`));
      }
    });

    const functionResult: any = await ch.take();
    if (functionResult.error_code !== 0) {
      console.log(
        error(
          `Function simulation finished successfully and emitted error code: ${functionResult.error_code}`
        )
      );
    }

    console.log("INFO: Switchboard function finished successfully.");
    log(
      chalk.yellow(
        "WARN: Note that some Switchboard accounts are placeholders since we do not require you to provide a function or function request account"
      )
    );
    console.log(
      "INFO: Emitted instructions (First instruction is the Switchboard verify instruction):"
    );
    console.log(
      `Serialized tx length: ${functionResult.chain_result_info.serialized_tx.length} bytes`
    );
    const tx = Transaction.from(functionResult.chain_result_info.serialized_tx);
    console.log(
      `${colorize(
        JSON.stringify(tx, arrayToBase64Replacer, 2).replace(/\\"/g, "'")
      )}`
    );
    if (flags.devnetSimulate) {
      const simulationResult = await connection.simulateTransaction(tx);
      console.log(simulationResult);
    }
  }

  async catch(error: any) {
    super.catch(error, "failed to simulate function");
  }
}

function deleteFirstLine(str: string): string {
  const lines = str.split("\n"); // Split the string into lines
  const remainingLines = lines.slice(1); // Remove the first line
  return remainingLines.join("\n"); // Join the remaining lines back into a string
}

function filterLinesStartingWith(input: string, startString: string): string[] {
  return input.split("\n").filter((line) => line.startsWith(startString));
}

function arrayToBase64Replacer(key: string, value: any) {
  if (Array.isArray(value) && value.every((v) => Number.isFinite(v))) {
    const buffer = Buffer.from(value);
    return buffer.toString("base64");
  }
  if (isPubkeyObject(value)) {
    return JSON.stringify(value);
  }
  return value;
}

type PubkeyObject = {
  pubkey: string;
  isSigner: boolean;
  isWritable: boolean;
};

function convertArrayToString(instructions: any[]): any[] {
  for (const ins of instructions) {
    ins.keys = ins.keys.map(
      (obj: any) =>
        `${obj.pubkey}; isSigner: ${obj.isSigner}; isWritable: ${obj.isWritable}`
    );
  }
  return instructions;
}

function isPubkeyObject(value: any): value is PubkeyObject {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.pubkey === "string" &&
    typeof value.isSigner === "boolean" &&
    typeof value.isWritable === "boolean"
  );
}

function arrayToHexReplacer(key: string, value: any) {
  if (Array.isArray(value) && value.every((v) => Number.isFinite(v))) {
    const buffer = Buffer.from(value);
    return buffer.toString("hex");
  }
  // if (isPubkeyObject(value)) {
  // return JSON.stringify(value);
  // }
  return value;
}
