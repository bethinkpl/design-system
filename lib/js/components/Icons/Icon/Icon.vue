<template>
	<div
		class="ds-icon"
		:class="{
			'-ds-touchable': touchable,
			'-ds-spin': spinning,
			'-ds-flipped-vertical': flippedVertical,
			'-ds-flipped-horizontal': flippedHorizontal,
			[sizeClassName]: true,
		}"
		:style="{ '--rotate': `${rotation ?? 0}deg` }"
	>
		<font-awesome-icon v-if="isFontawesomeIcon" :icon="icon" />
		<component :is="icon" v-else />
	</div>
</template>

<style lang="scss">
@import '../../../../styles/components/icons';
</style>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { ICON_SIZES, ICONS } from './Icon.consts';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'Icon',
	components: {
		FontAwesomeIcon,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		size: {
			type: String,
			default: ICON_SIZES.MEDIUM,
			validator: (value: string) => Object.values(ICON_SIZES).includes(value),
		},
		rotation: {
			type: [Number, null],
			default: null,
		},
		flippedVertical: {
			type: Boolean,
			default: false,
		},
		flippedHorizontal: {
			type: Boolean,
			default: false,
		},
		touchable: {
			type: Boolean,
			default: false,
		},
		spinning: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sizeClassName() {
			return `-ds-${this.size}`;
		},
		isFontawesomeIcon() {
			return 'iconName' in this.icon;
		},
	},
});
</script>
