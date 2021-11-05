<template>
	<div
		class="surveyToggle"
		:class="{
			'-selectedPrimary': isSelectedPrimary,
			'-defaultPrimary': isDefaultPrimary,
			'-selectedNeutral': isSelectedNeutral,
			'-disabled': state === SURVEY_TOGGLE_STATES.DISABLED,
			'-hovered': isHoveredState,
		}"
		@click="onClick"
	>
		<div
			v-ripple
			class="surveyToggle__toggle"
			@mouseover="hovered = true"
			@mouseleave="hovered = false"
		>
			<div class="surveyToggle__ring">
				<span v-if="isSelectedPrimary || isSelectedNeutral" class="surveyToggle__icon">
					<ds-icon :icon="contentIcon" :size="ICON_SIZES.X_SMALL"></ds-icon>
				</span>
				<span v-else class="surveyToggle__content">
					{{ contentText }}
				</span>
			</div>
		</div>
		<div v-if="label" class="surveyToggle__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/animations';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/icons';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/typography';

$survey-toggle-size: 48px;

.surveyToggle {
	$self: &;

	align-items: center;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	width: $survey-toggle-size;

	@media #{breakpoint-s()} {
		width: $survey-toggle-size + 2 * $space-xxxs;
	}

	// toggle
	&__toggle {
		background: $color-total-white;
		border-radius: 100%;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-xxs;
		transition: color ease-in-out $default-transition-time,
			background-color ease-in-out $default-transition-time,
			box-shadow ease-in-out $default-transition-time;
		width: $survey-toggle-size;

		.-hovered & {
			border-color: mix($color-total-white, $color-firefly-black, 88%);
			background-color: $color-ice-gray;
			box-shadow: $shadow-s;
		}

		&::v-deep .ripple {
			background-color: rgba($color-total-white, $ripple-alpha) !important;
		}
	}

	&.-selectedPrimary &__toggle {
		background-color: $color-primary;
	}

	&.-selectedNeutral &__toggle {
		background-color: $color-minor-supporting;
	}

	&.-selectedPrimary.-disabled &__toggle {
		background-color: $color-primary-disabled;
	}

	&.-selectedNeutral.-disabled &__toggle {
		background-color: mix($color-minor-supporting, $color-total-white, 40%);
	}

	&.-selectedPrimary.-hovered &__toggle {
		background-color: $color-primary-hovered;
	}

	&.-defaultPrimary.-hovered &__toggle {
		background-color: $color-primary-background;
	}

	&.-selectedNeutral.-hovered &__toggle {
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
		transition: border-color ease-in-out $default-transition-time;
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

	&.-selectedNeutral &__ring {
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
		max-width: 100%;

		@media #{breakpoint-s()} {
			@include textInfoM();

			font-weight: normal;
		}
	}
}
</style>

<script lang="ts">
import {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from './SurveyToggle.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../Icon';
import Ripple from 'vue-ripple-directive';

export default {
	name: 'SurveyToggle',
	components: {
		DsIcon,
	},
	directives: {
		ripple: Ripple,
	},
	props: {
		label: {
			type: String,
			default: null,
		},
		contentText: {
			type: String,
			default: null,
		},
		meaning: {
			type: String,
			default: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			validate(meaning) {
				return Object.values(SURVEY_TOGGLE_MEANINGS).includes(meaning);
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
		contentIcon: {
			type: Object,
			default() {
				return ICONS.FA_CHECK_SOLID;
			},
			validate(contentIcon) {
				return Object.values(ICONS).includes(contentIcon);
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
				this.meaning === SURVEY_TOGGLE_MEANINGS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.SELECTED
			);
		},
		isDefaultPrimary() {
			return (
				this.meaning === SURVEY_TOGGLE_MEANINGS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.DEFAULT
			);
		},
		isSelectedNeutral() {
			return (
				this.meaning === SURVEY_TOGGLE_MEANINGS.NEUTRAL &&
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
		this.SURVEY_TOGGLE_MEANING = SURVEY_TOGGLE_MEANINGS;
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
