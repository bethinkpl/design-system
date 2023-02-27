import SelectListItemToggle from './SelectListItemToggle.vue';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';
import { SELECT_LIST_ITEM_SIZES } from '../SelectListItem/SelectListItem.consts';

export default {
	title: 'Components/SelectList/SelectListItemToggle',
	component: SelectListItemToggle,
} as Meta<typeof SelectListItemToggle>;

const StoryTemplate: StoryFn<typeof SelectListItemToggle> = (argTypes, { updateArgs }) => ({
	components: { SelectListItemToggle },
	props: Object.keys(argTypes),
	template: `
		<select-list-item-toggle
			:icon-off="ICONS[iconOff]"
			:icon-on="ICONS[iconOn]"
			:is-loading="isLoading"
			:is-on="isOn"
			:label-off="labelOff"
			:label-on="labelOn"
			:size="size"
			@click.native="onClick"
		/>
		`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		onClick() {
			updateArgs({
				isLoading: true,
			});
			setTimeout(
				() =>
					updateArgs({
						isLoading: false,
						// @ts-ignore
						isOn: !this.isOn,
					}),
				1000,
			);
		},
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SELECT_LIST_ITEM_SIZES.SMALL,
	labelOff: 'Label off',
	labelOn: 'Label on',
	iconOff: 'FA_STAR',
	iconOn: 'FA_STAR_SOLID',
	isOn: false,
	isLoading: false,
} as Args;

const argTypes = {
	iconOff: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	iconOn: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
	},
	size: {
		control: { type: 'select', options: Object.values(SELECT_LIST_ITEM_SIZES) },
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5367%3A96717&t=rKEt9RQrHIDsfC7p-4',
	},
};
