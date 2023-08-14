module.exports = {
  verbose: true, // Show detailed output for tests
  testMatch: ["**.test.js"], // Search for tests
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.(css|sass|scss|jpg|jpeg|png|gif|svg|mp3)$",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
