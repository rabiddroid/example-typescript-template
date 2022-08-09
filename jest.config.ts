import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    displayName: {
      name: "example-typescript-project",
      color: "greenBright",
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: 'src',
    testMatch: ["**/__tests__/*.test.ts"],
    collectCoverage: true,
    transform:{}
  };
};


