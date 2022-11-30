import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import Big from "big.js";
import chalk from "chalk";

export const chalkString = (
  label: string,
  value: string | number | boolean | PublicKey | Big | anchor.BN,
  padding = 16
): string => {
  return `${chalk.blue(label.padEnd(padding, " "))}${chalk.yellow(
    value ? value.toString() : "undefined"
  )}`;
};
