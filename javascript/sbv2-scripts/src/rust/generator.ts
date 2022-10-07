import { SupportedField } from "./fields";
import fs from "fs";
import path from "path";
import fse from "fs-extra";
import { cleanupString } from "../utilts";

export class ProgramStruct {
  constructor(
    readonly name: string,
    readonly fields: SupportedField[],
    readonly kind: "struct" | "enum",
    readonly traits: string,
    readonly match?: any
  ) {}

  getFieldsInterface(): string {
    return `export interface I${this.name} {\n${this.fields
      .map((f) => `\t${f.tsName}: ${f.fieldType};`)
      .join("\n")}\n}`;
  }

  getJsonInterface(): string {
    return `export interface ${this.name}JSON {\n${this.fields
      .map((f) => `\t${f.tsName}: ${f.jsonType};`)
      .join("\n")}\n}`;
  }

  getSerdeInterface(): string {
    return `export interface ${this.name}Serde {\n${this.fields
      .map((f) => `\t${f.rustName}: ${f.borshType};`)
      .join("\n\t")}\n}`;
  }

  getConstructor(): string {
    return `constructor(fields: I${this.name}) {\n\t${this.fields
      .map((f) => `\tthis.${f.tsName} = fields.${f.tsName};`)
      .join("\n")}\n}`;
  }

