module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
	env: {
		es2020: true,
		browser: true,
		node: true,
	},
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'react/require-default-props': 'off',
		'react/no-unescaped-entities': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/accessible-emoji': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'prettier/prettier': 'error',
		'no-use-before-define': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.ts',
					'**/*.spec.ts',
					'**/*.stories.tsx',
				],
			},
		],
		'no-underscore-dangle': 'off',
		'no-restricted-imports': ['error'],
	},
};
