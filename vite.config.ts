/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		svgLoader(),
		dts({
			tsconfigPath: './tsconfig.build.json',
		}),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/js/index.ts'),
			name: 'design-system',
			formats: ['es'],
			fileName: 'design-system',
		},
		rollupOptions: {
			external: ['vue', 'vee-validate'],
			output: {
				globals: {
					vue: 'Vue',
					'vee-validate': 'VeeValidate',
				},
			},
		},
		sourcemap: true,
		target: 'es2019',
	},
	test: {
		environment: 'jsdom',
		includeSource: ['lib/**/*.{ts,vue}'],
	},
});
