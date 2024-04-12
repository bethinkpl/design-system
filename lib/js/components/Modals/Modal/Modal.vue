<template>
	<div class="ds-modal" @click.self="$emit('close-modal')">
		<div class="ds-modal__wrapper" :class="{ '-small': size === MODAL_SIZES.SMALL }">
			<wnl-icon-button
				touchable
				:icon="ICONS.FA_XMARK"
				class="ds-modal__close"
				:size="ICON_SIZES.SMALL"
				:elevation="BUTTON_ELEVATIONS.X_SMALL"
				:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
				@click.stop="$emit('close-modal')"
			/>
			<div class="ds-modal__scrollableWrapper">
				<img v-if="headerImage" class="ds-modal__image" :src="headerImage" alt="" />
				<div class="ds-modal__content" :class="{ '-centered': contentCentered }">
					<div class="ds-modal__header">
						<feature-icon
							v-if="headerFeatureIcon"
							class="ds-modal__headerFeatureIcon"
							:color="calcHeaderFeatureIconColor"
							:icon="headerFeatureIcon"
							:size="FEATURE_ICON_SIZES.X_LARGE"
							double-background
						/>
						<h4
							class="ds-modal__headerTitle"
							:class="{
								'-small': headerTitleSize === MODAL_HEADER_TITLE_SIZES.SMALL,
							}"
							>{{ headerTitle }}</h4
						>
						<h5 v-if="headerSubtitle" class="ds-modal__headerSubtitle">{{
							headerSubtitle
						}}</h5>
					</div>
					<div v-if="$slots.default" class="ds-modal__slotContent">
						<slot />
					</div>
					<div
						v-if="displayFooter"
						class="ds-modal__footer"
						:class="{ '-singleColumn': calcSingleColumn }"
					>
						<div
							v-if="footerTertiaryButtonText || footerCheckboxText"
							class="ds-modal__footerCtaSecondary"
						>
							<div v-if="footerCheckboxText" class="ds-modal__checkbox">
								<input
									id="ds-modal__checkboxInput"
									type="checkbox"
									:checked="false"
									@change="$emit('checkbox-change', $event.target.checked)"
								/>
								<label
									for="ds-modal__checkboxInput"
									class="ds-modal__checkboxLabel"
								>
									{{ footerCheckboxText }}
								</label>
							</div>
							<wnl-button
								v-if="footerTertiaryButtonText"
								:type="BUTTON_TYPES.TEXT"
								:color="BUTTON_COLORS.NEUTRAL"
								:icon-left="footerTertiaryButtonIcon"
								class="ds-modal__tertiaryButton"
								@click="$emit('tertiary-button-click')"
							>
								{{ footerTertiaryButtonText }}
							</wnl-button>
						</div>
						<div
							v-if="footerSecondaryButtonText || footerPrimaryButtonText"
							class="ds-modal__footerCtaPrimary"
						>
							<wnl-button
								v-if="footerSecondaryButtonText"
								:type="BUTTON_TYPES.OUTLINED"
								:color="calcFooterSecondaryButtonColor"
								:icon-right="footerSecondaryButtonIcon"
								@click="$emit('secondary-button-click')"
							>
								{{ footerSecondaryButtonText }}
							</wnl-button>
							<wnl-button
								v-if="footerPrimaryButtonText"
								:color="calcFooterPrimaryButtonColor"
								:icon-right="footerPrimaryButtonIcon"
								@click="$emit('primary-button-click')"
							>
								{{ footerPrimaryButtonText }}
							</wnl-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/icons';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/z-indexes';

$modal-medium-width: 700px;
$modal-small-width: 460px;
$image-height: 200px;
$image-height-small: 140px;

.ds-modal {
	$self: &;

	align-items: center;
	background: $color-default-overlay;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	padding: $space-l $space-s;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: $z-index-modal;

	@media #{breakpoint-s()} {
		padding: $space-l;
	}

	&__wrapper {
		background: $color-default-background;
		border-radius: $radius-m;
		box-shadow: $shadow-xl;
		margin: 0 auto;
		max-width: $modal-medium-width;
		overflow: hidden;
		position: relative;
		width: 100%;

		&.-small {
			max-width: $modal-small-width;

			@media #{breakpoint-s()} {
				#{$self}__content {
					padding-left: $space-m;
					padding-right: $space-m;
				}
			}

			#{$self}__headerTitle {
				@include heading-xl-default-bold;
			}
		}
	}

	&__scrollableWrapper {
		max-height: calc(100vh - #{2 * $space-l});
		overflow-y: auto;

		@media #{breakpoint-s()} {
			max-height: 84vh;
		}
	}

	&__content {
		padding: $space-l $space-s;

		@media #{breakpoint-s()} {
			padding: $space-l $space-xl;
		}

		&.-centered {
			#{$self}__header,
			#{$self}__slotContent {
				text-align: center;
			}
		}
	}

	&__header {
		display: flex;
		flex-direction: column;
		margin-bottom: $space-s;
		row-gap: $space-xs;
	}

	&__headerFeatureIcon {
		align-self: center;
		margin-bottom: $space-xs;
	}

	&__headerTitle {
		@include heading-xl-default-bold;

		margin-bottom: 0;
		margin-top: 0;

		@media #{breakpoint-s()} {
			@include displayHeading-xs-default-bold;
		}

		&.-small {
			@include heading-xl-default-bold;
		}
	}

	&__headerSubtitle {
		@include heading-m-default-regular;

		margin-bottom: 0;
		margin-top: 0;
	}

	&__slotContent {
		@include text-m-default-regular;
	}

	&__checkbox {
		align-items: flex-start;
		cursor: pointer;
		display: flex;
		flex-flow: row;
	}

	&__checkboxLabel {
		@include formLabel-s-default-regular;

		color: $color-neutral-text-heavy;
		cursor: pointer;
		margin-left: $space-2xs;
	}

	&__close {
		position: absolute;
		right: $space-3xs;
		top: $space-3xs;
	}

	&__image {
		display: block;
		width: 100%;
	}

	&__footer {
		column-gap: $space-s;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		line-break: anywhere;
		padding-top: $space-m;

		@media #{breakpoint-s()} {
			align-items: center;
			flex-direction: row;
		}

		&.-singleColumn {
			#{$self}__footerCtaPrimary {
				justify-content: center;
				width: 100%;
			}
		}
	}

	&__tertiaryButton {
		flex-shrink: 0;

		&:only-child {
			margin: 0 auto;
		}
	}

	&__footerCtaPrimary {
		display: flex;
		flex-direction: column-reverse;
		flex-shrink: 0;
		gap: $space-s 0;

		@media #{breakpoint-s()} {
			flex-direction: row;
			gap: 0 $space-s;
		}

		&:not(:first-child) {
			// first-child because of reverse order in flex-direction
			margin-bottom: $space-xs;

			@media #{breakpoint-s()} {
				margin-bottom: 0;
			}
		}
	}

	&__footerCtaSecondary {
		align-items: center;
		display: flex;
		gap: 0 $space-m;
		justify-content: space-between;

		@media #{breakpoint-s()} {
			justify-content: left;
		}
	}
}
</style>

