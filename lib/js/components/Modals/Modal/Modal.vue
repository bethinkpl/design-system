<template>
	<div
		class="modal"
		:class="{
			'-danger': danger,
		}"
		@click.stop="$emit('close-modal')"
	>
		<div class="modal__wrapper" :class="{ '-small': size === MODAL_SIZES.SMALL }">
			<div
				v-if="headerImage"
				class="modal__image"
				:style="{ backgroundImage: 'url(' + headerImage + ')' }"
			></div>
			<div class="modal__content" :class="{ '-centered': contentCentered }">
				<div class="modal__header">
					<wnl-icon-button
						touchable
						:icon="ICONS.FA_XMARK"
						class="modal__close"
						:size="ICON_SIZES.SMALL"
						:elevation="BUTTON_ELEVATIONS.X_SMALL"
						:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
						@click.native.stop="$emit('close-modal')"
					/>
					<feature-icon
						v-if="headerFeatureIcon"
						class="modal__headerFeatureIcon"
						:color="calcHeaderFeatureIconColor"
						:icon="headerFeatureIcon"
						:size="FEATURE_ICON_SIZES.X_LARGE"
						:double-background="true"
					/>
					<h3
						class="modal__headerTitle"
						:class="{ '-small': headerTitleSize === MODAL_HEADER_TITLE_SIZES.SMALL }"
						>{{ headerTitle }}</h3
					>
					<h6 v-if="headerSubtitle" class="modal__headerSubtitle">{{
						headerSubtitle
					}}</h6>
				</div>
				<div v-if="$slots.default" class="modal__textContent">
					<slot />
				</div>
				<div class="modal__footer" :class="{ '-singleColumn': calcSingleColumn }">
					<div
						v-if="footerTertiaryButtonText || footerCheckboxText"
						class="modal__footerColumn --ctaSecondary"
					>
						<div v-if="footerCheckboxText" ref="button" class="modal__checkbox">
							<input
								id="modal__checkboxInput"
								type="checkbox"
								:checked="false"
								class="modal__checkboxInput"
								@change="$emit('checkbox-change')"
							/>
							<label for="modal__checkboxInput" class="modal__checkboxLabel">
								{{ footerCheckboxText }}
							</label>
						</div>
						<wnl-button
							v-if="footerTertiaryButtonText"
							ref="button"
							class="modal__buttonSecondary"
							:type="BUTTON_TYPES.TEXT"
							:color="BUTTON_COLORS.NEUTRAL"
							:icon-left="ICONS[footerTertiaryButtonIcon]"
						>
							{{ footerTertiaryButtonText }}
						</wnl-button>
					</div>
					<div
						v-if="footerSecondaryButtonText || footerPrimaryButtonText"
						class="modal__footerColumn --cta"
					>
						<wnl-button
							v-if="footerSecondaryButtonText"
							ref="button"
							class="modal__buttonSecondary"
							:type="BUTTON_TYPES.OUTLINED"
							:color="calcFooterSecondaryButtonColor"
							:icon-right="ICONS[footerSecondaryButtonIcon]"
						>
							{{ footerSecondaryButtonText }}
						</wnl-button>
						<wnl-button
							v-if="footerPrimaryButtonText"
							ref="button"
							class="modal__buttonPrimary"
							:color="calcFooterPrimaryButtonColor"
							:icon-right="ICONS[footerPrimaryButtonIcon]"
						>
							{{ footerPrimaryButtonText }}
						</wnl-button>
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

$modal-medium-width: 700px;
$modal-small-width: 460px;
$image-height: 200px;
$image-height-small: 140px;

.modal {
	$self: &;

	background: $color-default-overlay;
	padding: $space-l $space-s;

	@media #{breakpoint-s()} {
		padding: $space-l;
	}

	&__wrapper {
		background: $color-default-background;
		border-radius: $radius-m;
		box-shadow: $shadow-xl;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		max-width: $modal-medium-width;

		&.-small {
			max-width: $modal-small-width;

			#{$self}__image {
				height: $image-height-small;
			}
			#{$self}__content {
				padding-left: $space-m;
				padding-right: $space-m;
			}
		}
	}

	&__content {
		padding: $space-l $space-s;

		@media #{breakpoint-s()} {
			padding: $space-l $space-xl;
		}

		&.-centered {
			#{$self}__header,
			#{$self}__textContent {
				text-align: center;
			}
		}
	}

	&__header {
		display: flex;
		flex-direction: column;
	}

	&__headerFeatureIcon {
		align-self: center;
		margin-bottom: $space-m;
	}

	&__headerTitle {
		@include displayHeading-xs-default-bold;

		margin-bottom: $space-xs;
		margin-top: 0;

		&.-small {
			@include heading-xl-default-bold;
		}
	}

	&__headerSubtitle {
		@include heading-m-default-regular;

		margin-bottom: $space-s;
		margin-top: 0;
	}

	&__textContent {
		@include text-m-default-regular;

		margin-bottom: $space-s;
	}

	&__checkbox {
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	&__checkboxLabel {
		color: $color-neutral-text-heavy;
		cursor: pointer;
		margin-left: $space-xxs;

		/** align vertical middle fix */
		margin-top: -$space-xxxxxs;
	}

	&__close {
		border-radius: 100%;
		color: $color-neutral-icon-weak;
		position: absolute;
		right: $space-xs;
		top: $space-xs;
	}

	&__image {
		height: $image-height;
		background-size: cover;
	}

	&__footer {
		display: flex;
		justify-content: space-between;
		flex-direction: column-reverse;
		padding-top: $space-m;

		@media #{breakpoint-s()} {
			flex-direction: row;
		}

		&.-singleColumn {
			#{$self}__footerColumn {
				width: 100%;
				justify-content: center;
			}
		}
	}

	&__footerColumn {
		display: flex;
		gap: 0 $space-s;

		&.--cta {
			flex-direction: column-reverse;
			margin-bottom: $space-xs;

			@media #{breakpoint-s()} {
				flex-direction: row;
				margin-bottom: 0;
			}
		}

		&.--ctaSecondary {
			gap: 0 $space-m;
			justify-content: center;

			@media #{breakpoint-s()} {
				justify-content: left;
			}
		}
	}

	&__buttonPrimary {
		margin-bottom: $space-s;

		@media #{breakpoint-s()} {
			margin-bottom: 0;
		}
	}
}
</style>

<script lang="ts">
import FeatureIcon from '../../Icons/FeatureIcon/FeatureIcon.vue';
import { MODAL_SIZES, MODAL_HEADER_TITLE_SIZES } from './Modal.consts';
import { VueConstructor } from 'vue';
import { ICONS, ICON_SIZES } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR, FEATURE_ICON_SIZES } from '../../Icons/FeatureIcon';
import WnlButton, { BUTTON_COLORS, BUTTON_TYPES, BUTTON_ELEVATIONS } from '../../Buttons/Button';
import WnlIconButton, { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';

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
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
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
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		footerSecondaryButtonText: {
			type: String,
			default: null,
		},
		footerSecondaryButtonIcon: {
			type: Object,
			default: null,
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		footerTertiaryButtonText: {
			type: String,
			default: null,
		},
		footerTertiaryButtonIcon: {
			type: Object,
			default: null,
			validator(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		footerCheckboxText: {
			type: String,
			default: null,
		},
	},
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
	},
};
</script>
