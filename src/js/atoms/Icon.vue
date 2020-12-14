<template>
	<i
		:class="{
			'a-icon': true,
			[faIconClass]: true,
			[sizeClassName]: true,
			'-touchable': touchable,
		}"
	/>
</template>

<script lang="ts">
export const SIZES = {
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
	props: {
		faIconClass: {
			type: String,
			required: true,
			validate(faIconClass: string) {
				return faIconClass.startsWith('fa-');
			},
		},
		size: {
			type: String,
			default: SIZES.MEDIUM,
			validator: (value: string) => Object.values(SIZES).includes(value),
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
