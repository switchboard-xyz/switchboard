/**
 * Converts to utf-8 encoding and removes null characters.
 */
export const buf2String = (
  buf: Uint8Array | number[] | string | Buffer
): string =>
  Buffer.from(buf)
    .toString('utf8')
    .replace(/\u0000/g, '')
    .replace(/\0/g, '');

export const toUtf8 = buf2String;

/** Determine whether a given string contains only base58 characters */
export const isBase58 = (value: string): boolean =>
  /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);

/** Determine whether a given string contains a secretKey Uint8Array */
export const isKeypairString = (value: string): boolean =>
  /^\[(\s)?[0-9]+((\s)?,(\s)?[0-9]+){31,}\]/.test(value);
