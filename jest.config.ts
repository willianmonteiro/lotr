import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.css$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
};

