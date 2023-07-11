import { Big } from "big.js";
import BN from "bn.js";
import { Decimal } from "decimal.js";

export interface WeightedValue {
  idx: number;
  value: Big;
  weight: number;
}

function comparator(a: Big, b: Big): number {
  if (a.gt(b)) {
    return 1;
  }
  if (a.lt(b)) {
    return -1;
  }
  return 0;
}

export function median(results: Array<Big>): Big {
  if (!results?.length) throw new Error("Cannot take median of empty array.");

  const arrSort = results.slice().sort(comparator);
  const mid = Math.ceil(arrSort.length / 2);
  if (arrSort.length % 2 === 0) {
    const addition = arrSort[mid].add(arrSort[mid - 1]);
    return safeDiv(addition, new Big(2.0));
  }
  return arrSort[mid - 1];
}

export function weightedAverage(v1: Big, w1: Big, v2: Big, w2: Big): Big {
  return safeDiv(safeMul(v1, w1).add(safeMul(v2, w2)), w1.add(w2));
}

export function weightedMedian(results: Array<WeightedValue>): Big {
  if (!results?.length) throw new Error("Cannot take median of empty array.");
  for (let i = 0; i < results.length; ++i) {
    if (results[i].weight === 0) {
      results[i].weight = 1;
    }
  }

  const arrSort = results.slice().sort((a, b) => comparator(a.value, b.value));
  const halfWeight = arrSort.reduce((sum, { weight }) => weight + sum, 0) / 2;
  let i = 0;
  let w = 0;

  // get the index (i) and total weight (w) of item just above half
  for (; w < halfWeight; ++i) {
    w = w + arrSort[i].weight;
  }

  // if it actually is exactly the half, we need to take the average
  if (w === halfWeight) {
    return weightedAverage(
      arrSort[i - 1].value,
      new Big(arrSort[i - 1].weight),
      arrSort[i].value,
      new Big(arrSort[i].weight)
    );
  }

  // otherwise we return the value
  return arrSort[i - 1].value;
}

export function min(results: Array<Big>): Big {
  if (results.length === 0) {
    throw new Error("Cannot reduce empty array.");
  }
  return results.reduce(
    (val, current) => (val.lt(current) ? val : current),
    results[0]
  );
}

export function max(results: Array<Big>): Big {
  if (results.length === 0) {
    throw new Error("Cannot reduce empty array.");
  }
  return results.reduce(
    (val, current) => (val.gt(current) ? val : current),
    results[0]
  );
}

// This export function returns the ratio between the max value and the min value.
// If we pull data that may be negative, this information is not entirely relevant.
export function variance(results: Array<Big>): Big {
  if (results?.length === 0) {
    throw new Error("Cannot take variance of empty array");
  }
  const arrSort = results
    .slice()
    .sort((n1: Big, n2: Big) => n1.minus(n2).toNumber());
  const min = arrSort[0];
  const max = arrSort[arrSort.length - 1];
  return max.minus(min);
}

////// BIG.JS UTILS

export function safeDiv(number_: Big, denominator: Big, decimals = 20): Big {
  const oldDp = Big.DP;
  Big.DP = decimals;
  const result = number_.div(denominator);
  Big.DP = oldDp;
  return result;
}

export function safeMul(...n: Big[]): Big {
  if (n.length === 0) {
    throw new Error(`need to provide elements to multiply ${n}`);
  }

  let result = new Big(1);
  for (const x of n) {
    result = result.mul(x);
  }

  return result;
}

export function safeNthRoot(big: Big, nthRoot: number, decimals = 20): Big {
  if (nthRoot <= 0) {
    throw new Error(`cannot take the nth root of a negative number`);
  }

  const oldDp = Big.DP;
  Big.DP = decimals;
  const oldPrecision = Decimal.precision;
  Decimal.set({ precision: decimals });

  const decimal = toDecimal(big);
  const frac = new Decimal(1).div(nthRoot);
  const root: Decimal =
    big.s === -1
      ? decimal.abs().pow(frac).mul(new Decimal(big.s))
      : decimal.pow(frac);

  const result: Big = fromDecimal(root);

  Decimal.set({ precision: oldPrecision });
  Big.DP = oldDp;

  return result;
}

export function safeSqrt(n: Big, decimals = 20): Big {
  const oldDp = Big.DP;
  Big.DP = decimals;
  const result = n.sqrt();
  Big.DP = oldDp;
  return result;
}

export function safePow(n: Big, exp: number, decimals = 20): Big {
  const oldDp = Big.DP;
  Big.DP = decimals;

  const oldPrecision = Decimal.precision;
  Decimal.set({ precision: decimals });
  const base = toDecimal(n);
  const value = base.pow(exp);
  const result = fromDecimal(value);

  Decimal.set({ precision: oldPrecision });
  Big.DP = oldDp;

  return result;
}

/**
 * Convert a BN.js to a Big.js
 * @param n - the BN.js object to convert
 * @param decimals - the number of decimal places to scale the BN.js
 *
 * @returns Big.js
 */
export function fromBN(n: BN, decimals = 0): Big {
  let mantissa: BN = new BN(n, 10);
  let s = 1;
  const c: Array<number> = [];
  const ZERO = new BN(0, 10);
  const TEN = new BN(10, 10);
  if (mantissa.lt(ZERO)) {
    s = -1;
    mantissa = mantissa.abs();
  }
  while (mantissa.gt(ZERO)) {
    c.unshift(mantissa.mod(TEN).toNumber());
    mantissa = mantissa.div(TEN);
  }
  const e = c.length - decimals - 1;
  const result = new Big(0);
  if (c.length === 0) {
    return result;
  }
  result.s = s;
  result.c = c;
  result.e = e;
  return result;
}

/**
 * Convert a BigInt to a Big.js
 * @param n - the BigInt to convert
 *
 * @returns Big.js
 */
export function fromBigint(n: bigint): Big {
  const big = new Big(n.toString(10));
  return big;
}

/**
 * Convert a Big.js to a Decimal.js
 * @param big - the Big.js object to convert
 * @param decimals - the number of decimal places
 *
 * @returns Decimal.js
 */
export function toDecimal(big: Big, decimals = 20): Decimal {
  const oldPrecision = Decimal.precision;

  Decimal.set({ precision: decimals });
  const decimal = new Decimal(big.toFixed(decimals, 0));
  Decimal.set({ precision: oldPrecision });

  return decimal;
}

/**
 * Convert a Decimal.js to a Big.js
 * @param decimal - the Decimal.js object to convert
 * @param decimals - the number of decimal places
 *
 * @returns Big.js
 */
export function fromDecimal(decimal: Decimal, decimals = 20): Big {
  if (decimal.isNaN()) {
    throw new TypeError(`cannot convert NaN decimal.js to Big.js`);
  }

  if (!decimal.isFinite()) {
    throw new TypeError(`cannot convert INF decimal.js to Big.js`);
  }

  const big = new Big(decimal.toFixed(decimals, 0));
  return big;
}
