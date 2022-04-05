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

	&__toggle {
		background: $color-neutral-background-weak;
		border-radius: 100%;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-xxs;
		transition: background-color ease-in-out $default-transition-time,
			box-shadow ease-in-out $default-transition-time;
		width: $survey-toggle-size;

		.-hovered & {
			background-color: $color-neutral-background-medium;
			box-shadow: $shadow-s;
		}

		&::v-deep .ripple {
			background-color: $color-neutral-ripple !important;
		}
	}

	&.-defaultPrimary &__toggle {
		background-color: $color-primary-background-weak;
		&::v-deep .ripple {
			background-color: $color-primary-ripple !important;
		}
	}

	&.-selectedPrimary &__toggle {
		background-color: $color-primary-background-strong;
		&::v-deep .ripple {
			background-color: $color-default-ripple-inverted !important;
		}
	}

	&.-selectedPrimary.-disabled &__toggle {
		background-color: $color-primary-background-strong-disabled;
	}

	&.-selectedPrimary.-hovered &__toggle {
		background-color: $color-primary-background-strong-hovered;
	}

	&.-defaultPrimary.-hovered &__toggle {
		background-color: $color-primary-background-weak-hovered;
	}

	&.-selectedNeutral &__toggle {
		background-color: $color-neutral-background-strong;
		&::v-deep .ripple {
			background-color: $color-default-ripple-inverted !important;
		}
	}

	&.-selectedNeutral.-disabled &__toggle {
		background-color: $color-neutral-background-strong-disabled;
	}

	&.-selectedNeutral.-hovered &__toggle {
		background-color: $color-neutral-background-strong-hovered;
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

		#{$self}__ring {
			border-color: $color-neutral-border-disabled;
		}
	}

	&.-defaultPrimary &__ring {
		border-color: $color-primary-border;
	}

	&.-selectedNeutral &__ring,
	&.-selectedPrimary &__ring {
		border-color: $color-default-border-inverted;
	}

	&.-defaultPrimary.-disabled &__ring {
		border-color: $color-primary-border-disabled;
	}

	&__content {
		@include headlineXS();
		@include textBold();

		color: $color-neutral-text-weak;
		transition: color ease-in-out $default-transition-time;
	}

	&.-disabled &__content {
		color: $color-neutral-text-disabled;
	}

	&.-defaultPrimary &__content {
		color: $color-primary-text;

		.-hovered & {
			border-color: $color-primary-border-hovered;
		}
	}

	&.-defaultPrimary.-disabled &__content {
		color: $color-primary-text-disabled;
	}

	&__icon {
		color: $color-default-icon-inverted;
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
		onClick() {
			this.$emit('click');
		},
	},
};
</script>
