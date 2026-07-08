<template>
	<div class="ds-topNavBranding">
		<div v-if="$slots.logo" class="ds-topNavBranding__logo">
			<slot name="logo" />
		</div>
		<span class="ds-topNavBranding__title">
			{{ title }}
		</span>
		<div v-if="$slots.accessory" class="ds-topNavBranding__accessory">
			<slot name="accessory" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/media-queries';

.ds-topNavBranding {
	align-items: center;
	display: flex;
	gap: $space-6;
	width: 100%;

	&__logo {
		align-items: center;
		display: flex;
		flex-shrink: 0;
	}

	&__title {
		@include text-m-compact-regular;

		color: $color-default-text;
		flex: 0 1 auto;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		@media #{breakpoint-s()} {
			@include text-l-compact-regular;
		}
	}

	&__accessory {
		align-items: center;
		display: flex;
		flex-shrink: 0;
	}
}
</style>

<script setup lang="ts">
defineProps<{
	title: string;
}>();

defineSlots<{
	logo?: () => any;
	accessory?: () => any;
}>();
</script>
