module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@helpers(.*)': '<rootDir>/src/helpers$1',
    '^@classes(.*)': '<rootDir>/src/classes$1',
    '^@types(.*)': '<rootDir>/src/types$1',
    '^@api(.*)': '<rootDir>/src/api$1',
  },
};
