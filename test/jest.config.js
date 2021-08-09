module.exports = {
	rootDir: '../',
	// setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	testRegex: '(/test/unit/*.|\\.(spec))\\.js?$',
	collectCoverage: true,
	// collectCoverageFrom: ['<rootDir>/src/**/*.js'],
	collectCoverageFrom: ['<rootDir>/src/pages/testFunctions/*.js'],
	moduleFileExtensions: ['js', 'json']
};