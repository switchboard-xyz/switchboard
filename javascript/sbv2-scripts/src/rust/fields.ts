/**
 * Parse fields for a given rust struct/enum and handle any unit conversion logic
 */

export const cleanupString = (
  str: string,
  convertSnakeCase = false
): string => {
  const parsedStr = str
    .trim()
    .replace(/([//].*)/g, "") // remove comments
    .replace(/(^,)|(,$)/g, ""); // remove leading and trailing commas
  if (!convertSnakeCase) {
    return parsedStr;
  }
  return toCamelCase(parsedStr);
};

export const toCamelCase = (str: string): string => {
  if (str.startsWith("_")) {
    return str;
  }
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
};

export type BuiltInField = BooleanType | NumberField | StringField;

export type ExportedTypes = "bool" | "string" | "number" | "uint8array" | "bn";

export const FieldTypeAliases: Map<ExportedTypes, string[]> = new Map([
  ["bool", ["bool"]],
  ["string", ["string", "accountid"]],
  ["number", ["i8", "u8", "i16", "u16", "i32", "u32", "f32", "f64"]],
  [
    "uint8array",
    ["uint8array", "uuid", "address", "[u8;32]", "[u8; 32]", "vec<u8>"],
  ],
  ["bn", ["i64", "u64", "i128", "u128", "i256", "u256"]],
]);

export const FieldTypeMap: Map<string, ExportedTypes> = Array.from(
  FieldTypeAliases.entries()
).reduce((map, t) => {
  const [mappedType, types] = t;
  types.forEach((type) => map.set(type, mappedType));
  return map;
}, new Map());

export interface ISupportedField {
  tsName: string;
  rustName: string;
  _fieldType: string;
  fieldType: string;

  _jsonType: string;
  jsonType: string;
  // getJsonMethod(name: string): string;
  toJsonMethod(prefix?: string): string;
  fromJsonMethod(prefix?: string): string;

  _borshType: string;
  borshType: string;
  // getSerdeMethod(name: string): string;
  toSerdeMethod(prefix?: string): string;
  fromSerdeMethod(prefix?: string): string;

  isPrimitive: boolean;
  isUint8Array: boolean;
  isBn: boolean;
  isCustom: boolean;
}

export abstract class SupportedField implements ISupportedField {
  tsName: string;
  rustName: string;

  abstract _fieldType: string;
  get fieldType() {
    return this._fieldType;
  }

  abstract _jsonType: string;
  abstract toJsonMethod(): string;
  abstract fromJsonMethod(prefix?: string): string;
  get jsonType() {
    return this._jsonType;
  }

  abstract _borshType: string;
  abstract toSerdeMethod(): string;
  abstract fromSerdeMethod(prefix?: string): string;
  get borshType(): string {
    return this._borshType;
  }

  constructor(readonly _name: string) {
    this.rustName = cleanupString(this._name, false);
    this.tsName = cleanupString(this.rustName, true);
  }

  toReadonlyString() {
    return `readonly ${this.toString()}`;
  }
  toString() {
    return `${this.tsName}: ${this.fieldType};`;
  }
  toJsonString() {
    return `${this.tsName}: ${this.jsonType};`;
  }

  get isPrimitive(): boolean {
    return (
      this instanceof BooleanType ||
      this instanceof NumberField ||
      this instanceof StringField
    );
  }

  get isUint8Array(): boolean {
    return !this.isPrimitive && this._fieldType.toLowerCase() === "uint8array";
  }

  get isBn(): boolean {
    return !this.isPrimitive && this._fieldType.toLowerCase() === "bn";
  }

  get isCustom(): boolean {
    return (
      !this.isPrimitive &&
      !this.isUint8Array &&
      !this.isBn &&
      !("innerType" in this)
    );
  }

  static getType(type: string): ExportedTypes {
    if (FieldTypeMap.has(type.toLowerCase())) {
      return FieldTypeMap.get(type.toLowerCase());
    }
    throw new TypeError();
  }

  static from(rustName: string, type: string): SupportedField {
    try {
      const t = SupportedField.getType(type);
      switch (t) {
        case "bool":
          return new BooleanType(rustName);
        case "string":
          return new StringField(rustName);
        case "number":
          return new NumberField(rustName);
        case "bn":
          return new BnField(rustName);
        case "uint8array":
          return new Uint8ArrayType(rustName);
        default:
          throw new Error(`Failed to match ExportedType, ${t}`);
      }
    } catch (error) {
      // check if its a map
      const mapMatches = Array.from(
        type.matchAll(
          new RegExp(
            /^UnorderedMap<(?<keyKind>[A-z].*),\s?(?<valKind>[A-z].*)>/g
          )
        )
      );
      if (mapMatches && mapMatches.length) {
        const mapMatch = mapMatches.shift();
        const mapKeyKind = SupportedField.from(
          rustName,
          mapMatch.groups["keyKind"]
        );
        const mapValKind = SupportedField.from(
          rustName,
          mapMatch.groups["valKind"]
        );
        return new MapType(rustName, mapKeyKind, mapValKind);
      }
      // check if its a vector
      const vecMatches = Array.from(
        type.matchAll(new RegExp(/^Vec(?:tor)?<(?<kind>[A-z].*)>/g))
      );
      if (vecMatches && vecMatches.length) {
        const vecMatch = vecMatches.shift();
        const vecType = SupportedField.from(rustName, vecMatch.groups["kind"]);
        return new ArrayField(rustName, vecType);
      }
      // check if its optional
      const optionMatches = Array.from(
        type.matchAll(new RegExp(/^Option<(?<kind>[A-z].*)>/g))
      );
      if (optionMatches && optionMatches.length) {
        const optionMatch = optionMatches.shift();
        const optionType = SupportedField.from(
          rustName,
          optionMatch.groups["kind"]
        );
        return new OptionalType(rustName, optionType);
      }

      // fallthrough, treat as custom type
      return new CustomStructField(rustName, type);
    }
  }
}

/// Primitive Types

export abstract class PrimitiveType extends SupportedField {
  toJsonMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}`;
  }
  fromJsonMethod(prefix = "obj") {
    return `${prefix ? prefix + "." : ""}${this.tsName}`;
  }

  toSerdeMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}`;
  }

  fromSerdeMethod(prefix = "obj"): string {
    return `${prefix ? prefix + "." : ""}${this.rustName}`;
  }
}

export class BooleanType extends PrimitiveType {
  _fieldType: string = "boolean";
  _jsonType: string = "boolean";
  _borshType: string = "boolean";

  constructor(readonly name: string) {
    super(name);
  }
}

export class NumberField extends PrimitiveType {
  _fieldType: string = "number";
  _jsonType: string = "number";
  _borshType: string = "number";

  constructor(readonly name: string) {
    super(name);
  }
}

export class StringField extends PrimitiveType {
  _fieldType: string = "string";
  _jsonType: string = "string";
  _borshType: string = "string";

  constructor(readonly name: string) {
    super(name);
  }
}

export class BnField extends SupportedField {
  _fieldType: string = "BN";
  _jsonType: string = "string";
  _borshType: string = "number";

  constructor(readonly name: string) {
    super(name);
  }

  toJsonMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toString()`;
  }
  fromJsonMethod(prefix = "obj") {
    return `new BN(${prefix ? prefix + "." : ""}${this.tsName})`;
  }

  toSerdeMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toNumber()`;
  }
  fromSerdeMethod(prefix = "obj") {
    return `new BN(${prefix ? prefix + "." : ""}${this.rustName})`;
  }
}

