import SectionHeader from './SectionHeader.vue';
import {
	SECTION_HEADER_ICON_COLORS,
	SECTION_HEADER_MOBILE_LAYOUTS,
	SECTION_HEADER_SIZES,
} from './SectionHeader.consts';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Headers/SectionHeader',
	component: SectionHeader,
} as Meta<typeof SectionHeader>;

const StoryTemplate: StoryFn<typeof SectionHeader> = (args, { updateArgs }) => ({
	components: { SectionHeader },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		onIsExpandedUpdated(isExpanded) {
			updateArgs({
				isExpanded,
			});
		},
	},
	template:
		'<section-header' +
		' :is-expandable="isExpandable"' +
		' :hide-slot-when-collapsed="hideSlotWhenCollapsed"' +
		' :icon-left="ICONS[iconLeft]"' +
		' :icon-left-color="iconLeftColor"' +
		' :icon-right="ICONS[iconRight]"' +
		' :icon-right-color="iconRightColor"' +
		' :is-expanded="isExpanded"' +
		' :size="size"' +
		' :info="info"' +
		' :title="title"' +
		' :eyebrow="eyebrow"' +
		' :has-divider="hasDivider"' +
		' :mobile-layout="mobileLayout"' +
		' :supportingText="supportingText"' +
		' @update:isExpanded="onIsExpandedUpdated"' +
		'>' +
		'<div style="border: 1px solid;">Slot content</div>' +
		'</section-header>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SECTION_HEADER_SIZES.MEDIUM,
	title: 'Section Header',
	supportingText:
		'Supporting text. Et doloribus aspernatur suscipit provident maiores. Natus natus et pariatur. Eligendi illo quo esse. Tenetur ad neque veniam.',
	eyebrow: 'eyebrow text',
	iconLeft: ICONS.FA_PLAY,
	iconLeftColor: null,
	iconRight: ICONS.FA_BOOK,
	iconRightColor: null,
	info: true,
	hasDivider: true,
	isExpandable: false,
	isExpanded: false,
	hideSlotWhenCollapsed: false,
	mobileLayout: SECTION_HEADER_MOBILE_LAYOUTS.VERTICAL,
} as Args;

const argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconLeftColor: {
		control: { type: 'select', options: [null, ...Object.values(SECTION_HEADER_ICON_COLORS)] },
		defaultValue: SECTION_HEADER_ICON_COLORS.NEUTRAL,
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	iconRightColor: {
		control: { type: 'select', options: [null, ...Object.values(SECTION_HEADER_ICON_COLORS)] },
		defaultValue: SECTION_HEADER_ICON_COLORS.NEUTRAL,
	},
	size: {
		control: { type: 'select', options: Object.values(SECTION_HEADER_SIZES) },
		defaultValue: SECTION_HEADER_SIZES.MEDIUM,
	},
	hasDivider: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
	info: {
		control: { type: 'boolean' },
		defaultValue: false,
	},
	mobileLayout: {
		control: {
			type: 'select',
			options: Object.values(SECTION_HEADER_MOBILE_LAYOUTS),
			defaultValue: SECTION_HEADER_MOBILE_LAYOUTS.VERTICAL,
		},
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0',
	},
};
