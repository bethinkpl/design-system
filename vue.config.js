module.exports = {
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				data: '@import "lib/styles/variables.scss"',
			},
			scss: {
				data: '@import "lib/styles/variables.scss";',
			},
		},
	},
	chainWebpack: (config) => {
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
