<template>
	<div class="ds-banner">
		<div
			class="ds-banner__inner"
			:class="[
				colorClass,
				layoutClass,
				sizeClass,
				{
					'-ds-titleInColor': titleInColor,
				},
			]"
		>
			<div class="ds-banner__content">
				<div class="ds-banner__header">
					<div
						v-if="icon && size === BANNER_SIZES.MEDIUM"
						class="ds-banner__iconWrapper"
						:class="{ '-ds-hideOnMobile': isIconHiddenOnMobile }"
					>
						<feature-icon
							:icon="icon"
							:color="iconColor"
							:size="FEATURE_ICON_SIZES.SMALL"
						/>
					</div>

					<div class="ds-banner__textWrapper">
						<div class="ds-banner__titleWrapper">
							<div class="ds-banner__title">
								<div
									v-if="icon && size === BANNER_SIZES.SMALL"
									class="ds-banner__iconWrapperSmall"
								>
									<feature-icon
										:icon="icon"
										:color="iconColor"
										:size="FEATURE_ICON_SIZES.X_SMALL"
									/>
								</div>
								{{ title }}
							</div>
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
		--title-color: #{$color-neutral-text-strong};

		border-radius: $radius-m;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: column;
		gap: $space-xs;
		padding: $space-xs;

		@container (width > 500px) {
			#{$self}__textWrapper {
				flex-direction: row !important; // fixme
			}

			#{$self}__rightWrapper {
				padding: 0 0 0 $space-s !important; // fixme
			}
		}

		&.-ds-horizontal {
			#{$self}__header {
				padding: 0 $space-2xs;
			}

			#{$self}__iconWrapper {
				padding: $space-2xs $space-xs $space-2xs 0;
			}

			#{$self}__textWrapper {
				flex-direction: column;
			}

			#{$self}__rightWrapper {
				gap: $space-3xs;
				padding: $space-4xs 0 0;
			}

			#{$self}__expander {
				padding: $space-xs $space-4xs $space-xs $space-2xs;
			}

			#{$self}__buttonWrapper {
				padding: $space-xs 0;
			}

			#{$self}__rightSlot {
				flex-grow: initial;
				padding: $space-xs 0 $space-xs 0;
			}
		}

		&.-ds-warning {
			background-color: $color-warning-background;
			border-color: $color-warning-border-weak;

			&.-ds-titleInColor {
				--title-color: #{$color-warning-text};
			}
		}

		&.-ds-success {
			background-color: $color-success-background;
			border-color: $color-success-border-weak;

			&.-ds-titleInColor {
				--title-color: #{$color-success-text};
			}
		}

		&.-ds-info {
			background-color: $color-info-background;
			border-color: $color-info-border-weak;

			&.-ds-titleInColor {
				--title-color: #{$color-info-text};
			}
		}

		&.-ds-fail {
			background-color: $color-fail-background;
			border-color: $color-fail-border-weak;

			&.-ds-titleInColor {
				--title-color: #{$color-fail-text};
			}
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

			.-ds-titleInColor & {
				--title-color: #{$color-danger-text};
			}
		}

		&.-ds-small {
			#{$self}__expander {
				padding: 0 0 0 $space-2xs;
			}
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

		align-items: center;
		color: var(--title-color);
		display: flex;
	}

	&__iconWrapperSmall {
		align-self: stretch;
		padding-right: $space-3xs;
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
		gap: $space-5xs;
		justify-content: center;
		padding: $space-4xs 0;
	}

	&__rightWrapper {
		display: flex;
		flex-shrink: 0;
		flex-wrap: nowrap;
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

	&__iconWrapper {
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
		padding-left: $space-2xs;
	}

	&__expander {
		padding-left: $space-2xs;
	}

	&__expandedContainer {
		@include text-m-default-regular;

		padding: 0 $space-4xs $space-4xs;
	}

	&__expandedText {
		margin-top: $space-xs;
	}
}
</style>

