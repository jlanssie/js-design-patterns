export default {
  "collectCoverage": true,
  "collectCoverageFrom": ["src/**/*.{js,ts}"],
  "coveragePathIgnorePatterns": ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "moduleDirectories": ["node_modules", "src"],
  "preset": "ts-jest",
  "reporters": ["default"],
  "testEnvironment": "node",
  "testMatch": ["**/*.test.ts"]
}