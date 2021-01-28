<template>
	<wnl-button class="-icon" :radius="radius" :size="size" :type="type" :state="state">
		<wnl-icon :icon="icon" :size="ICON_SIZES.X_SMALL" />
	</wnl-button>
</template>

<script lang="ts">
import WnlIcon, { ICONS } from 'js/components/global/styleguide/atoms/Icon';

import WnlButton, {
	BUTTON_STATES,
	BUTTON_SIZES,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
} from 'js/components/global/styleguide/atoms/Button';
import { VueConstructor } from 'vue';
import { ICON_SIZES } from 'js/components/global/styleguide/atoms/Icon.vue';

export { BUTTON_STATES, BUTTON_SIZES, BUTTON_RADIUSES, BUTTON_TYPES, ICONS };

export default {
	components: {
		WnlIcon,
		WnlButton,
	},
	props: {
		size: {
			type: String,
			default: BUTTON_SIZES.MEDIUM,
			validator(value) {
				return Object.values(BUTTON_SIZES).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		type: {
			type: String,
			default: BUTTON_TYPES.FILLED,
			validator(value) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
