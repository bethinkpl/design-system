import Dropdown from './Dropdown.vue';
import { DROPDOWN_ALIGNS, DROPDOWN_RADIUSES } from './Dropdown.consts';
import SelectList from '../SelectList/SelectList.vue';
import Modal from '../Modals/Modal/Modal.vue';
import DsButton, { BUTTON_TYPES } from '../Buttons/Button';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import DsBasicRichListItem from '../RichList/BasicRichListItem';
import { RICH_LIST_ITEM_BACKGROUND_COLOR, RICH_LIST_ITEM_SIZE } from '../RichList/RichListItem';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import SelectListItem from '../SelectList/SelectListItem/SelectListItem.vue';
import SelectListItemDivider from '../SelectList/SelectListItemDivider/SelectListItemDivider.vue';
import SelectListSectionTitle from '../SelectList/SelectListSectionTitle/SelectListSectionTitle.vue';

export default {
	title: 'Components/Dropdown',
	component: Dropdown,
} as Meta<typeof Dropdown>;

const StoryTemplate: StoryFn<typeof Dropdown> = (args) => ({
	components: { Dropdown, SelectList, SelectListItem },
	setup() {
		return args;
	},
	template: `
    <div style="position: relative">
      <dropdown :open="open"
                :append-to-body="appendToBody"
                :has-same-width="hasSameWidth"
                :radius="radius"
                :align="align"
                :max-height="maxHeight"
                :side-flip="sideFlip"
                :hide-when-detached="hideWhenDetached"
                :stick-to-boundary="stickToBoundary">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click="close" />
            <select-list-item label="Two" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	radius: DROPDOWN_RADIUSES.BOTH,
	open: false,
	appendToBody: true,
	hasSameWidth: false,
	maxHeight: '',
	align: DROPDOWN_ALIGNS.START,
	sideFlip: true,
	hideWhenDetached: false,
	stickToBoundary: false,
} as Args;

const argTypes = {
	radius: {
		control: 'select',
		options: Object.values(DROPDOWN_RADIUSES),
	},
	align: {
		control: 'select',
		options: Object.values(DROPDOWN_ALIGNS),
	},
	maxHeight: {
		control: 'text',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857',
	},
};

// A modal clips its content (`overflow: hidden`), so a dropdown opened inside it needs
// appendToBody to show its panel past the modal's edge. The modal stays put while the page
// scrolls, so a long list needs maxHeight: scrolling the page can't reveal the rest of the panel.
export const InModal: StoryFn<typeof Dropdown> = (args) => ({
	components: { Dropdown, Modal, SelectList, SelectListItem },
	setup() {
		return args;
	},
	template: `
    <modal header-title="Dropdown in a modal">
      <dropdown :append-to-body="appendToBody" has-same-width max-height="240px">
        <template #reference="{ isOpen }"><span>Dropdown entry point {{ isOpen ? 'opened' : 'closed' }}</span></template>
        <template #default="{ close }">
          <select-list>
            <select-list-item v-for="n in 30" :key="n" :label="'Item ' + n" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </modal>`,
});

InModal.args = { appendToBody: true } as Args;

// An overflow menu: an icon button opens a list of actions, aligned to the button's end edge.
export const ActionMenu: StoryFn<typeof Dropdown> = () => ({
	components: { Dropdown, DsIconButton, SelectList, SelectListItem, SelectListItemDivider },
	setup() {
		const lastAction = ref('none');
		const run = (action: string, close: () => void) => {
			lastAction.value = action;
			close();
		};

		return { ICONS, ICON_BUTTON_COLORS, ICON_BUTTON_SIZES, lastAction, run };
	},
	template: `
    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 16px; padding: 24px;">
      <span>Last action: {{ lastAction }}</span>
      <dropdown align="end">
        <template #reference>
          <ds-icon-button
            :icon="ICONS.FA_ELLIPSIS_VERTICAL"
            :size="ICON_BUTTON_SIZES.MEDIUM"
            :color="ICON_BUTTON_COLORS.NEUTRAL"
            aria-label="More actions"
          />
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="Edit" :icon-left="ICONS.FA_PEN_TO_SQUARE" @click="run('edit', close)" />
            <select-list-item label="Duplicate" :icon-left="ICONS.FA_COPY" @click="run('duplicate', close)" />
            <select-list-item label="Copy link" :icon-left="ICONS.FA_LINK" @click="run('copy link', close)" />
            <select-list-item-divider />
            <select-list-item label="Archive" :icon-left="ICONS.FA_BOX_ARCHIVE" @click="run('archive', close)" />
            <select-list-item label="Delete" :icon-left="ICONS.FA_TRASH_CAN" @click="run('delete', close)" />
          </select-list>
        </template>
      </dropdown>
    </div>`,
});

// A single-choice picker: the reference shows the current value and its chevron follows `isOpen`.
export const SingleSelect: StoryFn<typeof Dropdown> = () => ({
	components: { Dropdown, DsButton, SelectList, SelectListItem },
	setup() {
		const options = ['Last 7 days', 'Last 30 days', 'Last 12 months', 'All time'];
		const selected = ref(options[1]);
		const select = (option: string, close: () => void) => {
			selected.value = option;
			close();
		};

		return { BUTTON_TYPES, ICONS, options, selected, select };
	},
	template: `
    <div style="padding: 24px;">
      <dropdown>
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="option in options"
              :key="option"
              :label="option"
              :is-selected="option === selected"
              @click="select(option, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>`,
});

