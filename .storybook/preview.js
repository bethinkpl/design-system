import 'design-system/lib/styles/_normalize.scss';
import 'design-system/lib/styles/design-system.scss';
import 'design-system/lib/styles/storybook.scss';
import 'design-system/lib/styles/theme-varaibles.scss';

import { initialize } from 'design-system/lib/js/icons/fontawesome';
import { addDecorator } from '@storybook/vue';
import App from 'design-system/lib/js/atoms/App';

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
	mobile1: {
		name: 'Small mobile',
		styles: {
			height: '568px',
			width: '320px',
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
	viewport: { viewports: customViewports },
};

initialize();

addDecorator(() => ({
	components: {
		App
	},
	template: `
    <app>
      <story/>
    </app>
    `,
}));
