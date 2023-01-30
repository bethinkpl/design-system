<template>
	<div class="modalDialog">
		<wnl-modal
			:size="MODAL_SIZES.SMALL"
			:danger="danger"
			:content-centered="true"
			:header-image="headerImage"
			:header-title-size="MODAL_HEADER_TITLE_SIZES.SMALL"
			:header-feature-icon="headerFeatureIcon"
			:header-feature-icon-color="headerFeatureIconColor"
			:header-title="headerTitle"
			:header-subtitle="headerSubtitle"
			:footer-primary-button-text="footerPrimaryButtonText"
			:footer-primary-button-icon="footerPrimaryButtonIcon"
			:footer-secondary-button-text="footerSecondaryButtonText"
			:footer-secondary-button-icon="footerSecondaryButtonIcon"
		>
		</wnl-modal>
	</div>
</template>

<script lang="ts">
import WnlModal from '../Modal/Modal.vue';
import { MODAL_SIZES, MODAL_HEADER_TITLE_SIZES } from '../Modal';
import { VueConstructor } from 'vue';
import { ICONS, ICON_SIZES } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR, FEATURE_ICON_SIZES } from '../../Icons/FeatureIcon';
import { BUTTON_COLORS, BUTTON_TYPES, BUTTON_ELEVATIONS } from '../../Buttons/Button';
import { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';

export default {
	name: 'ModalDialog',
	components: { WnlModal },
	props: {
		danger: {
			type: Boolean,
			default: false,
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
};
</script>
