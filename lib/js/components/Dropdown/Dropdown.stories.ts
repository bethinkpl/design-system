import Dropdown from './Dropdown.vue';
import { DROPDOWN_PLACEMENTS, DROPDOWN_RADIUSES } from './Dropdown.consts';
import SelectList from '../SelectList/SelectList.vue';
import Modal from '../Modals/Modal/Modal.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import SelectListItem from '../SelectList/SelectListItem/SelectListItem.vue';

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
      <dropdown :force-show="forceShow"
                :append-to-body="appendToBody"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>Dropdown entry point {{ isOpened ? 'opened' : 'closed' }}</span>
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
	forceShow: false,
	appendToBody: false,
	sameWidth: false,
	maxHeight: '',
	placement: DROPDOWN_PLACEMENTS.BOTTOM_START,
} as Args;

const argTypes = {
	radius: {
		control: 'select',
		options: Object.values(DROPDOWN_RADIUSES),
	},
	placement: {
		control: 'select',
		options: Object.values(DROPDOWN_PLACEMENTS),
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
// appendToBody to show its panel past the modal's edge.
export const InModal: StoryFn<typeof Dropdown> = (args) => ({
	components: { Dropdown, Modal, SelectList, SelectListItem },
	setup() {
		return args;
	},
	template: `
    <modal header-title="Dropdown in a modal">
      <dropdown :append-to-body="appendToBody" same-width>
        <template #reference="{ isOpened }"><span>Dropdown entry point {{ isOpened ? 'opened' : 'closed' }}</span></template>
        <template #default="{ close }">
          <select-list>
            <select-list-item v-for="n in 6" :key="n" :label="'Item ' + n" @click="close" />
          </select-list>
        </template>
      </dropdown>
    </modal>`,
});

InModal.args = { appendToBody: true } as Args;
