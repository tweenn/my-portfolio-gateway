module.exports = {
	root: true,
	env: {
		node: true,
		"jest/globals": true
	},
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'semi': ['error', 'always'],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// JEST
		"jest/no-disabled-tests": "warn",
    	"jest/no-focused-tests": "error",
    	"jest/no-identical-title": "error",
    	"jest/prefer-to-have-length": "warn",
    	"jest/valid-expect": "error"
	},
	// parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: [
		"jest"
	]
}