<script lang="ts">
import FeatureIcon from '../../Icons/FeatureIcon/FeatureIcon.vue';
import { MODAL_BODY_CLASSNAME, MODAL_HEADER_TITLE_SIZES, MODAL_SIZES } from './Modal.consts';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR, FEATURE_ICON_SIZES } from '../../Icons/FeatureIcon';
import WnlButton, { BUTTON_COLORS, BUTTON_ELEVATIONS, BUTTON_TYPES } from '../../Buttons/Button';
import WnlIconButton, { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';
import { toRaw } from 'vue';

export default {
	name: 'Modal',
	components: { FeatureIcon, WnlButton, WnlIconButton },
	props: {
		size: {
			type: String,
			default: MODAL_SIZES.MEDIUM,
			validator: (value: string) => Object.values(MODAL_SIZES).includes(value),
		},
		danger: {
			type: Boolean,
			default: false,
		},
		headerTitleSize: {
			type: String,
			default: MODAL_HEADER_TITLE_SIZES.MEDIUM,
			validator: (value: string) => Object.values(MODAL_HEADER_TITLE_SIZES).includes(value),
		},
		headerTitle: {
			type: String,
			required: true,
		},
		headerSubtitle: {
			type: String,
			default: null,
		},
		headerFeatureIcon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		headerFeatureIconColor: {
			type: String,
			default: FEATURE_ICON_COLOR.NEUTRAL,
			validator(color: string) {
				return Object.values(FEATURE_ICON_COLOR).includes(color);
			},
		},
		contentCentered: {
			type: Boolean,
			default: false,
		},
		headerImage: {
			type: String,
			default: null,
		},
		footerPrimaryButtonText: {
			type: String,
			default: null,
		},
		footerPrimaryButtonIcon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		footerSecondaryButtonText: {
			type: String,
			default: null,
		},
		footerSecondaryButtonIcon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		footerTertiaryButtonText: {
			type: String,
			default: null,
		},
		footerTertiaryButtonIcon: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		footerCheckboxText: {
			type: String,
			default: null,
		},
	},
	// TODO fix me when touching this file
	/* eslint vue/require-emit-validator: 0 */
	emits: [
		'tertiary-button-click',
		'checkbox-change',
		'close-modal',
		'secondary-button-click',
		'primary-button-click',
	],
	data() {
		return {
			BUTTON_COLORS: Object.freeze(BUTTON_COLORS),
			BUTTON_ELEVATIONS: Object.freeze(BUTTON_ELEVATIONS),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			MODAL_SIZES: Object.freeze(MODAL_SIZES),
			MODAL_HEADER_TITLE_SIZES: Object.freeze(MODAL_HEADER_TITLE_SIZES),
			FEATURE_ICON_SIZES: Object.freeze(FEATURE_ICON_SIZES),
		};
	},
	computed: {
		calcHeaderFeatureIconColor() {
			if (this.danger) {
				return FEATURE_ICON_COLOR.DANGER;
			}

			return this.headerFeatureIconColor;
		},
		calcFooterPrimaryButtonColor() {
			if (this.danger) {
				return BUTTON_COLORS.NEUTRAL;
			}

			return BUTTON_COLORS.PRIMARY;
		},
		calcFooterSecondaryButtonColor() {
			if (this.danger) {
				return BUTTON_COLORS.DANGER;
			}

			return BUTTON_COLORS.NEUTRAL;
		},
		calcSingleColumn() {
			return !(
				(this.footerTertiaryButtonText || this.footerCheckboxText) &&
				(this.footerSecondaryButtonText || this.footerPrimaryButtonText)
			);
		},
		displayFooter() {
			return (
				this.footerTertiaryButtonText ||
				this.footerCheckboxText ||
				this.footerSecondaryButtonText ||
				this.footerPrimaryButtonText
			);
		},
	},
	mounted() {
		document.body.classList.add(MODAL_BODY_CLASSNAME);
	},
	unmounted() {
		document.body.classList.remove(MODAL_BODY_CLASSNAME);
	},
};
</script>
