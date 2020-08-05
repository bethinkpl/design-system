<template>
	<div class="m-accessDisplay">
		<div class="m-accessDisplay__entryPoint" @click="isModalVisible=true">
			<wnl-icon
				size="x-small"
				:fa-icon-class="iconName"
				class="m-accessDisplay__entryPoint__icon"
				:class="iconClass"
			/>
			<span class="m-accessDisplay__entryPoint__text">Dostęp do kursu <strong class="m-accessDisplay__entryPoint__text__date" :class="dateClass">do {{localizedCourseAccessDisplayDate}}</strong></span>
			<wnl-icon
				size="x-small"
				class="m-accessDisplay__entryPoint__help"
				fa-icon-class="fa-question-circle-o"
				touchable
			/>
		</div>
		<wnl-modal v-if="isModalVisible" @close-modal="isModalVisible=false">
			<wnl-title slot="header" :level="3">Twoje dostępy do kursu</wnl-title>
		</wnl-modal>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.m-accessDisplay {

		&__entryPoint {
			$this: &;
			align-items: center;
			cursor: pointer;
			display: flex;

			&:hover {
				color: $color-blue-chill;
			}

			&__icon {
				color: $color-storm-grey;
				margin-right: $space-xxxs;

				&.-active {
					color: $color-ocean-green;
				}

				&.-notActive {
					color: $color-alizarin-crimson;
				}
			}

			&__text {
				@include textXS;
				text-transform: uppercase;

				&__date {
					color: currentColor;

					&.-notActive {
						color: $color-alizarin-crimson;
					}
				}
			}

			&__help {
				color: $color-storm-grey;

				#{$this}:hover & {
					color: $color-blue-chill;
				}
			}
		}
	}

</style>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlModal from 'js/components/global/Modal';
import { mapGetters } from 'vuex';
import { COURSE_ACCESS_STATUS } from 'js/consts/user';
import { getApiUrl } from 'js/utils/env';
import axios from 'axios';

export default {
	components: {
		WnlIcon,
		WnlModal,
		WnlTitle,
	},
	data() {
		return {
			isModalVisible: false,
		};
	},
	computed: {
		...mapGetters([
			'isCourseAccessActive',
			'courseAccessCurrent',
			'localizedCourseAccessDisplayDate'
		]),
		iconName() {
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.ACTIVE) {
				return 'fa-unlock-alt';
			}
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING) {
				return 'fa-hourglass-start';
			}
			return 'fa-lock';
		},
		dateClass() {
			return !this.isCourseAccessActive ? '-notActive' : '';
		},
		iconClass() {
			if (this.isCourseAccessActive) {
				return '-active';
			}
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.AWAITING) {
				return '';
			}
			return '-notActive';
		}
	},
	mounted() {
		axios.get(getApiUrl('	users/current/user_course_accesses'));
	}
};
</script>