/// Complex

export class OptionalType<T extends ISupportedField> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _borshType: string;

  constructor(readonly name: string, readonly innerType: T) {
    super(name);
    this._jsonType = `${innerType.jsonType} | undefined`;
    this._fieldType = `${innerType.fieldType} | undefined`;
    this._borshType = `${innerType.borshType} | null`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.toJsonMethod();
    if (this.innerType.isUint8Array) {
      return `${name} ? [...${name}] : undefined`;
    }
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name}?.toString()`;
    }
    return `${name}${innerMethod ? " ? " + innerMethod : ""} : undefined`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.fromJsonMethod();
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isUint8Array) {
      return `new Uint8Array(${name} ?? [])`;
    }
    if (this.innerType.isBn) {
      return `${name} ? new BN(${name}) : undefined`;
    }
    return `${name} ? ${innerMethod} : undefined`;
  }

  toSerdeMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.toSerdeMethod();
    if (this.innerType.isUint8Array) {
      return `${name} ? [...${name}] : null`;
    }
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name}?.toNumber()`;
    }
    return `${name}${innerMethod ? " ? " + innerMethod : ""} : null`;
  }

  fromSerdeMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    const innerMethod = this.innerType.fromSerdeMethod();
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isUint8Array) {
      return `new Uint8Array(${name} ?? [])`;
    }
    if (this.innerType.isBn) {
      return `${name} ? new BN(${name}) : null`;
    }
    return `${name} ? ${innerMethod} : null`;
  }
}

