import { SupportedField } from './types';

export class HexStringField extends SupportedField {
  tsType: string = 'HexString';

  constructor(readonly name: string, readonly srcType: string) {
    super(name, srcType);
  }

  json = {
    type: 'string',
    to: (prefix = 'this') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}.toString()`;
    },
    from: (prefix = 'obj') => {
      return `HexString.ensure(${prefix ? prefix + '.' : ''}${
        this.camelCaseName
      })`;
    },
    optional: {
      type: 'string | undefined',
      to: (prefix = 'this') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name}${this.camelCaseName}?.toString()`;
      },
      from: (prefix = 'obj') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name} ? HexString.ensure(${name}) : undefined`;
      },
    },
  };

  src = {
    type: 'string',
    to: (prefix = 'this') => {
      return `${prefix ? prefix + '.' : ''}${this.camelCaseName}.toString()`;
    },
    from: (prefix = 'obj') => {
      return `HexString.ensure(${prefix ? prefix + '.' : ''}${this.name})`;
    },
    optional: {
      type: 'string | undefined',
      to: (prefix = 'this') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name}?.toString()`;
      },
      from: (prefix = 'obj') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name} ? HexString.ensure(${name}) : undefined`;
      },
    },
  };
}
