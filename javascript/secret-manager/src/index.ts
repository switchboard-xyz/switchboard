/**
 * SwitchboardSecretManager
 * - defines a filesystem registry of secret descriptor files that will available to be fetched
 * - secrets partitioned by chain (solana/aptos/near) and optional network
 * - allows users to store secrets in GCP and AWS and use service accounts to manage permissions
 * - secret registry is free of secrets and can be checked into source control
 * - secret manager has the ability to create, read, update (create new, rename old), and delete (remove from registry)
 * - has the ability to backup fs secrets to gcp and/or aws
 */

import dotenv from "dotenv";
dotenv.config();

import os from "os";
import fs from "fs";
import crypto from "crypto";
import path from "path";

import { GcpProvider } from "./gcp";

export interface IFsSecretDescriptor {
  // Local FS path to secret. If moved, keypair path will need to be updated
  fsSecretPath?: string;
}

export interface IGcpSecretDescriptor {
  // GCP resource path
  gcpSecretPath?: string;
}

export interface IAwsSecretDescriptor {
  // AWS arn resource path
  awsSecretPath?: string;
}

export interface ISwitchboardSecretDescriptor {
  chain: string;
  network: string;
  // Version of descriptor schema for upgradeability
  version: number;
  // Easy identifier to quickly load keypair from registry
  name: string;
  // Base58 publicKey, HexString, or Base58 Uint8Array
  identifier: string;
  altIdentifier?: string;
  fs?: IFsSecretDescriptor;
  gcp?: IGcpSecretDescriptor;
  aws?: IAwsSecretDescriptor;
}

export class SwitchboardSecretDescriptor
  implements ISwitchboardSecretDescriptor
{
  constructor(
    readonly chain: string,
    readonly network: string,
    // readonly hash: string,
    readonly version: number,
    readonly name: string,
    readonly identifier: string,
    readonly altIdentifier?: string,
    readonly fs?: IFsSecretDescriptor,
    readonly gcp?: IGcpSecretDescriptor,
    readonly aws?: IAwsSecretDescriptor
  ) {}

  // calculate file hash
  // will be used to determine whether to rewrite data to filesystem. only want to update when needed
  static calcFileHash(fileString: string): string {
    const fileHash = crypto.createHash("sha256");
    fileHash.update(Buffer.from(fileString));
    return fileHash.digest().toString("utf8");
  }

  static readDescriptor(
    descriptorPath: string,
    chain: string,
    network: string
  ): SwitchboardSecretDescriptor {
    const fileString = fs.readFileSync(descriptorPath, "utf8");

    // const fileHashString = SwitchboardSecretDescriptor.calcFileHash(fileString);

    const descriptor: ISwitchboardSecretDescriptor = JSON.parse(fileString);
    if (
      "version" in descriptor &&
      "name" in descriptor &&
      "identifier" in descriptor &&
      ("fs" in descriptor || "gcp" in descriptor || "aws" in descriptor)
    ) {
      return new SwitchboardSecretDescriptor(
        chain,
        network,
        // fileHashString,
        descriptor.version,
        descriptor.name,
        descriptor.identifier,
        descriptor.altIdentifier,
        descriptor.fs,
        descriptor.gcp,
        descriptor.aws
      );
    }

    throw new Error(`Failed to read descriptor at ${descriptorPath}`);
  }

  toJSON() {
    return {
      version: 1,
      name: this.name,
      identifier: this.identifier,
      altIdentifier: this.altIdentifier,
      fs: this.fs,
      gcp: this.gcp,
      aws: this.aws,
    };
  }

  toString() {
    return JSON.stringify(this.toJSON(), undefined, 2);
  }

  getCacheKey() {
    return `${this.chain}::${this.network}::${this.name}`;
  }

  write(filePath: string) {
    const fileString = this.toString();

    // TODO: Check if file exist and has different attributes before writing

    fs.writeFileSync(filePath, fileString);
  }
}

export const DEFAULT_SWITCHBOARD_REGISTRY_LOCATION =
  process.env.SWITCHBOARD_SECRET_REGISTRY ||
  path.join(os.homedir(), ".switchboard-secrets");

export interface ISwitchboardSecretManager {
  registryFsLocation: string;
  _secrets: SwitchboardSecretDescriptor[];
  secrets: SwitchboardSecretDescriptor[];
  _map: Map<string, SwitchboardSecretDescriptor>;
}

export class SwitchboardSecretManager implements ISwitchboardSecretManager {
  secrets: SwitchboardSecretDescriptor[];
  _map: Map<string, SwitchboardSecretDescriptor>;

  constructor(
    readonly registryFsLocation: string,
    readonly _secrets: SwitchboardSecretDescriptor[],
    chain?: string,
    network?: string
  ) {
    this.secrets = _secrets.filter((s) => {
      if (!chain || chain === s.chain) {
        if (!network || network === s.network) {
          return true;
        }
      }
      return false;
    });
    this._map = new Map<string, SwitchboardSecretDescriptor>(
      this.secrets.map((s) => [s.getCacheKey(), s])
    );
  }

