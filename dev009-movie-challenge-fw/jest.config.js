module.exports={
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory:"coverage",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      },
};