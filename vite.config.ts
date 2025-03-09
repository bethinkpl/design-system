import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		checker({
			typescript: true,
		}),
		svgLoader(),
		dts(),
		cssInjectedByJsPlugin(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './lib/js/src'),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/js/index.ts'),
			name: 'design-system',
			formats: ['umd'],
			fileName: 'design-system',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
		sourcemap: true,
		target: 'es2019',
	},
});
