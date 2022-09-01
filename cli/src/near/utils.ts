import bs58 from "bs58";

export const isBase58 = (value: string): boolean => {
  return /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);
};

export const parseNearAddress = (address: string) => {
  if (isBase58(address)) {
    return bs58.decode(address);
  } else if (Array.isArray(address)) {
    return new Uint8Array(address);
  }

  throw new Error(`Failed to convert near address to Uint8Array, ${address}`);
};
