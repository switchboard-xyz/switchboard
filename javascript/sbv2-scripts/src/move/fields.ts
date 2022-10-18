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
  ["string", ["string", "accountid", "coin<cointype>"]],
  ["number", ["i8", "u8", "i16", "u16", "i32", "u32", "f32", "f64"]],
  [
    "uint8array",
    ["uint8array", "uuid", "[u8;32]", "[u8; 32]", "vec<u8>", "vector<u8>"],
  ],
  ["bn", ["i64", "u64", "i128", "u128", "i256", "u256", "bitvector"]],
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

  rawType: string;

  _jsonType: string;
  jsonType: string;
  toJsonMethod(prefix?: string): string;
  fromJsonMethod(prefix?: string): string;

  _moveStructType: string;
  moveStructType: string;
  toMoveStructMethod(prefix?: string): string;
  fromMoveStructMethod(prefix?: string): string;

  isPrimitive: boolean;
  isUint8Array: boolean;
  isBn: boolean;
  isCustom: boolean;
  isHexString: boolean;
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

  abstract _moveStructType: string;
  abstract toMoveStructMethod(): string;
  abstract fromMoveStructMethod(prefix?: string): string;
  get moveStructType(): string {
    return this._moveStructType;
  }

  constructor(readonly _name: string, readonly rawType: string) {
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

  get isHexString(): boolean {
    return !this.isPrimitive && this._fieldType.toLowerCase() === "hexstring";
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
          return new BooleanType(rustName, type);
        case "string":
          return new StringField(rustName, type);
        case "number":
          return new NumberField(rustName, type);
        case "bn":
          return new BnField(rustName, type);
        case "uint8array":
          return new Uint8ArrayType(rustName, type);
        default:
          throw new Error(`Failed to match ExportedType, ${t}`);
      }
    } catch (error) {
      if (
        type.toLowerCase() === "hexstring" ||
        type.toLowerCase() === "address"
      ) {
        return new HexStringField(rustName, type);
      }
      // check if its a map
      const mapMatches = Array.from(
        type.matchAll(
          new RegExp(/^Table<(?<keyKind>[A-z].*),\s?(?<valKind>[A-z].*)>/g)
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
        return new MapType(rustName, type, mapKeyKind, mapValKind);
      }
      // check if its a vector
      const vecMatches = Array.from(
        type.matchAll(new RegExp(/^vector?<(?<kind>[A-z].*)>/g))
      );
      if (vecMatches && vecMatches.length) {
        const vecMatch = vecMatches.shift();
        const vecType = SupportedField.from(rustName, vecMatch.groups["kind"]);
        return new ArrayField(rustName, type, vecType);
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
        return new OptionalType(rustName, type, optionType);
      }

      if (type === "Escrow<CoinType>") {
        return new CustomStructField(rustName, type, "Escrow");
      }

      if (type === "Coin<CoinType>") {
        return new CustomStructField(rustName, type, "Coin");
      }

      // fallthrough, treat as custom type
      return new CustomStructField(rustName, type, type);
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

  toMoveStructMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}`;
  }

  fromMoveStructMethod(prefix = "obj"): string {
    return `${prefix ? prefix + "." : ""}${this.rustName}`;
  }
}

export class BooleanType extends PrimitiveType {
  _fieldType: string = "boolean";
  _jsonType: string = "boolean";
  _moveStructType: string = "boolean";

  constructor(readonly name: string, readonly rawType: string) {
    super(name, rawType);
  }
}

export class NumberField extends PrimitiveType {
  _fieldType: string = "number";
  _jsonType: string = "number";
  _moveStructType: string = "number";

  constructor(readonly name: string, readonly rawType: string) {
    super(name, rawType);
  }
}

export class StringField extends PrimitiveType {
  _fieldType: string = "string";
  _jsonType: string = "string";
  _moveStructType: string = "string";

  constructor(readonly name: string, readonly rawType: string) {
    super(name, rawType);
  }
}

export class BnField extends SupportedField {
  _fieldType: string = "BN";
  _jsonType: string = "string";
  _moveStructType: string = "string";

  constructor(readonly name: string, readonly rawType: string) {
    super(name, rawType);
  }

  toJsonMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toString()`;
  }
  fromJsonMethod(prefix = "obj") {
    return `new BN(${prefix ? prefix + "." : ""}${this.tsName})`;
  }

  toMoveStructMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toString()`;
  }
  fromMoveStructMethod(prefix = "obj") {
    return `new BN(${prefix ? prefix + "." : ""}${this.rustName})`;
  }
}

export class HexStringField extends SupportedField {
  _fieldType: string = "HexString";
  _jsonType: string = "string";
  _moveStructType: string = "string";

  constructor(readonly name: string, readonly rawType: string) {
    super(name, rawType);
  }

  toJsonMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toString()`;
  }
  fromJsonMethod(prefix = "obj") {
    return `HexString.ensure(${prefix ? prefix + "." : ""}${this.tsName})`;
  }

  toMoveStructMethod(prefix = "this") {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toString()`;
  }
  fromMoveStructMethod(prefix = "obj") {
    return `HexString.ensure(${prefix ? prefix + "." : ""}${this.rustName})`;
  }
}

/// Complex

export class OptionalType<T extends ISupportedField> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _moveStructType: string;

  constructor(
    readonly name: string,
    readonly rawType: string,
    readonly innerType: T
  ) {
    super(name, rawType);
    this._jsonType = `${innerType.jsonType} | undefined`;
    this._fieldType = `${innerType.fieldType} | undefined`;
    this._moveStructType = `${innerType.moveStructType} | null`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.toJsonMethod(prefix);
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name}?.toString()`;
    }
    if (this.innerType.isHexString) {
      return `${name}?.toString()`;
    }
    if (this.innerType.isUint8Array) {
      return `${name} ? [...${name}] : undefined`;
    }
    return `${name}${innerMethod ? " ? " + innerMethod : ""} : undefined`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.fromJsonMethod(prefix);
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name} ? new BN(${name}) : undefined`;
    }
    if (this.innerType.isHexString) {
      return `${name} ? HexString.ensure(${name}) : undefined`;
    }
    if (this.innerType.isUint8Array) {
      return `new Uint8Array(${name} ?? [])`;
    }
    return `${name} ? ${innerMethod} : undefined`;
  }

  toMoveStructMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    const innerMethod = this.innerType.toMoveStructMethod(prefix);
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name}?.toNumber()`;
    }
    if (this.innerType.isHexString) {
      return `${name}?.toString()`;
    }
    if (this.innerType.isUint8Array) {
      return `${name} ? [...${name}] : null`;
    }
    return `${name}${innerMethod ? " ? " + innerMethod : ""} : null`;
  }

  fromMoveStructMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    const innerMethod = this.innerType.fromMoveStructMethod(prefix);
    if (this.innerType.isPrimitive) {
      return innerMethod;
    }
    if (this.innerType.isBn) {
      return `${name} ? new BN(${name}) : null`;
    }
    if (this.innerType.isHexString) {
      return `${name} ? HexString.ensure(${name}) : undefined`;
    }
    if (this.innerType.isUint8Array) {
      return `new Uint8Array(${name} ?? [])`;
    }
    return `${name} ? ${innerMethod} : null`;
  }
}

