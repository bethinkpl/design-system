import SectionHeader from './SectionHeader.vue';
import { SECTION_HEADER_SIZES } from './SectionHeader.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SectionHeader',
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
		' :expandable="expandable"' +
		' :hide-slot-when-collapsed="hideSlotWhenCollapsed"' +
		' :icon-left="ICONS[iconLeft]"' +
		' :is-expanded="isExpanded"' +
		' :size="size"' +
		' :slot-padding="slotPadding"' +
		' :title="title"' +
		' @update:isExpanded="onIsExpandedUpdated"' +
		'>' +
		'<div style="border: 1px solid;">Slot content</div>' +
		'</section-header>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	expandable: false,
	hideSlotWhenCollapsed: false,
	iconLeft: null,
	isExpanded: false,
	size: SECTION_HEADER_SIZES.M,
	slotPadding: true,
	title: 'Title',
} as Args;

const argTypes = {
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	size: {
		control: { type: 'select', options: Object.values(SECTION_HEADER_SIZES) },
		defaultValue: SECTION_HEADER_SIZES.M,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=3703%3A70270',
	},
};
