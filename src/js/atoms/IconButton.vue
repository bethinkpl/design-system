<template>
	<wnl-button class="-icon" :radius="radius" :size="size" :type="type" :state="state">
		<wnl-icon :fa-icon-class="faIconClass" size="x-small" />
	</wnl-button>
</template>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlButton, {
	BUTTON_STATES,
	BUTTON_SIZES,
	BUTTON_RADIUSES,
	BUTTON_TYPES,
} from 'js/components/global/styleguide/atoms/Button';

export { BUTTON_STATES, BUTTON_SIZES, BUTTON_RADIUSES, BUTTON_TYPES };

export default {
	name: 'IconButton',
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
		faIconClass: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
	},
};
</script>
