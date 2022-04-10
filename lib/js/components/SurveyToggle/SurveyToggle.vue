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
@import '../../../styles/settings/colors';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/components/survey-toggle';

@mixin setSurveyToggleOtherStates(
	$background-hover: '',
	$disabled-border: '',
	$disabled-text: '',
	$disabled-icon: '',
	$disabled-background: ''
) {
	@if $background-hover != '' {
		background-color: $background-hover;
	}

	@if $disabled-text != '' {
		color: $disabled-text;
	}

	@if $disabled-icon != '' {
		.surveyToggle__icon {
			color: $disabled-icon;
		}
	}

	@if $disabled-border != '' {
		border-color: $disabled-border;
	}

	@if $disabled-background != '' {
		background-color: $disabled-background;
	}
}

@mixin setSurveyToggleNormalState($background: '', $border: '', $text: '', $icon: '', $ripple: '') {
	@if $background != '' {
		background-color: $background;
	}

	@if $border != '' {
		border-color: $border;
	}

	@if $text != '' {
		.surveyToggle__content {
			color: $text;
		}
	}

	@if $icon != '' {
		.surveyToggle__icon {
			color: $icon;
		}
	}

	@if $ripple != '' {
		&::v-deep .ripple {
			background-color: $ripple !important;
		}
	}
}

.surveyToggle {
	$self: &;

	@each $color-name, $color-map in $survey-toggle-colors {
		&.-#{$color-name} {
			#{$self}__toggle {
				@include setSurveyToggleNormalState(
					map-get($color-map, 'background'),
					'',
					map-get($color-map, 'color'),
					'',
					map-get($color-map, 'ripple')
				);
			}
			#{$self}__ring {
				@include setSurveyToggleNormalState('', map-get($color-map, 'border'));
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
						'',
						'',
						'',
						map-get($color-map, 'disabled', 'icon'),
						map-get($color-map, 'disabled', 'background')
					);
				}
				#{$self}__content {
					@include setSurveyToggleOtherStates(
						'',
						'',
						map-get($color-map, 'disabled', 'color')
					);
				}
				#{$self}__ring {
					@include setSurveyToggleOtherStates(
						'',
						map-get($color-map, 'disabled', 'border')
					);
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
			'',
			map-get($survey-toggle-colors, 'primary', 'color'),
			map-get($survey-toggle-colors, 'primary', 'icon'),
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
