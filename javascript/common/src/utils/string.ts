/**
 * Converts to utf-8 encoding and removes null characters.
 */
export const buf2String = (
  buf: Uint8Array | number[] | string | Buffer
): string =>
  Buffer.from(buf)
    .toString("utf8")
    .replace(/\u0000/g, "");

export const toUtf8 = buf2String;
