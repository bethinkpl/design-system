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
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep', 'deep'],
			},
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['--token'],
			},
		],
	},
};
