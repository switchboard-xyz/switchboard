import { SupportedField } from "./types";

export class CustomStructField extends SupportedField {
  tsType: string = "HexString";

  constructor(
    readonly name: string,
    readonly srcType: string,
    readonly customTypeName: string
  ) {
    super(name, srcType);
  }

  json = {
    type: `types.${this.customTypeName}JSON`,
    to: (prefix = "this") => {
      return `${prefix ? prefix + "." : ""}${this.camelCaseName}.toJSON()`;
    },
    from: (prefix = "obj") => {
      const name = `${prefix ? prefix + "." : ""}${this.camelCaseName}`;
      return `types.${this.customTypeName}.fromJSON(${name})`;
    },
    optional: {
      type: "string | undefined",
      to: (prefix = "this") => {
        const name = `${prefix ? prefix + "." : ""}${this.camelCaseName}`;
        const innerMethod = `${prefix ? prefix + "." : ""}${
          this.camelCaseName
        }.toJSON()`;
        return `${name}${innerMethod ? " ? " + innerMethod : ""} : undefined`;
      },
      from: (prefix = "obj") => {
        const name = `${prefix ? prefix + "." : ""}${this.camelCaseName}`;
        const innerMethod = `types.${this.customTypeName}.fromJSON(${name})`;
        return `${name} ? ${innerMethod} : undefined`;
      },
    },
  };

  src = {
    type: "string",
    to: (prefix = "this") => {
      return `${prefix ? prefix + "." : ""}${
        this.camelCaseName
      }.toMoveStruct()`;
    },
    from: (prefix = "obj") => {
      const name = `${prefix ? prefix + "." : ""}${this.name}`;
      return `types.${this.customTypeName}.fromMoveStruct(${name})`;
    },
    optional: {
      type: "string | undefined",
      to: (prefix = "this") => {
        const name = `${prefix ? prefix + "." : ""}${this.camelCaseName}`;
        const innerMethod = `${prefix ? prefix + "." : ""}${
          this.camelCaseName
        }.toMoveStruct()`;
        return `${name}${innerMethod ? " ? " + innerMethod : ""} : null`;
      },
      from: (prefix = "obj") => {
        const name = `${prefix ? prefix + "." : ""}${this.camelCaseName}`;
        const innerMethod = `types.${this.customTypeName}.fromMoveStruct(${name})`;
        return `${name} ? ${innerMethod} : null`;
      },
    },
  };
}
