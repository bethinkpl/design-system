import TopNav from './TopNav.vue';

import { Meta, StoryFn } from '@storybook/vue3';
import TopNavBranding from '../TopNavBranding/TopNavBranding.vue';
import Flag from '../../Flag/Flag.vue';
import { FLAG_SIZES } from '../../Flag/Flag.consts';
import * as FLAGS from '../../Flag/flags';
import IconButton from '../../Buttons/IconButton/IconButton.vue';
import {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_TYPES,
} from '../../Buttons/IconButton/IconButton.consts';
import { BUTTON_RADIUSES } from '../../Buttons/Button/Button.consts';
import { ICONS } from '../../Icons/Icon';
import Avatar from '../../Avatar/Avatar.vue';
import { AVATAR_SIZES } from '../../Avatar/Avatar.consts';
import SlotPlaceholder, {
	SLOT_PLACEHOLDER_SIZES,
} from '../../../../../.storybook/SlotPlaceholder/SlotPlaceholder.vue';
import { TOP_NAV_STORY_LOGO } from '../topNavStoryLogo';

export default {
	title: 'Components/TopNav/TopNav',
	component: TopNav,
} as Meta<typeof TopNav>;

const FilledTemplate: StoryFn<typeof TopNav> = () => ({
	components: { TopNav, TopNavBranding, Flag, IconButton, Avatar },
	setup() {
		return {
			logo: TOP_NAV_STORY_LOGO,
			FLAGS,
			FLAG_SIZES,
			ICONS,
			ICON_BUTTON_COLORS,
			ICON_BUTTON_SIZES,
			ICON_BUTTON_TYPES,
			BUTTON_RADIUSES,
			AVATAR_SIZES,
		};
	},
	template: `
		<top-nav>
			<template #leading>
				<icon-button
					:icon="ICONS.FA_BARS"
					:size="ICON_BUTTON_SIZES.MEDIUM"
					:type="ICON_BUTTON_TYPES.ICON_ONLY"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:radius="BUTTON_RADIUSES.ROUNDED"
				/>
			</template>
			<top-nav-branding title="Bethink">
				<template #logo>
					<span v-html="logo" style="display: inline-flex;" />
				</template>
				<template #accessory>
					<flag :flag="FLAGS.FLAG_POLAND" :size="FLAG_SIZES.XXS" />
				</template>
			</top-nav-branding>
			<template #trailing>
				<avatar username="Bethink User" :size="AVATAR_SIZES.X_SMALL" />
			</template>
		</top-nav>
	`,
});

export const Filled = FilledTemplate.bind({});

const SlotPlaceholdersTemplate: StoryFn<typeof TopNav> = () => ({
	components: { TopNav, SlotPlaceholder },
	setup() {
		return { SLOT_PLACEHOLDER_SIZES };
	},
	template: `
		<top-nav>
			<template #leading>
				<slot-placeholder label="leading" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			</template>
			<slot-placeholder label="default" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			<template #trailing>
				<slot-placeholder label="trailing" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />
			</template>
		</top-nav>
	`,
});

export const SlotPlaceholders = SlotPlaceholdersTemplate.bind({});

const parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/xym3gXf0vBCofzksDtRDaU/INI-201-E-commerce?node-id=345-21287&m=dev',
	},
};

Filled.parameters = parameters;
SlotPlaceholders.parameters = parameters;
