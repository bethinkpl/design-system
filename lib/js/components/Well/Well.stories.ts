// SB8.0 Good code to copy when creating a new story - this code use new API

import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import Well from './Well.vue';
import { CHIP_AVAILABLE_PADDINGS, WELL_PADDINGS } from './Well.consts';
import type { ComponentProps } from 'vue-component-type-helpers';
import { ICONS } from '../Icons/Icon';
import { CHIP_COLORS, CHIP_DEFAULT_COLOR, CHIP_RADIUSES } from '../Chip';
import DsBanner, { BANNER_COLORS } from '../Banner';

type WellProps = ComponentProps<typeof Well>;

function wrapWithContainer(template: string): string {
	// line-height: 0; is to remove extra space below the badge (as it's an inline element)
	return `<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${template}
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" /></div>
`;
}

const meta: Meta<WellProps> = {
	title: 'Components/Well',
	component: Well,
	render: (args) => ({
		components: { Well, DsBanner },
		setup() {
			return { args };
		},
		template: wrapWithContainer(
			'<well v-bind="args" :chip-left-icon="ICONS[args.chipLeftIcon]"><div v-html="args.content" /></well>',
		),
		data() {
			return {
				ICONS: Object.freeze(ICONS),
				BANNER_COLORS: Object.freeze(BANNER_COLORS),
			};
		},
		computed: {
			invalidUsage() {
				return (
					args.hasChip && !Object.values(CHIP_AVAILABLE_PADDINGS).includes(args.padding)
				);
			},
		},
	}),
	argTypes: {
		padding: {
			control: 'select',
			options: [null, ...Object.values(WELL_PADDINGS)],
		},
		content: {
			control: 'text',
		},
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/oqNhXXGdc4ZnNQ6YNpkLEK/INI-152-Baza-v3---planowanie?node-id=1807-518161&t=sQ5nflpPY2YcPKNc-4',
		},
	},
};
export default meta;

type Story = StoryObj<WellProps>;

export const Interactive: Story = {
	args: {
		padding: null,
		content:
			'<h3 style="margin-top: 0">Content</h3>' +
			'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
		hasChip: false,
		chipLabel: 'Chip z labelem',
		chipLabelUppercase: false,
		chipLeftIcon: null,
		chipRadius: CHIP_RADIUSES.ROUNDED,
		color: CHIP_DEFAULT_COLOR,
		colorHex: '',
	} as Args,
};

const argTypes = {
	chipLeftIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	chipColor: {
		control: 'select',
		options: Object.values(CHIP_COLORS),
	},
	chipRadius: {
		control: 'select',
		options: Object.values(CHIP_RADIUSES),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
