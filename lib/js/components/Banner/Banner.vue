<template>
	<div class="ds-banner" :class="[colorClass, layoutClass]">
		<div class="ds-banner__content">
			<div class="ds-banner__header">
				<div
					v-if="icon"
					class="ds-banner__iconContainer"
					:class="{ '-hideOnMobile': isIconHiddenOnMobile }"
				>
					<!-- TODO: https://bethink.atlassian.net/browse/IT-3589 change to a-illustration in the future -->
					<ds-icon class="ds-banner__icon" :class="[colorClass]" :icon="icon" />
				</div>

				<div class="ds-banner__textWrapper">
					<div class="ds-banner__titleWrapper">
						<div class="ds-banner__title" v-text="title" />
						<div
							v-if="$slots.defaultText && $slots.defaultText.length > 0"
							class="ds-banner__defaultText"
						>
							<slot name="defaultText" />
						</div>
					</div>
					<div class="ds-banner__rightWrapper">
						<div v-if="buttonText" class="ds-banner__buttonWrapper">
							<ds-button
								class="ds-banner__ctaButton"
								:color="BUTTON_COLORS.NEUTRAL"
								:type="BUTTON_TYPES.OUTLINED"
								:size="BUTTON_SIZES.SMALL"
								@click.native="$emit('button-clicked')"
								>{{ buttonText }}
							</ds-button>
						</div>
						<div
							v-if="$slots.rightSlot && $slots.rightSlot.length > 0"
							class="ds-banner__rightSlot"
						>
							<slot name="rightSlot" />
						</div>
					</div>
				</div>
			</div>
			<div
				v-if="$slots.expandedText && $slots.expandedText.length > 0"
				class="ds-banner__expander"
			>
				<ds-icon-button
					:size="ICON_BUTTON_SIZES.SMALL"
					:icon="isExpandedInternal ? ICONS.FA_CHEVRON_UP : ICONS.FA_CHEVRON_DOWN"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:radius="BUTTON_RADIUSES.CAPSULE"
					:touchable="false"
					@click.native="toggleExpandedText"
				/>
			</div>
			<div
				v-if="!($slots.expandedText && $slots.expandedText.length > 0) && closable"
				class="ds-banner__close"
			>
				<ds-icon-button
					:size="ICON_BUTTON_SIZES.SMALL"
					:icon="ICONS.FA_XMARK"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:radius="BUTTON_RADIUSES.CAPSULE"
					:touchable="false"
					@click.native="$emit('close')"
				/>
			</div>
		</div>
		<div
			v-if="$slots.expandedText && $slots.expandedText.length > 0 && isExpandedInternal"
			class="ds-banner__expandedContainer"
		>
			<ds-divider :prominence="DIVIDER_PROMINENCES.STRONG" />
			<div class="ds-banner__expandedText">
				<slot name="expandedText" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/media-queries';

