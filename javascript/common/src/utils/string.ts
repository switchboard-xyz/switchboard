/**
 * Converts to utf-8 encoding and removes null characters.
 *
 * @param buf - the buffer, byte array, or string to convert to utf-8 encoding
 *
 * @returns utf-8 encoded string
 */
export const buf2String = (
  buf: Uint8Array | number[] | string | Buffer
): string =>
  Buffer.from(buf)
    .toString('utf8')
    .replace(/\u0000/g, '')
    .replace(/\0/g, '');

/**
 * Converts to utf-8 encoding and removes null characters.
 *
 * @param buf - the buffer, byte array, or string to convert to utf-8 encoding
 *
 * @returns utf-8 encoded string
 */
export const toUtf8 = buf2String;

/**
 * Determine whether a given string contains only base58 characters
 * @param value - the string to verify
 * @returns boolean indicating if a value is base58 encoded
 */
export const isBase58 = (value: string): boolean =>
  /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);

/**
 * Determine whether a given string contains a secretKey Uint8Array
 * @param value - the string to verify
 * @param length - the minimum number of bytes enclosed in square brackets
 * @returns boolean indicating if a value contains a secretKey in byte array format
 */
export const isBytes = (value: string, length = 31): boolean => {
  const bytesRegexPattern = new RegExp(
    `^\[(\s)?[0-9]+((\s)?,(\s)?[0-9]+){${length},}\]`
  );
  return bytesRegexPattern.test(value);
};

/**
 * Determine whether a given string contains a secretKey Uint8Array
 * @param value - the string to verify
 * @param length - the minimum number of bytes enclosed in square brackets
 * @returns boolean indicating if a value contains a secretKey in byte array format
 */
export const isKeypairString = isBytes;

/**
 * Determine whether a given string is hex encoded
 * @param value - the string to verify
 * @param length - the minimum number of characters following the 0x prefix
 * @returns boolean indicating if a value is a hex encoded string
 */
export const isHex = (value: string, length = 64): boolean => {
  const hexRegexPattern = new RegExp(`^(0x|0X)?[a-fA-F0-9]{${length}}$`);
  return hexRegexPattern.test(value);
};

/**
 * Determine whether a given string is base64 encoded
 * @param value - the string to verify
 * @returns boolean indicating if a value is a base64 encoded string
 */
export const isBase64 = (value: string): boolean => {
  const hexRegexPattern = new RegExp(`^(0x|0X)?[a-fA-F0-9]{${length}}$`);
  return hexRegexPattern.test(value);
};