  getToJsonMethod(): string {
    return `toJSON(): ${this.name}JSON {\n\treturn {\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.toJsonMethod()}`)
      .join(",\n\t\t\t")}\n\t}\n}`;
  }

  getToSerdeJsonMethod(): string {
    return `toSerde() :${this.name}Serde {\n\treturn {\n\t\t${this.fields
      .map((f) => `${f.rustName}: ${f.toSerdeMethod() ?? f.toJsonMethod()}`)
      .join(",\n\t\t\t")}\n}}`;
  }

  getFromJsonMethod(): string {
    return `static fromJSON(obj: ${this.name}JSON) {\nreturn new ${
      this.name
    }({\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.fromJsonMethod()}`)
      .join(",\n\t\t\t")}\n})}`;
  }

  getFromSerdeJsonMethod(): string {
    return `\nstatic fromSerde(obj: ${this.name}Serde) {\nreturn new ${
      this.name
    }({\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.fromSerdeMethod()}`)
      .join(",\n\t\t\t")}\n})}`;
  }

  getClassInterface(): string {
    const interfaces = [
      this.fields.map((f) => f.toReadonlyString()).join("\n\t"),
      this.getConstructor(),
      this.getToJsonMethod(),
      this.getToSerdeJsonMethod(),
      this.getFromJsonMethod(),
      this.getFromSerdeJsonMethod(),
    ];
    return `export class ${this.name} implements I${
      this.name
    } {\n${interfaces.join("\n\n")}\n}`;
  }

  getRustString(): string {
    return `${this.traits}pub struct ${this.name} {\n${this.fields
      .map((f) => JSON.stringify(f, undefined, 2))
      .join("\n")}\n}`;
  }

  toStructString(): string {
    const chunks: string[] = [
      "",
      this.getFieldsInterface(),
      this.getJsonInterface(),
      this.getSerdeInterface(),
      this.getClassInterface(),
    ];
    return chunks.join("\n\n");
  }

  toEnumString(): string {
    return `
  export enum ${this.name}Enum {
  \t${this.fields.map((f, i) => f.rustName + " = " + i).join(",\n\t")}
  }
  export interface ${this.name}JSON {
  \tkind: ${this.fields.map((f) => '"' + f.rustName + '"').join(" | ")};
  }
  export class ${this.name} {
  
    constructor(readonly obj: ${this.name}Enum) {}
  
    toJSON() {
      return {
        kind: ${this.name}Enum[this.obj] as any
      }
    }
  
    static fromJSON(obj: ${this.name}JSON) {
      return new ${this.name}(obj as any)
    }
  }
  
  `;
  }

  toString(): string {
    if (this.kind === "enum") {
      return this.toEnumString();
    }
    return this.toStructString();
  }
}

export class ProgramStructs {
  static structRegex = new RegExp(
    /(?<traits>.*\s.*[\S\r\n]*)(?:pub)\s(?<kind>struct|enum)\s(?<name>[A-z]+)\s{(?<fields>[^\(]*)}/g
  );
  // static enumFieldRegex = new RegExp(/(?<enum>[A-z]+)\s*={1}\s(?<val>.*)/g);
  static enumFieldRegex = new RegExp(/(?<enum>[A-z]+)/g);

  structs = new Map<string, ProgramStruct>();
  enums = new Map<string, ProgramStruct>();

  constructor(sourceFiles: string[]) {
    for (const filePath of sourceFiles) {
      const fileString = fs.readFileSync(filePath, "utf-8");
      const matches = fileString.matchAll(ProgramStructs.structRegex);
      if (matches) {
        for (const m of matches) {
          // traits are 50/50, regex needs to be updated to capture multi-line traits
          const traits = m.groups["traits"] || "";
          const kind = m.groups["kind"] as "struct" | "enum";
          const name = m.groups["name"];
          let fields: SupportedField[] = [];
          if (kind === "struct") {
            fields.push(
              ...m.groups["fields"]
                .replace(/(pub |[//].*)/g, "")
                .replace(/(\r\n){2,}/g, "")
                .split("\n")
                .map((f) => {
                  const [name, type] = f.split(":");
                  if (!name || !type) {
                    return undefined;
                  }
                  const typeName = cleanupString(name, true);
                  const typeKind = cleanupString(type);
                  return SupportedField.from(name.trim(), typeKind);
                })
                .filter(Boolean)
            );
          } else if (kind === "enum") {
            const rows = m.groups["fields"]
              .split("\n")
              .map((r) => cleanupString(r, false))
              .filter(Boolean);
            for (const enumField of rows) {
              const matches = Array.from(
                enumField.matchAll(ProgramStructs.enumFieldRegex)
              );
              for (const match of matches) {
                const enumName = cleanupString(match.groups["enum"]);
                fields.push(SupportedField.from(enumName, "enum"));
              }
            }
          }
          const newStruct = new ProgramStruct(name, fields, kind, traits, m);
          this.structs.set(name, newStruct);
        }
      }
    }
  }

  get size(): number {
    return this.structs.size;
  }

  writeErrorFile(errorStruct: ProgramStruct, outputFile: string) {
    const errorTypes = errorStruct.fields.map((f) => f.rustName);

    const importsCodeBlock = [
      `import { FinalExecutionOutcome } from "near-api-js/lib/providers";`,
      `import { Action } from "near-api-js/lib/transaction.js";`,
    ].join("\n");

    const enumCodeBlock = `export enum SwitchboardErrorEnum {\n\t${errorTypes
      .map((e) => `${e} = "${e}",`)
      .join(
        "\n\t"
      )}\n}\nexport const SwitchboardErrorTypes: string[] = Object.keys(\n\tSwitchboardErrorEnum\n);`;

    const typeCodeBlock = `export type SwitchboardErrorType = ${errorTypes.join(
      "\n\t|"
    )};`;

    const switchboardErrorCodeBlock = `export abstract class SwitchboardError extends Error {
  readonly action?: Action;
  readonly logs?: string[];
  readonly txnReceipt: FinalExecutionOutcome;
  
  constructor(
    readonly code: number,
    readonly name: string,
    txnReceipt: FinalExecutionOutcome,
    readonly msg?: string,
    action?: Action,
    logs?: string[]
  ) {
    super(\`\${code}: \${name}\${msg ? " - " + msg : ""}\`);
    this.action = action;
    this.logs = logs;
    this.txnReceipt = txnReceipt;
  }

  static fromErrorType(
    errorType: string,
    txnReceipt: FinalExecutionOutcome,
    action?: Action,
    logs?: string[]
  ): SwitchboardError {
    switch (errorType) {
  ${errorTypes
    .map((e) => `case "${e}": return new ${e}(txnReceipt, action, logs);`)
    .join(
      "\n"
    )}\ndefault: return new Generic(txnReceipt, action, logs);\n}\n}\n}`;

    const errorCodeBlocks = errorTypes.map(
      (
        errorName: string,
        index: number
      ) => `export class ${errorName} extends SwitchboardError {
  static readonly code = ${6000 + index};

  constructor(
    readonly txnReceipt: FinalExecutionOutcome,
    readonly action?: Action,
    readonly logs?: string[]
  ) {
    super(${6000 + index}, "${errorName}", txnReceipt, undefined, action, logs);
  }
}`
    );

    const errorFileString = [
      importsCodeBlock,
      enumCodeBlock,
      typeCodeBlock,
      switchboardErrorCodeBlock,
      errorCodeBlocks.join("\n\n"),
    ].join("\n\n");

    fs.writeFileSync(outputFile, errorFileString);
  }

  write(outputDirectory: string) {
    // Array.from(this.structs.keys()).forEach((e) => console.log(e));

    fs.mkdirSync(outputDirectory, { recursive: true });
    fse.emptyDirSync(outputDirectory);

    fs.writeFileSync(
      path.join(outputDirectory, "programId.ts"),
      `export const PROGRAM_ID = "switchboard-v2.near";
  export const MAINNET_PROGRAM_ID = PROGRAM_ID;
  export const TESTNET_PROGRAM_ID = "switchboard-v2.testnet";
  export const LOCALNET_PROGRAM_ID = "switchboard-v2.test.near";
        `
    );

    fs.writeFileSync(
      path.join(outputDirectory, "index.ts"),
      `export * from "./types/index.js";\nexport * from "./programId.js";`
    );

    const imports = [
      `import BN from "bn.js"; // eslint-disable-line @typescript-eslint/no-unused-vars`,
      `import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars`,
    ];

    const typeDir = path.join(outputDirectory, "types");
    if (!fs.existsSync(typeDir)) {
      fs.mkdirSync(typeDir);
    }

    for (const [structName, struct] of this.structs.entries()) {
      const typeFile = path.join(outputDirectory, "types", `${structName}.ts`);

      // TODO: read in existing generated output and read content to re-add to the template
      // use flag like <<<< START >>>> & <<<<< END >>>>> to track boundaries

      try {
        const now = new Date();
        fs.utimesSync(typeFile, now, now);
      } catch (err) {
        fs.closeSync(fs.openSync(typeFile, "w"));
      }

      // very janky
      if (structName === "Error") {
        this.writeErrorFile(struct, typeFile);
      } else {
        fs.writeFileSync(typeFile, imports.join("\n") + "\n");
        fs.appendFileSync(typeFile, struct.toString());
      }
    }

    fs.writeFileSync(
      path.join(typeDir, "index.ts"),
      Array.from(this.structs.keys())
        .map((s) => `export * from "./${s}.js";`)
        .join("\n")
    );
    fs.appendFileSync(
      path.join(typeDir, "index.ts"),
      `\nexport * from "./Generics.js";\n`
    );
    fs.writeFileSync(
      path.join(typeDir, "Generics.ts"),
      `export type SnakeToCamelCase<S extends string> =
    S extends \`\${infer T}_\${infer U}\`
    ? \`\${T}\${Capitalize<SnakeToCamelCase<U>>}\`
    : S;
    
  export type CamelToSnakeCase<S extends string> = S extends "_ebuf"
    ? "_ebuf"
    : S extends "_emap"
    ? "_emap"
    : S extends \`\${infer T}\${infer U}\`
    ? \`\${T extends Capitalize<T> ? "_" : ""}\${Lowercase<T>}\${CamelToSnakeCase<U>}\`
    : S;
      `
    );
  }
}
