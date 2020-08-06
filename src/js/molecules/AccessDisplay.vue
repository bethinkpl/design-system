<template>
	<div class="m-accessDisplay">
		<wnl-access-display-date touchable @click.native="isModalVisible=true" />
		<wnl-modal v-if="isModalVisible" @close-modal="isModalVisible=false">
			<wnl-title slot="header" :level="3">Twoje dostępy do kursu</wnl-title>
			<wnl-access-display-date large />
		</wnl-modal>
	</div>
</template>

<style lang="scss" scoped>

	.m-accessDisplay {

	}

</style>

<script>
import WnlTitle from 'js/components/global/styleguide/atoms/Title';
import WnlAccessDisplayDate from 'js/components/global/styleguide/molecules/AccessDisplayDate';
import WnlModal from 'js/components/global/Modal';
import { getApiUrl } from 'js/utils/env';
import axios from 'axios';

export default {
	components: {
		WnlModal,
		WnlTitle,
		WnlAccessDisplayDate
	},
	data() {
		return {
			isModalVisible: false,
		};
	},
	mounted() {
		axios.get(getApiUrl('	users/current/user_course_accesses'));
	}
};
</script>
