<template>
	<ds-modal
		class="ds-modalDialog"
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
		:footer-primary-button-state="footerPrimaryButtonState"
		:footer-secondary-button-text="footerSecondaryButtonText"
		:footer-secondary-button-icon="footerSecondaryButtonIcon"
		:footer-secondary-button-state="footerSecondaryButtonState"
		@close-modal="$emit('close-modal')"
		@primary-button-click="$emit('primary-button-click')"
		@secondary-button-click="$emit('secondary-button-click')"
	>
		<slot />
	</ds-modal>
</template>

<script lang="ts">
import DsModal from '../Modal/Modal.vue';
import { MODAL_HEADER_TITLE_SIZES, MODAL_SIZES } from '../Modal';
import { ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR } from '../../Icons/FeatureIcon';
import { defineComponent, toRaw } from 'vue';
import { BUTTON_STATES, ButtonState } from '../../Buttons/Button';

export default defineComponent({
	name: 'ModalDialog',
	components: { DsModal },
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
		footerPrimaryButtonState: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(state) {
				return Object.values(BUTTON_STATES).includes(state as ButtonState);
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
		footerSecondaryButtonState: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(state) {
				return Object.values(BUTTON_STATES).includes(state as ButtonState);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['close-modal', 'primary-button-click', 'secondary-button-click'],
	data() {
		return {
			MODAL_SIZES: Object.freeze(MODAL_SIZES),
			MODAL_HEADER_TITLE_SIZES: Object.freeze(MODAL_HEADER_TITLE_SIZES),
		};
	},
});
</script>
