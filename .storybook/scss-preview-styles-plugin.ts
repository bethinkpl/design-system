import fs from 'fs';
import path from 'path';
import sass from 'sass';

const cssFilePath = path.resolve(__dirname, '../public/storybook/preview.css');
const previewStylesPath = path.resolve(__dirname, '../.storybook/preview.scss');

// Custom plugin to compile global styles for storybook preview and load them at the very beginning
// Due to the structure of our components, it's needed to load global styles before components styles
export const scssPreviewStylesPlugin = ({ isProductionMode }) => ({
	name: 'scss-preview-styles',
	buildStart() {
		if (isProductionMode) {
			const result = sass.compile(previewStylesPath);

			// Compile and save preview.css file, so we can serve it in build storybook (using preview-head.html)
			if (!fs.existsSync(path.resolve(__dirname, '../public/storybook'))) {
				fs.mkdirSync(path.resolve(__dirname, '../public/storybook'), { recursive: true });
			}

			fs.writeFileSync(cssFilePath, result.css.toString());
		}
	},
	configureServer(server) {
		server.middlewares.use((req, res, next) => {
			// Serve compiled CSS file in development mode so it's not required to manually compile the file upfront
			if (req.originalUrl === '/preview.css' && !isProductionMode) {
				res.setHeader('Content-Type', 'text/css');
				res.end(sass.compile(previewStylesPath).css);
			} else {
				next();
			}
		});
	},
	handleHotUpdate({ file, server }) {
		// Reload whole storybook on any scss change in order to catch and apply changes in global styles
		if (file.endsWith('.scss')) {
			server.ws.send({
				type: 'full-reload',
			});
		}
	},
});
