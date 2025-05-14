import type BN from 'bn.js';

const padTime = (number_: number): string =>
  number_.toString().padStart(2, '0');

/**
 *  Convert a Date object to YYYY-MM-DD HH:mm:ss
 *
 *  TODO: Remove this when pulled out from old code.
 */
export function toDateTimeString(d: Date | undefined): string {
  if (d)
    return `${d.getFullYear()}-${padTime(d.getMonth() + 1)}-${padTime(
      d.getDate()
    )} ${padTime(d.getHours())}:${padTime(d.getMinutes())}:${padTime(
      d.getSeconds()
    )} L`;
  return '';
}

/**
 *  Convert an BN timestamp to YYYY-MM-DD HH:mm:ss
 *
 *  TODO: Remove this when pulled out from old code.
 */
export function BNtoDateTimeString(ts: BN): string {
  try {
    return toDateTimeString(new Date(ts.toNumber() * 1000));
  } catch {
    return 'N/A';
  }
}
