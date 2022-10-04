import { SupportedField } from "./fields";
import fs from "fs";
import path from "path";
import fse from "fs-extra";
import { cleanupString } from "../utilts";

export const IGNORE_STRUCTS = ["State", "EscrowManager"];

export class ProgramStruct {
  constructor(
    readonly name: string,
    readonly fields: SupportedField[],
    readonly traits: string,
    readonly match?: any
  ) {}

  getFieldsInterface(): string {
    return `export interface I${this.name} {\n${this.fields
      .map((f) => `\t${f.tsName}: ${f.fieldType};`)
      .join("\n")}\n}`;
  }

  getConstructor(): string {
    return `constructor(fields: I${this.name}) {\n\t${this.fields
      .map((f) => `\tthis.${f.tsName} = fields.${f.tsName};`)
      .join("\n")}\n}`;
  }

  getJsonInterface(): string {
    return `export interface ${this.name}JSON {\n${this.fields
      .map((f) => `\t${f.tsName}: ${f.jsonType};`)
      .join("\n")}\n}`;
  }

  getToJsonMethod(): string {
    return `toJSON(): ${this.name}JSON {\n\treturn {\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.toJsonMethod()}`)
      .join(",\n\t\t\t")}\n\t}\n}`;
  }

  getFromJsonMethod(): string {
    return `static fromJSON(obj: ${this.name}JSON) {\nreturn new ${
      this.name
    }({\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.fromJsonMethod()}`)
      .join(",\n\t\t\t")}\n})}`;
  }

  getMoveStructInterface(): string {
    return `export interface ${this.name}MoveStruct {\n${this.fields
      .map((f) => `\t${f.rustName}: ${f.moveStructType};`)
      .join("\n")}\n}`;
  }

  getToMoveStructMethod(): string {
    return `toMoveStruct(): ${
      this.name
    }MoveStruct {\n\treturn {\n\t\t${this.fields
      .map((f) => `${f.rustName}: ${f.toMoveStructMethod()}`)
      .join(",\n\t\t\t")}\n\t}\n}`;
  }

  getFromMoveStructMethod(): string {
    return `static fromMoveStruct(obj: ${this.name}MoveStruct) {\nreturn new ${
      this.name
    }({\n\t\t${this.fields
      .map((f) => `${f.tsName}: ${f.fromMoveStructMethod()}`)
      .join(",\n\t\t\t")}\n})}`;
  }

  getClassInterface(): string {
    const interfaces = [
      this.fields.map((f) => f.toReadonlyString()).join("\n\t"),
      this.getConstructor(),
      this.getToJsonMethod(),
      this.getFromJsonMethod(),
      this.getToMoveStructMethod(),
      this.getFromMoveStructMethod(),
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
      this.getMoveStructInterface(),
      this.getClassInterface(),
    ];
    return chunks.join("\n\n");
  }

  toString(): string {
    return this.toStructString();
  }
}

