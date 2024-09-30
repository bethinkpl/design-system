import { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import sass from 'sass';

const config: StorybookConfig = {
	stories: ['../lib/**/*.stories.@(js|ts)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-designs',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
	],
	framework: '@storybook/vue3-vite',
	viteFinal: (config) => {
		config.plugins.push(
			{
				name: 'scss-global-styles',
				handleHotUpdate({ file, server }) {
					if (file.endsWith('global.scss')) {
						server.ws.send({
							type: 'full-reload', // Reload on SCSS changes
						});
					}
				},
				buildStart() {
					const result = sass.renderSync({
						file: path.resolve(__dirname, '../.storybook/global.scss'),
						outFile: path.resolve(__dirname, '../public/global.css'), // Output compiled CSS
					});

					require('fs').writeFileSync(
						path.resolve(__dirname, '../public/global.css'),
						result.css.toString()
					);
				},
			}
		);

		return {
			...config,
		};
	},
};

export default config;
