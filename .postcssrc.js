
module.exports = {
	plugins: [
		require('postcss-prefix-selector')({
			prefix: '.enabled-vuetify-global-styling',
			transform: function (prefix, selector, prefixedSelector) {
				if ((selector.startsWith('.v-application') || selector.startsWith('.theme--light.v-application')) && !selector.startsWith('.v-application--')) {
					return prefixedSelector;
				}

				if(selector === 'html') {
					return prefixedSelector;
				}

				return selector;
			}
		}),
	]
}