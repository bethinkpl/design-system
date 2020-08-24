<template>
	<div v-if="!isCourseAccessCurrentStatusInactive" class="m-accessDisplay">
		<wnl-access-display-date
			:touchable="!isCourseAccessCurrentStatusSuspended"
			@click.native="openModal"
		/>
		<wnl-modal v-if="isModalVisible" @close-modal="isModalVisible = false">
			<template #header>
				<wnl-title :level="3">Twoje dostępy do kursu</wnl-title>
			</template>
			<wnl-access-display-date class="m-accessDisplay__date" large />
			<wnl-text-loader v-if="isLoading" />
			<table v-else class="m-accessDisplay__table">
				<tr>
					<th class="m-accessDisplay__tableHeader" />
					<th class="m-accessDisplay__tableHeader">Start</th>
					<th class="m-accessDisplay__tableHeader">Koniec</th>
					<th class="m-accessDisplay__tableHeader">Data przyznania</th>
					<th class="m-accessDisplay__tableHeader">Podstawa przyznania</th>
				</tr>
				<tr v-for="access in accesses" :key="access.id">
					<td class="m-accessDisplay__tableCell">
						<wnl-access-status :status="access.status" />
					</td>
					<td class="m-accessDisplay__tableCell -centered">
						{{ formatDate(access.start_date) }}
					</td>
					<td class="m-accessDisplay__tableCell -centered">
						{{ formatDate(access.end_date) }}
					</td>
					<td class="m-accessDisplay__tableCell -centered -small -alternative">
						{{ formatDate(access.created_at) }}
					</td>
					<td class="m-accessDisplay__tableCell -small">
						<wnl-access-display-extra :access="access" />
					</td>
				</tr>
			</table>

			<template #footer>
				<wnl-button medium @click.native="isModalVisible = false">Ok, rozumiem</wnl-button>
			</template>
		</wnl-modal>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.m-accessDisplay {
	&__date {
		justify-content: center;
		margin-bottom: $space-m;
	}

	&__tableHeader {
		@include textXS;

		background-color: $color-alabaster;
		border-bottom: 1px solid $color-mischka;
		color: $color-storm-gray;
		padding: $space-xs;
		text-align: center;
	}

	&__tableCell {
		@include textS;

		border-bottom: 1px solid $color-mischka;
		padding: $space-xs;

		&.-centered {
			text-align: center;
		}

		&.-small {
			@include textXS;
		}

		&.-alternative {
			color: $color-storm-gray;
		}
	}
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import moment from 'moment';

import WnlButton from 'js/components/global/styleguide/atoms/Button';
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlAccessDisplayDate from 'js/components/global/styleguide/molecules/accessDisplay/AccessDisplayDate';
import WnlAccessDisplayExtra from 'js/components/global/styleguide/molecules/accessDisplay/AccessDisplayExtra';
import WnlAccessStatus from 'js/components/global/styleguide/molecules/AccessStatus';
import WnlModal from 'js/components/global/Modal';
import { getApiUrl } from 'js/utils/env';
import { ALERT_TYPES } from 'js/consts/alert';
import { COURSE_ACCESS_STATUS } from 'js/consts/user';

export default {
	components: {
		WnlButton,
		WnlModal,
		WnlTitle,
		WnlAccessDisplayDate,
		WnlAccessDisplayExtra,
		WnlAccessStatus,
	},
	data() {
		return {
			isModalVisible: false,
			isLoading: false,
			accesses: [],
		};
	},
	computed: {
		...mapGetters(['courseAccessCurrent']),
		isCourseAccessCurrentStatusInactive() {
			return this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.INACTIVE;
		},
		isCourseAccessCurrentStatusSuspended() {
			return this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.SUSPENDED;
		},
	},
	methods: {
		...mapActions(['addAutoDismissableAlert']),
		async openModal() {
			if (this.courseAccessCurrent.status === COURSE_ACCESS_STATUS.SUSPENDED) {
				return;
			}

			this.isModalVisible = true;
			this.isLoading = true;
			try {
				const { data: accesses } = await axios.get(
					getApiUrl('users/current/user_course_accesses'),
				);
				this.accesses = accesses;
			} catch (e) {
				$wnl.logger.error(e);
				this.addAutoDismissableAlert({
					text: this.$t('ui.error.tryAgainOrReport'),
					type: ALERT_TYPES.ERROR,
				});
				this.isModalVisible = false;
			} finally {
				this.isLoading = false;
			}
		},
		formatDate(date) {
			if (!date) {
				return;
			}
			return moment(date).format('L');
		},
	},
};
</script>
