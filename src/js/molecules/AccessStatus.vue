<template>
	<div class="m-accessStatus" :class="statusClass">
		<wnl-icon size="x-small" :fa-icon-class="iconName" class="m-accessStatus__icon" />
		<span class="m-accessStatus__text">{{ text }}</span>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.m-accessStatus {
	align-items: center;
	color: $color-storm-gray;
	display: flex;

	&.-active {
		color: $color-ocean-green;
	}

	&.-notActive {
		color: $color-crimson-red;
	}

	&__icon {
		margin-right: $space-xxxs;
	}

	&__text {
		@include textM;
		@include textBold;

		text-transform: uppercase;
	}
}
</style>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import { COURSE_ACCESS_STATUS } from 'js/consts/user';

export default {
	name: 'AccessStatus',
	components: {
		WnlIcon,
	},
	props: {
		status: {
			type: String,
			required: true,
		},
	},
	computed: {
		iconName() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return 'fa-unlock-alt';
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return 'fa-hourglass-start';
			}
			return 'fa-lock';
		},
		statusClass() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return '-active';
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return '';
			}
			return '-notActive';
		},
		text() {
			if (this.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return 'Aktywny';
			}
			if (this.status === COURSE_ACCESS_STATUS.AWAITING) {
				return 'Oczekujący';
			}
			return 'Zakończony';
		},
	},
};
</script>
