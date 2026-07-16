<template>
	<div class="ds-topNav">
		<div class="ds-topNav__leftWrapper">
			<div v-if="$slots.leading" class="ds-topNav__leading">
				<slot name="leading" />
			</div>
			<div class="ds-topNav__default">
				<slot />
			</div>
		</div>
		<div v-if="$slots.trailing" class="ds-topNav__trailing">
			<slot name="trailing" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/media-queries';

.ds-topNav {
	align-items: center;
	background-color: $color-default-background;
	box-shadow: $shadow-s;
	display: flex;
	gap: $space-6;
	height: 56px;
	padding: 0 $space-6 0 $space-3;
	width: 100%;

	@media #{breakpoint-s()} {
		padding: $space-6 $space-10;
	}

	&__leftWrapper {
		align-items: center;
		display: flex;
		flex: 1 0 0;
		min-width: 0;

		@media #{breakpoint-s()} {
			gap: $space-4;
		}
	}

	&__leading {
		align-items: center;
		display: flex;
		flex-shrink: 0;
	}

	&__default {
		flex: 1 0 0;
		margin-left: $space-3;
		min-width: 0;

		@media #{breakpoint-s()} {
			margin-left: 0;
		}
	}

	&__trailing {
		align-items: center;
		display: flex;
		flex-shrink: 0;
		justify-content: flex-end;
	}
}
</style>

<script setup lang="ts">
defineSlots<{
	leading?: () => any;
	default?: () => any;
	trailing?: () => any;
}>();
</script>
