module.exports = {
	plugins: ['import', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
		amd: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	rules: {
		'no-console': ['error', { allow: ['log', 'error'] }],
		'key-spacing': [
			'error',
			{
				afterColon: true,
			},
		],
		'keyword-spacing': ['error'],
		'linebreak-style': ['error', 'unix'],
		'no-unused-vars': 'off',
		'object-curly-spacing': ['error', 'always'],
		'object-shorthand': ['error', 'always'],
		'quote-props': ['error', 'as-needed'],
		yoda: [
			'error',
			'never',
			{
				exceptRange: true,
			},
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		// https://eslint.org/docs/rules/dot-notation#allowpattern
		'dot-notation': [
			'error',
			{
				allowPattern: '^[a-z]+(_[a-z]+)+$',
			},
		],
		'@typescript-eslint/no-loss-of-precision': 'error',
		'no-template-curly-in-string': 'error',
		'no-eval': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-void': 'error',
		// @typescript-eslint/parser doesn't work well with import/no-relative-parent-imports
		// https://github.com/benmosher/eslint-plugin-import/issues/1610
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		// typescript
		'@typescript-eslint/adjacent-overload-signatures': ['error'],
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'generic',
			},
		],
		'@typescript-eslint/ban-tslint-comment': ['error'],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		// Plugins
		'import/no-restricted-imports': 0,
		'import/no-relative-parent-imports': 0,
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/attributes-order': ['error'],
		'vue/block-order': [
			'error',
			{
				order: ['template', 'style', 'script'],
			},
		],
		'vue/keyword-spacing': ['error'],
		// We use v-html a lot
		'vue/no-v-html': ['off'],
		// The two below don't seem useful
		'vue/singleline-html-element-content-newline': ['off'],
		'vue/multiline-html-element-content-newline': ['off'],
		'vue/no-useless-mustaches': 'error',
		'vue/no-useless-v-bind': 'error',
		'vue/padding-line-between-blocks': 'error',
		'vue/require-direct-export': 'error',
		'vue/require-name-property': 'error',
		'vue/match-component-file-name': [
			'error',
			{
				extensions: ['vue'],
			},
		],
		'vue/no-empty-component-block': 'error',
		'vue/no-multiple-objects-in-class': 'error',
		'vue/no-potential-component-option-typo': 'error',
		'vue/no-static-inline-styles': 'error',
		'vue/no-template-target-blank': [
			'error',
			{
				allowReferrer: true,
			},
		],
		'vue/v-for-delimiter-style': 'error',
		'vue/no-undef-components': 'error',
		'vue/multi-word-component-names': 0,
		'vue/require-emit-validator': 'error',
	},
};
