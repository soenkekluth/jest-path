module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/\\..*/\\w+/', '/fixtures/', '/coverage/'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['coverage'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!<rootDir>/\\..*/\\w+/',
    '!**/.yalc/**',
    '!**/.*/**',
    '!**/node_modules/**',
    '!**/.history/**',
    '!**/vendor/**',
  ],
};
