<template>
	<span
		v-ripple
		class="a-button"
		:class="{
			'-outlined': type === BUTTON_TYPES.OUTLINED,
			'-text': type === BUTTON_TYPES.TEXT,

			'-small': size === SIZES.SMALL,
			'-large': size === SIZES.LARGE,

			'-rounded': type !== BUTTON_TYPES.TEXT && radius === RADIUSES.ROUNDED,

			'-hovered': state === STATES.HOVERED,
			'-focused': state === STATES.FOCUSED,
			'-loading': state === STATES.LOADING,
			'-disabled': state === STATES.DISABLED,

			[colorClassName]: true,

			'-elevation-x-small': elevation === ELEVATIONS.X_SMALL,
			'-elevation-small': elevation === ELEVATIONS.SMALL,
		}"
	>
		<span class="a-button__content">
			<wnl-icon
				v-if="iconLeft"
				class="a-button__icon -left"
				:icon="iconLeft"
				:size="ICON_SIZES.X_SMALL"
			/>
			<slot />
			<wnl-icon
				v-if="iconRight"
				class="a-button__icon -right"
				:icon="iconRight"
				:size="ICON_SIZES.X_SMALL"
			/>
		</span>
		<wnl-icon
			v-if="state === STATES.LOADING"
			class="a-button__loadingIcon"
			:icon="ICONS.FA_SYNC"
			:size="ICON_SIZES.X_SMALL"
		/>
	</span>
</template>

<script lang="ts">
import { VueConstructor } from 'vue';
import Ripple from 'vue-ripple-directive';

import WnlIcon, { ICONS, ICON_SIZES } from './Icon.vue';

export const BUTTON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;

export const BUTTON_TYPES = {
	FILLED: 'filled',
	OUTLINED: 'outlined',
	TEXT: 'text',
} as const;

export const BUTTON_COLORS = {
	PRIMARY: 'primary',
	PRIMARY_SUPPORTING: 'primary-supporting',
	SECONDARY: 'secondary',
	SECONDARY_SUPPORTING: 'secondary-supporting',
	CONTENT: 'content',
	MINOR: 'minor',
	MINOR_SUPPORTING: 'minor-supporting',
	DANGER: 'danger',
	DANGER_SUPPORTING: 'danger-supporting',
	WARNING: 'warning',
	SUCCESS: 'success',
} as const;

export const BUTTON_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;

export const BUTTON_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export const BUTTON_ELEVATIONS = {
	NONE: 'none',
	X_SMALL: 'x-small',
	SMALL: 'small',
} as const;

export { ICONS };

export default {
	name: 'Button',
	directives: {
		ripple: Ripple,
	},
	components: {
		WnlIcon,
	},
	props: {
		size: {
			type: String,
			default: BUTTON_SIZES.MEDIUM,
			validator(value) {
				return Object.values(BUTTON_SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: BUTTON_TYPES.FILLED,
			validator(value) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: BUTTON_COLORS.PRIMARY,
			validator(value) {
				return Object.values(BUTTON_COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
		iconLeft: {
			type: Object,
			default: null,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		elevation: {
			type: String,
			default: BUTTON_ELEVATIONS.NONE,
			validator(value) {
				return Object.values(BUTTON_ELEVATIONS).includes(value);
			},
		},
	},
	computed: {
		colorClassName(): string {
			return `-color-${this.color}`;
		},
	},
	created() {
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.COLORS = BUTTON_COLORS;
		this.RADIUSES = BUTTON_RADIUSES;
		this.SIZES = BUTTON_SIZES;
		this.STATES = BUTTON_STATES;
		this.ELEVATIONS = BUTTON_ELEVATIONS;
	},
};
</script>
