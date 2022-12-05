module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  injectGlobals: true,
  collectCoverage: true,
  coverageDirectory: require('path').join(__dirname, 'coverage'),
};
