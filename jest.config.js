
module.exports = {
	projects: [
		{
			runner: 'jest-runner-eslint',
			displayName: 'lint',
			testMatch: [
				'<rootDir>/app/**/*.js',
				'<rootDir>/__tests__/**/*.js'
				// '<rootDir>/gulpfile.js'
			]
		},
		{
			// your Jest test options
			displayName: 'Test Suit'
		}
	]
};
