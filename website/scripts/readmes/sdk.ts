import { IClients, IExamples, ILanguage, LoadedSdk } from "./types";
import path from "path";
import fs from "fs";
import {
  capitalizeWords,
  dirExists,
  fileExists,
  sortKeys,
  updateTemplateDeep,
} from "./utils";
import { execSync } from "child_process";
import { SupportedChain } from "../../src/components/Networks/types";
// import networks from "@switchboard-xyz/common/networks";

import { Example } from "./example";
import { Client } from "./client";
import { Package } from "./package";
import { COMMON_HEADER } from "./const";

export class Sdk implements LoadedSdk {
  private constructor(
    readonly chain: SupportedChain,
    readonly config: any,
    readonly path: string,
    readonly clients: Client[],
    readonly examples: Example[],
    readonly readmeTemplate: string
  ) {}

  public static async load(
    sdkDir: string,
    chain: SupportedChain,
    config: any
  ): Promise<Sdk> {
    dirExists(sdkDir);

    const iClients: IClients = await Package.loadPackages(sdkDir, "client");
    const clients: Client[] = await Promise.all(
      (iClients.clients ?? []).map((iClient) => Client.load(sdkDir, iClient))
    );

    const iExamples: IExamples = await Package.loadPackages(sdkDir, "example");
    const examples: Example[] = await Promise.all(
      (iExamples.examples ?? []).map((iExample) =>
        Example.load(sdkDir, iExample)
      )
    );

    const readmeTemplatePath = path.join(sdkDir, ".docs", "README.template.md");
    fileExists(readmeTemplatePath);
    const readmeTemplate = fs.readFileSync(readmeTemplatePath, "utf-8");

    return new Sdk(chain, config, sdkDir, clients, examples, readmeTemplate);
  }

  get addressesMarkdown(): string {
    const chainConfig = this.config;
    const networkLabels = sortKeys(Object.keys(chainConfig), [
      "mainnet",
      "testnet",
      "devnet",
    ]);
    const networkConfigs: Array<[string, Array<[string, string]>]> =
      networkLabels.map((network): [string, Array<[string, string]>] => {
        const networkConfig = chainConfig[network];
        const addresses: Array<[string, string]> = [];
        addresses.push(["Program ID", networkConfig.programId]);
        if (networkConfig.authority) {
          addresses.push(["Program Authority", networkConfig.authority]);
        }
        const ignoreKeys = ["programId", "authority", "queues", "metadata"];
        const restOfKeys = Object.keys(networkConfig).filter(
          (key) => !ignoreKeys.includes(key)
        );
        restOfKeys.forEach((key) =>
          addresses.push([capitalizeWords(key), networkConfig[key] as string])
        );
        networkConfig.queues.forEach((queue) => {
          addresses.push([queue.name, queue.address]);
        });

        return [capitalizeWords(network), addresses];
      });

    return `The following addresses can be used with the Switchboard deployment on ${capitalizeWords(
      this.chain
    )}
${networkConfigs
  .map(([network, addresses]) => {
    return `### ${network}

|  Account | Address |
| -------- | --------|
${addresses
  .map(([label, address]) => "| " + label + " | `" + address + "` |")
  .join("\n")}

`;
  })
  .join("\n")}
`;
  }

  get readmePath(): string {
    return path.join(this.path, "README.md");
  }

  get clientsMarkdown(): string {
    return `
| **Lang** | **Name** | **Description** |
| ---- | ---- | ----------- |
${this.clients
  .map((pkg) =>
    "| " + pkg.language === "javascript"
      ? "JS"
      : capitalizeWords(pkg.language) +
        " | " +
        `[${pkg.name}](${pkg.path})` +
        " | " +
        pkg.description +
        " |"
  )
  .join("\n")}
`;
  }

  get examplesMarkdown(): string {
    return `
| **Lang** | **Name** | **Description** |
| ---- | ---- | ----------- |
${this.examples
  .map((pkg) =>
    "| " + pkg.language === "javascript"
      ? "JS"
      : capitalizeWords(pkg.language) +
        " | " +
        `[${pkg.name}](${pkg.path})` +
        " | " +
        pkg.description +
        " |"
  )
  .join("\n")}
`;
  }

