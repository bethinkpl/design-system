import DropdownLegacy from './DropdownLegacy.vue';
import {
	DROPDOWN_LEGACY_PLACEMENTS,
	DROPDOWN_LEGACY_RADIUSES,
	DROPDOWN_LEGACY_TRIGGER_ACTIONS,
} from './DropdownLegacy.consts';
import SelectList from '../SelectList/SelectList.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import SelectListItem from '../SelectList/SelectListItem/SelectListItem.vue';

export default {
	title: 'Components/DropdownLegacy',
	component: DropdownLegacy,
} as Meta<typeof DropdownLegacy>;

const StoryTemplate: StoryFn<typeof DropdownLegacy> = (args) => ({
	components: { DropdownLegacy, SelectList, SelectListItem },
	setup() {
		return args;
	},
	template: `
    <div style="position: relative">
      <dropdown-legacy :trigger-action="triggerAction"
                :force-show="forceShow"
                :same-width="sameWidth"
                :radius="radius"
                :placement="placement"
                :max-height="maxHeight">
        <template #reference="{ isOpened }"><span>DropdownLegacy entry point {{ isOpened ? 'opened' : 'closed' }}</span>
        </template>
        <template #default="{ close }">
          <select-list>
            <select-list-item label="One" @click.native="close" />
            <select-list-item label="Two" @click.native="close" />
          </select-list>
        </template>
      </dropdown-legacy>
    </div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	triggerAction: DROPDOWN_LEGACY_TRIGGER_ACTIONS.CLICK,
	radius: DROPDOWN_LEGACY_RADIUSES.BOTH,
	forceShow: false,
	sameWidth: false,
	maxHeight: '',
	placement: DROPDOWN_LEGACY_PLACEMENTS.BOTTOM_START,
} as Args;

const argTypes = {
	triggerAction: {
		control: 'select',
		options: Object.values(DROPDOWN_LEGACY_TRIGGER_ACTIONS),
	},
	radius: {
		control: 'select',
		options: Object.values(DROPDOWN_LEGACY_RADIUSES),
	},
	placement: {
		control: 'select',
		options: Object.values(DROPDOWN_LEGACY_PLACEMENTS),
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
