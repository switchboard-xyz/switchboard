import type { NonEmptyArray } from '../types.js';

class NonEmptyArrayError extends Error {
  constructor(message: string) {
    super(`NonEmptyArrayError: ${message}`);
    this.name = 'NonEmptyArrayError';
    Object.setPrototypeOf(this, NonEmptyArrayError.prototype);
  }
}

/**
 * Type guard that checks if an array contains at least one element
 *
 * @param results - The array to validate
 * @returns A type predicate indicating if the array is non-empty
 *
 * @example
 * ```typescript
 * const items = [1, 2, 3];
 * if (safeValidate(items)) {
 *   // items is typed as NonEmptyArray<number> here
 *   const first = items[0];  // Safe access
 *   items.map(x => x * 2);   // Safe to use array methods
 * }
 *
 * const empty: string[] = [];
 * if (!safeValidate(empty)) {
 *   // Handle empty array case
 * }
 * ```
 *
 * @remarks
 * - Acts as a TypeScript type guard, providing type safety for non-empty arrays
 * - Useful for conditional logic where array emptiness needs to be checked
 * - Does not throw errors, making it safe for validation flows
 * - Checks both for Array type and non-zero length
 */
export function safeValidate<T>(results: T[]): results is NonEmptyArray<T> {
  return Array.isArray(results) && results.length > 0;
}

/**
 * Ensures an array contains at least one element
 *
 * @param results - The array to validate
 * @returns The original array, typed as NonEmptyArray<T>
 * @throws {NonEmptyArrayError} When the array is empty or not an array
 *
 * @example
 * ```typescript
 * // Successful validation
 * const items = validate([1, 2, 3]);
 * // items is now typed as NonEmptyArray<number>
 *
 * // Throws NonEmptyArrayError
 * try {
 *   const empty = validate([]);
 * } catch (error) {
 *   if (error instanceof NonEmptyArrayError) {
 *     // Handle empty array error
 *   }
 * }
 * ```
 *
 * @remarks
 * - Throws a specific NonEmptyArrayError for better error handling
 * - Returns the original array with a more specific type
 * - Useful when you need to ensure an array has elements before processing
 * - Can be used as a runtime type assertion
 */
export function validate<T>(results: Array<T>): NonEmptyArray<T> {
  if (safeValidate(results)) return results;
  throw new NonEmptyArrayError('array is empty');
}
