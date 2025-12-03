<template>
	<div class="statsLayout">
		<!-- SectionHeader OverallStatsItem StatsItem -->
		<slot name="sectionHeader">
			<stats-section-header />
		</slot>

		<ds-card>
			<template #content>
				<div v-if="isLoading" class="statsLayout__loading">
					<spinner-loading />
				</div>
				<div v-else-if="hasError" class="statsLayout__error">
					<stats-error-banner />
				</div>
				<div v-else class="statsLayout__content">
					<div class="statsLayout__wrapper">
						<div class="statsLayout__summary">
							<div v-if="hasGridHeader" class="statsLayout__summaryHeader">
								<div class="statsLayout__cellLeft">{{ leftColumnLabel }}</div>
								<div v-if="hasRightColumn" class="statsLayout__cellRight">{{
									rightColumnLabel
								}}</div>
							</div>
							<slot name="overallStatsItem" class="statsLayout__item" />
						</div>

						<div class="statsLayout__stats">
							<div v-if="hasGridHeader" class="statsLayout__statsHeader">
								<div class="statsLayout__cellLeft">{{ statsItemsHeaderLabel }}</div>
								<div v-if="hasRightColumn" class="statsLayout__cellRight" />
							</div>

							<div class="statsLayout__statsList">
								<template v-for="slotName in statsItems" :key="slotName">
									<slot :name="slotName" class="statsLayout__item" />
									<ds-divider />
								</template>
							</div>
						</div>
					</div>

					<slot name="resetBanner">
						<stats-reset-banner
							time-marker="6 czerwca 2025"
							@button-clicked="$emit('resetBannerClicked')"
						/>
					</slot>
				</div>
			</template>
		</ds-card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

.statsLayout {
	display: flex;
	flex-direction: column;
	gap: $space-xs;

	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: $space-l;
	}

	&__summary {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__summaryHeader {
		@include label-m-extensive-bold-uppercase();

		display: grid;
		grid-template-columns: 1fr 96px;
		gap: $space-s;
		background: $color-neutral-background;
		color: $color-neutral-text;
	}

	&__stats {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__statsHeader {
		@include label-m-extensive-bold-uppercase();

		display: grid;
		grid-template-columns: 1fr 96px;
		gap: $space-s;
		background: $color-neutral-background;
		color: $color-neutral-text;
	}

	&__statsList {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__cellLeft {
		display: flex;
		padding: $space-2xs;
		align-items: center;
		gap: $space-4xs;
		flex: 1 0 0;
	}
	&__cellRight {
		display: flex;
		width: 96px;
		padding: $space-2xs;
		justify-content: flex-end;
		align-items: center;
	}

	&__item {
		display: grid;
		grid-template-columns: 1fr 96px;
	}

	&__loading {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>

<script setup lang="ts">
import StatsSectionHeader from './StatsSectionHeader/StatsSectionHeader.vue';
import DsCard from '../Cards/Card/Card.vue';
import StatsResetBanner from './StatsResetBanner/StatsResetBanner.vue';
import DsDivider from '../Divider/Divider.vue';
import StatsErrorBanner from './StatsErrorBanner/StatsErrorBanner.vue';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.vue';
import { computed } from 'vue';

interface StatsLayoutProps {
	hasGridHeader?: boolean;
	hasRightColumn?: boolean;
	leftColumnLabel?: string;
	rightColumnLabel?: string;
	statsItemsHeaderLabel?: string;
	isLoading?: boolean;
	hasError?: boolean;
}

const {
	hasGridHeader = true,
	hasRightColumn = true,
	leftColumnLabel = 'Zakres',
	rightColumnLabel = 'Wyniki',
	statsItemsHeaderLabel = null,
	isLoading = false,
	hasError = false,
} = defineProps<StatsLayoutProps>();

const slots = defineSlots<{
	sectionHeader?: () => any;
	overallStatsItem?: () => any;
	'statsItem-0'?: () => any;
	'statsItem-1'?: () => any;
	'statsItem-2'?: () => any;
	resetBanner?: () => any;
}>();

const statsItems = computed(() => {
	return Object.entries(slots)
		.filter(([key]) => key.startsWith('statsItem-'))
		.map(([key]) => key);
});

defineEmits<{
	(e: 'resetBannerClicked'): void;
}>();
</script>
