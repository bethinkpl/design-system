<template>
	<div class="richListItem">
		<div class="richListItem__wrapper">
			<div class="richListItem__dragAndDrop">
				<ds-icon :icon="ICONS.FA_BARS" />
			</div>
			<div class="richListItem__iconWrapper">
				<ds-icon :icon="ICONS.FA_CALENDAR_CHECK" />
			</div>
			<div class="richListItem__content">content</div>
			<div class="richListItem__metaData">meta</div>
			<div class="richListItem__trailingSlot">X</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';

.richListItem {
	background: $color-neutral-background;
	border-radius: $radius-s;
	display: flex;
	min-height: 62px;
	flex: 1;
	border-left: 4px solid $color-info-border;

	&__wrapper {
		display: flex;
		flex: 1;
		border-radius: 0 $radius-s $radius-s 0;
		padding: 0 $space-xxxxs;
		align-items: center;

		border-top: 1px solid $color-neutral-border-weak;
		border-bottom: 1px solid $color-neutral-border-weak;
		border-right: 1px solid $color-neutral-border-weak;
	}

	&__dragAndDrop,
	&__iconWrapper {
		display: flex;
		padding: $space-xxxs $space-xxxs $space-xxxs $space-s;
		align-items: center;
		color: $color-neutral-icon-weak;
	}

	&__content {
		flex: 1 0 0;
		padding: 0 $space-xxs;
	}

	&__metaData {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__trailingSlot {
		display: flex;
		padding-left: $space-xxs;
		align-items: center;
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../../../components/Icons/Icon';

export default {
	name: 'RichListItem',
	components: {
		DsIcon,
	},
	props: {},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {},
};
</script>
