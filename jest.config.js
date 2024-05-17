module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
    transform: {
        '\\.(js|jsx)$': 'babel-jest', // Example: Use Babel for JavaScript files
        '\\.(css|scss)$': '<rootDir>/configs/scssTransform.js', // Example: Use SCSS transformer
        '^(?!.*\\.(js|jsx|json|css|scss)$)': '<rootDir>/configs/fileTransform.js', // Custom fileTransform
    },
};
