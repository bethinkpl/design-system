import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';
import Tooltip from 'primevue/tooltip';
import { definePreset } from 'primevue/themes/actions';

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: definePreset(Aura, {
				semantic: {
					primary: {
						50: '{raw.green.50}',
						100: '{raw.green.100}',
						200: '{raw.green.200}',
						300: '{raw.green.300}',
						400: '{raw.green.400}',
						500: '{color-primary-icon}',
						600: '{raw.green.600}',
						700: '{raw.green.700}',
						800: '{raw.green.800}',
						900: '{raw.green.900}',
						950: '{raw.green.900}',
					},
				},
				components: {
					tooltip: {
						colorScheme: {
							light: {
								root: {
									background: '{surface.0}',
									color: '{surface.700}',
								},
								subtitle: {
									color: '{surface.500}',
								},
							},
							dark: {
								root: {
									background: '{surface.900}',
									color: '{surface.0}',
								},
								subtitle: {
									color: '{surface.400}',
								},
							},
						},
					},
				},
			}),
			options: {
				darkModeSelector: '.my-app-dark',
				prefix: '',
			},
		},
	});

	app.directive('pv-tooltip', Tooltip);
};
