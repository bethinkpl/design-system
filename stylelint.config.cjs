module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		// Support SCSS imports
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,

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
		'value-list-comma-newline-after': null,
		'declaration-colon-newline-after': null,
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
	},
	ignoreFiles: ['lib/styles/settings/typography/_tokens.scss'],
};
