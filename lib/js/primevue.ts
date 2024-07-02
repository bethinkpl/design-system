import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/styled';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';

const BethinkPreset = definePreset({

});

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: Aura,
			options: {
				darkModeSelector: '.app-dark', // enabling dark mode in storybook makes all components canvas black
			},
		},
	});

	app.directive('pv-tooltip', Tooltip);
};
