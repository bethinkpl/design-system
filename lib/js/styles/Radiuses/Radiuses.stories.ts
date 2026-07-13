import { Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'foundations/Radiuses',
} as Meta;

const radiuses = [
	{ name: 'radius-xs', value: '2px' },
	{ name: 'radius-s', value: '4px' },
	{ name: 'radius-m', value: '6px' },
	{ name: 'radius-l', value: '8px' },
	// Special radius for components which have to be always rounded
	{ name: 'radius-xl', value: '200px' },
];

const StoryTemplate: StoryFn = () => ({
	setup() {
		return {
			radiuses,
		};
	},
	methods: {
		getStyles(radius) {
			return `
				border-radius: ${radius.value};
				background-color: gray;
				height: 80px;
				width: 160px;
			`;
		},
	},
	template: `
		<div>
			<div v-for="radius in radiuses" style="margin-bottom: 24px;">
				<code>
					\${{ radius.name }}: {{ radius.value }}
				</code>
				<div :style="getStyles(radius)"></div>
			</div>
		</div>
	`,
});

export const Static = StoryTemplate.bind({});
