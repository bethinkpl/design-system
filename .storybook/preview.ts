import { initialize } from '../lib/js/icons/fontawesome';
import { initializePrimeVue } from '../lib/js';

import { setup } from '@storybook/vue3';

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

setup((app) => {
	// https://storybook.js.org/docs/get-started/frameworks/vue3-vite?renderer=vue#extending-the-vue-application
	initializePrimeVue(app);
	initialize();
});
