export default {
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['!**/node_modules/**', '!**/dist/**', './src/**.tsx'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '\\.[jt]s?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
