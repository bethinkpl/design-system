/// <reference types="vitest" />

import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Dynamically get all language directories from i18n
const getI18nDirectories = () => {
	const i18nPath = 'lib/js/i18n';
	const path = resolve(__dirname, i18nPath);

	return readdirSync(path)
		.filter((item) => {
			const itemPath = resolve(path, item);
			return statSync(itemPath).isDirectory();
		})
		.map((langDir) => ({
			src: `${i18nPath}/${langDir}`,
			dest: 'i18n',
		}));
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		svgLoader(),
		dts({
			tsconfigPath: './tsconfig.build.json',
		}),
		viteStaticCopy({
			targets: getI18nDirectories(),
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
			external: ['vue', 'vee-validate', 'vue-i18n'],
		},
		sourcemap: true,
		target: 'es2019',
	},
	test: {
		environment: 'jsdom',
		includeSource: ['lib/**/*.{ts,vue}'],
		setupFiles: ['./vitest.setup.ts'],
	},
});
