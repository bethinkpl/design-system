import Tooltip from './Tooltip.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import DsSwitch from '../Switch/Switch.vue';

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
} as Meta<typeof Tooltip>;

const StoryTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip },
	setup() {
		return { ...args };
	},
	data() {
		return {};
	},
	template: `

		<div style="padding: 60px; width: 100%; display: flex; border: 1px solid; justify-content: center">
			<span>This is a text with </span>
			<tooltip
				:text="text"
				:focus="focus"
				:is-disabled="isDisabled"
				:placement="placement"
				:isPointerVisible="isPointerVisible">
				<b>inline tooltip trigger</b>
			</tooltip>
		</div>
	`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	text: 'Lorem ipsum dolor sit amet.',
	isDisabled: false,
	focus: false,
	placement: TOOLTIP_PLACEMENTS.BOTTOM,
	isPointerVisible: true,
} as Args;

const argTypes = {
	placement: {
		control: { type: 'select', options: Object.values(TOOLTIP_PLACEMENTS) },
		defaultValue: TOOLTIP_PLACEMENTS.BOTTOM,
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
		url: '',
	},
};

const OnDsSwitchTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip, DsSwitch },
	setup() {
		return { ...args };
	},
	template: `
    <div style="padding: 60px; width: 100%; display: flex; border: 1px solid">
      <tooltip
        :text="text"
        :is-disabled="isDisabled"
        :placement="placement"
        :isPointerVisible="isPointerVisible">
        <ds-switch
          label-left="labelLeft"
          label-right="labelRight"
          state="disabled"
        />
      </tooltip>
    </div>
  `,
});

export const OnDsSwitch = OnDsSwitchTemplate.bind({});

OnDsSwitch.argTypes = argTypes;
OnDsSwitch.args = args;
