module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	extends: [
		'plugin:@next/next/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
	],
	rules: {
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		// needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true },
		],
		'import/extensions': 'off',
		'import/no-cycle': [0, { ignoreExternal: true }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.tsx',
					'**/*.spec.tsx',
					'**/*.test.ts',
					'**/*.spec.ts',
				],
			},
		],
		'jsx-a11y/anchor-is-valid': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
		'react/no-unescaped-entities': 'off',
		'react-hooks/exhaustive-deps': 'error',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'function-expression',
			},
		],
		'react/jsx-no-useless-fragment': [
			'error',
			{ allowExpressions: true, allowEmpty: true },
		],
		'prettier/prettier': 'warn',
		'no-shadow': 'off',
		'no-alert': [0, { extensions: ['.stories.tsx'] }],
		'@typescript-eslint/no-shadow': ['error'],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'chakra-ui/react',
						message: 'Please use the @ui directory instead',
					},
				],
			},
		],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};
