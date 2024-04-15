import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'foundations/Spacings',
} as Meta;

const spacings = [
	{ name: 'space-4xl', value: 80 },
	{ name: 'space-3xl', value: 64 },
	{ name: 'space-2xl', value: 56 },
	{ name: 'space-xl', value: 40 },
	{ name: 'space-l', value: 32 },
	{ name: 'space-m', value: 24 },
	{ name: 'space-s', value: 16 },
	{ name: 'space-xs', value: 12 },
	{ name: 'space-2xs', value: 8 },
	{ name: 'space-3xs', value: 6 },
	{ name: 'space-4xs', value: 4 },
	{ name: 'space-5xs', value: 2 },
];

const StoryTemplate: StoryFn = () => ({
	data() {
		return {
			spacings: Object.freeze(spacings),
		};
	},
	methods: {
		getStyles(spacing) {
			return `
                    background-color: gray;
                    margin-bottom: 30px;
                    height: ${spacing.value}px;
                    width: ${spacing.value}px;
                `;
		},
	},
	template: `
			<div>
			<div v-for="spacing in spacings">
				<h2>{{ spacing.name }}</h2>
				<code>
					\${{ spacing.name }}: {{ spacing.value }}px
				</code>
				<div :style="getStyles(spacing)"></div>
			</div>
			</div>
    `,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;
