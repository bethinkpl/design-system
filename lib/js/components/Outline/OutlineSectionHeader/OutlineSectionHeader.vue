<template>
	<div class="outlineSectionHeader">{{ title }}</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.outlineSectionHeader {
	@include info-s-extensive-bold-uppercase;

	color: $color-neutral-text-weak;
	padding: $space-2xs 0;
}
</style>

<script lang="ts">
export default {
	name: 'OutlineSectionHeader',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>
