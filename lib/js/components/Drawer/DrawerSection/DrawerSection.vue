<template>
	<div class="drawerSection">
		<div
			v-if="title"
			class="drawerSection__header"
			:class="{ '-isExpandable': isExpandable }"
			@click="onHeaderClick"
		>
			<div class="drawerSection__headerTitleWrapper">
				<div class="drawerSection__headerTitle">{{ title }}</div>
				<ds-icon-button
					v-if="isExpandable"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:icon="isExpanded ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
					:size="ICON_BUTTON_SIZES.X_SMALL"
					:touchable="false"
				/>
			</div>
			<ds-divider v-if="hasDivider" />
		</div>
		<div v-if="isExpanded || !isExpandable">
			<slot />
		</div>
		<div v-if="$slots.uncollapsible"><slot name="uncollapsible" /></div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.drawerSection {
	$root: &;

	&__header {
		&:hover,
		&:focus {
			#{$root}__headerTitle {
				color: $color-neutral-text-weak-hovered;
			}
		}

		&.-isExpandable {
			cursor: pointer;
		}
	}

	&__headerTitleWrapper {
		align-items: center;
		display: flex;
		gap: $space-xxs;
		justify-content: space-between;
	}

	&__headerTitle {
		@include info-s-extensive-bold-uppercase;

		color: $color-neutral-text-weak;
		padding: $space-xxs 0;
	}
}
</style>

<script lang="ts">
import Divider from '../../Divider';
import IconButton from '../../Buttons/IconButton/IconButton.vue';
import { ICONS } from '../../Icons/Icon';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';

export default {
	name: 'DrawerSection',
	components: {
		DsIconButton: IconButton,
		DsDivider: Divider,
	},
	props: {
		hasDivider: {
			type: Boolean,
			default: true,
		},
		isExpandable: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			isExpanded: false,
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		onHeaderClick(): void {
			if (this.isExpandable) {
				this.isExpanded = !this.isExpanded;
			}
		},
	},
};
</script>