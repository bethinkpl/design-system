import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';

export default {
	title: 'foundations/Borders',
} as Meta;

const borderSizes = [
	{ name: 'border-xs', value: 1 },
	{ name: 'border-s', value: 2 },
	{ name: 'border-m', value: 4 },
	{ name: 'border-l', value: 6 },
	{ name: 'border-xl', value: 8 },
];

const StoryTemplate: StoryFn = () => ({
	data() {
		return {
			spacings: Object.freeze(borderSizes),
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
Static.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32903&t=ItmVGTyxKahcKsdh-4',
	},
};
