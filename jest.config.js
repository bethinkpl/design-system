module.exports = {
	verbose: true,
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^design-system/lib/(.*)$': '<rootDir>/lib/$1',
		'^design-system/styles/(.*)$': '<rootDir>/lib/styles/$1',
		'^design-system/images/(.*)$': '<rootDir>/lib/images/$1',
		'vue-ripple-directive': '<rootDir>/lib/js/tests/emptyModule.ts',
	},
	testMatch: ['<rootDir>/lib/js/**/*.spec.ts', '<rootDir>/tools/importers/*.spec.ts'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'.*\\.(vue)$': '@vue/vue3-jest',
		'^.+\\.scss': '<rootDir>/lib/js/tests/emptyTransformer.ts',
		'^.+\\.svg$': '<rootDir>/lib/js/tests/emptyTransformer.ts',
	},
	moduleFileExtensions: ['js', 'vue', 'json', 'ts'],

	setupFilesAfterEnv: ['<rootDir>/lib/js/typings.d.ts', '<rootDir>/lib/js/tests/globals.ts'],
	globals: {
		'ts-jest': {
			tsconfig: './tsconfig.json',
			isolatedModules: true,
		},
	},
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
};
