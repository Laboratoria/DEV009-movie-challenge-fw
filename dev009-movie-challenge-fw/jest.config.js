module.exports={
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory:"coverage",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico|pdf|svg)$": "identity-obj-proxy",
      },
    modulePathIgnorePatterns: ['<rootDir>/src/index.js','<rootDir>/src/reportWebVitals.js'],
    
};