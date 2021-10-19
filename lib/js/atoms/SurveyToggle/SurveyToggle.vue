<template>
	<div
		class="surveyToggle"
		:class="{
			'-selected': status === SURVEY_TOGGLE_STATES.SELECTED,
			'-string': status === SURVEY_TOGGLE_STATES.STRING,
			'-selectedGrey': status === SURVEY_TOGGLE_STATES.SELECTED_GREY,
			'-disabled': disabled,
		}"
	>
		<div class="surveyToggle__toggle">
			<div class="surveyToggle__ring">
				<span v-if="status === SURVEY_TOGGLE_STATES.STRING" class="surveyToggle__content">
					{{ content }}
				</span>
				<span
					v-if="
						status === SURVEY_TOGGLE_STATES.SELECTED ||
						status === SURVEY_TOGGLE_STATES.SELECTED_GREY
					"
					class="surveyToggle__icon"
				>
					<icon :icon="icon" :size="ICON_SIZES.XX_SMALL"></icon>
				</span>
			</div>
		</div>
		<div class="surveyToggle__label">{{ label }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';

$survey-toggle-size: 48px;

.surveyToggle {
	width: $survey-toggle-size;

	// toggle
	&__toggle {
		cursor: pointer;
		border-radius: 100%;
		padding: $space-xxs;
		height: $survey-toggle-size;
		display: flex;
		background: $color-total-white;

		&:hover {
			border-color: mix($color-total-white, $color-firefly-black, 88%);
		}
	}

	&.-selected &__toggle {
		background-color: $color-primary;
	}

	&.-selected.-disabled &__toggle {
		background-color: $color-primary-disabled;
	}

	&.-selected:not(.-disabled) &__toggle:hover {
		background-color: $color-primary-hovered;
	}

	&.-string:not(.-disabled) &__toggle:hover {
		background-color: $color-primary-background;
	}

	&.-selectedGrey:not(.-disabled) &__toggle {
		background-color: $color-minor-supporting;
	}

	&.-selectedGrey:not(.-disabled) &__toggle:hover {
		background-color: mix($color-minor-supporting, $color-firefly-black, 88%);
	}

	&.-selectedGrey.-disabled &__toggle {
		background-color: mix($color-minor-supporting, $color-total-white, 40%);
	}

	&.-disabled &__toggle {
		cursor: not-allowed;
	}

	// ring
	&__ring {
		// TODO: mixin
		align-items: center;
		display: flex;
		justify-content: center;
		border: 3px solid $color-minor-supporting;
		border-radius: 100%;
		width: 100%;

		&:hover {
			border-color: mix($color-minor-supporting, $color-firefly-black, 88%);
		}
	}

	&.-disabled &__ring {
		border-color: mix($color-minor-supporting, $color-total-white, 40%);
	}

	&.-string &__ring {
		border-color: $color-primary;
	}

	&.-selected &__ring {
		border-color: $color-total-white;
	}

	&.-string.-disabled &__ring {
		border-color: $color-primary-disabled;
	}

	&.-selectedGrey &__ring {
		border-color: $color-total-white;
	}

	// content
	&__content {
		@include headlineXS();
		@include textBold();

		color: $color-minor-supporting;
	}

	&.-string &__content {
		color: $color-primary;

		&:hover {
			$border-color: $color-primary-hovered;
		}
	}

	&.-string.-disabled &__content {
		color: $color-primary-disabled;
	}

	// icon
	&__icon {
		color: $color-total-white;
	}

	// label
	&__label {
		@include textInfoM();

		color: $color-minor;
		text-align: center;
		margin-top: $space-xxs;
	}
}
</style>

<script lang="ts">
import { SURVEY_TOGGLE_STATES } from './SurveyToggle.consts';
import Icon, { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'SurveyToggle',
	components: {
		Icon,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			validate(status) {
				return Object.values(SURVEY_TOGGLE_STATES).includes(status);
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: Object,
			default: null,
			validate(icon) {
				if (icon === null) {
					return true;
				}
				return Object.values(ICONS).includes(icon);
			},
		},
	},
	created() {
		this.SURVEY_TOGGLE_STATES = SURVEY_TOGGLE_STATES;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
