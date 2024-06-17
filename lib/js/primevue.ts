import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';

export const initializePrimeVue = (app) => {
	app.use(PrimeVue, {
		theme: {
			preset: Aura,
		},
	});

	app.directive('pv-tooltip', Tooltip);
};
