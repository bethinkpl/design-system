<template>
	<wnl-button class="-icon" :state="hovered ? BUTTON_STATES.HOVERED : BUTTON_STATES.DEFAULT">
		<wnl-icon :fa-icon-class="faIconClass" size="x-small" />
	</wnl-button>
</template>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlButton, { STATES as BUTTON_STATES } from 'js/components/global/styleguide/atoms/Button';

export default {
	components: {
		WnlIcon,
		WnlButton,
	},
	props: {
		faIconClass: {
			type: String,
			required: true,
		},
		hovered: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.BUTTON_STATES = BUTTON_STATES;
	},
};
</script>
