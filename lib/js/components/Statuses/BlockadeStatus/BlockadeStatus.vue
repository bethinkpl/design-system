<template>
	<div class="blockadeStatus" :class="statusClass">
		<icon :size="ICON_SIZES.X_SMALL" :icon="icon" class="blockadeStatus__icon" />
		<span class="blockadeStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.blockadeStatus {
	$self: &;

	align-items: center;
	color: $color-neutral-text;
	display: flex;

	&__icon {
		color: $color-neutral-icon;
		margin-right: $space-xxxxs;
	}

	&.-active {
		color: $color-danger-text;
		#{$self}__icon {
			color: $color-danger-icon;
		}
	}

	&__text {
		@include label-s-bold-uppercase();
	}
}
</style>

<script lang="ts">
import Icon from '../../Icon';
import { ICONS, ICON_SIZES } from '../../Icon';
import { COURSE_BLOCKADE_ACCESS_STATUS } from '../../../consts/user';

export default {
	name: 'BlockadeStatus',
	components: {
		Icon,
	},
	props: {
		status: {
			type: String,
			required: true,
		},
	},
	computed: {
		icon() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return ICONS.FA_LOCK_KEYHOLE;
			}
			return ICONS.FA_UNLOCK_KEYHOLE;
		},
		statusClass() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return '-active';
			}
			return '';
		},
		text() {
			if (this.status === COURSE_BLOCKADE_ACCESS_STATUS.ACTIVE) {
				return 'Blokada dostępu';
			}
			return 'Blokada zakończona';
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