// A long grouped list: `maxHeight` caps the panel and the list scrolls inside. Without it, the
// panel keeps its full height and the page scrolls to reveal the rest.
export const ScrollableGroupedList: StoryFn<typeof Dropdown> = (args) => ({
	components: { Dropdown, DsButton, SelectList, SelectListItem, SelectListSectionTitle },
	setup() {
		const groups = [
			{
				title: 'Internal medicine',
				items: [
					'Cardiology',
					'Gastroenterology',
					'Nephrology',
					'Pulmonology',
					'Endocrinology',
				],
			},
			{
				title: 'Surgery',
				items: ['General surgery', 'Orthopaedics', 'Neurosurgery', 'Urology'],
			},
			{
				title: 'Other',
				items: ['Paediatrics', 'Psychiatry', 'Dermatology', 'Ophthalmology', 'Radiology'],
			},
		];
		const selected = ref('Cardiology');

		return { args, BUTTON_TYPES, ICONS, groups, selected };
	},
	template: `
    <div style="padding: 24px;">
      <dropdown :max-height="args.maxHeight">
        <template #reference="{ isOpen }">
          <ds-button :type="BUTTON_TYPES.OUTLINED" :icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN">
            {{ selected }}
          </ds-button>
        </template>
        <template #default="{ close }">
          <select-list>
            <template v-for="group in groups" :key="group.title">
              <select-list-section-title :label="group.title" />
              <select-list-item
                v-for="item in group.items"
                :key="item"
                :label="item"
                :is-selected="item === selected"
                @click="selected = item; close()"
              />
            </template>
          </select-list>
        </template>
      </dropdown>
    </div>`,
});

ScrollableGroupedList.args = { maxHeight: '240px' } as Args;
ScrollableGroupedList.argTypes = {
	maxHeight: { control: 'text' },
} as ArgTypes;

// A rich trigger whose chevron sits in DsBasicRichListItem's `actions` slot. That slot stops its
// clicks from reaching the reference, so the chevron calls the slot's `toggle()` itself. The
// panel matches the trigger's width and rounds only the edge away from it.
export const RichListTrigger: StoryFn<typeof Dropdown> = () => ({
	components: { Dropdown, DsBasicRichListItem, DsIconButton, SelectList, SelectListItem },
	setup() {
		const products = [
			'Medicine course',
			'Dentistry course',
			'A product with a longer name that wraps inside the panel',
		];
		const selected = ref(products[0]);
		const select = (product: string, close: () => void) => {
			selected.value = product;
			close();
		};

		return {
			DROPDOWN_RADIUSES,
			ICONS,
			ICON_BUTTON_COLORS,
			ICON_BUTTON_SIZES,
			RICH_LIST_ITEM_BACKGROUND_COLOR,
			RICH_LIST_ITEM_SIZE,
			products,
			selected,
			select,
		};
	},
	template: `
    <div style="padding: 24px; max-width: 400px;">
      <dropdown has-same-width :radius="DROPDOWN_RADIUSES.SINGLE">
        <template #reference="{ isOpen, toggle }">
          <ds-basic-rich-list-item
            :size="RICH_LIST_ITEM_SIZE.MEDIUM"
            :is-draggable="false"
            :is-selectable="false"
            :has-actions-slot-divider="false"
            :background-color="RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL_WEAK"
            eyebrow="Study access · 12 months"
            is-eyebrow-uppercase
            :text="selected"
          >
            <template #actions>
              <ds-icon-button
                :icon="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
                :size="ICON_BUTTON_SIZES.SMALL"
                :color="ICON_BUTTON_COLORS.NEUTRAL"
                aria-label="Change product"
                @click="toggle"
              />
            </template>
          </ds-basic-rich-list-item>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item
              v-for="product in products"
              :key="product"
              :label="product"
              :is-selected="product === selected"
              @click="select(product, close)"
            />
          </select-list>
        </template>
      </dropdown>
    </div>`,
});
