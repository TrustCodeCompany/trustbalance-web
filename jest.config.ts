// jest.config.ts
export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/modules/**/__tests__/**/*.test.(ts|tsx)',
    '**/modules/**/__tests__/**/*.spec.(ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/modules/**/components/**/*.{ts,tsx}',
    'src/modules/**/pages/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/main.tsx',
    '!src/config/**',
    '!src/env/**',
    '!src/resources/**',
    '!**/__tests__/**',
    '!**/__mocks__/**',
    '!**/__snapshots__/**',
    '!**/*.stories.*',
    '!dist/**',
    '!coverage/**',
  ],
};
