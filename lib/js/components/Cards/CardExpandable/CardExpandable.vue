<template>
	<ds-card
		class="ds-cardExpandable"
		:header-has-padding="headerHasPadding"
		:divider-under-header="dividerUnderHeader"
	>
		<template #header>
			<slot name="header" />
		</template>
		<template #content>
			<slot name="content" :is-expanded="isExpandedInternal" />
			<div v-if="isExpandedInternal" class="ds-cardExpandable__expandedContent">
				<slot name="expandedContent" />
			</div>
		</template>
		<template v-if="isExpanderVisible" #footer>
			<div class="ds-cardExpandable__expander" @click="onExpanderClick">
				<span class="ds-cardExpandable__expanderLabel">
					{{
						isExpandedInternal
							? resolvedExpanderTextExpanded
							: resolvedExpanderTextCollapsed
					}}
				</span>
				<ds-icon
					class="ds-cardExpandable__expanderIcon"
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

.ds-cardExpandable {
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
		margin-right: $space-4xs;
	}

	&__expanderIcon {
		color: $color-primary-icon;
	}
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import DsCard from '../Card/';
import DsIcon, { ICON_SIZES, ICONS } from '../../../components/Icons/Icon';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';

export default defineComponent({
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
			default: null,
		},
		expanderTextExpanded: {
			type: String,
			default: null,
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
	emits: { 'update:isExpanded': (payload: Boolean) => true },
	setup() {
		const { t } = useLegacyI18n();

		return { t };
	},
	data() {
		return {
			isExpandedInternal: false,
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
	computed: {
		resolvedExpanderTextCollapsed(): string {
			return this.expanderTextCollapsed ?? this.t('ds.cardExpandable.expand');
		},
		resolvedExpanderTextExpanded(): string {
			return this.expanderTextExpanded ?? this.t('ds.cardExpandable.collapse');
		},
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
});
</script>
