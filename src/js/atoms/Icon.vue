<template>
	<div
		class="a-icon"
		:class="{
			'-touchable': touchable,
		}"
	>
		<font-awesome-icon
			:class="{
				[sizeClassName]: true,
			}"
			:icon="[iconSet, faIconClass]"
		/>
	</div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export const ICON_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
	XX_LARGE: 'xx-large',
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
	},
};
</script>
