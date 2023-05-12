import type { SupportedChain } from "../../src/components/Networks/types";
import Networks from "../../src/components/Networks/const";

export type ILanguage = "javascript" | "rust" | "move" | "solidity";

export type PackageType = "client" | "example" | "package";

export interface ISdk {
  chain: SupportedChain;
  path: string;
}

export type LoadedSdk = ISdk & {
  readmeTemplate?: string;
  clients: LoadedClient[];
  examples: LoadedClient[];
};

export interface IPackage {
  name: string;
  description: string;
  language: ILanguage;
  path: string;
  slug?: string;
  id?: string;
}
export type IClient = IPackage;
export type IExample = IPackage;

export interface ILoadedPackage {
  readmeTemplate: string;
  snippets: LoadedUsage[];
}
export type LoadedPackage = Required<IPackage> & ILoadedPackage;
export type LoadedClient = Required<IClient> & ILoadedPackage;
export type LoadedExample = Required<IExample> & ILoadedPackage;

export interface IPackages {
  packages: IPackage[];
}
export interface IClients {
  clients: IClient[];
}
export interface IExamples {
  examples: IExample[];
}

export type IDescription = string | { pre: string; post: string };

export interface IUsage {
  name: string;
  description: IDescription;
  filename: string;
}

export type LoadedUsage = IUsage & {
  code: string;
};

export interface IUsages {
  snippets: IUsage[];
}
