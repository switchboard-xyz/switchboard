import { PublicKey } from "@solana/web3.js";
import { SwitchboardDecimal, toUtf8 } from "@switchboard-xyz/common";
import { Big } from "@switchboard-xyz/common";
import { BN } from "@switchboard-xyz/common";

export const baseJsonReplacers = (key: any, value: any): any => {
  if (
    !value ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }

  if ((key === "name" || key === "metadata") && Array.isArray(value)) {
    return toUtf8(value);
  }

  if (value instanceof Big) {
    return value.toString();
  }

  if (BN.isBN(value)) {
    return value.toString(10);
  }

  return value;
};

// JSON.stringify: Object => String
export const pubKeyConverter = (key: any, value: any): any => {
  if (value instanceof PublicKey || key.toLowerCase().endsWith("publickey")) {
    return value.toString() ?? "";
  }

  if (value instanceof Uint8Array) {
    return `[${value.toString()}]`;
  }

  if (value instanceof BN) {
    return value.toString();
  }

  if (value instanceof Big) {
    return value.toString();
  }

  if (value instanceof SwitchboardDecimal) {
    return new Big(value.mantissa.toString())
      .div(new Big(10).pow(value.scale))
      .toString();
  }
};

// JSON.parse: String => Object
export const pubKeyReviver = (key: string, value: any): any => {
  if (key.toLowerCase().endsWith("publickey")) {
    return new PublicKey(value);
  }

  if (key.toLowerCase().endsWith("secretkey")) {
    return new Uint8Array(JSON.parse(value));
  }

  if (key.toLowerCase().startsWith("variancethreshold")) {
    return new SwitchboardDecimal(new BN(value.mantissa), value.scale);
  }

  return value;
};

export const buffer2string = (buf: Buffer | string | ArrayBuffer): string => {
  return Buffer.from(buf as any)
    .toString("utf8")
    .replace(/\u0000/g, ""); // removes padding from onchain fixed sized buffers
};
