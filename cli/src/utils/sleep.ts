/* eslint-disable no-promise-executor-return */
export const sleep = (ms: number): Promise<any> =>
  new Promise((s) => setTimeout(s, ms));

export async function callWithRetry<T>(
  function_: (...args: any[]) => T | Promise<T>,
  depth = 0
): Promise<T> {
  try {
    return function_();
  } catch (error) {
    if (depth > 7) {
      throw error;
    }

    await sleep(2 ** depth * 10);

    return callWithRetry(function_, depth + 1);
  }
}
