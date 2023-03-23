import { ReleaseChannel } from '../dist/cjs/types';

import { downloadRelease } from '@terascope/fetch-github-release';
import fs from 'fs';
import fetch from 'node-fetch';
import os from 'os';
import path from 'path';
import xdg from 'xdg-basedir';

/** Sleep for a given number of milliseconds
 * @param ms number of milliseconds to sleep for
 * @return a promise that resolves when the sleep interval has elapsed
 */
export const sleep = (ms: number): Promise<any> =>
  new Promise(s => setTimeout(s, ms));

export function normalizeFsPath(fsPath: string) {
  return fsPath.startsWith('/') ||
    fsPath.startsWith('C:') ||
    fsPath.startsWith('D:')
    ? fsPath
    : fsPath.startsWith('~')
    ? path.join(os.homedir(), fsPath.slice(1))
    : path.join(process.cwd(), fsPath);
}

export function getCacheDir() {
  const appName = '@switchboard-xyz';
  const home = os.homedir();

  switch (os.platform()) {
    case 'win32':
      return process.env.APPDATA
        ? path.join(process.env.APPDATA, appName)
        : null;
    case 'darwin':
      return home ? path.join(home, 'Library/Caches', appName) : null;
    case 'linux':
      return xdg.cache ? path.join(xdg.cache, appName) : null;
  }

  return null;
}

/** Downloads a github release and stores in the current working directory */
export async function downloadReleaseArtifact(oracleVersion: string) {
  const cacheDir = getCacheDir() ?? process.cwd();
  const outputLocation = path.join(cacheDir, 'sbv2-oracle', oracleVersion);
  fs.mkdirSync(outputLocation, { recursive: true });
  if (
    fs.existsSync(outputLocation) &&
    fs.existsSync(path.join(outputLocation, 'index.js'))
  ) {
    return outputLocation;
  }
  await downloadRelease(
    'switchboard-xyz',
    'sbv2-oracle-operators',
    outputLocation,
    release => release.name === `Sbv2 Oracle ${oracleVersion}`,
    asset => asset.name === 'sbv2-oracle.zip',
    false,
    false
  );

  if (
    !fs.existsSync(outputLocation) ||
    !fs.existsSync(path.join(outputLocation, 'index.js'))
  ) {
    throw new Error(`Failed to fetch the sbv2-oracle`);
  }

  return outputLocation;
}

type ParsedRelease = {
  imageName: string;
  releaseChannel: 'mainnet' | 'testnet' | undefined;
  name: string;
  tag_name: string;
  published: number;
};

type RawRelease = {
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

export async function fetchReleases(): Promise<Array<ParsedRelease>> {
  const response = await fetch(
    `https://api.github.com/repos/switchboard-xyz/sbv2-oracle-operators/releases`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );
  const releases: Array<ParsedRelease> = (await response.json()).map(
    (release: RawRelease) => {
      const imageName = release.tag_name.startsWith('oracle/')
        ? release.tag_name.slice(7)
        : release.tag_name;
      const releaseChannel = imageName.startsWith('mainnet-')
        ? 'mainnet'
        : imageName.startsWith('testnet-')
        ? 'testnet'
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

export async function getNodeImage(releaseChannel: ReleaseChannel) {
  const releases = await fetchReleases();

  if (releases.length === 0) {
    throw new Error(
      `Failed to fetch any releases for switchboard-xyz/sbv2-oracle-operators`
    );
  }

  if (releaseChannel === 'latest') {
    return releases[0].imageName;
  }

  let highestMajor = 0;
  let highestMinor = 0;
  let highestPatch = 0;

  for (const release of releases) {
    if (release.releaseChannel !== releaseChannel) {
      continue;
    }

    const version = release.imageName.split('-', 2)[1];
    const [major, minor, patch] = version.split('.', 3).map(Number);

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
