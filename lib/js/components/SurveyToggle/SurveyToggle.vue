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
					<ds-icon :icon="selectedIcon" :size="ICON_SIZES.X_SMALL" />
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
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

$survey-toggle-size: 48px;

$survey-toggle-colors: (
	'primary': (
		'background': $color-primary-background-weak,
		'border': $color-primary-border,
		'color': $color-primary-text,
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
		'border': $color-inverted-border,
		'color': $color-inverted-text,
		'background-hovered': $color-primary-background-strong-hovered,
		'ripple': $color-inverted-ripple,
		'disabled': (
			'background': $color-primary-background-strong-disabled,
		),
	),
	'neutral': (
		'background': $color-neutral-background-weak,
		'border': $color-neutral-border-strong,
		'color': $color-neutral-text-weak,
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
		'border': $color-inverted-border,
		'color': $color-inverted-text,
		'background-hovered': $color-neutral-background-strong-hovered,
		'ripple': $color-inverted-ripple,
		'disabled': (
			'background': $color-neutral-background-strong-disabled,
		),
	),
);

@mixin setSurveyToggleOtherStates($background, $icon: null) {
	background-color: $background;

	.surveyToggle__icon {
		color: $icon;
	}
}

@mixin setSurveyToggleNormalState($self, $background, $text, $ripple) {
	#{$self}__toggle {
		background-color: $background;

		&::v-deep .ripple {
			background-color: $ripple !important;
		}
	}

	#{$self}__content {
		color: $text;
	}
}

.surveyToggle {
	$self: &;

	@each $color-name, $color-map in $survey-toggle-colors {
		&.-#{$color-name} {
			@include setSurveyToggleNormalState(
				$self,
				map-get($color-map, 'background'),
				map-get($color-map, 'color'),
				map-get($color-map, 'ripple')
			);
			#{$self}__ring {
				border-color: map-get($color-map, 'border');
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
		width: $survey-toggle-size + 2 * $space-xxxs;
	}

	&__toggle {
		@include setSurveyToggleNormalState(
			$self,
			map-get($survey-toggle-colors, 'primary', 'background'),
			map-get($survey-toggle-colors, 'primary', 'color'),
			map-get($survey-toggle-colors, 'primary', 'ripple')
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
		@include label-l-bold();

		transition: color ease-in-out $default-transition-time;
	}

	&__icon {
		display: flex;
		color: $color-inverted-icon;
	}

	&__label {
		@include label-xs-bold();

		color: $color-neutral-text;
		text-align: center;
		margin-top: $space-xxs;
		min-height: 2em;
		max-width: 100%;

		@media #{breakpoint-s()} {
			@include label-s-regular();
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
	methods: {
		onClick() {
			this.$emit('click');
		},
	},
};
</script>
