/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		svgLoader(),
		dts({
			tsconfigPath: './tsconfig.build.json',
		}),
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
		},
		sourcemap: true,
		target: 'es2019',
	},
	test: {
		environment: 'jsdom',
		includeSource: ['lib/**/*.{ts,vue}'],
	},
});
