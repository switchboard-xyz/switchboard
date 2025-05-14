class TimeoutError extends Error {
  private static defaultMessage = (ms: number) =>
    `timed out after ${Math.round(ms / 1000).toFixed(3)} seconds`;

  constructor(
    readonly ms: number,
    msg?: string
  ) {
    super(`TimeoutError: ${msg ?? TimeoutError.defaultMessage(ms)}`);
    this.name = 'TimeoutError';
    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

/**
 * Creates a promise that resolves after a specified delay
 *
 * @param ms - The number of milliseconds to pause execution
 * @returns A Promise that resolves after the specified delay
 *
 * @example
 * ```typescript
 * // Pause execution for 2 seconds
 * await sleep(2000);
 *
 * // Use in an async function
 * async function example() {
 *   console.log('Start');
 *   await sleep(1000);
 *   console.log('1 second later');
 * }
 * ```
 *
 * @remarks
 * This is a utility function for creating delays in async code.
 * It's useful for rate limiting, creating deliberate pauses, or testing timing-dependent code.
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise(s => setTimeout(s, ms));
}

/**
 * Type guard that checks if a PromiseSettledResult was fulfilled successfully
 *
 * @param item - A PromiseSettledResult to check
 * @returns A type predicate indicating if the promise was fulfilled
 *
 * @example
 * ```typescript
 * const promises = await Promise.allSettled([
 *   Promise.resolve(1),
 *   Promise.reject('error')
 * ]);
 *
 * // Filter to get only successful results with type safety
 * const fulfilled = promises.filter(assertFulfilled);
 * // fulfilled is now PromiseFulfilledResult<number>[]
 *
 * // Access the values safely
 * const values = fulfilled.map(result => result.value);
 * ```
 *
 * @remarks
 * This is a TypeScript type guard that helps narrow down the type of a PromiseSettledResult
 * to PromiseFulfilledResult. It's particularly useful when working with Promise.allSettled()
 * and you need to filter out rejected promises while maintaining type safety.
 */
export function assertFulfilled<T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> {
  return item.status === 'fulfilled';
}

/**
 * Returns a promise that resolves successfully if completed before the given timeout, otherwise rejects with a TimeoutError
 *
 * @param ms - The number of milliseconds to wait before timing out
 * @param promise - A single Promise or array of Promises to wait for
 * @param options - Configuration options
 * @param options.timeoutError - Optional custom error message for timeout
 * @param options.signal - Optional AbortSignal to cancel the operation
 * @returns A Promise that resolves with the result of the input promise(s)
 * @throws {TimeoutError} If the promise(s) don't complete within the specified timeout
 * @throws {Error} If the operation is cancelled via AbortSignal
 *
 * @example
 * ```typescript
 * // Single promise with 5 second timeout
 * const result = await promiseWithTimeout(5000, fetchData());
 *
 * // Multiple promises with custom error message
 * const results = await promiseWithTimeout(
 *   10000,
 *   [fetchData1(), fetchData2()],
 *   { timeoutError: "Failed to fetch data in time" }
 * );
 *
 * // With abort signal
 * const controller = new AbortController();
 * const result = await promiseWithTimeout(5000, fetchData(), {
 *   signal: controller.signal
 * });
 * // Later: controller.abort();
 * ```
 *
 * @remarks
 * - Uses Promise.race() internally to compete between the actual promise(s) and a timeout promise
 * - The timeout promise uses unref() to avoid keeping the Node.js process alive
 * - Supports cancellation via AbortSignal
 * - Cleans up resources when the promise resolves, rejects, or is cancelled
 */
export async function promiseWithTimeout<T>(
  ms: number,
  promise: Promise<T> | Array<Promise<T>>,
  options: {
    /** Custom error message for timeout */
    timeoutError?: string;
    /** Optional AbortSignal to cancel the timeout */
    signal?: AbortSignal;
  } = {}
): Promise<T> {
  const { timeoutError, signal } = options;

  const cancelledError = new TimeoutError(ms, 'Operation cancelled');
  if (signal?.aborted) throw cancelledError;

  const promises = Array.isArray(promise) ? promise : [promise];

  return new Promise<T>((resolve, reject) => {
    // Setup timeout timer
    const timeoutId = setTimeout(
      () => reject(new TimeoutError(ms, timeoutError)),
      ms
    );
    if (typeof timeoutId.unref === 'function') timeoutId.unref();

    // Handle abort signal
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timeoutId);
        reject(cancelledError);
      },
      { once: true }
    );

    // Race the promises
    Promise.race<T>(promises)
      .then(result => resolve(result))
      .catch(error => reject(error))
      .finally(() => clearTimeout(timeoutId));
  });
}

/**
 * Executes an async function with backoff retry logic. If the function fails, it will be retried
 * with increasing delays between attempts.
 *
 * @param fn The async function to execute
 * @param attempts Maximum number of retry attempts (default: 3)
 * @param backoffMs Base delay in milliseconds for exponential backoff (default: 150)
 * @param backoffType The type of backoff to use (default: 'exponential')
 * @returns Promise resolving to the function's result
 * @throws The last error encountered if all attempts fail
 *
 * @example
 * // With default parameters (3 attempts, 150ms base):
 * // 1st try: immediate
 * // 1st retry: 300ms delay (2^1 * 150)
 * // 2nd retry: 600ms delay (2^2 * 150)
 * // 3rd retry: 1200ms delay (2^3 * 150)
 */
export const promiseWithRetry = <T>(
  /** The async function to execute with retry logic */
  fn: () => Promise<T>,
  /** Maximum number of retry attempts */
  attempts = 3,
  /** Base delay in milliseconds. Actual delay increases exponentially: (2^attempt * baseMs) */
  backoffMs = 150,
  /** The type of backoff to use */
  backoffType: 'exponential' | 'linear' = 'exponential'
): Promise<T> => {
  const _internalPromiseWithRetry = async (attempt: number): Promise<T> =>
    await Promise.resolve()
      .then(fn)
      .catch(async error => {
        if (attempt >= attempts) throw error;
        const backoffMultiplier =
          backoffType === 'exponential' ? Math.pow(2, attempt) : attempt;
        await sleep(backoffMultiplier * backoffMs);
        return _internalPromiseWithRetry(attempt + 1);
      });
  return _internalPromiseWithRetry(0);
};
