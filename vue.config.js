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
};
