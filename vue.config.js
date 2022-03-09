module.exports = {
	parallel: process.env.NODE_ENV !== 'production',
	css: {
		extract: false,
	},
	chainWebpack: (config) => {
		/**
		 * These are some necessary steps changing the default webpack config of the Vue CLI
		 * that need to be changed in order for TypeScript based components to generate their
		 * declaration (.d.ts) files.
		 * Discussed here https://github.com/vuejs/vue-cli/issues/1081
		 */
		if (process.env.NODE_ENV === 'production') {
			config.module.rule('ts').uses.delete('cache-loader');
			config.module
				.rule('ts')
				.use('ts-loader')
				.loader('ts-loader')
				.tap((options) => ({
					...options,
					transpileOnly: false,
					happyPackMode: false,
				}));
		}

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},
};