export class CustomStructField extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _moveStructType: string;

  constructor(
    readonly name: string,
    readonly rawType: string,
    readonly customTypeName: string
  ) {
    super(name, rawType);
    this._jsonType = `types.${customTypeName}JSON`;
    this._fieldType = `types.${customTypeName}`;
    this._moveStructType = `types.${customTypeName}MoveStruct`;
  }

  toJsonMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toJSON()`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `types.${this.customTypeName}.fromJSON(${name})`;
  }

  toMoveStructMethod(prefix = "this"): string {
    return `${prefix ? prefix + "." : ""}${this.tsName}.toMoveStruct()`;
  }

  fromMoveStructMethod(prefix = "obj") {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    return `types.${this.customTypeName}.fromMoveStruct(${name})`;
  }
}

export class ArrayField<T extends ISupportedField> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _moveStructType: string;

  constructor(
    readonly name: string,
    readonly rawType: string,
    readonly innerType: T
  ) {
    super(name, rawType);
    this._jsonType = `Array<${innerType.jsonType}>`;
    this._fieldType = `Array<${innerType.fieldType}>`;
    this._moveStructType = `Array<${innerType.moveStructType}>`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => item.toString())`;
    }
    if (this.innerType.isHexString) {
      return `${name}.map((item) => item.toString())`;
    }
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => [...item])`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => item.toJSON())`;
    }
    return `${name}.map((item) => ${this.innerType.toJsonMethod("item")})`;
  }

  toMoveStructMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => [...item])`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => item.toNumber())`;
    }
    if (this.innerType.isHexString) {
      return `${name}.map((item) => item.toString())`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => item.toMoveStruct())`;
    }
    return `${name}.map((item) => ${this.innerType.toMoveStructMethod(
      "item"
    )})`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => new Uint8Array(item))`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => new BN(item))`;
    }
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isHexString) {
      return `${name}.map((item) => HexString.ensure(item))`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => types.${
        (this.innerType as unknown as CustomStructField).customTypeName
      }.fromJSON(item))`;
    }
    return `Array.from(${name}.map((item) => ${this.innerType.fromJsonMethod(
      "item"
    )}))`;
  }

  fromMoveStructMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    if (this.innerType.isUint8Array) {
      return `${name}.map((item) => new Uint8Array(item))`;
    }
    if (this.innerType.isBn) {
      return `${name}.map((item) => new BN(item))`;
    }
    if (this.innerType.isPrimitive) {
      return `${name}.map((item) => item)`;
    }
    if (this.innerType.isHexString) {
      return `${name}.map((item) => HexString.ensure(item))`;
    }
    if (this.innerType.isCustom) {
      return `${name}.map((item) => types.${
        (this.innerType as unknown as CustomStructField).customTypeName
      }.fromMoveStruct(item))`;
    }
    return `Array.from(${name}.map((item) => ${this.innerType.fromMoveStructMethod(
      "item"
    )}))`;
  }
}

