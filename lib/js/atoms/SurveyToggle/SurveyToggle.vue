<template>
	<div
		class="surveyToggle"
		:class="{
			'-selected': isSelectedState,
			'-string': isStringState,
			'-selectedGrey': isSelectedGreyState,
			'-disabled': disabled,
		}"
	>
		<div class="surveyToggle__toggle" @click="$emit('click')">
			<div class="surveyToggle__ring">
				<span v-if="isStringState" class="surveyToggle__content">
					{{ content }}
				</span>
				<span v-if="isSelectedState || isSelectedGreyState" class="surveyToggle__icon">
					<icon :icon="icon" :size="ICON_SIZES.X_SMALL"></icon>
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
@import '../../../styles/settings/media-queries';

$survey-toggle-size: 48px;

.surveyToggle {
	align-items: center;
	display: flex;
	flex-direction: column;
	width: $survey-toggle-size + 2 * $space-xxxs;

	// toggle
	&__toggle {
		background: $color-total-white;
		border-radius: 100%;
		cursor: pointer;
		display: flex;
		height: $survey-toggle-size;
		padding: $space-xxs;
		width: $survey-toggle-size;

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

	&.-selectedGrey:not(.-disabled) &__toggle {
		background-color: $color-minor-supporting;
	}

	&.-selected:not(.-disabled) &__toggle:hover {
		background-color: $color-primary-hovered;
	}

	&.-string:not(.-disabled) &__toggle:hover {
		background-color: $color-primary-background;
	}

	&.-selectedGrey:not(.-disabled) &__toggle:hover {
		background-color: mix($color-minor-supporting, $color-firefly-black, 88%);
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

	&.-selectedGrey &__ring {
		border-color: $color-total-white;
	}

	&.-string.-disabled &__ring {
		border-color: $color-primary-disabled;
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
		height: 16px;
		width: 16px;
	}

	// label
	&__label {
		@include textInfoS();
		@include textBold();

		color: $color-minor;
		text-align: center;
		margin-top: $space-xxs;
		min-height: 2em;

		@media #{breakpoint-s()} {
			@include textInfoM();

			font-weight: normal;
		}
	}
}
</style>

<script lang="ts">
import { SURVEY_TOGGLE_COLORS } from './SurveyToggle.consts';
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
			default: null,
		},
		color: {
			type: String,
			required: true,
			validate(color) {
				return Object.values(SURVEY_TOGGLE_COLORS).includes(color);
			},
		},
		isActive: {
			type: Boolean,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
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
	computed: {
		isSelectedState() {
			return this.color === SURVEY_TOGGLE_COLORS.PRIMARY && this.isActive;
		},
		isStringState() {
			return this.color === SURVEY_TOGGLE_COLORS.PRIMARY && !this.isActive;
		},
		isSelectedGreyState() {
			return this.color === SURVEY_TOGGLE_COLORS.SECONDARY && this.isActive;
		},
	},
	created() {
		this.SURVEY_TOGGLE_COLORS = SURVEY_TOGGLE_COLORS;
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
