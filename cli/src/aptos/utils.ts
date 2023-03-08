export const isHex = (hexString: string): boolean => {
  return /^(0x|0X)?[\dA-Fa-f]{64}/g.test(hexString);
};
