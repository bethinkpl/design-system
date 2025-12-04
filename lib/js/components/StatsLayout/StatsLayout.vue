<template>
	<div class="statsLayout">
		<slot name="sectionHeader" />

		<ds-card>
			<template #content>
				<div v-if="isLoading" class="statsLayout__loading">
					<ds-spinner-loading />
				</div>
				<div v-else-if="hasError" class="statsLayout__error">
					<ds-stats-error-banner @button-clicked="$emit('tryAgainClicked')" />
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
		grid-template-columns: 1fr $right-column-width;
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
		grid-template-columns: 1fr $right-column-width;
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
		width: $right-column-width;
		padding: $space-2xs;
		justify-content: flex-end;
		align-items: center;
	}

	&__item {
		display: grid;
		grid-template-columns: 1fr $right-column-width;
	}

	&__loading {
		display: flex;
		justify-content: center;
		align-items: center;
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
