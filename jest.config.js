module.exports = {
  verbose: true, // Show detailed output for tests
  testMatch: ["**.test.js"], // Search for tests
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
