import { NonEmptyArrayUtils } from './index.js';

/**
 * Returns the smallest value in an array of numbers
 *
 * @param data - Array of numbers to find minimum from
 * @returns The minimum value in the array
 * @throws {NonEmptyArrayError} If array is empty
 *
 * @example
 * ```typescript
 * const numbers = [10.5, 2.3, 15.7];
 * const minimum = min(numbers); // Returns 2.3
 * ```
 *
 * @remarks
 * - Uses Math.min() with spread operator for efficient calculation
 * - Validates array is non-empty before processing
 */
export function min(data: number[]): number {
  NonEmptyArrayUtils.validate(data);
  return Math.min(...data);
}

/**
 * Returns the largest value in an array of numbers
 *
 * @param data - Array of numbers to find maximum from
 * @returns The maximum value in the array
 * @throws {NonEmptyArrayError} If array is empty
 *
 * @example
 * ```typescript
 * const numbers = [10.5, 2.3, 15.7];
 * const maximum = max(numbers); // Returns 15.7
 * ```
 *
 * @remarks
 * - Uses Math.max() with spread operator for efficient calculation
 * - Validates array is non-empty before processing
 */
export function max(data: number[]): number {
  NonEmptyArrayUtils.validate(data);
  return Math.max(...data);
}

/**
 * Calculates the median value from an array of numbers
 *
 * @param data - Array of numbers to calculate median from
 * @returns The median value
 * @throws {NonEmptyArrayError} If array is empty
 *
 * @example
 * ```typescript
 * // Odd number of elements
 * const numbers1 = [10.5, 2.3, 15.7];
 * const median1 = median(numbers1); // Returns 10.5
 *
 * // Even number of elements
 * const numbers2 = [2.3, 10.5, 15.7, 20.1];
 * const median2 = median(numbers2); // Returns 13.1 ((10.5 + 15.7) / 2)
 * ```
 *
 * @remarks
 * - Creates a new sorted array, preserving the original array's order
 * - For even-length arrays, returns the average of the two middle values
 * - For odd-length arrays, returns the middle value
 * - Throws NonEmptyArrayError for empty arrays, consistent with min() and max()
 */
export function median(data: number[]): number {
  NonEmptyArrayUtils.validate(data);
  const sortedNumbers = data.slice().sort((a, b) => a - b);
  const midIndex = Math.floor(sortedNumbers.length / 2);
  return sortedNumbers.length % 2 === 0
    ? (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2
    : sortedNumbers[midIndex];
}
