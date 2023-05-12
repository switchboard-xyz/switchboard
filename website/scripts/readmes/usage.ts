import { IDescription, ILanguage, IUsage, IUsages, LoadedUsage } from "./types";
import path from "path";
import fs from "fs";
import { fileExists } from "./utils";
import * as yaml from "js-yaml";

export class Usage implements LoadedUsage {
  private constructor(
    readonly name: string,
    readonly description: IDescription,
    readonly filename: string,
    readonly code: string,
    readonly libraryName: string,
    readonly language: ILanguage
  ) {}

  public static async loadUsagesMeta(usageDir: string): Promise<IUsages> {
    const usagesMeta = path.join(usageDir, "meta.yaml");
    fileExists(usagesMeta);

    const data = yaml.load(fs.readFileSync(usagesMeta, "utf-8")) as IUsages;
    return data;
  }

  public static async load(
    usageDir: string,
    iUsage: IUsage,
    libraryName: string,
    language: ILanguage
  ): Promise<Usage> {
    if (!iUsage.filename || iUsage.filename === ".") {
      throw new Error(
        `${libraryName} usage filename is empty for usage ${iUsage.name}`
      );
    }
    const usageFile = path.join(usageDir, iUsage.filename);
    fileExists(usageFile);

    const code = fs.readFileSync(usageFile, "utf-8").trim();
    if (!code) {
      throw new Error(`${libraryName} usage is empty for usage ${iUsage.name}`);
    }

    return new Usage(
      iUsage.name,
      iUsage.description,
      iUsage.filename,
      code,
      libraryName,
      language
    );
  }

  toString(): string {
    const pre: string =
      typeof this.description === "string"
        ? this.description
        : "pre" in this.description
        ? this.description.pre
        : "";
    const post =
      typeof this.description !== "string" && "post" in this.description
        ? this.description.post
        : "";

    const isMarkdown =
      this.filename.endsWith(".md") || this.filename.endsWith(".mdx");

    return `### ${this.name}
  
  ${pre}
  
  ${
    isMarkdown
      ? this.code
      : "```" +
        (this.language === "javascript" ? "ts" : this.language) +
        "\n" +
        this.code +
        "\n```"
  }

  
  ${post}
  `;
  }
}