export class Uint8ArrayType extends ArrayField<NumberField> {
  _jsonType: string;
  _fieldType: string;
  _moveStructType: string;

  constructor(
    readonly name: string,
    readonly rawType: string,
    readonly innerType = new NumberField(name, rawType)
  ) {
    super(name, rawType, innerType);
    this._jsonType = `Array<number>`;
    this._fieldType = `Uint8Array`;
    this._moveStructType = `string`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `[...${name}]`;
  }

  toMoveStructMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `Buffer.from(${name}).toString("hex")`;
  }

  fromJsonMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `new Uint8Array(${name})`;
  }

  fromMoveStructMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    return `typeof ${name} === "string" ? new Uint8Array(Buffer.from(${name}.slice(2), "hex")) : new Uint8Array(${name})`;
    // return `Array.isArray(${name}) ? new Uint8Array(${name}) : typeof ${name} === "string" ? new Uint8Array(Buffer.from(${name}, "hex")) : new Uint8Array(${name})`;
  }
}

export class MapType<
  T extends ISupportedField,
  U extends ISupportedField
> extends SupportedField {
  _jsonType: string;
  _fieldType: string;
  _moveStructType: string;

  constructor(
    readonly name: string,
    readonly rawType: string,
    readonly key: T,
    readonly value: U
  ) {
    super(name, rawType);
    this._jsonType = `Map<${key.jsonType}, ${value.jsonType}>`;
    this._fieldType = `Map<${key.fieldType}, ${value.fieldType}>`;
    this._moveStructType = `Map<${key.moveStructType}, ${value.moveStructType}>`;
  }

  toJsonMethod(prefix = "this"): string {
    const name = `${prefix ? prefix + "." : ""}${this.tsName}`;
    return `Object.fromEntries(this.${this.tsName})`;
  }

  toMoveStructMethod(prefix = "this"): string {
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

  fromMoveStructMethod(prefix = "obj"): string {
    const name = `${prefix ? prefix + "." : ""}${this.rustName}`;
    if (this.key.isUint8Array) {
      if (this.value.isCustom) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), types.${
          (this.value as unknown as CustomStructField).customTypeName
        }.fromMoveStruct(v)]))`;
      }
      if (this.value.isUint8Array) {
        return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), new Uint8Array(v)]))`;
      }
      return `new Map(Array.from(${name}.entries()).map(([k,v]) => [new Uint8Array(k), ${this.value.fromMoveStructMethod(
        ""
      )}]))`;
    }
    return `new Map(Array.from(${name}.entries()).map(([k,v]) => [k, ${this.value.fromMoveStructMethod(
      "v"
    )}]))`;
  }
}
