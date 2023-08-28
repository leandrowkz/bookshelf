// import type { Config } from 'jest'

// const config: Config = {
//   preset: 'ts-jest',
//   rootDir: '.',
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
//   moduleNameMapper: {
//     '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
//     '^@/test-utils/(.*)$': '<rootDir>/test-utils/$1',
//     '^@/test-utils': '<rootDir>/test-utils/index.ts',
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   transform: {
//     '^.+\\.jsx$': 'babel-jest',
//     '^.+\\.tsx?$': [
//       'ts-jest',
//       {
//         tsconfig: 'tsconfig.tests.json',
//       },
//     ],
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// }

// export default config

import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
  // moduleNameMapper: {
  //   // '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
  //   '^@/test-utils/(.*)$': '<rootDir>/test-utils/$1',
  //   '^@/test-utils': '<rootDir>/test-utils/index.ts',
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'jest-environment-jsdom',
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
