export interface IProgramStruct {
  name: string;
  description: string;
  fields: IFieldsDescription[];
}

export interface ICustomIdl {
  name: string;
  chain: string;
  date: string;
  // manually maps to generated types
  scripts: Array<IScriptDescription>;
  events: Array<IEventDescription>;
  errors: Array<IErrorDescription>;
  // gets auto-generated
  types: Array<ITypeDescription>;
}

export interface IDescription {
  name: string;
  description: string;
}

export interface IScriptDescription extends IDescription {
  script: string;
  params: string;
}

export interface IEventDescription extends IDescription {
  type: string;
}

export interface IErrorDescription extends IDescription {
  code: number;
  value: string;
}

export interface IFieldsDescription extends IDescription {
  type: string;
}

export interface ITypeDescription extends IDescription {
  fields: Array<IFieldsDescription>;
}

export interface TypeDescriptions {
  types: Array<ITypeDescription>;
  errors: Array<IErrorDescription>;
}
