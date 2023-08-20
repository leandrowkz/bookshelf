import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  moduleNameMapper: {
    '^@/test-utils/(.*)$': '<rootDir>/test-utils/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

export default config

// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.js'],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//     '^@/test-utils/(.*)$': '<rootDir>/test-utils/$1',
//   },
//   testEnvironment: 'jest-environment-jsdom',
// };

// module.exports = createJestConfig(customJestConfig);
