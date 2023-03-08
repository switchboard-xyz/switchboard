import { SupportedField } from './types';

export abstract class PrimitiveType extends SupportedField {
  constructor(
    readonly name: string,
    readonly type: string,
    readonly primitiveType: string
  ) {
    super(name, type);
  }

  json = {
    type: this.primitiveType,
    to: (prefix = 'this') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
    },
    from: (prefix = 'obj') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
    },
    optional: {
      type: `${this.primitiveType} | undefined`,
      to: (prefix = 'this') => {
        return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      },
      from: (prefix = 'obj') => {
        return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      },
    },
  };

  src = {
    type: this.primitiveType,
    to: (prefix = 'this') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
    },
    from: (prefix = 'obj') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
    },
    optional: {
      type: `${this.primitiveType} | undefined`,
      to: (prefix = 'this') => {
        return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      },
      from: (prefix = 'obj') => {
        return `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      },
    },
  };
}

export class BooleanType extends PrimitiveType {
  tsType: string = 'boolean';

  constructor(readonly name: string, readonly srcType: string) {
    super(name, srcType, 'boolean');
  }
}

export class NumberField extends PrimitiveType {
  tsType: string = 'number';

  constructor(readonly name: string, readonly srcType: string) {
    super(name, srcType, 'number');
  }
}

export class StringField extends PrimitiveType {
  tsType: string = 'string';

  constructor(readonly name: string, readonly srcType: string) {
    super(name, srcType, 'string');
  }
}
