const path = require('path');
const fs = require('fs');

function getDirectories(module) {
	return fs
		.readdirSync(module)
		.filter((file) => fs.statSync(path.join(module, file)).isDirectory());
}

module.exports = {
	/**
	 * we disable parallel for production, because if we use ts-loader the Thread Loader does
	 * not work properly and communicates it with an error:
	 *        Syntax Error: Thread Loader (Worker 0)
	 *        Cannot read properties of undefined (reading 'hooks')
	 */
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

			const primePackages = ['primevue', '@primevue/themes'];
			primePackages.forEach((pkg) => {
				const modulePath = path.resolve(__dirname, `node_modules/${pkg}`);
				getDirectories(modulePath).forEach((dir) => {
					config.resolve.alias.set(`${pkg}/${dir}`, path.join(modulePath, dir));
				});
			});
		}

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		// remove properties which breaks vue-svg-loader output
		svgRule.store.delete('generator');
		svgRule.store.delete('type');

		svgRule
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},
};
