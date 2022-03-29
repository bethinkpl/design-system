<template>
	<div class="accessStatus" :class="statusClass">
		<icon :size="ICON_SIZES.X_SMALL" :icon="icon" class="accessStatus__icon" />
		<span class="accessStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';
@import '../../../../styles/settings/colors/tokens';

.accessStatus {
	align-items: center;
	color: $color-neutral-text;
	display: flex;

	&.-active {
		color: $color-success-text;
	}

	&.-suspended {
		color: $color-danger-text;
	}

	&__icon {
		margin-right: $space-xxxxs;
	}

	&__text {
		@include textXS;
		@include textBold;

		text-transform: uppercase;
	}
}
</style>

<script lang="ts">
import Icon from '../../Icon';
import { ICONS, ICON_SIZES } from '../../Icon';
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
	computed: {
		icon() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return ICONS.FA_UNLOCK_ALT;
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return ICONS.FA_HOURGLASS_START;
			}
			return ICONS.FA_LOCK_ALT;
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
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
