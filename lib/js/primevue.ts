import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: Aura,
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
