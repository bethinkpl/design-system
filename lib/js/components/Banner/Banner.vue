<template>
	<div class="ds-banner">
		<div class="ds-banner__inner" :class="[colorClass, layoutClass]">
			<div class="ds-banner__content">
				<div class="ds-banner__header">
					<div
						v-if="icon"
						class="ds-banner__iconContainer"
						:class="{ '-ds-hideOnMobile': isIconHiddenOnMobile }"
					>
						<!-- TODO: https://bethink.atlassian.net/browse/IT-3589 change to a-illustration in the future -->
						<ds-icon class="ds-banner__icon" :class="[colorClass]" :icon="icon" />
					</div>

					<div class="ds-banner__textWrapper">
						<div class="ds-banner__titleWrapper">
							<div class="ds-banner__title" v-text="title" />
							<div v-if="$slots.defaultText" class="ds-banner__defaultText">
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
									@click="$emit('button-clicked')"
									>{{ buttonText }}
								</ds-button>
							</div>
							<div v-if="$slots.rightSlot" class="ds-banner__rightSlot">
								<slot name="rightSlot" />
							</div>
						</div>
					</div>
				</div>
				<div v-if="$slots.expandedText" class="ds-banner__expander">
					<ds-icon-button
						:size="ICON_BUTTON_SIZES.SMALL"
						:icon="isExpandedInternal ? ICONS.FA_CHEVRON_UP : ICONS.FA_CHEVRON_DOWN"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
						:radius="BUTTON_RADIUSES.CAPSULE"
						:touchable="false"
						@click="toggleExpandedText"
					/>
				</div>
				<div v-if="!$slots.expandedText && closable" class="ds-banner__close">
					<ds-icon-button
						:size="ICON_BUTTON_SIZES.SMALL"
						:icon="ICONS.FA_XMARK"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
						:radius="BUTTON_RADIUSES.CAPSULE"
						:touchable="false"
						@click="$emit('close')"
					/>
				</div>
			</div>
			<div
				v-if="$slots.expandedText && isExpandedInternal"
				class="ds-banner__expandedContainer"
			>
				<ds-divider :prominence="DIVIDER_PROMINENCES.STRONG" />
				<div class="ds-banner__expandedText">
					<slot name="expandedText" />
				</div>
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

	container-type: inline-size;
	// We need to manually set width when using inline-size inside flex containers, otherwise it'll collapse to 0px width:
	// https://stackoverflow.com/a/73980194
	width: 100%;

	&__inner {
		border-radius: $radius-m;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: column;
		padding: $space-xs;

		@container (width > 500px) {
			&.-ds-horizontal {
				#{$self}__iconContainer {
					padding: $space-2xs 0;
				}

				#{$self}__header {
					padding: 0 $space-2xs;
				}

				#{$self}__expander {
					padding: $space-xs $space-4xs $space-xs 0;
				}

				#{$self}__textWrapper {
					flex-direction: row;
				}

				#{$self}__rightWrapper {
					padding: $space-5xs 0 $space-5xs $space-s;
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

		&.-ds-warning {
			background-color: $color-warning-background;
			border-color: $color-warning-border-weak;
		}

		&.-ds-success {
			background-color: $color-success-background;
			border-color: $color-success-border-weak;
		}

		&.-ds-info {
			background-color: $color-info-background;
			border-color: $color-info-border-weak;
		}

		&.-ds-fail {
			background-color: $color-fail-background;
			border-color: $color-fail-border-weak;
		}

		&.-ds-neutral {
			background-color: $color-neutral-background;
			border-color: $color-neutral-border-weak;
		}

		&.-ds-default {
			background-color: $color-default-background;
			border-color: $color-neutral-border-weak;
		}

		&.-ds-danger {
			background-color: $color-danger-background;
			border-color: $color-danger-border-weak;
		}
	}

	&__content {
		display: flex;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		padding: 0 $space-4xs;
		width: 100%;
	}

	&__title {
		@include heading-s-default-bold;

		color: $color-neutral-text-strong;
	}

	&__defaultText {
		@include text-m-default-regular;

		margin-top: $space-4xs;
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
		padding: $space-4xs 0;
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
		padding: $space-2xs 0 0 0;

		&:nth-child(2) {
			margin-left: $space-4xs;
		}
	}

	&__iconContainer {
		margin-right: $space-s;
		padding: $space-4xs 0;

		&.-ds-hideOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: initial;
			}
		}
	}

	&__icon {
		border-radius: 100px;
		padding: $space-2xs;

		&.-ds-neutral {
			background-color: $color-neutral-background-medium;
			color: $color-neutral-icon;
		}

		&.-ds-default {
			background-color: $color-neutral-background-medium;
			color: $color-neutral-icon;
		}

		&.-ds-warning {
			background-color: $color-warning-background-medium;
			color: $color-warning-icon;
		}

		&.-ds-success {
			background-color: $color-success-background-medium;
			color: $color-success-icon;
		}

		&.-ds-info {
			background-color: $color-info-background-medium;
			color: $color-info-icon;
		}

		&.-ds-fail {
			background-color: $color-fail-background-medium;
			color: $color-fail-icon;
		}

		&.-ds-danger {
			background-color: $color-danger-background-medium;
			color: $color-danger-icon;
		}
	}

	&__close {
		margin-left: $space-2xs;
	}

	&__expander {
		margin-left: $space-2xs;
		padding: 0;
	}

	&__expandedContainer {
		@include text-m-default-regular;

		margin-top: $space-xs;
		padding: 0 $space-4xs $space-4xs;
	}

	&__expandedText {
		margin-top: $space-xs;
	}
}
</style>

<script lang="ts">
import DsButton, {
	BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_TYPES,
} from '../Buttons/Button';
import DsDivider, { DIVIDER_PROMINENCES } from '../Divider';
import DsIcon, { ICONS } from '../Icons/Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { BANNER_COLORS, BANNER_LAYOUTS, BannerColor, BannerLayout } from './Banner.consts';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'Banner',
	components: {
		DsButton,
		DsDivider,
		DsIconButton,
		DsIcon,
	},
	props: {
		icon: {
			type: Object,
			default: null,
			validator: (icon) => Object.values(ICONS).includes(toRaw(icon)),
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
			validator: (color: BannerColor) => Object.values(BANNER_COLORS).includes(color),
		},
		title: {
			type: String,
			required: true,
		},
		layout: {
			type: String,
			default: BANNER_LAYOUTS.HORIZONTAL,
			validator: (layout: BannerLayout) => Object.values(BANNER_LAYOUTS).includes(layout),
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
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['button-clicked', 'close', 'update:isExpanded'],
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
				[BANNER_COLORS.NEUTRAL]: '-ds-neutral',
				[BANNER_COLORS.DEFAULT]: '-ds-default',
				[BANNER_COLORS.FAIL]: '-ds-fail',
				[BANNER_COLORS.INFO]: '-ds-info',
				[BANNER_COLORS.SUCCESS]: '-ds-success',
				[BANNER_COLORS.WARNING]: '-ds-warning',
				[BANNER_COLORS.DANGER]: '-ds-danger',
			}[this.color];
		},
		layoutClass() {
			return this.layout === BANNER_LAYOUTS.VERTICAL ? '-ds-vertical' : '-ds-horizontal';
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
});
</script>
