import type {
  ICustomIdl,
  IErrorDescription,
  IEventDescription,
  IFieldsDescription,
  IProgramStruct,
  IScriptDescription,
  ITypeDescription,
} from './types';

import fs from 'fs';

/** Remap types to a TS equivalent */
const typeRemapper = new Map<string, string>([
  ['address', 'HexString'],
  ['vector<address>', 'vector<HexString>'],
]);

export class CustomIdl implements ICustomIdl {
  readonly name: string;
  readonly chain: string;
  readonly date: string;
  // manually maps to generated types
  readonly scripts: Array<IScriptDescription>;
  readonly events: Array<IEventDescription>;
  readonly errors: Array<IErrorDescription>;
  // gets auto-generated
  readonly types: Array<ITypeDescription>;

  constructor(idl: ICustomIdl) {
    this.name = idl.name;
    this.chain = idl.chain;
    this.date = idl.date;
    this.scripts = idl.scripts;
    this.events = idl.events;
    this.errors = idl.errors;
    this.types = idl.types;
  }

  toJSON(): ICustomIdl {
    return {
      name: this.name,
      chain: this.chain,
      date: this.date,
      scripts: this.scripts,
      events: this.events,
      // Do this to control the order of outputted fields in the JSON object
      types: this.types.map(t => {
        return {
          name: t.name,
          description: t.description,
          fields: t.fields.map(f => {
            return {
              name: f.name,
              description: f.description,
              type: f.type,
            };
          }),
        };
      }),
      errors: this.errors,
    };
  }

  write(idlOutputPath: string) {
    fs.writeFileSync(
      idlOutputPath,
      JSON.stringify(this.toJSON(), undefined, 2)
    );
  }

  /** Loops over the struct and returns ITypeDescription with an empty description */
  private static getTypesFromStructs(
    structs: IProgramStruct[]
  ): ITypeDescription[] {
    const types: ITypeDescription[] = structs.map((s): ITypeDescription => {
      return {
        name: s.name,
        description: '',
        fields: s.fields.map((f): IFieldsDescription => {
          return {
            name: f.name,
            description: '',
            type: typeRemapper.has(f.type) ? typeRemapper.get(f.type) : f.type,
          };
        }),
      };
    });
    return types;
  }

  static getOrCreate(
    idlPath: string,
    structs: IProgramStruct[],
    name = '',
    chain = '',
    date = new Date().toUTCString()
  ) {
    if (!fs.existsSync(idlPath)) {
      return CustomIdl.newFromStructs(structs, name, chain, date);
    }
    const idl = CustomIdl.read(idlPath);
    const types = CustomIdl.getTypesFromStructs(structs);

    // TODO: Handle the case where a type exists in the IDL file but was removed from the program
    // Current behavior leaves all types in IDL file - which might be desired to preserve descriptions

    // merge types
    for (const type of types) {
      idl.addType(type);
    }

    return idl;
  }

  static read(idlPath: string): CustomIdl {
    const idl: ICustomIdl = JSON.parse(fs.readFileSync(idlPath, 'utf-8'));

    return new CustomIdl({
      name: 'name' in idl ? idl.name : 'CustomIdl',
      chain: 'chain' in idl ? idl.chain : 'Unknown',
      date: 'date' in idl ? idl.date : new Date().toUTCString(),
      scripts: 'scripts' in idl ? idl.scripts : [],
      events: 'events' in idl ? idl.events : [],
      errors: 'errors' in idl ? idl.errors : [],
      types: 'types' in idl ? idl.types : [],
    });
  }

  static newFromStructs(
    structs: IProgramStruct[],
    name = '',
    chain = '',
    date = new Date().toUTCString()
  ): CustomIdl {
    const types = CustomIdl.getTypesFromStructs(structs);

    const events = types
      .filter(t => t.name.endsWith('Event'))
      .map((e): IEventDescription => {
        return {
          name: e.name.replace('Event', ''),
          description: '',
          type: e.name,
        };
      });

    return new CustomIdl({
      name,
      chain,
      date,
      scripts: [],
      errors: [],
      events,
      types,
    });
  }

  addType(type: ITypeDescription) {
    const existingTypeIndex = this.types.findIndex(t => t.name === type.name);
    if (existingTypeIndex === -1) {
      this.types.push(type);
      return;
    }

    // Merge the fields and descriptions
    const existingType = this.types[existingTypeIndex];
    const fields: IFieldsDescription[] = [];
    for (const field of type.fields) {
      // does field exist in existing type?
      const existingFieldIndex = existingType.fields.findIndex(
        f => f.name === field.name
      );
      if (existingFieldIndex === -1) {
        fields.push(field); // Can remap type here
      } else {
        fields.push({
          name: field.name,
          type: field.type, // Can remap type here
          description:
            existingType.fields[existingFieldIndex].description ??
            field.description,
        });
      }
    }

    // replace type in array with our new deep merge
    this.types.splice(existingTypeIndex, 1, {
      name: type.name,
      fields,
      description: existingType.description ?? type.description,
    });
  }
}