.ds-banner {
	$self: &;

	border-radius: $radius-m;
	border-style: solid;
	border-width: 1px;
	display: flex;
	flex-direction: column;
	padding: $space-xs;

	@media #{breakpoint-s()} {
		&.-horizontal {
			#{$self}__iconContainer {
				padding: $space-xxs 0;
			}

			#{$self}__header {
				padding: 0 $space-xxs;
			}

			#{$self}__expander {
				padding: $space-xs $space-xxxxs $space-xs 0;
			}

			#{$self}__textWrapper {
				flex-direction: row;
			}

			#{$self}__rightWrapper {
				padding: $space-xxxxxs 0 $space-xxxxxs $space-s;
			}

			#{$self}__buttonWrapper {
				padding: $space-xs 0;
			}

			#{$self}__rightSlot {
				flex-grow: initial;
				padding: $space-xs 0 $space-xs 0;
			}
		}
	}

	&.-warning {
		background-color: $color-warning-background;
		border-color: $color-warning-border-weak;
	}

	&.-success {
		background-color: $color-success-background;
		border-color: $color-success-border-weak;
	}

	&.-info {
		background-color: $color-info-background;
		border-color: $color-info-border-weak;
	}

	&.-fail {
		background-color: $color-fail-background;
		border-color: $color-fail-border-weak;
	}

	&.-neutral {
		background-color: $color-neutral-background;
		border-color: $color-neutral-border-weak;
	}

	&.-default {
		background-color: $color-default-background;
		border-color: $color-neutral-border-weak;
	}

	&.-danger {
		background-color: $color-danger-background;
		border-color: $color-danger-border-weak;
	}

	&__content {
		display: flex;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		padding: 0 $space-xxxxs;
		width: 100%;
	}

	&__title {
		@include heading-s-default-bold;

		color: $color-neutral-text-strong;
	}

	&__defaultText {
		@include text-m-default-regular;

		margin-top: $space-xxxxs;
	}

	&__textWrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	&__titleWrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		padding: $space-xxxxs 0;
	}

	&__rightWrapper {
		display: flex;
		flex-shrink: 0;
		flex-wrap: nowrap;
		padding: 0;
	}

	&__buttonWrapper {
		padding: $space-xs 0;
	}

	&__rightSlot {
		flex-grow: 1;
		padding: $space-xxs 0 0 0;

		&:nth-child(2) {
			margin-left: $space-xxxxs;
		}
	}

	&__iconContainer {
		margin-right: $space-s;
		padding: $space-xxxxs 0;

		&.-hideOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: initial;
			}
		}
	}

	&__icon {
		border-radius: 100px;
		padding: $space-xxs;

		&.-neutral {
			background-color: $color-neutral-background-medium;
			color: $color-neutral-icon;
		}

		&.-default {
			background-color: $color-neutral-background-medium;
			color: $color-neutral-icon;
		}

		&.-warning {
			background-color: $color-warning-background-medium;
			color: $color-warning-icon;
		}

		&.-success {
			background-color: $color-success-background-medium;
			color: $color-success-icon;
		}

		&.-info {
			background-color: $color-info-background-medium;
			color: $color-info-icon;
		}

		&.-fail {
			background-color: $color-fail-background-medium;
			color: $color-fail-icon;
		}

		&.-danger {
			background-color: $color-danger-background-medium;
			color: $color-danger-icon;
		}
	}

	&__close {
		margin-left: $space-xxs;
	}

	&__expander {
		margin-left: $space-xxs;
		padding: 0;
	}

	&__expandedContainer {
		@include text-m-default-regular;

		margin-top: $space-xs;
		padding: 0 $space-xxxxs $space-xxxxs;
	}

	&__expandedText {
		margin-top: $space-xs;
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';

import { Prop } from 'vue/types/options';
import DsButton, {
	BUTTON_RADIUSES,
	BUTTON_TYPES,
	BUTTON_COLORS,
	BUTTON_SIZES,
} from '../Buttons/Button';
import DsDivider, { DIVIDER_PROMINENCES } from '../Divider';
import DsIcon from '../Icons/Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';
import { BANNER_COLORS, BANNER_LAYOUTS } from './Banner.consts';

export default {
	name: 'Banner',
	components: {
		DsButton,
		DsDivider,
		DsIconButton,
		DsIcon,
	},
	props: {
		icon: {
			type: Object as Prop<VueConstructor>,
			default: null,
			validator: (icon: VueConstructor) => Object.values(ICONS).includes(icon),
		},
		buttonText: {
			type: String,
			default: null,
		},
		closable: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: BANNER_COLORS.DEFAULT,
			validator: (color) => Object.values(BANNER_COLORS).includes(color),
		},
		title: {
			type: String,
			required: true,
		},
		layout: {
			type: String,
			default: BANNER_LAYOUTS.HORIZONTAL,
			validator: (layout) => Object.values(BANNER_LAYOUTS).includes(layout),
		},
		isExpanded: {
			type: Boolean,
			default: false,
		},
		isIconHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isExpandedInternal: false,
			BUTTON_COLORS: Object.freeze(BUTTON_COLORS),
			BUTTON_RADIUSES: Object.freeze(BUTTON_RADIUSES),
			BUTTON_SIZES: Object.freeze(BUTTON_SIZES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICONS: Object.freeze(ICONS),
		};
	},
	computed: {
		colorClass() {
			return {
				[BANNER_COLORS.NEUTRAL]: '-neutral',
				[BANNER_COLORS.DEFAULT]: '-default',
				[BANNER_COLORS.FAIL]: '-fail',
				[BANNER_COLORS.INFO]: '-info',
				[BANNER_COLORS.SUCCESS]: '-success',
				[BANNER_COLORS.WARNING]: '-warning',
				[BANNER_COLORS.DANGER]: '-danger',
			}[this.color];
		},
		layoutClass() {
			return this.layout === BANNER_LAYOUTS.VERTICAL ? '-vertical' : '-horizontal';
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
		toggleExpandedText() {
			this.isExpandedInternal = !this.isExpandedInternal;
			this.$emit('update:isExpanded', this.isExpandedInternal);
		},
	},
};
</script>
