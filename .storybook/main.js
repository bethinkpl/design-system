const path = require('path');

module.exports = {
	stories: ['../lib/**/*.stories.@(js|mdx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
	],
	webpackFinal: async (config) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// // Storybook provides file-loader rule for svg. We have to disable it to make vue-svg-loader working
		let fileLoaderRule = config.module.rules.find(
			(r) =>
				// it can be another rule with file loader
				// we should get only svg related
				r.test &&
				r.test.toString().includes('svg') &&
				// file-loader might be resolved to js file path so "endsWith" is not reliable enough
				r.loader &&
				r.loader.includes('file-loader'),
		);
		fileLoaderRule.test = new RegExp(
			fileLoaderRule.test.source.replace('svg|', ''),
			fileLoaderRule.test.flags,
		);

		// Make whatever fine-grained changes you need
		config.module.rules.push(
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
				include: path.resolve(__dirname, '../../'),
			},
			{
				test: /\.svg$/,
				use: ['vue-svg-loader'],
			},
		);

		// config.resolve.alias.lib = path.resolve(__dirname, '../lib');
		config.resolve.alias['design-system'] = path.resolve(__dirname, '..');

		return config;
	},
};
