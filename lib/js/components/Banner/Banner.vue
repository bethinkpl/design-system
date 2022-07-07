<template>
	<div class="ds-banner" :class="[colorClass, layoutClass]">
		<div class="ds-banner__content">
			<div class="ds-banner__header">
				<div v-if="icon" class="ds-banner__iconContainer">
					<!-- TODO: https://bethink.atlassian.net/browse/IT-3589 change to a-illustration in the future -->
					<ds-icon class="ds-banner__icon" :class="[colorClass]" :icon="icon" />
				</div>

				<div class="ds-banner__text">
					<div class="ds-banner__title" v-text="title" />
					<div v-if="hasDefaultText" class="ds-banner__defaultText">
						<slot name="defaultText" />
					</div>
					<div v-if="buttonText.length > 0" class="ds-banner__buttonTextVertical">
						<ds-button
							:color="BUTTON_COLORS.NEUTRAL"
							:type="BUTTON_TYPES.OUTLINED"
							:size="BUTTON_SIZES.SMALL"
							@click.native="$emit('button-clicked')"
							>{{ buttonText }}
						</ds-button>
					</div>
				</div>
				<div v-if="buttonText.length > 0" class="ds-banner__buttonTextHorizontal">
					<ds-button
						:color="BUTTON_COLORS.NEUTRAL"
						:type="BUTTON_TYPES.OUTLINED"
						:size="BUTTON_SIZES.SMALL"
						@click.native="$emit('button-clicked')"
						>{{ buttonText }}
					</ds-button>
				</div>
			</div>
			<div v-if="hasExpandedText" class="ds-banner__expander">
				<ds-icon-button
					:size="ICON_BUTTON_SIZES.SMALL"
					:icon="expanded ? ICONS.FA_CHEVRON_UP : ICONS.FA_CHEVRON_DOWN"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:radius="BUTTON_RADIUSES.ROUNDED"
					:touchable="false"
					@click.native="toggleExpandedText"
				/>
			</div>
			<div v-if="!hasExpandedText && closable">
				<ds-icon-button
					:size="ICON_BUTTON_SIZES.SMALL"
					:icon="ICONS.FA_XMARK"
					:color="ICON_BUTTON_COLORS.NEUTRAL"
					:radius="BUTTON_RADIUSES.ROUNDED"
					:touchable="false"
					@click.native="$emit('close')"
				/>
			</div>
		</div>
		<div v-if="hasExpandedText && expanded" class="ds-banner__expandedContainer">
			<ds-divider :prominence="DIVIDER_PROMINENCES.STRONG" />
			<div class="ds-banner__expandedText">
				<slot name="expandedText" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/media-queries';

.ds-banner {
	$self: &;

	@mixin iconContainerVerticalStyles {
		padding: $space-xxxxs 0;
	}

	@mixin headerVerticalStyles {
		padding: 0 $space-xxxxs;
	}

	@mixin expanderVerticalStyles {
		padding: 0 $space-xxxxs;
	}

	@mixin iconVerticalStyles {
		padding: $space-xxxs;
	}

	border-radius: $radius-m;
	border-style: solid;
	border-width: 1px;
	display: flex;
	flex-direction: column;
	padding: $space-xs;

	&.-vertical {
		#{$self}__buttonTextHorizontal {
			display: none;
		}

		#{$self}__buttonTextVertical {
			display: initial;
		}

		#{$self}__iconContainer {
			@include iconContainerVerticalStyles;
		}

		#{$self}__header {
			@include headerVerticalStyles;
		}

		#{$self}__expander {
			@include expanderVerticalStyles;
		}

		#{$self}__icon {
			@include iconVerticalStyles;
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
		@include headerVerticalStyles;

		display: flex;
		justify-content: space-between;
		margin-right: $space-xxs;
		width: 100%;

		@media #{breakpoint-m()} {
			padding: 0 $space-xxs;
		}
	}

	&__title {
		@include headlineXS;
		@include textBold;
	}

	&__defaultText {
		@include textM;
	}

	&__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
		padding: $space-xxxxs 0;
		margin: 0 $space-s;

		:nth-child(n + 2) {
			margin-top: $space-xxxxs;
		}
	}

	&__iconContainer {
		@include iconContainerVerticalStyles;

		@media #{breakpoint-m()} {
			padding: $space-xxs 0;
		}
	}

	&__icon {
		@include iconVerticalStyles;

		border-radius: 100px;

		@media #{breakpoint-m()} {
			padding: $space-xxs;
		}

		&.-neutral {
			color: $color-neutral-icon;
			background-color: $color-neutral-background-medium;
		}

		&.-default {
			color: $color-default-icon;
			background-color: $color-neutral-background-medium;
		}

		&.-warning {
			color: $color-warning-icon;
			background-color: $color-warning-background-medium;
		}

		&.-success {
			color: $color-success-icon;
			background-color: $color-success-background-medium;
		}

		&.-info {
			color: $color-info-icon;
			background-color: $color-info-background-medium;
		}

		&.-fail {
			color: $color-fail-icon;
			background-color: $color-fail-background-medium;
		}

		&.-danger {
			color: $color-danger-icon;
			background-color: $color-danger-background-medium;
		}
	}

	&__buttonTextHorizontal {
		padding: $space-xs 0;
		flex-shrink: 0;
		display: none;

		@media #{breakpoint-m()} {
			display: initial;
		}
	}

	&__buttonTextVertical {
		padding: $space-xxs 0 0;

		@media #{breakpoint-m()} {
			display: none;
		}
	}

	&__expander {
		@include expanderVerticalStyles;

		@media #{breakpoint-m()} {
			padding: $space-xs $space-xxxxs $space-xs 0;
		}
	}

	&__expandedContainer {
		@include textM;

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
import DsIcon from '../Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { ICONS } from '../Icon';
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
			validate: (icon: VueConstructor) => Object.values(ICONS).includes(icon),
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
			validate: (color) => Object.values(BANNER_COLORS).includes(color),
		},
		title: {
			type: String,
			required: true,
		},
		layout: {
			type: String,
			default: BANNER_LAYOUTS.HORIZONTAL,
			validate: (layout) => Object.values(BANNER_LAYOUTS).includes(layout),
		},
	},
	data() {
		return {
			expanded: false,
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
		hasExpandedText() {
			return !!this.$slots.expandedText && this.$slots.expandedText.length > 0;
		},
		hasDefaultText() {
			return !!this.$slots.defaultText && this.$slots.defaultText.length > 0;
		},
	},
	created() {
		this.BUTTON_COLORS = BUTTON_COLORS;
		this.BUTTON_RADIUSES = BUTTON_RADIUSES;
		this.BUTTON_SIZES = BUTTON_SIZES;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.DIVIDER_PROMINENCES = DIVIDER_PROMINENCES;
		this.ICON_BUTTON_COLORS = ICON_BUTTON_COLORS;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.ICONS = ICONS;
	},
	methods: {
		toggleExpandedText() {
			this.expanded = !this.expanded;
		},
	},
};
</script>