  get clientsDocs(): string {
    return `
| **Lang** | **Name** | **Description** |
| ---- | ---- | ----------- |
${this.clients
  .map((pkg) =>
    "| " + pkg.language === "javascript"
      ? "JS"
      : capitalizeWords(pkg.language) +
        " | " +
        `[${pkg.name}](${path.join(this.chain, pkg.slug)})` +
        " | " +
        pkg.description +
        " |"
  )
  .join("\n")}
`;
  }

  get examplesDocs(): string {
    return `
| **Lang** | **Name** | **Description** |
| ---- | ---- | ----------- |
${this.examples
  .map((pkg) =>
    "| " + pkg.language === "javascript"
      ? "JS"
      : capitalizeWords(pkg.language) +
        " | " +
        `[${pkg.name}](${path.join(this.chain, pkg.slug)})` +
        " | " +
        pkg.description +
        " |"
  )
  .join("\n")}
`;
  }

  writeReadme() {
    const updatedReadme = updateTemplateDeep(this.readmeTemplate, [
      ["commonheader", COMMON_HEADER],
      ["addresses", this.addressesMarkdown],
      ["clients", this.clientsMarkdown],
      ["examples", this.examplesMarkdown],
    ]);
    fs.writeFileSync(this.readmePath, updatedReadme);
    execSync(`npx prettier --write --parser markdown ${this.readmePath}`, {
      encoding: "utf-8",
    });
    console.log(
      `[SDK][${this.chain}]: Updated README.md @ ${path.relative(
        process.cwd(),
        this.readmePath
      )}`
    );
  }

  write() {
    this.writeReadme();
    this.clients.forEach((pkg) => pkg.write("client"));
    this.examples.forEach((pkg) => pkg.write("example"));

    // TODO: In the SDK repo, write the addresses.yaml and guides.yaml for convienent linking
    // TODO: Maintain an announcement/CHANGELOG per chain in the docs and push to repos
  }

  private writeDocPage() {
    if (this.readmePath) {
      const docDir = path.join(__dirname, "..", "..", "docs", this.chain);
      createChainDir(docDir);

      const docFile = path.join(docDir, "index.mdx");

      const header = `---
sidebar_position: 1
hide_title: true
title: Switchboard x ${capitalizeWords(this.chain)}
sidebar_class_name: "sidebar__${this.chain}"
---

import Networks from "/src/components/Networks/Networks";

`;
      const updatedReadme = updateTemplateDeep(this.readmeTemplate, [
        ["commonheader", COMMON_HEADER],
        ["addresses", `<Networks chain="${this.chain}" />`],
        ["clients", this.clientsDocs],
        ["examples", this.examplesDocs],
      ]);
      fs.writeFileSync(docFile, [header, updatedReadme].join("\n"));
      execSync(`npx prettier --write --parser markdown ${docFile}`, {
        encoding: "utf-8",
      });
      console.log(
        `[SDK][${this.chain}]: Updated DocPage @ ${path.relative(
          process.cwd(),
          docFile
        )}`
      );
    }
  }

  public writeDocs() {
    this.writeDocPage();

    this.clients.forEach((pkg, i) =>
      pkg.writeDocs(this.chain, "client", i + 1)
    );
    this.examples.forEach((pkg, i) =>
      pkg.writeDocs(this.chain, "example", i + 1)
    );
  }
}

function createChainDir(docDir: string) {
  (
    [
      ["SDK", 1, false, path.join(docDir, "sdk")],
      ["Guides", 10, false, path.join(docDir, "guides")],

      ["Clients", 1, false, path.join(docDir, "sdk", "clients")],
      ["Examples", 5, true, path.join(docDir, "sdk", "examples")],
    ] as [string, number, boolean, string][]
  ).forEach(([label, position, collapsible, dir]) => {
    fs.mkdirSync(dir, { recursive: true });
    const categoryJson = path.join(dir, "_category_.json");

    if (!fs.existsSync(categoryJson)) {
      fs.writeFileSync(
        categoryJson,
        JSON.stringify(
          {
            label,
            position,
            collapsible,
          },
          undefined,
          2
        )
      );
    }
  });
}
