import SelectionTile from './SelectionTile.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { SELECTION_TILE_STATE, SELECTION_TILE_TYPE } from './SelectionTile.consts';
import { ICONS } from '../Icons/Icon';
import { useArgs } from '@storybook/preview-api';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
	title: 'Components/SelectionTile',
	component: SelectionTile,
	decorators: [
		(story) => ({
			components: { story },
			template: "<div style='display: flex; max-width: 300px;'><story /></div>",
		}),
		withActions,
	],
} as Meta<typeof SelectionTile>;

const StoryTemplate: StoryFn<typeof SelectionTile> = (args) => {
	const [_, updateArgs] = useArgs();

	return {
		components: { SelectionTile },
		setup() {
			return args;
		},
		methods: {
			onIsSelectedUpdated(isSelected) {
				updateArgs({
					isSelected,
				});
			},
			onIconClick() {
				alert('Klik w ikonę');
			},
		},
		data() {
			return {
				ICONS: Object.freeze(ICONS),
			};
		},
		template: `
			<SelectionTile
				:title="title"
				:supporting-text="supportingText"
				:type="type"
				:icon="ICONS[icon]"
				:is-selected="isSelected"
				:state="state"
				@icon-click="onIconClick"
				@update:is-selected="onIsSelectedUpdated"
			/>`,
	};
};

export const Interactive = StoryTemplate.bind({});

Interactive.argTypes = {
	type: {
		control: 'select',
		options: Object.values(SELECTION_TILE_TYPE),
	},
	title: { control: 'text' },
	supportingText: { control: 'text' },
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	isSelected: { control: 'boolean' },
	state: {
		control: 'select',
		options: Object.values(SELECTION_TILE_STATE),
	},
} as ArgTypes;

Interactive.args = {
	type: SELECTION_TILE_TYPE.RADIO_BUTTON,
	title: 'Example title',
	supportingText: '',
	icon: null,
	isSelected: false,
	state: SELECTION_TILE_STATE.DEFAULT,
} as Args;

Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6085-110809&t=436AgbJEEFBphXVn-0',
	},
};
