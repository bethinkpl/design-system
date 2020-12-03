<template>
	<wnl-button class="-icon" :radius="radius" :size="size" :type="type" :state="state">
		<wnl-icon :fa-icon-class="faIconClass" size="x-small" />
	</wnl-button>
</template>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlButton, {
	STATES,
	SIZES,
	RADIUSES,
	TYPES,
} from 'js/components/global/styleguide/atoms/Button';

export { STATES, SIZES, RADIUSES, TYPES };

export default {
	components: {
		WnlIcon,
		WnlButton,
	},
	props: {
		size: {
			type: String,
			default: SIZES.MEDIUM,
			validator(value) {
				return Object.values(SIZES).includes(value);
			},
		},
		radius: {
			type: String,
			default: RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(RADIUSES).includes(value);
			},
		},
		type: {
			type: String,
			default: TYPES.FILLED,
			validator(value) {
				return Object.values(TYPES).includes(value);
			},
		},
		faIconClass: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			default: STATES.DEFAULT,
			validator(value) {
				return Object.values(STATES).includes(value);
			},
		},
	},
};
</script>
