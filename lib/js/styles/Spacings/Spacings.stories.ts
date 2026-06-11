import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'foundations/Spacings',
} as Meta;

const spaceBase = 2;

const spacings = [28, 20, 16, 12, 10, 8, 6, 5, 4, 3, 2, 1].map((multiplier) => ({
	name: `space-${multiplier}`,
	value: spaceBase * multiplier,
}));

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
