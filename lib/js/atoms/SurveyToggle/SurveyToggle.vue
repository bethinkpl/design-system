<template>
	<div
		class="surveyToggle"
		:class="{
			'-selectedPrimary': isSelectedPrimary,
			'-defaultPrimary': isDefaultPrimary,
			'-selectedSecondary': isSelectedSecondary,
			'-disabled': state === SURVEY_TOGGLE_STATES.DISABLED,
			'-hovered': isHoveredState,
		}"
		@click="onClick"
	>
		<div class="surveyToggle__toggle" @mouseover="hovered = true" @mouseleave="hovered = false">
			<div class="surveyToggle__ring">
				<span v-if="isDefaultPrimary" class="surveyToggle__content">
					{{ content }}
				</span>
				<span v-if="isSelectedPrimary || isSelectedSecondary" class="surveyToggle__icon">
					<icon :icon="icon" :size="ICON_SIZES.X_SMALL"></icon>
				</span>
			</div>
		</div>
		<div v-if="label" class="surveyToggle__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/icons';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/media-queries';

$survey-toggle-size: 48px;

.surveyToggle {
	$self: &;

	align-items: center;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	width: $survey-toggle-size + 2 * $space-xxxs;

	// toggle
	&__toggle {
		background: $color-total-white;
		border-radius: 100%;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-xxs;
		width: $survey-toggle-size;

		.-hovered & {
			border-color: mix($color-total-white, $color-firefly-black, 88%);
		}
	}

	&.-selectedPrimary &__toggle {
		background-color: $color-primary;
	}

	&.-selectedSecondary &__toggle {
		background-color: $color-minor-supporting;
	}

	&.-selectedPrimary.-disabled &__toggle {
		background-color: $color-primary-disabled;
	}

	&.-selectedSecondary.-disabled &__toggle {
		background-color: mix($color-minor-supporting, $color-total-white, 40%);
	}

	&.-selectedPrimary.-hovered &__toggle {
		background-color: $color-primary-hovered;
	}

	&.-defaultPrimary.-hovered &__toggle {
		background-color: $color-primary-background;
	}

	&.-selectedSecondary.-hovered &__toggle {
		background-color: mix($color-minor-supporting, $color-firefly-black, 88%);
	}

	// ring
	&__ring {
		// TODO: IT-4131 mixin
		align-items: center;
		display: flex;
		justify-content: center;
		border: 3px solid $color-minor-supporting;
		border-radius: 100%;
		width: 100%;

		.-hovered & {
			border-color: mix($color-minor-supporting, $color-firefly-black, 88%);
		}
	}

	&.-disabled {
		pointer-events: none;

		#{$self}__ring {
			border-color: mix($color-minor-supporting, $color-total-white, 40%);
		}
	}

	&.-defaultPrimary &__ring {
		border-color: $color-primary;
	}

	&.-selectedPrimary &__ring {
		border-color: $color-total-white;
	}

	&.-selectedSecondary &__ring {
		border-color: $color-total-white;
	}

	&.-defaultPrimary.-disabled &__ring {
		border-color: $color-primary-disabled;
	}

	// content
	&__content {
		@include headlineXS();
		@include textBold();

		color: $color-minor-supporting;
	}

	&.-defaultPrimary &__content {
		color: $color-primary;

		.-hovered & {
			$border-color: $color-primary-hovered;
		}
	}

	&.-defaultPrimary.-disabled &__content {
		color: $color-primary-disabled;
	}

	// icon
	&__icon {
		color: $color-total-white;
		height: $icon-xs;
		width: $icon-xs;
	}

	// label
	&__label {
		@include textInfoS();
		@include textBold();

		color: $color-minor;
		text-align: center;
		margin-top: $space-xxs;
		min-height: 2em;
		max-width: 60px;

		@media #{breakpoint-s()} {
			@include textInfoM();

			font-weight: normal;
		}
	}
}
</style>

<script lang="ts">
import {
	SURVEY_TOGGLE_COLORS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from './SurveyToggle.consts';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'SurveyToggle',
	components: {
		Icon,
	},
	props: {
		label: {
			type: String,
			default: null,
		},
		content: {
			type: String,
			default: null,
		},
		color: {
			type: String,
			default: SURVEY_TOGGLE_COLORS.PRIMARY,
			validate(color) {
				return Object.values(SURVEY_TOGGLE_COLORS).includes(color);
			},
		},
		status: {
			type: String,
			default: SURVEY_TOGGLE_STATUSES.DEFAULT,
			validate(status) {
				return Object.values(SURVEY_TOGGLE_STATUSES).includes(status);
			},
		},
		state: {
			type: String,
			default: SURVEY_TOGGLE_STATES.DEFAULT,
			validate(state) {
				return Object.values(SURVEY_TOGGLE_STATES).includes(state);
			},
		},
		icon: {
			type: Object,
			default() {
				return ICONS.FA_CHECK_SOLID;
			},
			validate(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
	},
	data() {
		return {
			hovered: false,
		};
	},
	computed: {
		isSelectedPrimary() {
			return (
				this.color === SURVEY_TOGGLE_COLORS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.SELECTED
			);
		},
		isDefaultPrimary() {
			return (
				this.color === SURVEY_TOGGLE_COLORS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.DEFAULT
			);
		},
		isSelectedSecondary() {
			return (
				this.color === SURVEY_TOGGLE_COLORS.SECONDARY &&
				this.status === SURVEY_TOGGLE_STATUSES.SELECTED
			);
		},
		isHoveredState() {
			if (this.state === SURVEY_TOGGLE_STATES.DISABLED) {
				return false;
			}

			if (this.state === SURVEY_TOGGLE_STATES.HOVERED) {
				return true;
			}
			return this.hovered;
		},
	},
	created() {
		this.SURVEY_TOGGLE_COLORS = SURVEY_TOGGLE_COLORS;
		this.SURVEY_TOGGLE_STATUSES = SURVEY_TOGGLE_STATUSES;
		this.SURVEY_TOGGLE_STATES = SURVEY_TOGGLE_STATES;
		this.ICON_SIZES = ICON_SIZES;
	},
	methods: {
		mouseOver() {
			this.hovered = !this.hovered;
		},
		onClick() {
			this.$emit('click');
		},
	},
};
</script>
