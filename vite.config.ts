import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		checker({
			typescript: true,
		}),
		svgLoader(),
		dts(),
	],
	resolve: {
		alias: {
			'design-system/lib/*': resolve(__dirname, 'lib'),
			'~design-system': resolve(__dirname),
			'design-system': resolve(__dirname),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/js/index.ts'),
			name: 'design-system',
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
		target: 'esnext',
	},
});
