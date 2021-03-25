module.exports = {
	verbose: true,
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^js/(.*)$': '<rootDir>/lib/js/$1',
		'^lib/(.*)$': '<rootDir>/lib/$1',
		'^styles/(.*)$': '<rootDir>/lib/styles/$1',
		'^images/(.*)$': '<rootDir>/lib/images/$1',
		'vue-ripple-directive': '<rootDir>/lib/js/tests/emptyModule.ts',
	},
	testMatch: ['<rootDir>/lib/js/**/*.spec.ts'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'.*\\.(vue)$': 'vue-jest',
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
};
