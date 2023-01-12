import path from "path";
import fs from "fs";
import os from "os";

export function normalizeFilePath(rawPath: string): string {
  return rawPath.startsWith("/") || rawPath.startsWith("C:")
    ? rawPath
    : rawPath.startsWith("~")
    ? path.join(os.homedir(), rawPath.slice(1))
    : path.join(process.cwd(), rawPath);
}

export function verifyFileExists(filePath: string): boolean {
  if (fs.existsSync(filePath)) {
    return true;
  }

  return false;
}