  static getSecretPath(registryFsLocation: string, cacheKey: string) {
    const [chain, network, name] = cacheKey.split("::");
    if (!chain || !network || !name) {
      throw new Error(`Failed to get secret path from cache key`);
    }
    return path.join(registryFsLocation, chain, network, `${name}.json`);
  }

  getSecret(secretCacheKey: string): SwitchboardSecretDescriptor | null {
    if (this._map.has(secretCacheKey)) {
      return this._map.get(secretCacheKey);
    }

    return null;
  }

  findSecret(
    name: string,
    chain?: string,
    network?: string
  ): SwitchboardSecretDescriptor | null {
    const findIndex = this._secrets.findIndex((s) => {
      if (s.name === name) {
        if (!chain || s.chain === chain) {
          if (!network || s.network === network) {
            return true;
          }
        }
      }

      return false;
    });
    if (findIndex === -1) {
      return null;
    }

    return this._secrets[findIndex];
  }

  addSecret(descriptor: SwitchboardSecretDescriptor) {
    this._secrets.push(descriptor);
    this._map.set(descriptor.getCacheKey(), descriptor);
    descriptor.write(
      path.join(
        this.registryFsLocation,
        "solana",
        "devnet",
        `${descriptor.name}.json`
      )
    );
    // write to filesystem here?
  }

  static async init(
    registryDirectory?: string
  ): Promise<SwitchboardSecretManager> {
    const registryFsDirectory =
      registryDirectory || DEFAULT_SWITCHBOARD_REGISTRY_LOCATION;

    if (fs.existsSync(registryDirectory)) {
      throw new Error(
        `Switchboard secret registry location already exists, ${registryFsDirectory}`
      );
    }

    const dirs = [
      path.join(registryFsDirectory, "aptos", "devnet"),
      path.join(registryFsDirectory, "solana", "devnet"),
      path.join(registryFsDirectory, "solana", "mainnet"),
      path.join(registryFsDirectory, "near", "testnet"),
      path.join(registryFsDirectory, "near", "mainnet"),
      path.join(registryFsDirectory, "near", "testnet"),
    ];
    dirs.forEach((d) => fs.mkdirSync(d, { recursive: true }));

    return new SwitchboardSecretManager(registryFsDirectory, []);
  }

  static getAllJsonFiles(dirPath: string, arrayOfFiles: string[]): string[] {
    const files = fs.readdirSync(dirPath, "utf8");

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file: string) => {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = SwitchboardSecretManager.getAllJsonFiles(
          dirPath + "/" + file,
          arrayOfFiles
        );
      } else {
        if (file.endsWith(".json") || file.endsWith(".jsonc")) {
          arrayOfFiles.push(path.join(dirPath, "/", file));
        }
      }
    });

    return arrayOfFiles;
  }

  static async loadRegistry(
    chain?: string,
    network?: string,
    registryDirectory?: string
  ): Promise<SwitchboardSecretManager> {
    const registryFsDirectory =
      registryDirectory || DEFAULT_SWITCHBOARD_REGISTRY_LOCATION;
    if (!fs.existsSync(registryFsDirectory)) {
      throw new Error(
        `Switchboard secret registry location does not exist, ${registryFsDirectory}`
      );
    }
    if (!fs.lstatSync(registryFsDirectory).isDirectory()) {
      throw new Error(
        `Switchboard secret registry location is not a directory, ${registryFsDirectory}`
      );
    }

    // TODO: Load the registry by files
    const descriptorFiles = SwitchboardSecretManager.getAllJsonFiles(
      registryFsDirectory,
      []
    );
    const descriptors: {
      filePath: string;
      chain: string;
      network: string;
      name: string;
    }[] = descriptorFiles
      .map((filePath) => {
        const d = filePath.replace(registryFsDirectory, "").slice(1);
        const [network, chain, fileName] = d.split("/");
        if (!network || !chain || !fileName) {
          return undefined;
        }
        return {
          filePath,
          chain,
          network,
          name: fileName.slice(0, fileName.lastIndexOf(".")),
        };
      })
      .filter(Boolean);

    const secrets = descriptors
      .map((d) => {
        try {
          return SwitchboardSecretDescriptor.readDescriptor(
            d.filePath,
            d.chain,
            d.network
          );
        } catch {}
        return undefined;
      })
      .filter(Boolean);

    return new SwitchboardSecretManager(
      registryFsDirectory,
      secrets,
      chain,
      network
    );
  }

  async add(
    secretData: string,
    chain: string,
    network: string,
    name: string,
    identifier: string,
    altIdentifier?: string,
    gcpProject?: string,
    awsProject?: string
  ): Promise<SwitchboardSecretDescriptor> {
    let gcpDescriptor: IGcpSecretDescriptor;
    if (gcpProject) {
      const resourcePath = await GcpProvider.createSecret(
        gcpProject,
        name,
        secretData
      );
      gcpDescriptor = { gcpSecretPath: resourcePath };
    }

    let awsDescriptor: IAwsSecretDescriptor;
    if (awsProject) {
    }

    const descriptor = new SwitchboardSecretDescriptor(
      chain,
      network,
      1,
      name,
      identifier,
      altIdentifier,
      undefined,
      gcpDescriptor,
      awsDescriptor
    );

    this.addSecret(descriptor);

    return descriptor;
  }
}
