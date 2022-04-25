<template>
	<div
		class="surveyToggle"
		:class="{
			'-primary-selected': isPrimarySelected,
			'-primary': isPrimary,
			'-neutral': isNeutral,
			'-neutral-selected': isNeutralSelected,
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
				<span v-if="isPrimarySelected || isNeutralSelected" class="surveyToggle__icon">
					<ds-icon :icon="selectedIcon" :size="ICON_SIZES.X_SMALL"></ds-icon>
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
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors/tokens';

$survey-toggle-size: 48px;

$survey-toggle-colors: (
	'primary': (
		'background': $color-primary-background-weak,
		'border': $color-primary-border,
		'color': $color-primary-text,
		'icon': $color-default-icon-inverted,
		'background-hovered': $color-primary-background-weak-hovered,
		'ripple': $color-primary-ripple,
		'disabled': (
			'border': $color-primary-border-disabled,
			'color': $color-primary-text-disabled,
			'icon': $color-primary-icon-disabled,
		),
	),
	'primary-selected': (
		'background': $color-primary-background-strong,
		'border': $color-default-border-inverted,
		'color': $color-default-icon-inverted,
		'icon': $color-default-text-inverted,
		'background-hovered': $color-primary-background-strong-hovered,
		'ripple': $color-default-ripple-inverted,
		'disabled': (
			'background': $color-primary-background-strong-disabled,
		),
	),
	'neutral': (
		'background': $color-neutral-background-weak,
		'border': $color-neutral-border-strong,
		'color': $color-neutral-text-weak,
		'icon': $color-neutral-icon-weak,
		'background-hovered': $color-neutral-background-weak-hovered,
		'ripple': $color-neutral-ripple,
		'disabled': (
			'border': $color-neutral-border-strong-disabled,
			'color': $color-neutral-text-weak-disabled,
			'icon': $color-neutral-icon-weak-disabled,
		),
	),
	'neutral-selected': (
		'background': $color-neutral-background-strong,
		'border': $color-default-border-inverted,
		'color': $color-default-icon-inverted,
		'icon': $color-default-text-inverted,
		'background-hovered': $color-neutral-background-strong-hovered,
		'ripple': $color-default-ripple-inverted,
		'disabled': (
			'background': $color-neutral-background-strong-disabled,
		),
	),
);

@mixin setSurveyContentOtherStates($disabled-text) {
	color: $disabled-text;
}

@mixin setSurveyRingOtherStates($disabled-border) {
	border-color: $disabled-border;
}

@mixin setSurveyToggleOtherStates($background, $icon: null) {
	background-color: $background;

	.surveyToggle__icon {
		color: $icon;
	}
}

@mixin setSurveyRingNormalState($border) {
	border-color: $border;
}

@mixin setSurveyToggleNormalState($background, $text, $ripple, $icon: null) {
	background-color: $background;

	.surveyToggle {
		&__content {
			color: $text;
		}

		&__icon {
			color: $icon;
		}
	}

	&::v-deep .ripple {
		background-color: $ripple !important;
	}
}

.surveyToggle {
	$self: &;

	@each $color-name, $color-map in $survey-toggle-colors {
		&.-#{$color-name} {
			#{$self}__toggle {
				@include setSurveyToggleNormalState(
					map-get($color-map, 'background'),
					map-get($color-map, 'color'),
					map-get($color-map, 'ripple')
				);
			}
			#{$self}__ring {
				@include setSurveyRingNormalState(map-get($color-map, 'border'));
			}

			&:hover,
			&.-hovered {
				#{$self}__toggle {
					@include setSurveyToggleOtherStates(map-get($color-map, 'background-hovered'));
				}
			}

			&.-disabled {
				#{$self}__toggle {
					@include setSurveyToggleOtherStates(
						map-get($color-map, 'disabled', 'background'),
						map-get($color-map, 'disabled', 'icon')
					);
				}
				#{$self}__content {
					@include setSurveyContentOtherStates(map-get($color-map, 'disabled', 'color'));
				}
				#{$self}__ring {
					@include setSurveyRingOtherStates(map-get($color-map, 'disabled', 'border'));
				}
			}
		}
	}

	align-items: center;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	width: $survey-toggle-size;

	@media #{breakpoint-s()} {
		width: $survey-toggle-size + 2 * $space-xxxs;
	}

	&__toggle {
		@include setSurveyToggleNormalState(
			map-get($survey-toggle-colors, 'primary', 'background'),
			map-get($survey-toggle-colors, 'primary', 'color'),
			map-get($survey-toggle-colors, 'primary', 'ripple'),
			map-get($survey-toggle-colors, 'primary', 'icon')
		);

		border-radius: 100%;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-xxs;
		transition: background-color ease-in-out $default-transition-time,
			box-shadow ease-in-out $default-transition-time;
		width: $survey-toggle-size;

		.-hovered & {
			@include setSurveyToggleOtherStates(
				map-get($survey-toggle-colors, 'primary', 'background-hovered')
			);

			box-shadow: $shadow-s;
		}
	}

	&__ring {
		// TODO: IT-4131 mixin
		align-items: center;
		display: flex;
		justify-content: center;
		border: 3px solid $color-neutral-border;
		border-radius: 100%;
		transition: border-color ease-in-out $default-transition-time;
		width: 100%;
	}

	&.-disabled {
		pointer-events: none;
	}

	&__content {
		@include headlineXS();
		@include textBold();

		transition: color ease-in-out $default-transition-time;
	}

	&__icon {
		display: flex;
	}

	&__label {
		@include textInfoS();
		@include textBold();

		color: $color-neutral-text;
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
		selectedIcon: {
			type: Object,
			default() {
				return ICONS.FA_CHECK_SOLID;
			},
			validate(selectedIcon) {
				return Object.values(ICONS).includes(selectedIcon);
			},
		},
	},
	data() {
		return {
			hovered: false,
		};
	},
	computed: {
		isPrimarySelected() {
			return (
				this.meaning === SURVEY_TOGGLE_MEANINGS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.SELECTED
			);
		},
		isPrimary() {
			return (
				this.meaning === SURVEY_TOGGLE_MEANINGS.PRIMARY &&
				this.status === SURVEY_TOGGLE_STATUSES.DEFAULT
			);
		},
		isNeutral() {
			return (
				this.meaning === SURVEY_TOGGLE_MEANINGS.NEUTRAL &&
				this.status === SURVEY_TOGGLE_STATUSES.DEFAULT
			);
		},
		isNeutralSelected() {
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
		onClick() {
			this.$emit('click');
		},
	},
};
</script>
