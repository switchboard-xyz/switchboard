import path from "path";
import fs from "fs";

export function normalizeFilePath(rawPath: string): string {
  return rawPath.startsWith("/") || rawPath.startsWith("C:")
    ? rawPath
    : path.join(process.cwd(), rawPath);
}

export function verifyFileExists(filePath: string): boolean {
  if (fs.existsSync(filePath)) {
    return true;
  }

  return false;
}
