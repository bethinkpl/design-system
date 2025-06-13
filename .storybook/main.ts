import { StorybookConfig } from '@storybook/vue3-vite';
import { scssPreviewStylesPlugin } from './scss-preview-styles-plugin';

const isProductionMode = () => {
	return process.env.NODE_ENV === 'production';
};

const ignoredProductionPlugins = ['vite:dts'];

const config: StorybookConfig = {
	stories: ['../lib/**/*.stories.@(js|ts)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-designs',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
	],
	staticDirs: [
		{
			from: '../lib/fonts',
			to: '~design-system/lib/fonts',
		},
	],
	framework: '@storybook/vue3-vite',
	viteFinal: (config) => {
		return {
			...config,
			plugins: [
				...config.plugins.filter(
					(plugin) => !ignoredProductionPlugins.includes((plugin as any)?.name),
				),
				scssPreviewStylesPlugin({
					isProductionMode: isProductionMode(),
				}),
			],
		};
	},
};

export default config;
