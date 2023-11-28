/**
 * Checks if an array of mrEnclaves contains a specific mrEnclave.
 * @param mrEnclaves - The array of mrEnclaves to search in.
 * @param targetMrEnclave - The mrEnclave to search for.
 * @returns True if the target mrEnclave is found in the array, false otherwise.
 */
export function containsMrEnclave(
  mrEnclaves: number[][],
  targetMrEnclave: number[] | Uint8Array
): boolean {
  return mrEnclaves.some((arr) => {
    if (arr.length !== targetMrEnclave.length) return false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== targetMrEnclave[i]) return false;
    }
    return true;
  });
}

/**
 * Filters out empty MrEnclaves from an array of MrEnclaves.
 * @param mrEnclaves - An array of MrEnclaves to filter.
 * @returns An array of non-empty MrEnclaves.
 */
export function filterEmptyMrEnclaves(mrEnclaves: number[][]): Array<number[]> {
  return mrEnclaves.filter((arr) => !arr.every((num) => num === 0));
}

/**
 * Combines two arrays of MrEnclaves and returns a new array with non-empty and non-repeating entries.
 * @param mrEnclavesA - An array of MrEnclaves.
 * @param mrEnclavesB - An array of MrEnclaves.
 * @returns A new MrEnclave array with no empty or repeated elements.
 */
export function combineMrEnclaveSets(
  mrEnclavesA: Array<number[]>,
  mrEnclavesB: Array<number[]>
): Array<number[]> {
  const mrEnclaveSet: Set<string> = new Set([
    ...filterEmptyMrEnclaves(mrEnclavesA).map((arr) =>
      Buffer.from(arr).toString("hex")
    ),
    ...filterEmptyMrEnclaves(mrEnclavesB).map((arr) =>
      Buffer.from(arr).toString("hex")
    ),
  ]);
  return Array.from(mrEnclaveSet).map((hex) => [
    ...new Uint8Array(Buffer.from(hex, "hex")),
  ]);
}
