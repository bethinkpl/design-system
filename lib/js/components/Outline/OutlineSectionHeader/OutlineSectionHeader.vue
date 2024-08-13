<template>
	<div class="ds-outlineSectionHeader">{{ title }}</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-outlineSectionHeader {
	@include info-s-extensive-bold-uppercase;

	color: $color-neutral-text-weak;
	padding: $space-2xs 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'OutlineSectionHeader',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
});
</script>
