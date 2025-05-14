import bs58 from 'bs58';
import { Buffer } from 'buffer';

const assertPositiveInteger = (int?: number): void => {
  if (int && (!Number.isInteger(int) || int < 0)) {
    throw new Error('parameter expects a positive integer.');
  }
};

/**
 * Converts to utf-8 encoding and removes null characters.
 *
 * @param buf - the buffer, byte array, or string to convert to utf-8 encoding
 *
 * @returns utf-8 encoded string
 */
export const buf2String = (buf: Uint8Array | Buffer | number[]): string =>
  (Buffer.isBuffer(buf) ? buf : Buffer.from(buf))
    .toString('utf8')
    .split('\0')
    .join('');

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
export const isBytes = (value: string, length?: number): boolean => {
  assertPositiveInteger(length);

  const lengthPattern = length ? `{${length},}` : '*';
  const bytesRegexPattern = new RegExp(
    `^\\[\\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((\\s*,\\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))${lengthPattern})?\\s*\\]$`
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
export const isHex = (value: string, length?: number): boolean => {
  assertPositiveInteger(length);

  const hexRegexPattern = length
    ? new RegExp(`^(0x|0X)?[a-fA-F0-9]{${length ?? 64}}`)
    : new RegExp('^(0x|0X)?[a-fA-F0-9]+$');
  return hexRegexPattern.test(value);
};

/**
 * Determine whether a given string is base64 encoded
 * @param value - the string to verify
 * @returns boolean indicating if a value is a base64 encoded string
 */
export const isBase64 = (value: string, length?: number): boolean => {
  assertPositiveInteger(length);

  const base64RegexPattern = length
    ? new RegExp(
        `^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4}){${length},}$`
      )
    : new RegExp(
        '^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$'
      );
  return base64RegexPattern.test(value);
};

/**
 * Attempt to parse a string into a valid a buffer format.
 *
 * Accepted formats:
 *  - byte array "[1, 2, 3, ...]"
 *  - hex string "0xabc123..."
 *  - base64 string "VGhpcyBpcyBhIHRlc3Qgc3RyaW5nLg=="
 *  - base58 string "12DsSDs23..."
 *
 * @returns the parsed string in Buffer format or undefined if no regex matches found
 */
export const decodeString = (data: string): Buffer | undefined => {
  const trimmed = data.trim();
  if (isBytes(trimmed)) {
    return Buffer.from(new Uint8Array(JSON.parse(trimmed)));
  } else if (isHex(trimmed)) {
    return Buffer.from(trimmed.toLowerCase().replace(/^0x/, ''), 'hex');
  } else if (isBase58(trimmed)) {
    return Buffer.from(bs58.decode(trimmed));
  } else if (isBase64(trimmed)) {
    return Buffer.from(trimmed, 'base64');
  }
  return undefined;
};

export type RawBuffer = string | Buffer | Uint8Array | number[];

export function parseMrEnclave(hexString: string): Uint8Array {
  if (!isHex(hexString, 64)) {
    throw new Error(
      'Not a valid hex string representation of a MRENCLAVE measurement'
    );
  }

  const myUint8Array = new Uint8Array(
    Buffer.from(hexString.replaceAll(/0x|0X/g, ''), 'hex')
  );
  if (myUint8Array.byteLength !== 32) {
    throw new Error(
      'Not a valid hex string representation of a MRENCLAVE measurement'
    );
  }

  return myUint8Array;
}

export function parseRawMrEnclave(
  rawBuffer: RawBuffer,
  addMissingBytes = false
): Uint8Array {
  let myUint8Array: Uint8Array;

  if (typeof rawBuffer === 'string') {
    if (isBytes(rawBuffer, 32)) {
      // check if its a string of bytes '[1,2,3]'
      myUint8Array = new Uint8Array(JSON.parse(rawBuffer));
    } else if (isHex(rawBuffer, 64)) {
      // check if its a hex string '0x1A'
      myUint8Array = new Uint8Array(
        Buffer.from(rawBuffer.replaceAll(/0x|0X/g, ''), 'hex')
      );
    } else if (isBase64(rawBuffer, 32)) {
      // check if its a base64 string
      myUint8Array = new Uint8Array(Buffer.from(rawBuffer, 'base64'));
    } else {
      // assume utf-8
      myUint8Array = new Uint8Array(Buffer.from(rawBuffer, 'utf-8'));
    }
  } else if (rawBuffer instanceof Buffer) {
    myUint8Array = new Uint8Array(rawBuffer);
  } else if (rawBuffer instanceof Uint8Array) {
    myUint8Array = rawBuffer;
  } else {
    // Assume input is number[]
    myUint8Array = new Uint8Array(rawBuffer);
  }

  if (addMissingBytes) {
    // make sure its always 32 bytes
    return new Uint8Array(
      Array.from(myUint8Array).concat(Array(32).fill(0)).slice(0, 32)
    );
  }

  if (myUint8Array.byteLength !== 32) {
    throw new Error(
      'Not a valid hex string representation of a MRENCLAVE measurement'
    );
  }

  return myUint8Array;
}
