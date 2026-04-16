import SelectListItemContainer from './SelectListItemContainer.vue';
import Tile from '../../Tile';
import { TILE_STATES } from '../../Tile';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SelectList/SelectListItemContainer',
	component: SelectListItemContainer,
} as Meta<typeof SelectListItemContainer>;

const StoryTemplate: StoryFn<typeof SelectListItemContainer> = () => ({
	components: { SelectListItemContainer, DsTile: Tile },
	template: `
<select-list-item-container>
	<ds-tile
		text="this is a text text"
		eyebrow-text="this is an eyebrowText text"
		additional-text="this is some additionalText"
		:interactive="false"
		:state="TILE_STATES.DEFAULT"
	/>
</select-list-item-container>
	`,
	data: () => ({ TILE_STATES }),
});

export const Default = StoryTemplate.bind({});

Default.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5367-94238&m=dev',
	},
};
