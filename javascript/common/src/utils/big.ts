import { NonEmptyArrayUtils } from './index.js';

import type { BigSource } from 'big.js';
import { Big } from 'big.js';

/**
 * Compares two {@link Big} numbers, returning a standard comparison value
 *
 * @param a - First number to compare
 * @param b - Second number to compare
 * @returns Standard comparison value:
 *   - 1 if a > b
 *   - 0 if a = b
 *   - -1 if a < b
 *
 * @example
 * ```typescript
 * const a = new Big('10.5');
 * const b = new Big('10.2');
 *
 * compare(a, b);  // Returns 1
 * compare(b, a);  // Returns -1
 * compare(a, a);  // Returns 0
 * ```
 *
 * @remarks
 * This function provides a standardized way to compare Big numbers,
 * useful for sorting and comparison operations.
 */
export function compare(a: Big, b: BigSource): number {
  return a.cmp(b);
}

/**
 * Returns the smallest value in an array of {@link Big} numbers
 *
 * @param data - Array of Big numbers to find minimum from
 * @returns The minimum value in the array
 * @throws {Error} If array is empty
 *
 * @example
 * ```typescript
 * const numbers = [
 *   new Big('10.5'),
 *   new Big('2.3'),
 *   new Big('15.7')
 * ];
 *
 * const minimum = min(numbers); // Returns Big('2.3')
 * ```
 *
 * @remarks
 * - Accepts a standard array for better ergonomics, with runtime validation ensuring non-emptiness
 * - Single-pass implementation using reduce for efficiency
 * - While the function could use NonEmptyArray<Big>, we prefer accepting standard arrays
 *   to improve usability since runtime validation is required regardless
 */
export function min(data: Big[]): Big {
  NonEmptyArrayUtils.validate(data);
  return data.reduce((val, current) => (val.lt(current) ? val : current));
}

/**
 * Returns the largest value in an array of {@link Big} numbers
 *
 * @param data - Array of Big numbers to find maximum from
 * @returns The maximum value in the array
 * @throws {Error} If array is empty
 *
 * @example
 * ```typescript
 * const numbers = [
 *   new Big('10.5'),
 *   new Big('2.3'),
 *   new Big('15.7')
 * ];
 *
 * const maximum = max(numbers); // Returns Big('15.7')
 * ```
 *
 * @remarks
 * - Accepts a standard array for better ergonomics, with runtime validation ensuring non-emptiness
 * - Single-pass implementation using reduce for efficiency
 * - While the function could use NonEmptyArray<Big>, we prefer accepting standard arrays
 *   to improve usability since runtime validation is required regardless
 */
export function max(data: Big[]): Big {
  NonEmptyArrayUtils.validate(data);
  return data.reduce((val, current) => (val.gt(current) ? val : current));
}

/**
 * Sorts an array of {@link Big} numbers in ascending order
 *
 * @param data - Array of Big numbers to sort
 * @returns A new array with the numbers sorted in ascending order
 *
 * @example
 * ```typescript
 * const numbers = [
 *   new Big('10.5'),
 *   new Big('2.3'),
 *   new Big('15.7')
 * ];
 *
 * const sorted = sort(numbers);
 * // Returns [Big('2.3'), Big('10.5'), Big('15.7')]
 * // Original array remains unchanged
 * ```
 *
 * @remarks
 * - Creates a new array, preserving the original array's order
 * - Uses the standard compare function for consistent sorting behavior
 * - Handles negative numbers and decimals correctly
 * - Time complexity: O(n log n) where n is the array length
 */
export function sort(data: Big[]): Big[] {
  return data.slice().sort(compare);
}

/**
 * Calculates the difference between maximum and minimum values in an array of {@link Big} numbers
 *
 * @param data - Array of Big numbers to calculate range from
 * @returns The range (max - min) of the values
 * @throws {Error} If array is empty
 *
 * @example
 * ```typescript
 * const numbers = [
 *   new Big('10.5'),
 *   new Big('2.3'),
 *   new Big('15.7')
 * ];
 *
 * const range = variance(numbers); // Returns Big('13.4') (15.7 - 2.3)
 * ```
 *
 * @remarks
 * - Accepts a standard array for better ergonomics, with runtime validation ensuring non-emptiness
 * - Uses max() and min() functions for efficient calculation
 * - Performs two passes through the array for better readability and maintainability
 */
export function variance(data: Big[]): Big {
  NonEmptyArrayUtils.validate(data);
  return max(data).minus(min(data));
}

/**
 * Calculates the median value from an array of {@link Big} numbers
 *
 * @param data - Array of Big numbers to calculate median from
 * @returns The median value
 * @throws {Error} If array is empty
 *
 * @example
 * ```typescript
 * // Odd number of elements
 * const numbers1 = [
 *   new Big('10.5'),
 *   new Big('2.3'),
 *   new Big('15.7')
 * ];
 * const median1 = median(numbers1); // Returns Big('10.5')
 *
 * // Even number of elements
 * const numbers2 = [
 *   new Big('2.3'),
 *   new Big('10.5'),
 *   new Big('15.7'),
 *   new Big('20.1')
 * ];
 * const median2 = median(numbers2); // Returns Big('13.1') ((10.5 + 15.7) / 2)
 * ```
 *
 * @remarks
 * - Accepts a standard array for better ergonomics, with runtime validation ensuring non-emptiness
 * - Uses sort() to order values before finding the median
 * - For even-length arrays, returns the average of the two middle values
 * - For odd-length arrays, returns the middle value
 * - Uses safeDiv() for precise division when calculating the average
 */
export function median(data: Big[]): Big {
  NonEmptyArrayUtils.validate(data);
  const sorted = sort(data);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? // If there are an even number of elements, return the average of the two middle values
      safeDiv(sorted[mid - 1].add(sorted[mid]), 2)
    : // If there are an odd number of elements, return the middle value
      sorted[mid];
}

/**
 * Safely performs division with a specified decimal precision using {@link Big} numbers
 *
 * @param value - The dividend (number to be divided)
 * @param dividend - The divisor (number to divide by)
 * @param decimals - The number of decimal places to maintain in the result (default: 20)
 * @returns The result of the division with the specified precision
 *
 * @example
 * ```typescript
 * const value = new Big('10');
 * const result = safeDiv(value, 3);      // Returns Big('3.33333...') with 20 decimals
 * const precise = safeDiv(value, 3, 5);  // Returns Big('3.33333') with 5 decimals
 * ```
 *
 * @remarks
 * - Temporarily modifies the global decimal precision (Big.DP) to perform the division
 * - Restores the original precision after calculation
 * - Ensures accurate division results without affecting other calculations
 * - Useful for operations requiring specific precision like financial calculations
 * - Default precision of 20 decimals is suitable for most use cases
 */
export function safeDiv(value: Big, dividend: BigSource, decimals = 20): Big {
  const oldDp = Big.DP;
  Big.DP = decimals;
  const result = value.div(dividend);
  Big.DP = oldDp;
  return result;
}
