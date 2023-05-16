<template>
	<div class="selectListSectionTitle" :class="{ '-isCaption': isCaption }">{{ label }}</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.selectListSectionTitle {
	@include info-m-extensive-bold-uppercase;

	color: $color-neutral-text;
	padding: $space-xxs $space-xs;

	&.-isCaption {
		@include info-m-default-regular;
	}
}
</style>

<script lang="ts">
export default {
	name: 'SelectListSectionTitle',
	props: {
		label: {
			type: String,
			required: true,
		},
		isCaption: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
