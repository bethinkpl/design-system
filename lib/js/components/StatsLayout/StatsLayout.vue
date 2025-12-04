<template>
	<div class="ds-statsLayout">
		<slot name="sectionHeader" />

		<ds-card>
			<template #content>
				<div v-if="isLoading" class="ds-statsLayout__loading">
					<ds-spinner-loading />
				</div>
				<div v-else-if="hasError" class="ds-statsLayout__error">
					<ds-stats-error-banner @button-clicked="$emit('tryAgainClicked')" />
				</div>
				<div v-else class="ds-statsLayout__content">
					<div class="ds-statsLayout__wrapper">
						<div class="ds-statsLayout__summary">
							<div v-if="hasGridHeader" class="ds-statsLayout__summaryHeader">
								<div class="ds-statsLayout__cellLeft">{{ leftColumnLabel }}</div>
								<div v-if="hasRightColumn" class="ds-statsLayout__cellRight">{{
									rightColumnLabel
								}}</div>
							</div>
							<slot name="overallStatsItem" class="ds-statsLayout__item" />
						</div>

						<div class="ds-statsLayout__stats">
							<div v-if="hasGridHeader" class="ds-statsLayout__statsHeader">
								<div class="ds-statsLayout__cellLeft">{{
									statsItemsHeaderLabel
								}}</div>
								<div v-if="hasRightColumn" class="ds-statsLayout__cellRight" />
							</div>

							<div class="ds-statsLayout__statsList">
								<template v-for="slotName in statsItems" :key="slotName">
									<slot :name="slotName" class="ds-statsLayout__item" />
									<ds-divider />
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

		background: $color-neutral-background;
		color: $color-neutral-text;
		display: grid;
		gap: $space-s;
		grid-template-columns: 1fr $right-column-width;
	}

	&__stats {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__statsHeader {
		@include label-m-extensive-bold-uppercase();

		background: $color-neutral-background;
		color: $color-neutral-text;
		display: grid;
		gap: $space-s;
		grid-template-columns: 1fr $right-column-width;
	}

	&__statsList {
		display: flex;
		flex-direction: column;
		gap: $space-s;
	}

	&__cellLeft {
		align-items: center;
		display: flex;
		flex: 1 0 0;
		gap: $space-4xs;
		padding: $space-2xs;
	}

	&__cellRight {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		padding: $space-2xs;
		width: $right-column-width;
	}

	&__item {
		display: grid;
		grid-template-columns: 1fr $right-column-width;
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
	[key: `statsItem-${number}`]: (() => any) | undefined;
	resetBanner?: () => any;
}>();

const statsItems = computed(() => {
	return Object.entries(slots)
		.filter(([key]) => key.startsWith('statsItem-'))
		.map(([key]) => key);
});

defineEmits<{
	(e: 'tryAgainClicked'): void;
}>();
</script>
