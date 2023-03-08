import { SupportedField } from './types';

export class BnField extends SupportedField {
  tsType: string = 'BN';

  constructor(readonly name: string, readonly srcType: string) {
    super(name, srcType);
  }

  json = {
    type: 'string',
    to: (prefix = 'this') => {
      const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      return `${name}${this.camelCaseName}.toString()`;
    },
    from: (prefix = 'obj') => {
      const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      return `new BN(${name}${this.camelCaseName})`;
    },
    optional: {
      type: 'string | undefined',
      to: (prefix = 'this') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name}?.toString()`;
      },
      from: (prefix = 'obj') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name} ? new BN(${name}) : undefined`;
      },
    },
  };

  src = {
    type: 'string',
    to: (prefix = 'this') => {
      const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      return `${name}${this.camelCaseName}.toString()`;
    },

    from: (prefix = 'obj') => {
      const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
      return `new BN(${name}${this.name})`;
    },

    optional: {
      type: 'string | undefined',
      to: (prefix = 'this') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name} ? new BN(${name}) : null`;
      },
      from: (prefix = 'obj') => {
        const name = `${prefix ? prefix + '.' : ''}${this.camelCaseName}`;
        return `${name} ? new BN(${name}) : null`;
      },
    },
  };
}
