<template>
	<div class="m-accessDisplay">
		<wnl-access-display-date touchable @click.native="openModal" />
		<wnl-modal v-if="isModalVisible" @close-modal="isModalVisible=false">
			<wnl-title slot="header" :level="3">Twoje dostępy do kursu</wnl-title>
			<wnl-access-display-date class="m-accessDisplay__date" large />
			<wnl-text-loader v-if="isLoading" />
			<table v-else class="m-accessDisplay__table">
				<tr>
					<th class="m-accessDisplay__table__header" />
					<th class="m-accessDisplay__table__header">Start</th>
					<th class="m-accessDisplay__table__header">Koniec</th>
					<th class="m-accessDisplay__table__header">Data przyznania</th>
				</tr>
				<tr v-for="access in accesses" :key="access.id">
					<td class="m-accessDisplay__table__cell"><wnl-access-status :status="access.status" /></td>
					<td class="m-accessDisplay__table__cell -centered">{{formatDate(access.start_date)}}</td>
					<td class="m-accessDisplay__table__cell -centered">{{formatDate(access.end_date)}}</td>
					<td class="m-accessDisplay__table__cell -centered -small -alternative">{{formatDate(access.created_at)}}</td>
				</tr>
			</table>
			<wnl-button
				slot="footer"
				medium
				@click.native="isModalVisible=false"
			>Ok, rozumiem</wnl-button>
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

		&__table {
			&__header {
				@include textXS;
				background-color: $color-alabaster;
				border-bottom: 1px solid $color-mischka;
				color: $color-storm-grey;
				padding: $space-xs;
				text-align: center;
			}

			&__cell {
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
					color: $color-storm-grey;
				}
			}
		}
	}

</style>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
import moment from 'moment';

import WnlButton from 'js/components/global/styleguide/atoms/Button';
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlAccessDisplayDate from 'js/components/global/styleguide/molecules/AccessDisplayDate';
import WnlAccessStatus from 'js/components/global/styleguide/molecules/AccessStatus';
import WnlModal from 'js/components/global/Modal';
import { getApiUrl } from 'js/utils/env';
import { ALERT_TYPES } from 'js/consts/alert';

export default {
	components: {
		WnlButton,
		WnlModal,
		WnlTitle,
		WnlAccessDisplayDate,
		WnlAccessStatus,
	},
	data() {
		return {
			isModalVisible: false,
			isLoading: false,
			accesses: [],
		};
	},
	methods: {
		...mapActions(['addAutoDismissableAlert']),
		async openModal() {
			this.isModalVisible = true;
			this.isLoading = true;
			try {
				const { data: accesses } = await axios.get(getApiUrl('	users/current/user_course_accesses'));
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
		}
	},
};
</script>
