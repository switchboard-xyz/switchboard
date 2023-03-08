import bs58 from "bs58";

export const isBase58 = (value: string): boolean => {
  return /^[1-9A-HJ-NP-Za-km-z]*$/.test(value);
};

export const parseNearAddress = (address: string) => {
  if (isBase58(address)) {
    return bs58.decode(address);
  }

  if (Array.isArray(address)) {
    return new Uint8Array(address);
  }

  throw new Error(`Failed to convert near address to Uint8Array, ${address}`);
};
