import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { Big } from "@switchboard-xyz/common";
import { BN } from "bn.js";
import chalk from "chalk";

export const chalkString = (
  label: string,
  value:
    | string
    | number
    | boolean
    | PublicKey
    | Big
    | anchor.BN
    | undefined
    | null,
  padding = 16
): string => {
  let valueString: string;
  if (value === undefined) {
    valueString = "undefined";
  } else if (typeof value === "string") {
    if (value === "11111111111111111111111111111111") {
      valueString = "N/A";
    } else {
      valueString = value;
    }
  } else if (typeof value === "number") {
    valueString = value.toString(10);
  } else if (typeof value === "boolean") {
    valueString = value.toString();
  } else if (value instanceof PublicKey) {
    if (value.equals(PublicKey.default)) {
      valueString = "N/A";
    } else {
      valueString = value.toBase58();
    }
  } else if (value instanceof Big) {
    valueString = value.toString();
  } else if (BN.isBN(value)) {
    valueString = value.toString(10);
  } else {
    valueString = `${value}`;
  }

  return `${chalk.blue(label.padEnd(padding, " "))}${chalk.yellow(
    valueString
  )}`;
};
