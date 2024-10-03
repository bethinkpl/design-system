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

	align-items: center;
	color: $color-neutral-text;
	display: flex;
	min-height: 40px;
	padding: $space-3xs $space-xs;

	&.-ds-isUppercase {
		@include info-m-extensive-bold-uppercase;

		padding: $space-xs $space-xs;
	}
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
});
</script>
