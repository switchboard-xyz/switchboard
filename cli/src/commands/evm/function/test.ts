import { EvmWithoutSignerBaseCommand as BaseCommand } from "../../../evm";

import { Args, Flags } from "@oclif/core";
import { FunctionAccount } from "@switchboard-xyz/evm.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as csp from "async-csp";
import { exec, spawn } from "child_process";
import * as ethers from "ethers";

export default class FunctionTest extends BaseCommand {
  static enableJsonFlag = true;

  static description = "Test a local function before publishing";

  static examples = [
    "$ sb evm function test --parameters 'uint256:1,string:hello",
  ];

  static flags = {
    ...BaseCommand.flags,
    parameters: Flags.string({
      description: "Parameters to pass to the run",
      default: "",
    }),
  };

  static args = {};

  async run() {
    const { args, flags } = await this.parse(FunctionTest);

    const defaultPubkey = "0x1111111111111111111111111111111111111111";
    const ch = new csp.Channel<any>();

    // get all param sets - expect them in the format type:value separated by commas, and sets separated by semicolons
    // e.g. "uint256:1,string:hello;uint256:2,string:hello1"
    // - if there's no params - it'll be an empty array
    const params = flags.parameters
      ? flags.parameters.split(";").map((param) => {
          // get the encoded params as an array
          const callParams = param
            .split(",") // split by comma eg get ["uint256:1", "string:hello"]
            .map((param) => param.trim().split(":")); // split by colon eg get [["uint256", "1"], ["string", "hello"]]

          // get the marams as Array<type> and Array<value>
          const types = callParams.map(([type, _]) => type.trim());
          const values = callParams.map(([_, value]) => value.trim());

          // get Uint8Array of encoded params
          const paramSet = ethers.utils.arrayify(
            ethers.utils.defaultAbiCoder.encode(types, values)
          );
          return Buffer.from(paramSet).toString("base64");
        })
      : [Buffer.from(ethers.utils.arrayify("0x")).toString("base64")];

    const env = {
      PAYER: defaultPubkey,
      REWARD_RECEIVER: defaultPubkey,
      VERIFIER: defaultPubkey,
      VERIFYING_CONTRACT: defaultPubkey,
      CHAIN_ID: "1",
      FUNCTION_KEY: defaultPubkey,
      FUNCTION_CALL_IDS: Buffer.from(`[\"${defaultPubkey}\"]`).toString(
        "base64"
      ),
      FUNCTION_PARAMS: Buffer.from(JSON.stringify(params)).toString("base64"),
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

    childProcess.stderr.on("data", (data) => {
      // This will be triggered every time cargo run outputs something to stderr
      process.stderr.write(data.toString());
    });

    childProcess.on("exit", (code) => {
      if (code === 0) {
        console.log("cargo run completed successfully.");
        // Check for function result
        try {
          const functionResult = JSON.parse(
            Buffer.from(
              filterLinesStartingWith(buf, "FN_OUT")[0].split(" ").at(-1)!,
              "hex"
            ).toString()
          );
          ch.put(functionResult);
        } catch {
          console.log("Error: Failed to parse function result");
        }
      } else {
        console.error(`cargo run exited with code ${code}`);
      }
    });

    const functionResult: any = await ch.take();
    if (functionResult.error_code !== 0) {
      console.log(
        `Function simulation finished successfully with error code: ${functionResult.error_code}`
      );
    }

    console.log("=== Function Result emitted successfully ===");
    console.log(
      `Parsed Function Result: ${JSON.stringify(
        functionResult,
        arrayToHexReplacer,
        2
      ).replace(/\\"/g, "'")}`
    );
  }

  async catch(error: any) {
    super.catch(error, "failed to test the function");
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
