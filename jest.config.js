module.exports = {
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/styleMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/fileMock.js'
    },
    setupTestFrameworkScriptFile: '<rootDir>/tests/setupTests.js'
};
