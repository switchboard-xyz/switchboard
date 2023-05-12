import {
  ILanguage,
  IPackages,
  LoadedPackage,
  IPackage,
  PackageType,
  IExamples,
  IClients,
} from "./types";
import { COMMON_HEADER } from "./const";
import path from "path";
import fs from "fs";
import {
  capitalizeWords,
  dirExists,
  fileExists,
  getMarkdownAnchorLink,
  updateTemplateDeep,
} from "./utils";
import { Usage } from "./usage";
import { execSync } from "child_process";
import * as yaml from "js-yaml";
import { readFile } from "fs/promises";

const getId = (name: string) =>
  name
    .replace(/\./g, "_")
    .replace("@switchboard-xyz/", "")
    .replace(/[()<>:"\/\\|?*\x00-\x1F]/g, "")
    .replace(/\s{1,}/g, "-");

export class Package implements LoadedPackage {
  type: PackageType = "package";
  public static type: "client" | "example" | "package" = "package";

  readonly name: string;
  readonly description: string;
  readonly language: ILanguage;
  readonly path: string;
  readonly id: string;
  readonly slug: string;

  constructor(
    readonly dir: string,
    readonly iPackage: IPackage,
    readonly readmeTemplate: string,
    readonly snippets: Usage[]
  ) {
    this.name = iPackage.name;
    this.description = iPackage.description;
    this.language = iPackage.language;
    this.path = iPackage.path;
    this.id = iPackage.id ?? getId(iPackage.name);
    this.slug = path.join("sdk", this.language, iPackage.slug ?? this.id);
  }

  public static async loadTemplate(packageDir: string): Promise<string> {
    try {
      const templatePath = path.join(packageDir, "README.template.md");
      fileExists(templatePath);
      const template = await readFile(templatePath, "utf-8");
      return template;
    } catch (error) {
      return "";
    }
  }

  public static async loadPackages<T extends IPackages | IClients | IExamples>(
    sdkPath: string,
    type: PackageType
  ): Promise<T> {
    const packagesPath = path.join(sdkPath, ".docs", `${type}s.yaml`);
    fileExists(packagesPath);

    const data = yaml.load(fs.readFileSync(packagesPath, "utf-8")) as T;
    return data;
  }

  public static async load(
    solanaSdk: string,
    iPackage: IPackage
  ): Promise<Package> {
    const packageDir = path.join(solanaSdk, iPackage.path);
    dirExists(packageDir);

    const docsDir = path.join(solanaSdk, ".docs", iPackage.path);
    dirExists(docsDir);

    const readmeTemplate = await Package.loadTemplate(docsDir);

    const usages: Usage[] = [];

    try {
      const usageDir = path.join(docsDir, "usage");
      dirExists(usageDir);

      const meta = await Usage.loadUsagesMeta(usageDir);

      for (const iUsage of meta.snippets) {
        try {
          const usage = await Usage.load(
            usageDir,
            iUsage,
            iPackage.name,
            iPackage.language
          );
          usages.push(usage);
        } catch (usageError) {
          console.error(
            `[${capitalizeWords(this.type)}] UsageError: ${usageError}`
          );
        }
      }
    } catch {}

    console.log(
      `[${capitalizeWords(this.type)}][${iPackage.name}]: Found ${
        usages.length
      } code usages`
    );

    return new Package(packageDir, iPackage, readmeTemplate, usages);
  }

  get readmePath() {
    return path.join(this.dir, "README.md");
  }

  get usage(): string {
    return this.snippets.length > 0
      ? this.usageDirectory +
          "\n\n" +
          this.snippets.map((usage) => usage.toString()).join("\n\n")
      : "N/A";
  }

  get usageDirectory(): string {
    const rows = this.snippets.map(
      (usage) => `- [${usage.name}](${getMarkdownAnchorLink(usage.name)})`
    );
    return "**Directory**" + "\n\n" + rows.join("\n");
  }

  public writeReadme(type = this.type) {
    if (this.readmePath) {
      const updatedReadme = updateTemplateDeep(this.readmeTemplate, [
        ["commonheader", COMMON_HEADER],
        ["usage", this.usage],
      ]);

      fs.writeFileSync(this.readmePath, updatedReadme);
      execSync(`npx prettier --write --parser markdown ${this.readmePath}`, {
        encoding: "utf-8",
      });

      console.log(
        `[${capitalizeWords(type)}][${
          this.name
        }]: Updated README.md @ ${path.relative(
          process.cwd(),
          this.readmePath
        )}`
      );
    }
  }

  public write(type = this.type) {
    this.writeReadme(this.type);

    // handle any other packageDir specific write operations
    // maybe updating program IDs
  }

  private writeDocPage(
    chain: string,
    type = this.type,
    sidebarPosition?: number
  ) {
    if (this.readmePath) {
      const docDir = path.join(
        __dirname,
        "..",
        "..",
        "docs",
        chain,
        "sdk",
        `${type}s`
      );
      fs.mkdirSync(docDir, { recursive: true });

      const docFile = path.join(docDir, `${this.id}.mdx`);

      const header = `---
title: "${this.name}"
slug: "/${path.join(chain, this.slug)}"
hide_title: true
sidebar_class_name: "sidebar__${
        this.language === "javascript" ? "typescript" : this.language
      }"${sidebarPosition ? "\nsidebar_position: " + sidebarPosition : ""}
---

  `;

      // TODO: Add function to get setup instructions based on the SDK url, name, and the package dir
      const installIxn = `## Install

Clone the sbv2-solana repository:

\`\`\`bash
git clone https://github.com/switchboard-xyz/sbv2-solana
cd sbv2-solana
cd ${this.path}
\`\`\`
`;

      const updatedReadme = updateTemplateDeep(this.readmeTemplate, [
        ["commonheader", COMMON_HEADER],
        ["install", installIxn],
        ["usage", this.usage],
      ]);

      fs.writeFileSync(docFile, [header, updatedReadme].join("\n"));
      execSync(`npx prettier --write --parser markdown ${docFile}`, {
        encoding: "utf-8",
      });

      console.log(
        `[${capitalizeWords(this.type)}][${
          this.name
        }]: Updated DocPage @ ${path.relative(process.cwd(), docFile)}`
      );
    }
  }

  public writeDocs(chain: string, type = this.type, sidebarPosition?: number) {
    this.writeDocPage(chain, type, sidebarPosition);
  }
}
