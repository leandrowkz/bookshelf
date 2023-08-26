import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  moduleNameMapper: {
    '^@/test-utils/(.*)$': '<rootDir>/test-utils/$1',
    '^@/test-utils': '<rootDir>/test-utils/index.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.tests.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

export default config
