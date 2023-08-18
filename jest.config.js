module.exports = {
    // ...
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'ts', 'json'],
    transform: {
        // '^.+\\.ts$': 'ts-jest',
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testMatch: ['**/tests/**/*.spec.ts'],
    testURL: 'http://localhost/',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
    coverageReporters: ['html', 'text-summary'],
    // ...
};
