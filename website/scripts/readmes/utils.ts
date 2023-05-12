import path from "path";
import fs from "fs";

export function dirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Failed to find dir ${dirPath}`);
  }
  if (!fs.statSync(dirPath).isDirectory()) {
    throw new Error(`Filesystem path ${dirPath} is not a directory`);
  }
}

export function fileExists(filePath: string) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Failed to find file ${filePath}`);
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error(`Filesystem path ${filePath} is not a file`);
  }
}

export function updateTemplate(
  text: string,
  replacer: [string, string]
): string {
  const pattern = new RegExp(
    `<!-- ${replacer[0]} -->\\s*([\\s\\S]*?)\\s*<!-- ${replacer[0]}stop -->`
  );
  return text.replace(pattern, replacer[1]);
}

export function updateTemplateDeep(
  text: string,
  replacers: Array<[string, string]>
): string {
  let updatedText = text;
  for (const [delimiter, replacement] of replacers) {
    updatedText = updateTemplate(updatedText, [delimiter, replacement]);
  }
  return updatedText;
}

export function replaceUsageBlock(text: string, replacement: string): string {
  return updateTemplate(text, ["usage", replacement]);
}

export function getMarkdownAnchorLink(header: string): string {
  const normalizedHeader = header.toLowerCase().replace(/ /g, "-");
  return `#${normalizedHeader}`;
}

export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

/**
 * keys = Object.keys(someObj)
 * sortOrder = ["mainnet", "testnet", "devnet"]
 */
export function sortKeys(keys: string[], sortOrder: string[]): string[] {
  return keys.sort((a, b) => {
    const aPrefixIndex = sortOrder.findIndex((prefix) => a.startsWith(prefix));
    const bPrefixIndex = sortOrder.findIndex((prefix) => b.startsWith(prefix));

    if (aPrefixIndex === bPrefixIndex) {
      return a.localeCompare(b); // default comparison if prefixes are the same
    }

    return aPrefixIndex - bPrefixIndex;
  });
}
