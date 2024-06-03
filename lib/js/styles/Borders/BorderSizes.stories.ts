import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'foundations/Borders',
} as Meta;

const spacings = [
	{ name: 'border-xs', value: 1 },
	{ name: 'border-s', value: 2 },
	{ name: 'border-m', value: 4 },
	{ name: 'border-l', value: 6 },
	{ name: 'border-xl', value: 8 },
];

const StoryTemplate: StoryFn = () => ({
	data() {
		return {
			spacings: Object.freeze(spacings),
		};
	},
	methods: {
		getStyles(spacing) {
			return `border: black solid ${spacing.value}px;`;
		},
	},
	template: `
		<div>
			<div v-for="spacing in spacings" style="margin-bottom: 24px;">
				<code>
					\${{ spacing.name }}: {{ spacing.value }}px
				</code>
				<div :style="getStyles(spacing)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			</div>
		</div>
	`,
});

export const Static = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {} as ArgTypes;

Static.argTypes = argTypes;
Static.args = args;
