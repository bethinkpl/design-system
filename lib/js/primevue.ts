import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		// theme: {
		// 	preset: definePreset(Aura, {
		// 		semantic: {
		// 			primary: {
		// 				50: '{raw.green.50}',
		// 				100: '{raw.green.100}',
		// 				200: '{raw.green.200}',
		// 				300: '{raw.green.300}',
		// 				400: '{raw.green.400}',
		// 				500: '{color-primary-icon}',
		// 				600: '{raw.green.600}',
		// 				700: '{raw.green.700}',
		// 				800: '{raw.green.800}',
		// 				900: '{raw.green.900}',
		// 				950: '{raw.green.900}',
		// 			},
		// 		},
		// 	}),
		// 	options: {
		// 		prefix: '',
		// 	},
		// },
	});

	app.directive('pv-tooltip', Tooltip);
};
