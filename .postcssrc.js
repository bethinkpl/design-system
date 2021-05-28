var postcss = require('postcss');
const scopifyVuetifyGlobalStyles = require('./lib/js/utils/scopify-vuetify-global-styles');

module.exports = {
	plugins: [
		require('postcss-prefix-selector')({
			prefix: '.enabled-vuetify-global-styling',
			transform: scopifyVuetifyGlobalStyles,
		}),
		postcss.plugin('myplugin', function myplugin() {
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
