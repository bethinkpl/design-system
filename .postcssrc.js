var postcss = require('postcss');
const scopifyVuetifyGlobalStyles = require('./lib/js/utils/scopify-vuetify-global-styles');

module.exports = {
	plugins: [
		require('postcss-prefix-selector')({
			prefix: '.enabled-vuetify-global-styling',
			transform: scopifyVuetifyGlobalStyles,
		}),
		postcss.plugin('remove-print-rules', function removePrintRules() {
			return function (css) {
				css.walkAtRules(function (rule) {
					if ((rule.type === 'atrule') & (rule.params === 'print')) {
						rule.remove();
					}
				});
			};
		}),
	],
};
