<template>
	<vue-popper
		ref="popper"
		:key="key"
		:boundaries-selector="boundariesSelector"
		:force-show="forceShow"
		:options="{ placement, modifiers }"
		:trigger="triggerAction"
		:delay-on-mouse-over="300"
		:delay-on-mouse-out="300"
		:append-to-body="appendToBody"
		:visible-arrow="isPointerVisible"
		:root-class="rootClass"
	>
		<div
			class="popper ds-popOver"
			:class="{
				'-ds-color-neutral': color === POP_OVER_COLORS.NEUTRAL,
				'-ds-small': size === POP_OVER_SIZES.SMALL,
				'-ds-medium': size === POP_OVER_SIZES.MEDIUM,
			}"
		>
			<img v-if="headerImageUrl" class="ds-popOver__image" :src="headerImageUrl" alt="" />
			<div class="ds-popOver__content">
				<div v-if="titleText" class="ds-popOver__title"> {{ titleText }} </div>
				<div v-if="subtitleText" class="ds-popOver__subtitle"> {{ subtitleText }} </div>
				<div class="ds-popOver__contentSlot" :class="{ '-ds-maxHeight': maxHeight }">
					<slot :close="close" />
				</div>
			</div>
			<ds-button
				v-if="buttonText"
				class="ds-popOver__button"
				:type="BUTTON_TYPES.TEXT"
				:size="BUTTON_SIZES.LARGE"
				@click="$emit('button-click')"
			>
				{{ buttonText }}
			</ds-button>
		</div>

		<template #reference>
			<slot name="reference" />
		</template>
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';

.ds-popOver {
	$self: &;

	background-color: $color-default-background;
	// override popperjs styles
	border: none;
	border-radius: $radius-m;
	box-shadow: $shadow-l;
	display: flex;
	flex-direction: column;
	padding: 0;

	/* stylelint-disable-next-line selector-class-pattern */
	&.-ds-color-neutral :deep(.popper__arrow) {
		border-color: $color-neutral-background transparent !important;
	}

	&.-ds-color-neutral {
		background-color: $color-neutral-background;
	}

	&__contentSlot {
		word-break: break-word;
	}

	&__contentSlot.-ds-maxHeight {
		overflow: hidden scroll;
	}

	&.-ds-small {
		width: 320px;

		#{$self}__contentSlot.-ds-maxHeight {
			max-height: 160px;
		}
	}

	&.-ds-medium {
		width: min(90vw, 460px);

		#{$self}__contentSlot.-ds-maxHeight {
			max-height: 250px;
		}
	}

	&[x-placement^='bottom'] {
		margin-top: $space-s;

		/* stylelint-disable-next-line selector-class-pattern */
		:deep(.popper__arrow) {
			border-color: transparent transparent $color-inverted-border transparent;
			border-width: 0 $space-xs $space-s $space-xs;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
			top: -$space-s;
		}
	}

	&[x-placement^='top'] {
		margin-bottom: $space-s;

		/* stylelint-disable-next-line selector-class-pattern */
		:deep(.popper__arrow) {
			border-color: $color-inverted-border transparent transparent transparent;
			border-width: $space-s $space-xs 0 $space-xs;
			bottom: -$space-s;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	&[x-placement^='right'] {
		margin-left: $space-s;

		/* stylelint-disable-next-line selector-class-pattern */
		:deep(.popper__arrow) {
			border-color: transparent $color-inverted-border transparent transparent;
			border-width: $space-xs $space-s $space-xs 0;
			left: -$space-s;
			margin-left: 0;
			margin-right: 0;
			top: calc(50% - #{$space-xs});
		}
	}

	&[x-placement^='left'] {
		margin-right: $space-s;

		/* stylelint-disable-next-line selector-class-pattern */
		:deep(.popper__arrow) {
			border-color: transparent transparent transparent $color-inverted-border;
			border-width: $space-xs 0 $space-xs $space-s;
			margin-left: 0;
			margin-right: 0;
			right: -$space-s;
			top: calc(50% - #{$space-xs});
		}
	}

	&__image {
		border-top-left-radius: $radius-m;
		border-top-right-radius: $radius-m;
		max-width: 100%;
	}

	&__content {
		@include text-m-default-regular;

		color: $color-neutral-text-heavy;
		padding: $space-s;
		// Override popperjs styles
		text-align: left;
	}

	&__title {
		@include heading-m-default-bold;

		color: $color-default-text;
		margin-bottom: $space-2xs;
	}

	&__subtitle {
		@include heading-s-default-regular;

		color: $color-neutral-text;
		margin-bottom: $space-2xs;
	}

	&__button {
		align-self: flex-end;
		margin: 0 $space-s $space-xs;
	}
}
</style>

<script>
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
import {
	POP_OVER_COLORS,
	POP_OVER_PLACEMENTS,
	POP_OVER_SIZES,
	POP_OVER_TRIGGER_ACTIONS,
} from './PopOver.consts';
import DsButton, { BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button';

export default {
	name: 'PopOver',
	components: {
		VuePopper,
		DsButton,
	},
	props: {
		boundariesSelector: {
			type: String,
			default: null,
		},
		triggerAction: {
			type: String,
			default: POP_OVER_TRIGGER_ACTIONS.CLICK,
			validator(triggerAction) {
				return Object.values(POP_OVER_TRIGGER_ACTIONS).includes(triggerAction);
			},
		},
		placement: {
			type: String,
			default: POP_OVER_PLACEMENTS.BOTTOM,
			validator(placement) {
				return Object.values(POP_OVER_PLACEMENTS).includes(placement);
			},
		},
		forceShow: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: POP_OVER_COLORS.DEFAULT,
			validator(color) {
				return Object.values(POP_OVER_COLORS).includes(color);
			},
		},
		titleText: {
			type: String,
			default: null,
		},
		subtitleText: {
			type: String,
			default: null,
		},
		buttonText: {
			type: String,
			default: null,
		},
		headerImageUrl: {
			type: String,
			default: null,
		},
		appendToBody: {
			type: Boolean,
			default: false,
		},
		modifiers: {
			type: Object,
			default: () => ({}),
		},
		size: {
			type: String,
			default: POP_OVER_SIZES.SMALL,
			validator(size) {
				return Object.values(POP_OVER_SIZES).includes(size);
			},
		},
		maxHeight: {
			type: Boolean,
			default: false,
		},
		isPointerVisible: {
			type: Boolean,
			default: true,
		},
		rootClass: {
			type: String,
			default: '',
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['button-click'],
	data() {
		return {
			POP_OVER_COLORS: Object.freeze(POP_OVER_COLORS),
			POP_OVER_SIZES: Object.freeze(POP_OVER_SIZES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			BUTTON_SIZES: Object.freeze(BUTTON_SIZES),
			key: 1,
		};
	},
	watch: {
		triggerAction() {
			this.updateKey();
		},
		placement() {
			this.updateKey();
		},
		boundariesSelector() {
			this.updateKey();
		},
	},
	methods: {
		close() {
			this.$refs.popper.doClose();
		},
		updateKey() {
			// Force component rerender to apply new vue-popperjs options.
			// vue-popperjs doesn't support changing props in existing component
			this.key++;
		},
	},
};
</script>
