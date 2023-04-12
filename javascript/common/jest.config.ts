import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  coverageDirectory: './tests/.coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.ts$': [
      'ts-jest',
      { tsconfig: './test/tsconfig.json', useESM: true },
    ],
  },
};

export default jestConfig;
