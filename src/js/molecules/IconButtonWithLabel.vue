<template>
	<div class="m-iconButtonWithLabel" @mouseover="hovered = true" @mouseleave="hovered = false">
		<span class="m-iconButtonWithLabel__label">{{ label }}</span>
		<wnl-icon-button
			:icon="icon"
			:state="hovered ? BUTTON_STATES.HOVERED : BUTTON_STATES.DEFAULT"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.m-iconButtonWithLabel {
	align-items: center;
	color: $color-primary;
	cursor: pointer;
	display: flex;

	&:hover {
		color: $color-primary-dark;
	}

	&__label {
		@include textS;

		display: none;
		font-weight: bold;
		margin-right: $space-s;
		text-transform: uppercase;
		transition: color ease-in-out 0.3s, border-color ease-in-out 0.3s;

		@media #{breakpoint-s()} {
			display: initial;
		}
	}
}
</style>

<script lang="ts">
import { VueConstructor } from 'vue';
import WnlIconButton, {
	BUTTON_STATES,
	ICONS,
} from 'js/components/global/styleguide/atoms/IconButton';

export { ICONS };

export default {
	name: 'IconButtonWithLabel',
	components: {
		WnlIconButton,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		icon: {
			type: Object,
			required: true,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
	},
	data() {
		return {
			hovered: false,
		};
	},
	created() {
		this.BUTTON_STATES = BUTTON_STATES;
	},
};
</script>
