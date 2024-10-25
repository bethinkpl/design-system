export default {
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^vue-popperjs/dist/vue-popper.css': '<rootDir>/lib/js/tests/emptyModule.cjs',
	},
	testMatch: ['<rootDir>/lib/js/**/*.spec.ts', '<rootDir>/tools/importers/*.spec.ts'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'.*\\.(vue)$': '@vue/vue3-jest',
		'^.+\\.scss': '<rootDir>/lib/js/tests/emptyTransformer.cjs',
		'^.+\\.svg$': '<rootDir>/lib/js/tests/emptyTransformer.cjs',
	},
	moduleFileExtensions: ['js', 'mjs', 'ts', 'json', 'vue'],
	setupFilesAfterEnv: ['<rootDir>/lib/js/typings.d.ts', '<rootDir>/lib/js/tests/globals.ts'],
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	globals: {
		'vue-jest': {
			compilerOptions: {
				whitespace: 'preserve',
			},
		},
	},
};
