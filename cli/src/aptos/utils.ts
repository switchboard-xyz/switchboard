export const isHex = (hexString: string): boolean => {
  return /^(0x|0X)?[a-fA-F0-9]{64}/g.test(hexString);
};