export class ProgramStructs {
  static structRegex = new RegExp(
    /(?:struct)\s(?<name>[A-z]+)(?:\<phantom CoinType\>)?(?:\shas\s)?(?<traits>(?:[a-zA-Z0-9 ]+,)*[a-zA-Z0-9 ]+)\{(?<fields>[^}]+)\}/g
  );
  // static enumFieldRegex = new RegExp(/(?<enum>[A-z]+)\s*={1}\s(?<val>.*)/g);
  static enumFieldRegex = new RegExp(/(?<enum>[A-z]+)/g);

  structs = new Map<string, ProgramStruct>();
  enums = new Map<string, ProgramStruct>();

  constructor(sourceFiles: string[]) {
    // add default structs
    this.structs.set(
      "SignerCapability",
      new ProgramStruct(
        "SignerCapability",
        [SupportedField.from("account", "HexString")],
        "",
        ""
      )
    );
    this.structs.set(
      "Coin",
      new ProgramStruct("Coin", [SupportedField.from("value", "u64")], "", "")
    );

    this.structs.set(
      "EscrowManagerItem",
      new ProgramStruct(
        "EscrowManagerItem",
        [SupportedField.from("handle", "HexString")],
        "",
        ""
      )
    );

    this.structs.set(
      "EscrowManager",
      new ProgramStruct(
        "EscrowManager",
        [SupportedField.from("escrows", "EscrowManagerItem")],
        "",
        ""
      )
    );

    for (const filePath of sourceFiles) {
      const fileString = fs.readFileSync(filePath, "utf-8");
      const matches = fileString.matchAll(ProgramStructs.structRegex);
      if (matches) {
        for (const m of matches) {
          const traits = m.groups["traits"] || "";
          const name = m.groups["name"];
          if (IGNORE_STRUCTS.includes(name)) {
            continue;
          }
          let fields: SupportedField[] = m.groups["fields"]
            .replace(/(pub |[//].*)/g, "")
            .replace(/(\r\n){2,}/g, "")
            .split("\n")
            .map((i) => {
              const trimmed = i.trim();
              if (trimmed.endsWith(",")) {
                return trimmed.slice(0, -1);
              }
              return trimmed;
            })
            .filter(Boolean)
            .map((i) => {
              const [name, type] = i.split(":");
              if (!name || !type) {
                return;
              }
              const typeKind = cleanupString(type);
              // .replace(
              //   / *\<[^)]*\> */g,
              //   ""
              // );
              return SupportedField.from(
                name,
                typeKind === "Coin<CoinType>"
                  ? "Coin"
                  : typeKind === "Escrow<CoinType>"
                  ? "Escrow"
                  : typeKind
              );
            })
            .filter(Boolean);
          const newStruct = new ProgramStruct(name, fields, traits, m);
          this.structs.set(name, newStruct);
        }
      }
    }
  }

  get size(): number {
    return this.structs.size;
  }

  write(outputDirectory: string) {
    // Array.from(this.structs.keys()).forEach((e) => console.log(e));

    fs.mkdirSync(outputDirectory, { recursive: true });
    fse.emptyDirSync(outputDirectory);

    fs.writeFileSync(
      path.join(outputDirectory, "programId.ts"),
      `export const PROGRAM_ID = "0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd";
  export const MAINNET_PROGRAM_ID = PROGRAM_ID;
  export const TESTNET_PROGRAM_ID = "0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd";
  export const DEVNET_PROGRAM_ID = "0xc9b4bb0b1f7a343687c4f8bc6eea36dd2a3aa8d654e640050ab5b8635a6b9cbd";
        `
    );

    fs.writeFileSync(
      path.join(outputDirectory, "index.ts"),
      `export * from "./types/index.js";\nexport * from "./programId.js";`
    );

    const imports = [
      `import BN from "bn.js"; // eslint-disable-line @typescript-eslint/no-unused-vars`,
      `import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars`,
      `import { HexString } from "aptos"; // eslint-disable-line @typescript-eslint/no-unused-vars`,
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
        const errorNames = struct.fields.map((f) => f.rustName);
        const errors = struct.fields.map(
          (f, i) => `
  export class ${f.rustName} extends Error {
    static readonly code = ${6000 + i};
    readonly code = ${6000 + i};
    readonly name = "${f.rustName}";
    readonly msg = "${f.rustName}";
  
    constructor(readonly logs?: string[]) {
      super("${6000 + i}: ${f.rustName}");
    }
  }
          `
        );
        fs.writeFileSync(
          typeFile,
          `export type SwitchboardError = 
    ${errorNames.map((e) => "| " + e).join("\n\t")};
  ${errors.join("")}
  `
        );
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
    // fs.appendFileSync(
    //   path.join(typeDir, "index.ts"),
    //   `\nexport * from "./SignerCapability.js";`
    // );
  }
}
