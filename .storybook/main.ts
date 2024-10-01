import { StorybookConfig } from '@storybook/vue3-vite';
import fs from 'fs';
import path from 'path';
import sass from 'sass';

const cssFilePath = path.resolve(__dirname, '../public/storybook/preview.css');
const previewStylesPath = path.resolve(__dirname, '../.storybook/preview.scss');

const isProductionMode = () => {
	return process.env.NODE_ENV === 'production';
}

const config: StorybookConfig = {
	stories: ['../lib/**/*.stories.@(js|ts)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-designs',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
	],
	staticDirs: [
		{
			from: '../lib/fonts',
			to: 'lib/fonts',
		}
	],
	framework: '@storybook/vue3-vite',
	viteFinal: (config) => {
		config.plugins.push(
			{
				name: 'scss-preview-styles',
				buildStart() {
					if (isProductionMode()) {
						const result = sass.compile(previewStylesPath);

						if (!fs.existsSync(path.resolve(__dirname, '../public/storybook'))) {
							fs.mkdirSync(path.resolve(__dirname, '../public/storybook'), { recursive: true });
						}

						fs.writeFileSync(cssFilePath, result.css.toString(),);
					}
				},
				configureServer(server) {
					server.middlewares.use((req, res, next) => {
						if (req.originalUrl === '/preview.css' && !isProductionMode()) {
							res.setHeader('Content-Type', 'text/css');
							res.end(sass.compile(previewStylesPath).css);
						} else {
							next();
						}
					});
				},
				handleHotUpdate({ file, server }) {
					if (file.endsWith('.scss')) {
						server.ws.send({
							type: 'full-reload',
						});
					}
				},
			}
		);

		return {
			...config,
		};
	},
};

export default config;
