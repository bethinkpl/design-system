<template>
	<div class="ds-topNavBranding">
		<component :is="brandAs" v-bind="brandBindings" class="ds-topNavBranding__brand">
			<span v-if="$slots.logo" class="ds-topNavBranding__logo">
				<slot name="logo" />
			</span>
			<span class="ds-topNavBranding__title">
				{{ title }}
			</span>
		</component>
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

	&__brand {
		align-items: center;
		color: inherit;
		display: flex;
		gap: $space-6;
		text-decoration: none;
	}

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
import { computed } from 'vue';

// DS don't have vue-router installed, so we define a loose type which should match RouteLocationRaw
type RouterLocation = string | Record<string, unknown>;

const { href = '', to = '' } = defineProps<{
	title: string;
	href?: string;
	to?: RouterLocation;
}>();

defineSlots<{
	logo?: () => any;
	accessory?: () => any;
}>();

const brandAs = computed(() => {
	if (href) {
		return 'a';
	}
	if (to) {
		return 'router-link';
	}
	return 'div';
});

const brandBindings = computed(() => {
	if (href) {
		return { href };
	}
	if (to) {
		return { to };
	}
	return {};
});
</script>
