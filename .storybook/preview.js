import 'design-system/lib/styles/_normalize.scss';
import 'design-system/lib/styles/design-system.scss';
import 'design-system/lib/styles/storybook.scss';

import { useArgs } from '@storybook/client-api';
import { initialize } from 'design-system/lib/js/icons/fontawesome';

import ElementPlus, { dayjs } from 'element-plus'
import pl from 'element-plus/es/locale/lang/pl'
import {app} from "@storybook/vue3";

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

dayjs.en.weekStart = 1

app.use(ElementPlus, {
	locale: {
		...pl,
		el: {
			...pl.el,
			datepicker: {
				...pl.el.datepicker,
				weeks: {
					mon: "pn.",
					tue: "wt.",
					wed: "śr.",
					thu: "czw.",
					fri: "pt.",
					sat: "sob.",
					sun: "nd."
				},
				year: '',
			},
		},
	},
});

export const parameters = {
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

// See https://craigbaldwin.com/blog/updating-args-storybook-vue/
export const decorators = [
	(story, context) => {
		const [_, updateArgs] = useArgs();
		return story({ ...context, updateArgs });
	},
];

initialize();
