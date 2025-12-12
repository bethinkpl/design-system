<template>
	<div class="ds-statsLayout">
		<slot name="sectionHeader" />

		<ds-card>
			<template #content>
				<div v-if="isLoading" class="ds-statsLayout__loading">
					<ds-spinner-loading />
				</div>
				<div v-else-if="hasError" class="ds-statsLayout__error">
					<ds-stats-error-banner @button-clicked="$emit('retryClicked')" />
				</div>
				<div v-else class="ds-statsLayout__content">
					<div class="ds-statsLayout__wrapper">
						<div class="ds-statsLayout__summary">
							<div v-if="hasGridHeader" class="ds-statsLayout__gridHeader">
								<div class="ds-statsLayout__gridHeaderLeftColumn">{{
									leftColumnLabel || t('ds.statsLayout.default.leftColumnLabel')
								}}</div>
								<div
									v-if="hasRightColumn"
									class="ds-statsLayout__gridHeaderRightColumn"
								>
									{{
										rightColumnLabel ||
										t('ds.statsLayout.default.rightColumnLabel')
									}}
								</div>
							</div>
							<div class="ds-statsLayout__overallStats">
								<slot name="overallStatsItem" />
							</div>
						</div>

						<div class="ds-statsLayout__stats">
							<div v-if="hasGridHeader" class="ds-statsLayout__gridHeader">
								<div class="ds-statsLayout__gridHeaderLeftColumn">
									{{ statsItemsHeaderLabel }}
								</div>
							</div>

							<div class="ds-statsLayout__statsList">
								<template v-for="slotName in statsItems" :key="slotName">
									<slot :name="slotName" />
									<ds-divider class="ds-statsLayout__statsDivider" />
								</template>
							</div>
						</div>
					</div>

					<slot name="resetBanner" />
				</div>
			</template>
		</ds-card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$right-column-width: 96px;

.ds-statsLayout {
	display: flex;
	flex-direction: column;
	gap: $space-xs;

	&__content,
	&__summary,
	&__stats {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: $space-l;
	}

	&__gridHeader {
		@include label-m-extensive-bold-uppercase();

		background: $color-neutral-background;
		color: $color-neutral-text;
		display: flex;
	}

	&__gridHeaderLeftColumn,
	&__gridHeaderRightColumn {
		align-items: center;
		display: flex;
	}

	&__gridHeaderLeftColumn {
		flex: 1 0 0;
		padding: $space-2xs;
	}

	&__gridHeaderRightColumn {
		justify-content: flex-end;
		padding: $space-2xs;
	}

	&__overallStats,
	&__statsList {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	&__statsList {
		row-gap: $space-s;
	}

	&__statsDivider {
		grid-column: 1 / -1;
		grid-row: auto;
	}

	&__loading {
		align-items: center;
		display: flex;
		justify-content: center;
	}
}
</style>

<script setup lang="ts">
import DsCard from '../Cards/Card/Card.vue';
import DsDivider from '../Divider/Divider.vue';
import DsStatsErrorBanner from './StatsErrorBanner/StatsErrorBanner.vue';
import DsSpinnerLoading from '../SpinnerLoading/SpinnerLoading.vue';
import { computed } from 'vue';
import { useLegacyI18n } from '../../composables/useLegacyI18n';

const { t } = useLegacyI18n();

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
	leftColumnLabel = null,
	rightColumnLabel = null,
	statsItemsHeaderLabel = null,
	isLoading = false,
	hasError = false,
} = defineProps<StatsLayoutProps>();

const slots = defineSlots<{
	sectionHeader?: () => any;
	overallStatsItem?: () => any;
	[key: `statsItem-${number}`]: (() => any) | undefined;
	resetBanner?: () => any;
}>();

const statsItems = computed(() => Object.keys(slots).filter((key) => key.startsWith('statsItem-')));

defineEmits<{
	(e: 'retryClicked'): void;
}>();
</script>
