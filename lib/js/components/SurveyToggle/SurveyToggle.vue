<template>
	<div
		class="ds-surveyToggle"
		:class="{
			'-ds-primary-selected': isPrimarySelected,
			'-ds-primary': isPrimary,
			'-ds-neutral': isNeutral,
			'-ds-neutral-selected': isNeutralSelected,
			'-ds-disabled': state === SURVEY_TOGGLE_STATES.DISABLED,
			'-ds-hovered': isHoveredState,
		}"
	>
		<div
			class="ds-surveyToggle__toggle"
			@mouseover="hovered = true"
			@mouseleave="hovered = false"
		>
			<div class="ds-surveyToggle__ring">
				<span v-if="isPrimarySelected || isNeutralSelected" class="ds-surveyToggle__icon">
					<ds-icon :icon="selectedIcon" :size="ICON_SIZES.X_SMALL" />
				</span>
				<span v-else class="ds-surveyToggle__content">
					{{ contentText }}
				</span>
			</div>
		</div>
		<div v-if="label" class="ds-surveyToggle__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/animations';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$survey-toggle-size: 48px;

$survey-toggle-colors: (
	'primary': (
		'background': $color-primary-background-weak,
		'border': $color-primary-border,
		'color': $color-primary-text,
		'background-hovered': $color-primary-background-weak-hovered,
		'disabled': (
			'border': $color-primary-border-disabled,
			'color': $color-primary-text-disabled,
			'icon': $color-primary-icon-disabled,
		),
	),
	'primary-selected': (
		'background': $color-primary-background-strong,
		'border': $color-inverted-border,
		'color': $color-inverted-text,
		'background-hovered': $color-primary-background-strong-hovered,
		'disabled': (
			'background': $color-primary-background-strong-disabled,
		),
	),
	'neutral': (
		'background': $color-neutral-background-weak,
		'border': $color-neutral-border-strong,
		'color': $color-neutral-text-weak,
		'background-hovered': $color-neutral-background-weak-hovered,
		'disabled': (
			'border': $color-neutral-border-strong-disabled,
			'color': $color-neutral-text-weak-disabled,
			'icon': $color-neutral-icon-weak-disabled,
		),
	),
	'neutral-selected': (
		'background': $color-neutral-background-strong,
		'border': $color-inverted-border,
		'color': $color-inverted-text,
		'background-hovered': $color-neutral-background-strong-hovered,
		'disabled': (
			'background': $color-neutral-background-strong-disabled,
		),
	),
);

@mixin setSurveyToggleOtherStates($background, $icon: null) {
	background-color: $background;

	.ds-surveyToggle__icon {
		color: $icon;
	}
}

@mixin setSurveyToggleNormalState($self, $background, $text) {
	#{$self}__toggle {
		background-color: $background;
	}

	#{$self}__content {
		color: $text;
	}
}

.ds-surveyToggle {
	$self: &;

	@each $color-name, $color-map in $survey-toggle-colors {
		&.-ds-#{$color-name} {
			@include setSurveyToggleNormalState(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'color')
			);

			#{$self}__ring {
				border-color: map-get($color-map, 'border');
			}

			&:hover,
			&.-ds-hovered {
				#{$self}__toggle {
					@include setSurveyToggleOtherStates(map-get($color-map, 'background-hovered'));
				}
			}

			&.-ds-disabled {
				#{$self}__toggle {
					@include setSurveyToggleOtherStates(
						map-get($color-map, 'disabled', 'background'),
						map-get($color-map, 'disabled', 'icon')
					);
				}

				#{$self}__content {
					color: map-get($color-map, 'disabled', 'color');
				}

				#{$self}__ring {
					border-color: map-get($color-map, 'disabled', 'border');
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
		width: $survey-toggle-size + 2 * $space-3xs;
	}

	&__toggle {
		@include setSurveyToggleNormalState(
			$self,
			map-get($survey-toggle-colors, 'primary', 'background'),
			map-get($survey-toggle-colors, 'primary', 'color')
		);

		border-radius: 100%;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-2xs;
		transition: background-color ease-in-out $default-transition-time,
			box-shadow ease-in-out $default-transition-time;
		width: $survey-toggle-size;

		.-ds-hovered & {
			@include setSurveyToggleOtherStates(
				map-get($survey-toggle-colors, 'primary', 'background-hovered')
			);

			box-shadow: $shadow-s;
		}
	}

	&__ring {
		// TODO: IT-4131 mixin
		align-items: center;
		border: 3px solid $color-neutral-border;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		transition: border-color ease-in-out $default-transition-time;
		width: 100%;
	}

	&.-ds-disabled {
		pointer-events: none;
	}

	&__content {
		@include label-l-default-bold;

		transition: color ease-in-out $default-transition-time;
	}

	&__icon {
		color: $color-inverted-icon;
		display: flex;
	}

	&__label {
		@include label-xs-default-bold;

		color: $color-neutral-text;
		margin-top: $space-2xs;
		max-width: 100%;
		min-height: 2em;
		text-align: center;

		@media #{breakpoint-s()} {
			@include label-s-default-regular;
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
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';

export default {
	name: 'SurveyToggle',
	components: {
		DsIcon,
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
			validator(meaning) {
				return Object.values(SURVEY_TOGGLE_MEANINGS).includes(meaning);
			},
		},
		status: {
			type: String,
			default: SURVEY_TOGGLE_STATUSES.DEFAULT,
			validator(status) {
				return Object.values(SURVEY_TOGGLE_STATUSES).includes(status);
			},
		},
		state: {
			type: String,
			default: SURVEY_TOGGLE_STATES.DEFAULT,
			validator(state) {
				return Object.values(SURVEY_TOGGLE_STATES).includes(state);
			},
		},
		selectedIcon: {
			type: Object,
			default() {
				return ICONS.FA_CHECK_SOLID;
			},
			validator(selectedIcon) {
				return Object.values(ICONS).includes(selectedIcon);
			},
		},
	},
	data() {
		return {
			hovered: false,
			ICON_SIZES: Object.freeze(ICON_SIZES),
			SURVEY_TOGGLE_MEANING: Object.freeze(SURVEY_TOGGLE_MEANINGS),
			SURVEY_TOGGLE_STATUSES: Object.freeze(SURVEY_TOGGLE_STATUSES),
			SURVEY_TOGGLE_STATES: Object.freeze(SURVEY_TOGGLE_STATES),
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
};
</script>
