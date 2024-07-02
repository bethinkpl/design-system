import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';

// We're not able to use definePreset due to webpack setup
const BethinkPreset = {
	...Aura,
	primitive: {
		...Aura.primitive,
		blue: {
			"50": "var(--raw-blue-50)",
			"100": "var(--raw-blue-100)",
			"200": "var(--raw-blue-200)",
			"300": "var(--raw-blue-300)",
			"400": "var(--raw-blue-400)",
			"500": "var(--raw-blue-500)",
			"600": "var(--raw-blue-600)",
			"700": "var(--raw-blue-700)",
			"800": "var(--raw-blue-800)",
			"900": "var(--raw-blue-900)"
		},
		green: {
			"50": "var(--raw-green-50)",
			"100": "var(--raw-green-100)",
			"200": "var(--raw-green-200)",
			"300": "var(--raw-green-300)",
			"400": "var(--raw-green-400)",
			"500": "var(--raw-green-500)",
			"600": "var(--raw-green-600)",
			"700": "var(--raw-green-700)",
			"800": "var(--raw-green-800)",
			"900": "var(--raw-green-900)"
		},
		yellow: {
			"50": "var(--raw-gold-50)",
			"100": "var(--raw-gold-100)",
			"200": "var(--raw-gold-200)",
			"300": "var(--raw-gold-300)",
			"400": "var(--raw-gold-400)",
			"500": "var(--raw-gold-500)",
			"600": "var(--raw-gold-600)",
			"700": "var(--raw-gold-700)",
			"800": "var(--raw-gold-800)",
			"900": "var(--raw-gold-900)"
		},
		orange: {
			"50": "var(--raw-orange-50)",
			"100": "var(--raw-orange-100)",
			"200": "var(--raw-orange-200)",
			"300": "var(--raw-orange-300)",
			"400": "var(--raw-orange-400)",
			"500": "var(--raw-orange-500)",
			"600": "var(--raw-orange-600)",
			"700": "var(--raw-orange-700)",
			"800": "var(--raw-orange-800)",
			"900": "var(--raw-orange-900)"
		},
		red: {
			"50": "var(--raw-red-50)",
			"100": "var(--raw-red-100)",
			"200": "var(--raw-red-200)",
			"300": "var(--raw-red-300)",
			"400": "var(--raw-red-400)",
			"500": "var(--raw-red-500)",
			"600": "var(--raw-red-600)",
			"700": "var(--raw-red-700)",
			"800": "var(--raw-red-800)",
			"900": "var(--raw-red-900)"
		},
		teal: {
			"50": "var(--theme-50)",
			"100": "var(--theme-100)",
			"200": "var(--theme-200)",
			"300": "var(--theme-300)",
			"400": "var(--theme-400)",
			"500": "var(--theme-500)",
			"600": "var(--theme-600)",
			"700": "var(--theme-700)",
			"800": "var(--theme-800)",
			"900": "var(--theme-900)"
		},
		slate: {
			"50": "var(--raw-gray-50)",
			"100": "var(--raw-gray-100)",
			"200": "var(--raw-gray-200)",
			"300": "var(--raw-gray-300)",
			"400": "var(--raw-gray-400)",
			"500": "var(--raw-gray-500)",
			"600": "var(--raw-gray-600)",
			"700": "var(--raw-gray-700)",
			"800": "var(--raw-gray-800)",
			"900": "var(--raw-gray-900)"
		},
	},
	semantic: {
		...Aura.semantic,
		primary: {
			50: '{teal.50}',
			100: '{teal.100}',
			200: '{teal.200}',
			300: '{teal.300}',
			400: '{teal.400}',
			500: '{teal.500}',
			600: '{teal.600}',
			700: '{teal.700}',
			800: '{teal.800}',
			900: '{teal.900}',
			950: '{teal.950}'
		},
	}
}

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: BethinkPreset,
			options: {
				darkModeSelector: '.app-dark', // enabling dark mode in storybook makes all components canvas black
			},
		},
	});

	app.directive('pv-tooltip', Tooltip);
};
