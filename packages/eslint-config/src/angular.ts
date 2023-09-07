import type eslint from 'eslint';

const angularConfig: eslint.Linter.ConfigOverride = {
	files: ['*.ts'],
	plugins: ['@angular-eslint'],
	extends: [require.resolve('./browser.js'), 'plugin:@angular-eslint/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: false,
		},
	},
};

const config: eslint.Linter.Config = {
	overrides: [angularConfig],
};

export default config;
