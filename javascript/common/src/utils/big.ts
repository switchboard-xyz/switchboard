import { SwitchboardDecimal } from '../SwitchboardDecimal';

import Big from 'big.js';
import BN from 'bn.js';
import Decimal from 'decimal.js';

export class BigUtils {
  public static safeDiv(number_: Big, denominator: Big, decimals = 20): Big {
    const oldDp = Big.DP;
    Big.DP = decimals;
    const result = number_.div(denominator);
    Big.DP = oldDp;
    return result;
  }

  public static safeMul(...n: Big[]): Big {
    if (n.length === 0) {
      throw new Error(`need to provide elements to multiply ${n}`);
    }

    let result = new Big(1);
    for (const x of n) {
      result = result.mul(x);
    }

    return result;
  }

  public static safeNthRoot(big: Big, nthRoot: number, decimals = 20): Big {
    if (nthRoot <= 0) {
      throw new Error(`cannot take the nth root of a negative number`);
    }

    const oldDp = Big.DP;
    Big.DP = decimals;

    const decimal = BigUtils.toDecimal(big);
    const frac = new Decimal(1).div(nthRoot);
    const root: Decimal =
      big.s === -1
        ? decimal.abs().pow(frac).mul(new Decimal(big.s))
        : decimal.pow(frac);

    const result: Big = BigUtils.fromDecimal(root);

    Big.DP = oldDp;

    return result;
  }

  public static safeSqrt(n: Big, decimals = 20): Big {
    const oldDp = Big.DP;
    Big.DP = decimals;
    const result = n.sqrt();
    Big.DP = oldDp;
    return result;
  }

  public static safePow(n: Big, exp: number, decimals = 20): Big {
    const oldDp = Big.DP;
    Big.DP = decimals;

    const oldPrecision = Decimal.precision;
    Decimal.set({ precision: decimals });
    const base = BigUtils.toDecimal(n);
    const value = base.pow(exp);
    const result = BigUtils.fromDecimal(value);
    Decimal.set({ precision: oldPrecision });

    Big.DP = oldDp;
    return result;
  }

  public static fromBN(n: BN, decimals = 0): Big {
    const big = new SwitchboardDecimal(n, decimals).toBig();
    return big;
  }

  public static toDecimal(big: Big, decimals = 20): Decimal {
    const decimal = new Decimal(big.toFixed(decimals, 0));
    return decimal;
  }

  public static fromDecimal(decimal: Decimal, decimals = 20): Big {
    if (decimal.isNaN()) {
      throw new TypeError(`cannot convert NaN decimal.js to Big.js`);
    }

    if (!decimal.isFinite()) {
      throw new TypeError(`cannot convert INF decimal.js to Big.js`);
    }

    const big = new Big(decimal.toFixed(decimals, 0));
    return big;
  }
}
