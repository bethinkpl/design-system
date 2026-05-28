import { initialize } from '../lib/js/icons/fontawesome';
import { initializePrimeVue } from '../lib/js';

import { setup } from '@storybook/vue3';
import { i18n } from './i18n';
import { SUPPORTED_LOCALE } from '../lib/js/i18n';

const customViewports = {
	mobile: {
		name: 'Breakpoint mobile',
		styles: {
			height: '568px',
			width: '320px',
		},
		type: 'mobile',
	},
	breakpointS: {
		name: 'breakpointS',
		styles: {
			height: '1024px',
			width: '760px',
		},
		type: 'tablet',
	},
	breakpointM: {
		name: 'breakpointM',
		styles: {
			height: '1024px',
			width: '980px',
		},
		type: 'desktop',
	},
	breakpointL: {
		name: 'breakpointL',
		styles: {
			height: '1024px',
			width: '1280px',
		},
		type: 'desktop',
	},
	breakpointXL: {
		name: 'breakpointXL',
		styles: {
			height: '1024px',
			width: '1600px',
		},
		type: 'desktop',
	},
	mobile1: {
		name: 'Smallest supported mobile',
		styles: {
			height: '568px',
			width: '360px',
		},
		type: 'mobile',
	},
	iphonexr: {
		name: 'iPhone XR',
		styles: {
			height: '896px',
			width: '414px',
		},
		type: 'mobile',
	},
	ipad: {
		name: 'iPad',
		styles: {
			height: '1024px',
			width: '768px',
		},
		type: 'tablet',
	},
	ipad12p: {
		name: 'iPad Pro 12.9-in',
		styles: {
			height: '1366px',
			width: '1024px',
		},
		type: 'tablet',
	},
};

export const parameters = {
	controls: {
		disableSaveFromUI: true,
	},
	viewport: { viewports: customViewports },
	backgrounds: {
		values: [
			{ name: 'Default', value: '#fff' },
			{ name: 'NeutralStrong', value: '#a8afc0' },
		],
	},
	options: {
		storySort: {
			order: [
				'foundations',
				[
					'Colors',
					'Design Tokens',
					['Color Tokens', ['LMS', 'Primary WNL', 'Primary Bodywork']],
				],
				'components',
			],
		},
	},
};

export const globalTypes = {
	locale: {
		name: 'Locale',
		type: 'select',
		defaultValue: SUPPORTED_LOCALE.pl,
		options: Object.keys(SUPPORTED_LOCALE),
	},
	colorScheme: {
		name: 'Color scheme',
		description: 'Toggle light / dark theme (applies the .-ds-dark class)',
		defaultValue: 'light',
		toolbar: {
			icon: 'paintbrush',
			items: [
				{ value: 'light', icon: 'sun', title: 'Light' },
				{ value: 'dark', icon: 'moon', title: 'Dark' },
			],
			dynamicTitle: true,
		},
	},
	brand: {
		name: 'Brand',
		description: 'Switch brand theme (applies the .-ds-theme-<brand> class)',
		defaultValue: 'wnl',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'wnl', title: 'WNL' },
				{ value: 'mc', title: 'MC' },
				{ value: 'bodywork', title: 'Bodywork' },
			],
			dynamicTitle: true,
		},
	},
};

const BRAND_CLASSES = ['-ds-theme-wnl', '-ds-theme-mc', '-ds-theme-bodywork'];

export const decorators = [
	(story, context) => {
		if (typeof document !== 'undefined') {
			document.body.classList.toggle('-ds-dark', context.globals.colorScheme === 'dark');
			BRAND_CLASSES.forEach((cls) =>
				document.body.classList.toggle(cls, `-ds-theme-${context.globals.brand}` === cls),
			);
		}
		return story();
	},
];

setup((app, context) => {
	i18n.global.locale = context?.globals.locale;
	app.use(i18n);

	// https://storybook.js.org/docs/get-started/frameworks/vue3-vite?renderer=vue#extending-the-vue-application
	initializePrimeVue(app);
	initialize();
});
