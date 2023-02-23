import os from "os";
import path from "path";
import xdg from "xdg-basedir";

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

export function getCacheDir() {
  const appName = "@switchboard-xyz";
  const home = os.homedir();

  switch (os.platform()) {
    case "win32":
      return process.env.APPDATA
        ? path.join(process.env.APPDATA, appName)
        : null;
    case "darwin":
      return home ? path.join(home, "Library/Caches", appName) : null;
    case "linux":
      return xdg.cache ? path.join(xdg.cache, appName) : null;
  }

  return null;
}