export class CustomStructField extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _borshType: string;

  constructor(readonly name: string, readonly customTypeName: string) {
    super(name);
    this._jsonType = `types.${customTypeName}JSON`;
    this._fieldType = `types.${customTypeName}`;
    this._borshType = `types.${customTypeName}Serde`;
  }

  toJsonMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toJSON()`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `types.${this.customTypeName}.fromJSON(${name})`;
  }

  toSerdeMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toSerde()`;
  }

  fromSerdeMethod(prefix = "obj") {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    return `types.${this.customTypeName}.fromSerde(${name})`;
  }
}

export class ArrayField<T extends ISupportedField> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _borshType: string;

  constructor(readonly name: string, readonly innerType: T) {
    super(name);
    this._jsonType = `Array<${innerType.jsonType}>`;
    this._fieldType = `Array<${innerType.fieldType}>`;
    this._borshType = `Array<${innerType.borshType}>`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => [...item])`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => item.toJSON())`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => item.toString())`;
    }
    return `${name}.map((item) => ${this.innerType.toJsonMethod("item")})`;
  }

  toSerdeMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => [...item])`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => item.toSerde())`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => item.toNumber())`;
    }
    return `${name}.map((item) => ${this.innerType.toSerdeMethod("item")})`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => new Uint8Array(item))`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => new BN(item))`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => types.${
        (this.innerType as unknown as CustomStructField).customTypeName
      }.fromJSON(item))`;
    }
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    return `Array.from(${name}.map((item) => ${this.innerType.fromJsonMethod(
      "item"
    )}))`;
  }

  fromSerdeMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => new Uint8Array(item))`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => new BN(item))`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => types.${
        (this.innerType as unknown as CustomStructField).customTypeName
      }.fromSerde(item))`;
    }
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    return `Array.from(${name}.map((item) => ${this.innerType.fromSerdeMethod(
      "item"
    )}))`;
  }
}

export class Uint8ArrayType extends ArrayField<NumberField> {
  _jsonType: string;
  _fieldType: string;
  _borshType: string;

  constructor(
    readonly name: string,
    readonly innerType = new NumberField(name)
  ) {
    super(name, innerType);
    this._jsonType = `Array<number>`;
    this._fieldType = `Uint8Array`;
    this._borshType = `Array<number>`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `[...${name}]`;
  }

  toSerdeMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `[...${name}]`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `new Uint8Array(${name})`;
  }

  fromSerdeMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    return `new Uint8Array(${name})`;
  }
}

export class MapType<
  T extends ISupportedField,
  U extends ISupportedField
> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _borshType: string;

  constructor(readonly name: string, readonly key: T, readonly value: U) {
    super(name);
    this._jsonType = `Map<${key.jsonType}, ${value.jsonType}>`;
    this._fieldType = `Map<${key.fieldType}, ${value.fieldType}>`;
    this._borshType = `Map<${key.borshType}, ${value.borshType}>`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `Object.fromEntries(this.${this.tsName})`;
  }

  toSerdeMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return this.toJsonMethod();
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.key.isUint8Array) {
      if (this.value.isCustom) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), types.${
          (this.value as unknown as CustomStructField).customTypeName
        }.fromJSON(v)]))`;
      }
      if (this.value.isUint8Array) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), new Uint8Array(v)]))`;
      }
      return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), ${this.value.fromJsonMethod(
        "v"
      )}]))`;
    }
    return `new Map(Array.from(${name}.entries()).map(([k,v]) => [k, ${this.value.fromJsonMethod(
      "v"
    )}]))`;
  }

  fromSerdeMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    if (this.key.isUint8Array) {
      if (this.value.isCustom) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), types.${
          (this.value as unknown as CustomStructField).customTypeName
        }.fromSerde(v)]))`;
      }
      if (this.value.isUint8Array) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), new Uint8Array(v)]))`;
      }
      return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), ${this.value.fromSerdeMethod(
        ""
      )}]))`;
    }
    return `new Map(Array.from(${name}.entries()).map(([k,v]) => [k, ${this.value.fromSerdeMethod(
      "v"
    )}]))`;
  }
}
