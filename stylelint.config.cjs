module.exports = {
	"extends": [
		'stylelint-config-standard-scss',
		'stylelint-config-standard-vue/scss'
	],
	plugins: ['stylelint-order'],
	rules: {
		// Support SCSS imports
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'string-quotes': 'single',

		'order/order': [
			[
				{
					name: 'use',
					type: 'at-rule',
				},
				{
					name: 'import',
					type: 'at-rule',
				},
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				{
					type: 'at-rule',
					name: 'media',
				},
				'rules',
			],
		],
		indentation: 'tab',
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep'],
			},
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['--token'],
			},
		],
		'order/properties-alphabetical-order': true,
		'selector-class-pattern': '-?ds-[a-z][a-zA-Z_]*',


		// Disable recommended rules, consider enabling them when you have time
		'alpha-value-notation': null,
		'color-function-notation': null,
		'declaration-block-no-redundant-longhand-properties': null,
		'declaration-colon-newline-after': null,
		'function-url-quotes': null,
		'keyframes-name-pattern': null,
		'max-line-length': null,
		'media-feature-range-notation': 'prefix',
		'property-no-vendor-prefix': null,
		'rule-empty-line-before': null,
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-mixin-pattern': null,
		'scss/at-mixin-argumentless-call-parentheses': null,
		'scss/dollar-variable-empty-line-before': null,
		'scss/dollar-variable-pattern': null,
		'scss/double-slash-comment-empty-line-before': null,
		'scss/no-global-function-names': null,
		'selector-not-notation': null,
		'value-list-comma-newline-after': null,
		'value-no-vendor-prefix': null,
	},
	ignoreFiles: ['lib/styles/settings/typography/_tokens.scss'],
};
