<template>
	<ds-card class="cardExpandable">
		<template #header><slot name="header"></slot></template>
		<template #content><slot name="content"></slot></template>
		<template v-if="isExpanderVisible" #footer>
			<div v-ripple class="cardExpandable__expander" @click="onExpanderClick">
				<span class="cardExpandable__expanderLabel">{{ computedExpanderText }}</span>
				<ds-icon
					class="cardExpandable__expanderIcon"
					:icon="expanderIcon"
					:size="ICON_SIZES.X_SMALL"
				/>
			</div>
		</template>
	</ds-card>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
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
		// TODO ripple
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
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
		expanderIcon(): IconDefinition {
			return this.isExpandedInternal ? ICONS.FA_CHEVRON_UP : ICONS.FA_CHEVRON_DOWN;
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
	},
	methods: {
		onExpanderClick() {
			this.isExpandedInternal = !this.isExpandedInternal;
			this.$emit('expanded-change', this.isExpandedInternal);
		},
	},
};
</script>
