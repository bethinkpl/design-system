<template>
	<ds-card class="cardExpandable">
		<template #header><slot name="header"></slot></template>
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
					:size="ICON_SIZES.X_SMALL"
					:flipped-vertical="isExpandedInternal"
				/>
			</div>
		</template>
	</ds-card>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/icons';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.cardExpandable {
	&__expandedContent {
		animation: a-fadeIn 600ms ease-in-out;
	}

	&__expander {
		align-items: center;
		background-color: $color-neutral-background;
		cursor: pointer;
		display: flex;
		justify-content: center;
		padding: $space-xs $space-s;

		&:hover {
			background-color: $color-neutral-background-hovered;
		}

		&::v-deep .ripple {
			background-color: $color-default-ripple !important;
		}
	}

	&__expanderLabel {
		@include buttonS;

		color: $color-primary-text;
		text-transform: uppercase;
		font-weight: bold;
		margin-right: $space-xxxxs;
	}

	&__expanderIcon {
		color: $color-primary-icon;
	}
}
</style>

<script lang="ts">
import DsCard from './Card.vue';
import DsIcon, { ICONS, ICON_SIZES } from '../../atoms/Icon';

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
	},
	data() {
		return {
			isExpandedInternal: false,
		};
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
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
	methods: {
		onExpanderClick() {
			this.isExpandedInternal = !this.isExpandedInternal;
			this.$emit('update:isExpanded', this.isExpandedInternal);
		},
	},
};
</script>
