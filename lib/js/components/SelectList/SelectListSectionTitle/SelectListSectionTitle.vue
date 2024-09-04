<template>
	<div class="ds-selectListSectionTitle" :class="{ '-ds-isUppercase': isUppercase }">{{
		label
	}}</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-selectListSectionTitle {
	@include info-m-default-regular;

	color: $color-neutral-text;
	padding: $space-3xs $space-xs;
	min-height: 40px;

	&.-ds-isUppercase {
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
