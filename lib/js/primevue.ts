import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Aura, {
	semantic: {
		formField: {
			paddingX: '8px',
			paddingY: '8px',
		},
	},
});

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: MyPreset,
			options: {
				darkModeSelector: '.app-dark', // enabling dark mode in storybook makes all components canvas black
			},
		},
		zIndex: {
			tooltip: 16777271, // keep above $z-index-modal
		},
	});

	app.directive('pv-tooltip', Tooltip);
};
