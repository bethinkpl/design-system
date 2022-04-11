module.exports = {
	/**
	 * we disable parallel for production, because if we use ts-loader the Thread Loader does
	 * not work properly and communicates it with an error:
	 * 		Syntax Error: Thread Loader (Worker 0)
	 * 		Cannot read properties of undefined (reading 'hooks')
	 */
	parallel: process.env.NODE_ENV !== 'production',
	css: {
		extract: false,
	},
	chainWebpack: (config) => {
		config.resolve.alias.set('vue', '@vue/compat');

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap((options) => {
				return {
					...options,
					compilerOptions: {
						compatConfig: {
							MODE: 2,
						},
					},
				};
			});

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},
};
