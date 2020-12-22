<template>
	<div
		class="m-accessDisplayDate"
		:class="{
			'-touchable': touchable,
			'-large': large,
		}"
	>
		<wnl-icon
			:size="iconSize"
			:fa-icon-class="iconName"
			class="m-accessDisplayDate__icon"
			:class="iconClass"
		/>
		<span class="m-accessDisplayDate__text">
			Dostęp do kursu
			<strong class="m-accessDisplayDate__date" :class="dateClass">{{ dateText }}</strong>
		</span>
		<wnl-icon
			v-if="touchable"
			:size="iconSize"
			class="m-accessDisplayDate__help"
			fa-icon-class="question-circle"
			icon-set="far"
			touchable
		/>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.m-accessDisplayDate {
	$this: &;

	align-items: center;
	display: flex;

	&.-touchable {
		cursor: pointer;

		&:hover {
			color: $color-primary;
		}
	}

	&__icon {
		color: $color-storm-gray;
		margin-right: $space-xxxs;

		&.-active {
			color: $color-ocean-green;
		}

		&.-notActive {
			color: $color-crimson-red;
		}
	}

	&__text {
		@include textS;

		text-transform: uppercase;

		#{$this}.-large & {
			@include textM;
		}
	}

	&__date {
		color: currentColor;

		&.-notActive {
			color: $color-crimson-red;
		}
	}

	&__help {
		color: $color-storm-gray;

		#{$this}:hover & {
			color: $color-primary;
		}
	}
}
</style>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import { mapGetters } from 'vuex';
import { COURSE_ACCESS_STATUS } from 'js/consts/user';

export default {
	components: {
		WnlIcon,
	},
	props: {
		large: {
			type: Boolean,
			default: false,
		},
		touchable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapGetters(['courseAccessCurrent']),
		courseAccessDisplayDate() {
			const displayDate =
				this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING
					? this.courseAccessCurrent.future_start_date
					: this.courseAccessCurrent.last_end_date;
			return displayDate?.format('LL');
		},
		iconName() {
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return 'unlock-alt';
			}
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING) {
				return 'hourglass-start';
			}
			return 'lock';
		},
		dateClass() {
			return [COURSE_ACCESS_STATUS.SUSPENDED, COURSE_ACCESS_STATUS.EXPIRED].includes(
				this.courseAccessCurrent.status,
			)
				? '-notActive'
				: '';
		},
		iconClass() {
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return '-active';
			}
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING) {
				return '';
			}
			return '-notActive';
		},
		iconSize() {
			return this.large ? 'medium' : 'x-small';
		},
		dateText() {
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.SUSPENDED) {
				return 'Zablokowany';
			}
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING) {
				return `od ${this.courseAccessDisplayDate}`;
			}

			return `do ${this.courseAccessDisplayDate}`;
		},
	},
};
</script>
