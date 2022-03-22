<template>
	<ds-card class="cardExpandable">
		<template #header><slot name="header"></slot></template>
		<template #content>
			<slot name="content" :isExpanded="isExpandedInternal" />
			<slot v-if="isExpandedInternal" name="expandedContent" />
		</template>
		<template v-if="isExpanderVisible" #footer>
			<div v-ripple class="cardExpandable__expander" @click="onExpanderClick">
				<span class="cardExpandable__expanderLabel">{{ computedExpanderText }}</span>
				<ds-icon
					class="cardExpandable__expanderIcon"
					:icon="ICONS.FA_CHEVRON_DOWN"
					:size="ICON_SIZES.X_SMALL"
					:rotation="isExpandedInternal ? 180 : null"
				/>
			</div>
		</template>
	</ds-card>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.cardExpandable {
	&__expander {
		align-items: center;
		background-color: $neutral-background;
		display: flex;
		height: 44px;
		justify-content: center;
		padding: $space-xs;

		&:hover {
			cursor: pointer;
			background-color: $neutral-background-hovered;
		}

		&::v-deep .ripple {
			background-color: $default-ripple !important;
		}
	}

	&__expanderLabel {
		@include buttonS;

		color: $primary-text;
		text-transform: uppercase;
		font-weight: bold;
		margin-right: $space-xxxxs;
	}

	&__expanderIcon {
		color: $primary-icon;
	}
}
</style>

<script lang="ts">
import DsCard from './Card.vue';
import DsIcon, { ICONS, ICON_SIZES } from '../../atoms/Icon';
import Ripple from 'vue-ripple-directive';

export default {
	name: 'CardExpandable',
	components: {
		DsCard,
		DsIcon,
	},
	directives: {
		ripple: Ripple,
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
		expanderText: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			isExpandedInternal: false,
		};
	},
	computed: {
		computedExpanderText(): string {
			if (this.expanderText) {
				return this.expanderText;
			}

			return this.isExpandedInternal ? 'Zwiń' : 'Rozwiń';
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
