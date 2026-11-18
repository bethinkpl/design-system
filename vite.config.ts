/// <reference types="vitest" />

import { resolve } from 'path';
import { readdirSync, readFileSync, statSync } from 'fs';
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

const LIB_ENTRY = resolve(__dirname, 'lib/js/index.ts');

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const EXTERNAL_PACKAGES = [
	...Object.keys(pkg.dependencies ?? {}),
	...Object.keys(pkg.peerDependencies ?? {}),
];

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
			entry: { 'design-system': LIB_ENTRY },
			name: 'design-system',
			formats: ['es'],
			fileName: 'design-system',
		},
		rollupOptions: {
			// Dependencies stay imports (consumers install them with the DS). CSS from them is still bundled
			// into design-system.css. Only FontAwesome is bundled: PRO packages need a private registry token.
			external: (id) =>
				!id.endsWith('.css') &&
				EXTERNAL_PACKAGES.some((name) => id === name || id.startsWith(`${name}/`)),
			output: {
				// One output file per source module, so consumers' bundlers can drop whole unused modules
				// (together with `sideEffects` in package.json). A single pre-bundled file can't be tree-shaken.
				preserveModules: true,
				preserveModulesRoot: resolve(__dirname, 'lib/js'),
				// Vendored FontAwesome packs are tree-shaken to the used icons, but their source maps would
				// embed the complete PRO icon sets (~16 MB) via `sourcesContent`.
				sourcemapExcludeSources: true,
				// Bundled FontAwesome would land in dist/node_modules/, which npm drops on publish.
				entryFileNames: (chunk) =>
					`${chunk.name.replace('node_modules/@fortawesome/', 'vendor/@fortawesome/')}.js`,
			},
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
