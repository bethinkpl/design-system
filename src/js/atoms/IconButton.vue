<template>
	<span
		class="a-button -icon"
		:class="{
			'-hovered': hovered,
		}"
	>
		<wnl-icon :fa-icon-class="faIconClass" size="x-small" />
	</span>
</template>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	components: {
		WnlIcon,
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
};
</script>
