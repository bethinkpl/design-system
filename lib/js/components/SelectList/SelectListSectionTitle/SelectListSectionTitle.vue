<template>
	<div class="selectListSectionTitle" :class="{ '-isUppercase': isUppercase }">{{ label }}</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.selectListSectionTitle {
	@include info-m-default-regular;

	color: $color-neutral-text;
	padding: $space-xxxs $space-xs;

	&.-isUppercase {
		@include info-m-extensive-bold-uppercase;

		padding: $space-xs $space-xs;
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
		isUppercase: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
