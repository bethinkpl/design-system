<template>
	<div class="ds-accessStatus" :class="statusClass">
		<icon :size="ICON_SIZES.X_SMALL" :icon="icon" class="ds-accessStatus__icon" />
		<span class="ds-accessStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-accessStatus {
	$self: &;

	align-items: center;
	color: $color-neutral-text;
	display: flex;

	&__icon {
		color: $color-neutral-icon;
		margin-right: $space-4xs;
	}

	&.-ds-active {
		color: $color-success-text;

		#{$self}__icon {
			color: $color-success-icon;
		}
	}

	&.-ds-suspended {
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
import { defineComponent } from 'vue';
import Icon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { COURSE_ACCESS_STATUS } from '../../../consts/user';

export default defineComponent({
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
				return '-ds-active';
			}
			if (this.status === COURSE_ACCESS_STATUS.SUSPENDED) {
				return '-ds-suspended';
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
});
</script>
