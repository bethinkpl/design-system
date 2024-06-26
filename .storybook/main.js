const path = require('path');
const fs = require('fs');

function getDirectories(module) {
	return fs
		.readdirSync(module)
		.filter((file) => fs.statSync(path.join(module, file)).isDirectory());
}

module.exports = {
	stories: ['../lib/**/*.stories.@(js|mdx|ts)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'storybook-addon-designs',
	],
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		let vueLoaderRule = config.module.rules.find(
			(r) =>
				r.test &&
				r.test.toString().includes('vue') &&
				r.loader &&
				r.loader.includes('vue-loader'),
		);

		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// // Storybook provides assets rule for svg. We have to disable it to make vue-svg-loader working
		let fileLoaderRule = config.module.rules.find(
			(r) =>
				r.test &&
				r.test.toString().includes('svg') &&
				r.type &&
				r.type === 'asset/resource',
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
				use: ['vue-loader', 'vue-svg-loader'],
			},
		);

		// config.resolve.alias.lib = path.resolve(__dirname, '../lib');
		config.resolve.alias['design-system'] = path.resolve(__dirname, '..');

		const primePackages = ['primevue', '@primevue/themes'];
		primePackages.forEach((pkg) => {
			const modulePath = path.resolve(__dirname, `../node_modules/${pkg}`);
			getDirectories(modulePath).forEach((dir) => {
				config.resolve.alias[`${pkg}/${dir}`] = path.join(modulePath, dir);
			});
		});

		return config;
	},
};
