<template>
	<div class="accessStatus" :class="statusClass">
		<icon :size="ICON_SIZES.X_SMALL" :icon="icon" class="accessStatus__icon" />
		<span class="accessStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.accessStatus {
	$self: &;

	align-items: center;
	color: $color-neutral-text;
	display: flex;

	&__icon {
		color: $color-neutral-icon;
		margin-right: $space-4xs;
	}

	&.-active {
		color: $color-success-text;

		#{$self}__icon {
			color: $color-success-icon;
		}
	}

	&.-suspended {
		color: $color-danger-text;

		#{$self}__icon {
			color: $color-danger-icon;
		}
	}

	&__text {
		@include label-s-default-bold-uppercase;
	}
}
</style>

<script lang="ts">
import Icon from '../../Icons/Icon';
import { ICONS, ICON_SIZES } from '../../Icons/Icon';
import { COURSE_ACCESS_STATUS } from '../../../consts/user';

export default {
	name: 'AccessStatus',
	components: {
		Icon,
	},
	props: {
		status: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		icon() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return ICONS.FA_UNLOCK_KEYHOLE;
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return ICONS.FA_HOURGLASS_START;
			}
			return ICONS.FA_LOCK_KEYHOLE;
		},
		statusClass() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return '-active';
			}
			if (this.status === COURSE_ACCESS_STATUS.SUSPENDED) {
				return '-suspended';
			}
			return '';
		},
		text() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return 'Aktywny';
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return 'Oczekujący';
			}
			if (this.status === COURSE_ACCESS_STATUS.SUSPENDED) {
				return 'Zawieszony';
			}
			return 'Zakończony';
		},
	},
};
</script>
