<template>
	<span
		class="ds-button"
		:class="{
			'-ds-outlined': type === BUTTON_TYPES.OUTLINED,
			'-ds-text': type === BUTTON_TYPES.TEXT,

			'-ds-small': size === SIZES.SMALL,
			'-ds-large': size === SIZES.LARGE,

			'-ds-rounded': type !== BUTTON_TYPES.TEXT && radius === RADIUSES.ROUNDED,

			'-ds-hovered': state === STATES.HOVERED,
			'-ds-focused': state === STATES.FOCUSED,
			'-ds-loading': state === STATES.LOADING,
			'-ds-disabled': state === STATES.DISABLED,

			[colorClassName]: true,

			'-ds-elevation-x-small': elevation === ELEVATIONS.X_SMALL,
			'-ds-elevation-small': elevation === ELEVATIONS.SMALL,
		}"
	>
		<span class="ds-button__content">
			<wnl-icon
				v-if="iconLeft"
				class="ds-button__icon -ds-left"
				:icon="iconLeft"
				:size="iconSize"
			/>
			<slot />
			<wnl-icon
				v-if="iconRight"
				class="ds-button__icon -ds-right"
				:icon="iconRight"
				:size="iconSize"
			/>
		</span>
		<wnl-icon
			v-if="state === STATES.LOADING"
			class="ds-button__loadingIcon"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="loadingIconSize"
		/>
	</span>
</template>

<!-- Looking for styles? These are defined in the global styles file: design-system.scss > _buttons.scss -->

<script lang="ts">
import { Value } from '../../../utils/type.utils';

import WnlIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
} from './Button.consts';

import { ICON_BUTTON_COLORS } from '../IconButton/IconButton.consts';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Button',
	components: {
		WnlIcon,
	},
	props: {
		size: {
			type: String,
			default: BUTTON_SIZES.MEDIUM,
			validator(value: Value<typeof BUTTON_SIZES>) {
				return Object.values(BUTTON_SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: BUTTON_TYPES.FILLED,
			validator(value: Value<typeof BUTTON_TYPES>) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: BUTTON_COLORS.PRIMARY,
			validator(value: Value<typeof ICON_BUTTON_COLORS>) {
				return Object.values(ICON_BUTTON_COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value: Value<typeof BUTTON_RADIUSES>) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value: Value<typeof BUTTON_STATES>) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
		iconLeft: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		elevation: {
			type: String,
			default: BUTTON_ELEVATIONS.NONE,
			validator(value: Value<typeof BUTTON_ELEVATIONS>) {
				return Object.values(BUTTON_ELEVATIONS).includes(value);
			},
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			COLORS: Object.freeze(BUTTON_COLORS),
			RADIUSES: Object.freeze(BUTTON_RADIUSES),
			SIZES: Object.freeze(BUTTON_SIZES),
			STATES: Object.freeze(BUTTON_STATES),
			ELEVATIONS: Object.freeze(BUTTON_ELEVATIONS),
		};
	},
	computed: {
		iconSize(): string {
			if (this.size === this.SIZES.SMALL || this.size === this.SIZES.MEDIUM) {
				return ICON_SIZES.XX_SMALL;
			}
			return ICON_SIZES.X_SMALL;
		},
		colorClassName(): string {
			return `-ds-color-${this.color}`;
		},
		loadingIconSize(): string {
			if (this.size === BUTTON_SIZES.LARGE) {
				return ICON_SIZES.MEDIUM;
			}

			if (this.size === BUTTON_SIZES.SMALL) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.SMALL;
		},
	},
});
</script>
