<template>
	<div
		class="a-icon"
		:class="{
			'-touchable': touchable,
		}"
	>
		<component
			:is="bethinkIconComponent"
			v-if="iconSet === 'b'"
			:class="{
				[sizeClassName]: true,
			}"
		/>
		<font-awesome-icon
			v-else
			:class="{
				[sizeClassName]: true,
			}"
			:icon="[iconSet, faIconClass]"
		/>
	</div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FileVerifiedSvg from 'images/icons/file-verified.svg';
import HeadWithQuestionMark from 'images/icons/head-with-question-mark.svg';
import SendMessage from 'images/icons/send-message.svg';

export const ICON_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
	XX_LARGE: 'xx-large',
};

const BETHINK_ICONS = {
	'file-verified': FileVerifiedSvg,
	'head-with-question-mark': HeadWithQuestionMark,
	'send-message': SendMessage,
};

export default {
	name: 'Icon',
	components: {
		FontAwesomeIcon,
	},
	props: {
		faIconClass: {
			// TODO rename
			type: String,
			required: true,
			validate(faIconClass: string) {
				// TODO check list of allowed icons
				return faIconClass.startsWith('fa-');
			},
		},
		iconSet: {
			type: String,
			default: 'fas',
			// TODO validator
		},
		size: {
			type: String,
			default: ICON_SIZES.MEDIUM,
			validator: (value: string) => Object.values(ICON_SIZES).includes(value),
		},
		touchable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sizeClassName() {
			return `-${this.size}`;
		},
		bethinkIconComponent() {
			return BETHINK_ICONS[this.faIconClass];
		},
	},
};
</script>