<script lang="ts" setup>
import DsButton, {
	BUTTON_COLORS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_TYPES,
} from '../Buttons/Button';
import DsDivider, { DIVIDER_PROMINENCES } from '../Divider';
import { IconItem, ICONS } from '../Icons/Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import {
	BANNER_COLORS,
	BANNER_LAYOUTS,
	BANNER_SIZES,
	BannerColor,
	BannerLayout,
	BannerSize,
} from './Banner.consts';
import { computed, ref, watch } from 'vue';
import FeatureIcon, {
	FEATURE_ICON_COLOR,
	FEATURE_ICON_SIZES,
	FeatureIconColor,
} from '../Icons/FeatureIcon';

const {
	icon = null,
	closable = false,
	color = BANNER_COLORS.DEFAULT,
	layout = BANNER_LAYOUTS.HORIZONTAL,
	isExpanded = false,
	isIconHiddenOnMobile = false,
	size = BANNER_SIZES.MEDIUM,
	titleInColor = false,
} = defineProps<{
	icon?: IconItem | null;
	buttonText?: string;
	closable?: boolean;
	color?: BannerColor;
	title: string;
	layout?: BannerLayout;
	isExpanded?: boolean;
	isIconHiddenOnMobile?: boolean;
	size?: BannerSize;
	titleInColor?: boolean;
}>();

const emit = defineEmits<{
	'button-clicked': [];
	close: [];
	'update:isExpanded': [isExpanded: boolean];
}>();

const { toggleExpandedText, isExpandedInternal } = useExpanded();
const { sizeClass, layoutClass, colorClass } = useBannerClasses();
const iconColor = computed(() => {
	const colorMap: Record<BannerColor, FeatureIconColor> = {
		[BANNER_COLORS.DEFAULT]: FEATURE_ICON_COLOR.NEUTRAL,
		[BANNER_COLORS.NEUTRAL]: FEATURE_ICON_COLOR.NEUTRAL,
		[BANNER_COLORS.INFO]: FEATURE_ICON_COLOR.INFO,
		[BANNER_COLORS.SUCCESS]: FEATURE_ICON_COLOR.SUCCESS,
		[BANNER_COLORS.WARNING]: FEATURE_ICON_COLOR.WARNING,
		[BANNER_COLORS.FAIL]: FEATURE_ICON_COLOR.FAIL,
		[BANNER_COLORS.DANGER]: FEATURE_ICON_COLOR.DANGER,
	};

	return colorMap[color];
});

function useExpanded() {
	const isExpandedInternal = ref(false);

	watch(
		() => isExpanded,
		(newValue) => {
			if (newValue !== isExpandedInternal.value) {
				isExpandedInternal.value = newValue;
			}
		},
		{ immediate: true },
	);

	const toggleExpandedText = () => {
		isExpandedInternal.value = !isExpandedInternal.value;
		emit('update:isExpanded', isExpandedInternal.value);
	};

	return {
		isExpandedInternal,
		toggleExpandedText,
	};
}

function useBannerClasses() {
	const colorClass = computed(() => {
		const colorMap: Record<BannerColor, string> = {
			[BANNER_COLORS.NEUTRAL]: '-ds-neutral',
			[BANNER_COLORS.DEFAULT]: '-ds-default',
			[BANNER_COLORS.FAIL]: '-ds-fail',
			[BANNER_COLORS.INFO]: '-ds-info',
			[BANNER_COLORS.SUCCESS]: '-ds-success',
			[BANNER_COLORS.WARNING]: '-ds-warning',
			[BANNER_COLORS.DANGER]: '-ds-danger',
		};

		return colorMap[color];
	});

	const layoutClass = computed(() => {
		return layout === BANNER_LAYOUTS.VERTICAL ? '-ds-vertical' : '-ds-horizontal';
	});

	const sizeClass = computed(() => {
		const sizeMap: Record<BannerSize, string> = {
			[BANNER_SIZES.SMALL]: '-ds-small',
			[BANNER_SIZES.MEDIUM]: '-ds-medium',
		};

		return sizeMap[size];
	});

	return {
		colorClass,
		layoutClass,
		sizeClass,
	};
}
</script>
