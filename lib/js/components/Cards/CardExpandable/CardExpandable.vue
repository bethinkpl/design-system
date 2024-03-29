<template>
	<ds-card
		class="cardExpandable"
		:header-has-padding="headerHasPadding"
		:divider-under-header="dividerUnderHeader"
	>
		<template #header>
			<slot name="header" />
		</template>
		<template #content>
			<slot name="content" :is-expanded="isExpandedInternal" />
			<div v-if="isExpandedInternal" class="cardExpandable__expandedContent">
				<slot name="expandedContent" />
			</div>
		</template>
		<template v-if="isExpanderVisible" #footer>
			<div class="cardExpandable__expander" @click="onExpanderClick">
				<span class="cardExpandable__expanderLabel">
					{{ isExpandedInternal ? expanderTextExpanded : expanderTextCollapsed }}
				</span>
				<ds-icon
					class="cardExpandable__expanderIcon"
					:icon="ICONS.FA_CHEVRON_DOWN"
					:rotation="chevronRotation"
					:size="ICON_SIZES.X_SMALL"
				/>
			</div>
		</template>
	</ds-card>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/icons';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';

.cardExpandable {
	&__expandedContent {
		animation: a-fadeIn 600ms ease-in-out;
	}

	&__expander {
		align-items: center;
		background-color: $color-neutral-background;
		border-radius: 0 0 $radius-m $radius-m;
		cursor: pointer;
		display: flex;
		justify-content: center;
		padding: $space-xs $space-s;

		&:hover {
			background-color: $color-neutral-background-hovered;
		}
	}

	&__expanderLabel {
		@include label-s-extensive-bold-uppercase();

		color: $color-primary-text;
		margin-right: $space-xxxxs;
	}

	&__expanderIcon {
		color: $color-primary-icon;
	}
}
</style>

<script lang="ts">
import DsCard from '../Card/';
import DsIcon, { ICONS, ICON_SIZES } from '../../../components/Icons/Icon';

export default {
	name: 'CardExpandable',
	components: {
		DsCard,
		DsIcon,
	},
	props: {
		isExpanded: {
			type: Boolean,
			default: false,
		},
		isExpanderVisible: {
			type: Boolean,
			default: true,
		},
		expanderTextCollapsed: {
			type: String,
			default: 'Rozwiń',
		},
		expanderTextExpanded: {
			type: String,
			default: 'Zwiń',
		},
		headerHasPadding: {
			type: Boolean,
			default: false,
		},
		dividerUnderHeader: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:isExpanded'],
	data() {
		return {
			isExpandedInternal: false,
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		chevronRotation(): number | null {
			return this.isExpandedInternal ? 180 : null;
		},
	},
	watch: {
		isExpanded: {
			handler(isExpanded) {
				if (isExpanded !== this.isExpandedInternal) {
					this.isExpandedInternal = isExpanded;
				}
			},
			immediate: true,
		},
	},
	methods: {
		onExpanderClick() {
			this.isExpandedInternal = !this.isExpandedInternal;
			this.$emit('update:isExpanded', this.isExpandedInternal);
		},
	},
};
</script>
