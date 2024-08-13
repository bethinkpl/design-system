import Tooltip from './Tooltip.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import DsSwitch from '../Switch/Switch.vue';
import DsButton from '../Buttons/Button/Button.vue';

export default {
	title: 'Prime Vue Components/Tooltip',
	component: Tooltip,
} as Meta<typeof Tooltip>;

const StoryTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip },
	setup() {
		return { ...args };
	},
	template: `
		<div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
			<div style="padding: 60px;">
				<span>This is a text with </span>
				<tooltip
					:text="text"
					:inline="inline"
					:is-disabled="isDisabled"
					:placement="placement"
					:is-pointer-visible="isPointerVisible">
					<b>inline tooltip trigger</b>
				</tooltip>
			</div>
		</div>
	`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	text: 'Lorem ipsum dolor sit amet.',
	isDisabled: false,
	placement: TOOLTIP_PLACEMENTS.BOTTOM,
	isPointerVisible: true,
	inline: true,
} as Args;

const argTypes = {
	placement: {
		control: 'select',
		options: Object.values(TOOLTIP_PLACEMENTS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8238-6888&m=dev',
	},
};

const OnDsSwitchTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip, DsSwitch },
	setup() {
		return { ...args };
	},
	template: `
		<div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
			<div style="padding: 60px;">
				<tooltip
					:text="text"
					:is-disabled="isDisabled"
					:placement="placement"
					:is-pointer-visible="isPointerVisible">
					<ds-switch
						label-left="labelLeft"
						label-right="labelRight"
						:state="switchDisabled ? 'disabled' : 'default'"
					/>
				</tooltip>
			</div>
		</div>
	`,
});

export const OnDsSwitch = OnDsSwitchTemplate.bind({});

OnDsSwitch.argTypes = argTypes;
OnDsSwitch.args = { ...args, switchDisabled: true, inline: false };

const OnDsButtonTemplate: StoryFn<typeof Tooltip> = (args) => ({
	components: { Tooltip, DsButton },
	setup() {
		return { ...args };
	},
	template: `
		<div style="padding: 60px; width: 100%;display: flex;  justify-content: center">
			<div style="padding: 60px;">
				<tooltip
					:text="text"
					:is-disabled="isDisabled"
					:placement="placement"
					:is-pointer-visible="isPointerVisible">
					<ds-button
						:state="buttonDisabled ? 'disabled': 'default'"
					>
						Test button
					</ds-button>
				</tooltip>
			</div>
		</div>
	`,
});

export const OnDsButton = OnDsButtonTemplate.bind({});

OnDsButton.argTypes = argTypes;
OnDsButton.args = { ...args, buttonDisabled: true, inline: false };
