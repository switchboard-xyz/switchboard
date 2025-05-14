import { SwitchboardDecimal } from '../SwitchboardDecimal.js';

import { buf2String } from './string.js';

import { Big } from 'big.js';
import BN from 'bn.js';

function big2NumberOrString(big: Big): number | string {
  const oldStrict = Big.strict;
  Big.strict = true;
  try {
    const num = big.toNumber();
    Big.strict = oldStrict;
    return num;
  } catch {} // eslint-disable-line no-empty
  Big.strict = oldStrict;
  return big.toString();
}

/**
 * Utility function for JSON.stringify to convert common types
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonReplacers(key: string, value: any): any {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value;
  }

  // bigint
  if (typeof value === 'bigint') {
    return value.toString();
  }

  // BN
  if (BN.isBN(value)) {
    return value.toNumber();
  }

  // name and metadata replacers
  if (key === 'name' || key === 'metadata') {
    if (value instanceof Uint8Array || Buffer.isBuffer(value)) {
      return buf2String(value);
    }
  }

  // Switchboard Decimal
  if (
    value instanceof SwitchboardDecimal ||
    (value &&
      typeof value === 'object' &&
      'mantissa' in value &&
      'scale' in value)
  ) {
    const swbDecimal = new SwitchboardDecimal(value.mantissa, value.scale);
    return big2NumberOrString(swbDecimal.toBig());
  }

  // big.js
  if (value instanceof Big) {
    return big2NumberOrString(value);
  }

  // pubkey
  if ('toBase58' in value && typeof value.toBase58 === 'function') {
    return value.toBase58();
  }

  // toString
  if ('toString' in value && typeof value.toString === 'function') {
    return value.toString();
  }

  // Fall through for nested objects
  return value;
}
