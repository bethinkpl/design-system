const scopifyVuetifyGlobalStyles = require('./lib/js/utils/scopify-vuetify-global-styles');

module.exports = {
	plugins: [
		require('postcss-prefix-selector')({
			prefix: '.enabled-vuetify-global-styling',
			transform: scopifyVuetifyGlobalStyles,
		}),
	],
};
