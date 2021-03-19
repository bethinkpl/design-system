export default {
	verbose:true,
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^js/(.*)$': '<rootDir>/src/js/$1',
		'^styles/(.*)$': '<rootDir>/src/styles/$1',
	},
	testMatch: ['<rootDir>/src/js/**/*.spec.ts'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.scss': '<rootDir>/src/js/tests/emptyTransformer.ts',
	},
	moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
	setupFilesAfterEnv: [
		// '<rootDir>/src/js/typings.d.ts',
		'<rootDir>/src/js/tests/globals.ts',
	],
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.json',
			isolatedModules: true,
		},
	},
};
