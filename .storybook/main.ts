import { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../lib/**/*.stories.@(js|ts)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-designs',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
	],

	framework: {
		name: '@storybook/vue3-vite',
	},
	viteFinal: (config) => {
		config.resolve.alias['~design-system'] = path.resolve(__dirname, '..');
		config.resolve.alias['design-system'] = path.resolve(__dirname, '..');
		return {
			...config,
			define: {
				...(config.define || {}),
			},
		};
	},
};

export default config;
