import DrawerSection from './DrawerSection.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { SECTION_HEADER_ICON_COLORS, SECTION_HEADER_SIZES } from '../../Headers/SectionHeader';
import { ICONS } from '../../Icons/Icon';
import { useArgs } from '@storybook/preview-api';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';
import { toRefs } from 'vue';

export default {
	title: 'Components/Drawer/DrawerSection',
	component: DrawerSection,
} as Meta<typeof DrawerSection>;

const StoryTemplate: StoryFn<typeof DrawerSection> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { DrawerSection, SlotPlaceholder },
		setup() {
			const reactiveArgs = toRefs(args);

			return {
				...reactiveArgs,
				ICONS,
				SLOT_PLACEHOLDER_SIZES,
			};
		},
		methods: {
			infoClicked() {
				console.log('info clicked');
			},
			isExpandedUpdated(isExpanded: boolean) {
				updateArgs({
					isExpanded,
				});
			},
		},
		template: `
			<drawer-section
				:size="size"
				:title="title"
				:title-ellipsis="titleEllipsis"
				:supporting-text="supportingText"
				:eyebrow="eyebrow"
				:icon-left="ICONS[iconLeft]"
				:icon-left-color="iconLeftColor"
				:icon-right="ICONS[iconRight]"
				:icon-right-color="iconRightColor"
				:info="info"
				:has-divider="hasDivider"
				:is-expandable="isExpandable"
				:is-expanded="isExpanded"
				@infoClick="infoClicked"
				@update:isExpanded="isExpandedUpdated"
			>
				<slot-placeholder label="default slot" />
				<template #uncollapsible>
					<slot-placeholder label="uncollapsible slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" /></template>
				<template #sectionHeaderDefault>
					<slot-placeholder label="section header children slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
				</template>
			</drawer-section>`,
	};
};

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SECTION_HEADER_SIZES.MEDIUM,
	title: 'Drawer Section Header',
	titleEllipsis: false,
	supportingText: '',
	eyebrow: '',
	iconLeft: null,
	iconLeftColor: SECTION_HEADER_ICON_COLORS.NEUTRAL,
	iconRight: null,
	iconRightColor: SECTION_HEADER_ICON_COLORS.NEUTRAL,
	info: false,
	hasDivider: true,
	isExpandable: false,
	isExpanded: true,
} as Args;

const argTypes = {
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconLeftColor: {
		control: 'select',
		options: [null, ...Object.values(SECTION_HEADER_ICON_COLORS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRightColor: {
		control: 'select',
		options: [null, ...Object.values(SECTION_HEADER_ICON_COLORS)],
	},
	size: {
		control: 'select',
		options: Object.values(SECTION_HEADER_SIZES),
	},
	hasDivider: {
		control: 'boolean',
	},
	info: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4',
	},
};
