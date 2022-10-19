import { cleanupString, toCamelCase } from "./utils";

export interface ITypeTransformer {
  type: string;
  to: (prefix?: string) => string;
  from: (prefix?: string) => string;
}

export interface IType {
  type: string;
  to: (prefix?: string) => string;
  from: (prefix?: string) => string;

  optional: ITypeTransformer;
}

export interface ISupportedField {
  name: string;
  camelCaseName: string;
  type: string; // raw type from the source code
  tsType: string;

  json: IType;
  src: IType;
}

export abstract class SupportedField implements ISupportedField {
  readonly camelCaseName: string;

  abstract tsType: string;

  abstract json: IType;
  abstract src: IType;

  constructor(readonly name: string, readonly type: string) {
    this.camelCaseName = toCamelCase(name);
  }

  toReadonlyString() {
    return `readonly ${this.toString()}`;
  }
  toString() {
    return `${this.camelCaseName}: ${this.tsType};`;
  }
  toJsonString() {
    return `${this.camelCaseName}: ${this.json.type};`;
  }
}
