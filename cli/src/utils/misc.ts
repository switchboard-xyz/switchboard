import type * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { Big } from "@switchboard-xyz/common";
import { BN } from "@switchboard-xyz/common";
import chalk from "chalk";
import { BigNumber } from "ethers";

export const chalkString = (
  label: string,
  value:
    | string
    | number
    | boolean
    | PublicKey
    | Big
    | BN
    | BN
    | BigNumber
    | undefined
    | null,
  padding = 16
): string => {
  let valueString: string;
  if (value === undefined) {
    valueString = "undefined";
  } else if (typeof value === "string") {
    valueString = value === "11111111111111111111111111111111" ? "N/A" : value;
  } else if (typeof value === "number") {
    valueString = value.toString(10);
  } else if (typeof value === "boolean") {
    valueString = value.toString();
  } else if (value instanceof PublicKey) {
    valueString = value.equals(PublicKey.default) ? "N/A" : value.toBase58();
  } else if (value instanceof Big) {
    valueString = value.toString();
  } else if (BN.isBN(value)) {
    valueString = value.toString(10);
  } else if (BigNumber.isBigNumber(value)) {
    valueString = value.toString();
  } else {
    valueString = `${value}`;
  }

  return `${chalk.blue(label.padEnd(padding, " "))}${chalk.yellow(
    valueString
  )}`;
};

export const stripTrailingZeros = (value: string) => {
  return value.replace(/0+$/, "");
};
