import type { ReleaseChannel } from "./types";

import { downloadRelease } from "@terascope/fetch-github-release";
import fs from "fs";
import fetch from "node-fetch";
import os from "os";
import path from "path";
import xdg from "xdg-basedir";

/** Sleep for a given number of milliseconds
 * @param {number} ms number of milliseconds to sleep for
 * @return {Promise<any>} a promise that resolves when the sleep interval has elapsed
 */
export const sleep = (ms: number): Promise<any> =>
  new Promise((s) => setTimeout(s, ms));

/**
 * Normalize a filesystem path and expand characters like '~'
 * @param {string} fsPath the raw filesystem path
 * @return {string} The expanded filesystem path
 */
export function normalizeFsPath(fsPath: string): string {
  return fsPath.startsWith("/") ||
    fsPath.startsWith("C:") ||
    fsPath.startsWith("D:")
    ? fsPath
    : fsPath.startsWith("~")
    ? path.join(os.homedir(), fsPath.slice(1))
    : path.join(process.cwd(), fsPath);
}

/**
 * Gets the cache directory path depending on the platform.
 * @return {string | null} The cache directory path for the current platform or null if the path cannot be determined.
 */
export function getCacheDir(): string | null {
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

/**
 * Downloads a specific version of the sbv2-oracle from GitHub releases and stores it in the cache directory.
 * @param {string} oracleVersion The version of the sbv2-oracle to be downloaded.
 * @return {Promise<string>} A promise that resolves to the output location of the downloaded release.
 *
 * Basic usage example:
 *
 * ```ts
 * import { getNodeImage, ReleaseChannel } from '@switchboard-xyz/oracle';
 *
 * (async () => {
 *   const releaseChannel: ReleaseChannel = 'testnet';
 *   const nodeImage = await getNodeImage(releaseChannel);
 *   console.log(`Latest node image for the ${releaseChannel} release channel: ${nodeImage}`);
 * })();
 * ```
 */
export async function downloadReleaseArtifact(
  oracleVersion: string
): Promise<string> {
  const cacheDir = getCacheDir() ?? process.cwd();
  const outputLocation = path.join(cacheDir, "sbv2-oracle", oracleVersion);
  fs.mkdirSync(outputLocation, { recursive: true });
  if (
    fs.existsSync(outputLocation) &&
    fs.existsSync(path.join(outputLocation, "index.js"))
  ) {
    return outputLocation;
  }
  await downloadRelease(
    "switchboard-xyz",
    "sbv2-oracle-operators",
    outputLocation,
    (release) => release.name === `Sbv2 Oracle ${oracleVersion}`,
    (asset) => asset.name === "sbv2-oracle.zip",
    false,
    false
  );

  if (
    !fs.existsSync(outputLocation) ||
    !fs.existsSync(path.join(outputLocation, "index.js"))
  ) {
    throw new Error(`Failed to fetch the sbv2-oracle`);
  }

  return outputLocation;
}

export type ParsedRelease = {
  imageName: string;
  releaseChannel: "mainnet" | "testnet" | undefined;
  name: string;
  tag_name: string;
  published: number;
};

export type RawRelease = {
  url: string;
  id: number;
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  created_at: string;
  draft?: boolean;
  prerelease?: boolean;
};

/**
 * Fetches an array of ParsedRelease objects from the sbv2-oracle-operators repository releases.
 * @return {Promise<Array<ParsedRelease>>} A promise that resolves to an array of ParsedRelease objects.
 *
 *
 * Basic usage example:
 *
 * ```ts
 * import { fetchReleases, ParsedRelease } from '@switchboard-xyz/oracle';
 *
 * const releases: Array<ParsedRelease> = await fetchReleases();
 * ```
 */
export async function fetchReleases(
  repo = "switchboard-xyz/sbv2-oracle-operators"
): Promise<Array<ParsedRelease>> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/releases`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  const releases: Array<ParsedRelease> = (await response.json()).map(
    (release: RawRelease) => {
      const imageName = release.tag_name.startsWith("oracle/")
        ? release.tag_name.slice(7)
        : release.tag_name;
      const releaseChannel = imageName.startsWith("mainnet-")
        ? "mainnet"
        : imageName.startsWith("testnet-")
        ? "testnet"
        : undefined;
      const myRelease: ParsedRelease = {
        imageName,
        releaseChannel,
        name: release.name,
        tag_name: release.tag_name,
        published: Date.parse(release.published_at),
      };
      return myRelease;
    }
  );

  const sortedReleases = releases.sort((a, b) => b.published - a.published);

  return sortedReleases;
}

/**
 * Retrieves the latest node image for the specified release channel.
 * @param {ReleaseChannel} releaseChannel The release channel ('mainnet', 'testnet', or 'latest').
 * @return {Promise<string>} A promise that resolves to the latest node image for the specified release channel.
 *
 * Basic usage example:
 *
 * ```ts
 * import { getNodeImage, ReleaseChannel } from '@switchboard-xyz/oracle';
 *
 * (async () => {
 *   const releaseChannel: ReleaseChannel = 'testnet';
 *   const nodeImage = await getNodeImage(releaseChannel);
 *   console.log(`Latest node image for the ${releaseChannel} release channel: ${nodeImage}`);
 * })();
 * ```
 */
export async function getNodeImage(
  releaseChannel: ReleaseChannel
): Promise<string> {
  const releases = await fetchReleases();

  if (releases.length === 0) {
    throw new Error(
      `Failed to fetch any releases for switchboard-xyz/sbv2-oracle-operators`
    );
  }

  if (releaseChannel === "latest") {
    return releases[0].imageName;
  }

  let highestMajor = 0;
  let highestMinor = 0;
  let highestPatch = 0;

  for (const release of releases) {
    if (release.releaseChannel !== releaseChannel) {
      continue;
    }

    const version = release.imageName.split("-", 2)[1];
    const [major, minor, patch] = version.split(".", 3).map(Number);

    if (major > highestMajor) {
      highestMajor = major;
      highestMinor = 0;
      highestPatch = 0;
    }

    if (minor > highestMinor) {
      highestMinor = minor;
      highestPatch = patch;
    }

    if (patch > highestPatch) {
      highestPatch = patch;
    }
  }

  if (highestMajor === 0 && highestMinor === 0 && highestPatch === 0) {
    throw new Error(
      `Failed to find the latest release for channel ${releaseChannel}`
    );
  }

  const nodeImage = `${releaseChannel}-${highestMajor}.${highestMinor}.${highestPatch}`;
  return nodeImage;
}
