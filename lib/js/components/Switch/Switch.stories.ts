import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import DsSwitch from './Switch.vue';
import Icon, { ICONS } from '../Icons/Icon';
import { SWITCH_RADIUSES, SWITCH_SIDE, SWITCH_SIZES, SWITCH_STATE } from './Switch.consts';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/Switch',
	component: DsSwitch,
	decorators: [withActions],
} as Meta<typeof DsSwitch>;

const StoryTemplate: StoryFn<typeof DsSwitch> = (args) => ({
	components: {
		DsSwitch,
		Icon,
	},
	setup() {
		return args;
	},
	methods: {
		onSelectedUpdated(side) {
			console.log(side);
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<div style="width: 500px; height: 300px; padding: 10px; border: 1px solid var(--raw-gray-100); position:relative">
			<ds-switch
				:size="size"
				:radius="radius"
				:icon-left="ICONS[iconLeft]"
				:icon-right="ICONS[iconRight]"
				:label-left="labelLeft"
				:label-right="labelRight"
				:state="state"
				:selectedSide="selectedSide"
				@update:selectedSide="onSelectedUpdated"
			/>
		</div>
	`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SWITCH_SIZES.MEDIUM,
	radius: SWITCH_RADIUSES.CAPSULE,
	iconLeft: null,
	iconRight: null,
	labelLeft: 'Left option',
	labelRight: 'Right option',
	state: SWITCH_STATE.DEFAULT,
	selectedSide: SWITCH_SIDE.LEFT,
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(SWITCH_SIZES),
	},
	radius: {
		control: 'select',
		options: Object.values(SWITCH_RADIUSES),
	},
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	state: {
		control: 'select',
		options: Object.values(SWITCH_STATE),
	},
	selectedSide: {
		control: 'select',
		options: Object.values(SWITCH_SIDE),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['updated:selectedSide'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=7270-124052&mode=design&t=cVof0yT3M88A1z0U-0',
	},
};
