import Dropdown from './Dropdown.vue';
import {
	DROPDOWN_PLACEMENTS,
	DROPDOWN_RADIUSES,
	DROPDOWN_TRIGGER_ACTIONS,
} from './Dropdown.consts';
import SelectList from '../SelectList/SelectList.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';
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
      <dropdown :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>Dropdown entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown>
    </div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	triggerAction: DROPDOWN_TRIGGER_ACTIONS.CLICK,
	radius: DROPDOWN_RADIUSES.BOTH,
	forceShow: false,
	sameWidth: false,
	maxHeight: '',
	placement: DROPDOWN_PLACEMENTS.BOTTOM_START,
} as Args;

const argTypes = {
	triggerAction: {
		control: 'select',
		options: Object.values(DROPDOWN_TRIGGER_ACTIONS),
	},
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
