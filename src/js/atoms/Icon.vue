<template>
	<div
		class="a-icon"
		:class="{
			'-touchable': touchable,
			[rotationClass]: rotationClass,
		}"
	>
		<font-awesome-icon
			v-if="isFontawesomeIcon"
			:class="{
				[sizeClassName]: true,
			}"
			:icon="icon"
		/>
		<component
			:is="icon"
			v-else
			:class="{
				[sizeClassName]: true,
			}"
		/>
	</div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FileVerified from 'images/icons/file-verified.svg';
import HeadWithQuestionMark from 'images/icons/head-with-question-mark.svg';
import SendMessage from 'images/icons/send-message.svg';
import Ribbon from 'images/icons/ribbon.svg';
import { FONTAWESOME_ICONS } from 'js/icons/fontawesome';
import { VueConstructor } from 'vue';

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
	FILE_VERIFIED: FileVerified,
	HEAD_WITH_QUESTION_MARK: HeadWithQuestionMark,
	SEND_MESSAGE: SendMessage,
	RIBBON: Ribbon,
} as const;

export const ICONS = {
	...FONTAWESOME_ICONS,
	...BETHINK_ICONS,
} as const;

export default {
	name: 'Icon',
	components: {
		FontAwesomeIcon,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: ICON_SIZES.MEDIUM,
			validator: (value: string) => Object.values(ICON_SIZES).includes(value),
		},
		rotation: {
			type: [Number],
			default: null,
			validator: function validator(value) {
				return [90, 180, 270].includes(value);
			},
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
		isFontawesomeIcon() {
			return 'iconName' in this.icon;
		},
		rotationClass() {
			if (this.rotation === null) {
				return null;
			}

			return `-rotate${this.rotation}`;
		},
	},
};
</script>
