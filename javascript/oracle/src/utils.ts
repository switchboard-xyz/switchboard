import os from "os";
import path from "path";

/** Sleep for a given number of milliseconds
 * @param ms number of milliseconds to sleep for
 * @return a promise that resolves when the sleep interval has elapsed
 */
export const sleep = (ms: number): Promise<any> =>
  new Promise((s) => setTimeout(s, ms));

export function normalizeFsPath(fsPath: string) {
  return fsPath.startsWith("/") ||
    fsPath.startsWith("C:") ||
    fsPath.startsWith("D:")
    ? fsPath
    : fsPath.startsWith("~")
    ? path.join(os.homedir(), fsPath.slice(1))
    : path.join(process.cwd(), fsPath);
}
