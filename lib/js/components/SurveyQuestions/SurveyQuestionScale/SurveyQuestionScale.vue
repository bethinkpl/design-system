<template>
	<div class="ds-surveyQuestionScale">
		<ds-modal v-if="showModal" @close-modal="showModal = false">
			<slot name="explanation" />
			<template #footer>
				<div>
					<ds-button :type="BUTTON_TYPES.OUTLINED" @click="showModal = false">
						OK, rozumiem
					</ds-button>
				</div>
			</template>
		</ds-modal>
		<ds-card>
			<template #content>
				<div class="ds-surveyQuestionScale__header">
					<span class="ds-surveyQuestionScale__title">{{ title }}</span>
					<icon-button
						v-if="$slots.explanation"
						class="ds-surveyQuestionScale__explanation"
						:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
						:icon="ICONS.FA_CIRCLE_QUESTION"
						:size="ICON_SIZES.MEDIUM"
						:touchable="false"
						@click="showModal = true"
					/>
				</div>
				<div
					class="ds-surveyQuestionScale__content"
					:class="{ '-oneContainer': containers === SURVEY_QUESTION_CONTAINERS.ONE }"
				>
					<div
						class="ds-surveyQuestionScale__container"
						:class="{
							'-ds-oneContainer': containers === SURVEY_QUESTION_CONTAINERS.ONE,
						}"
					>
						<div
							v-for="(option, index) in scaleOptions"
							:key="`ds-surveyQuestionScale-${index}`"
							class="ds-surveyQuestionScale__toggle"
							:class="{
								'-ds-hideOnDesktop':
									option.standalone &&
									containers === SURVEY_QUESTION_CONTAINERS.TWO,
							}"
						>
							<survey-toggle
								:meaning="option.meaning"
								:content-text="option.content"
								:label="option.label"
								:status="
									selectedValue === option.value
										? SURVEY_TOGGLE_STATUSES.SELECTED
										: SURVEY_TOGGLE_STATUSES.DEFAULT
								"
								:state="
									state === SURVEY_QUESTION_STATES.DISABLED
										? SURVEY_TOGGLE_STATES.DISABLED
										: SURVEY_TOGGLE_STATES.DEFAULT
								"
								@click="onToggleClick(option.value)"
							/>
						</div>
					</div>

					<div
						v-if="
							standaloneOptions.length > 0 &&
							containers === SURVEY_QUESTION_CONTAINERS.TWO
						"
						class="ds-surveyQuestionScale__container -ds-justifyEnd -ds-hideOnMobile"
					>
						<div
							v-for="(option, index) in standaloneOptions"
							:key="`ds-surveyQuestionScale-standalone-${index}`"
							class="ds-surveyQuestionScale__toggle"
						>
							<survey-toggle
								:meaning="option.meaning"
								:content-text="option.content"
								:label="option.label"
								:status="
									selectedValue === option.value
										? SURVEY_TOGGLE_STATUSES.SELECTED
										: SURVEY_TOGGLE_STATUSES.DEFAULT
								"
								:state="
									state === SURVEY_QUESTION_STATES.DISABLED
										? SURVEY_TOGGLE_STATES.DISABLED
										: SURVEY_TOGGLE_STATES.DEFAULT
								"
								@click="onToggleClick(option.value)"
							/>
						</div>
					</div>
				</div>

				<template v-if="selectedValue !== null && elaborationLabel !== null">
					<hr class="ds-surveyQuestionScale__separator" />
					<div class="ds-surveyQuestionScale__elaboration">
						<label class="ds-surveyQuestionScale__elaborationLabel" :for="inputId">
							{{ elaborationLabel }}
						</label>
						<survey-question-textarea
							:id="inputId"
							:value="elaborationValue"
							class="ds-surveyQuestionScale__elaborationInput"
							:placeholder="placeholder"
							:disabled="state === SURVEY_QUESTION_STATES.DISABLED"
							@input="$emit('elaboration-change', $event)"
						/>
					</div>
				</template>
			</template>
		</ds-card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/buttons';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-surveyQuestionScale {
	&__header {
		@include heading-m-default-regular;

		display: flex;
		justify-content: space-between;
		margin-bottom: $space-m;
		// title without explanation iconButton has to be the same size as with iconButton
		min-height: $icon-button-medium-size;
	}

	&__title {
		align-self: center;
	}

	&__explanation {
		align-self: flex-start;
		margin-left: $space-4xs;
	}

	&__content {
		background: $color-neutral-background;
		border-radius: $radius-s;
		display: flex;
		overflow-x: auto;
		padding: $space-s $space-2xs;

		@media #{breakpoint-s()} {
			gap: $space-l;
			padding: $space-s $space-l;

			&:not(.-ds-oneContainer) {
				justify-content: center;
				overflow-x: initial;
			}
		}

		&.-ds-oneContainer {
			overflow-x: auto;
		}
	}

	&__toggle {
		display: flex;
		justify-content: center;

		&.-ds-hideOnDesktop {
			display: flex;

			@media #{breakpoint-s()} {
				display: none;
			}
		}
	}

	&__separator {
		border-bottom: none;
		border-top: 1px solid $color-neutral-border-weak;
		margin: $space-m 0 $space-s 0;
	}

	&__elaboration {
		display: flex;
		flex-direction: column;
	}

	&__elaborationLabel {
		@include formLabel-m-default-regular;
	}

	&__elaborationInput {
		margin-top: $space-2xs;
	}

	&__container {
		display: flex;
		flex: 1;
		flex-direction: row;
		gap: $space-l;

		&.-ds-justifyEnd {
			justify-content: flex-end;
		}

		&.-ds-oneContainer {
			justify-content: space-between;
		}

		&.-ds-hideOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: flex;
			}
		}
	}
}
</style>

<script lang="ts">
import DsCard from '../../Cards/Card';
import IconButton, { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import DsButton, { BUTTON_TYPES } from '../../Buttons/Button';
import DsModal from '../../Modal';
import SurveyToggle, {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from '../../SurveyToggle';
import {
	SURVEY_QUESTION_SCALE_CONTAINERS,
	SURVEY_QUESTION_STATES,
	SurveyQuestionScaleContainer,
	SurveyQuestionState,
} from '../SurveyQuestion.consts';
import SurveyQuestionTextarea from '../';
import { SurveyQuestionScaleOption } from '../SurveyQuestion.domain';
import { randomString } from '../../../utils/string';

import { defineComponent } from 'vue';
export default defineComponent({
	name: 'SurveyQuestionScale',
	components: {
		SurveyQuestionTextarea,
		DsCard,
		IconButton,
		SurveyToggle,
		DsModal,
		DsButton,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			default: SURVEY_QUESTION_STATES.DEFAULT,
			validator(state: SurveyQuestionState) {
				return Object.values(SURVEY_QUESTION_STATES).includes(state);
			},
		},
		scaleOptions: {
			type: Array as () => Array<SurveyQuestionScaleOption>,
			required: true,
			validator(scaleOptions: Array<SurveyQuestionScaleOption>) {
				return scaleOptions.every((option) => typeof option === 'object');
			},
		},
		elaborationLabel: {
			type: String,
			default: null,
		},
		elaborationValue: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Wpisz swoją odpowiedź',
		},
		selectedValue: {
			type: String,
			default: null,
		},
		containers: {
			type: String,
			default: SURVEY_QUESTION_SCALE_CONTAINERS.TWO,
			validator(containers: SurveyQuestionScaleContainer) {
				return Object.values(SURVEY_QUESTION_SCALE_CONTAINERS).includes(containers);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['elaboration-change', 'select-change'],
	data() {
		return {
			showModal: false,
			inputId: 'survey-question-' + randomString(8),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			SURVEY_TOGGLE_COLORS: Object.freeze(SURVEY_TOGGLE_MEANINGS),
			SURVEY_TOGGLE_STATES: Object.freeze(SURVEY_TOGGLE_STATES),
			SURVEY_TOGGLE_STATUSES: Object.freeze(SURVEY_TOGGLE_STATUSES),
			SURVEY_QUESTION_STATES: Object.freeze(SURVEY_QUESTION_STATES),
			SURVEY_QUESTION_CONTAINERS: Object.freeze(SURVEY_QUESTION_SCALE_CONTAINERS),
		};
	},
	computed: {
		standaloneOptions() {
			return this.scaleOptions.filter(
				(option: SurveyQuestionScaleOption) => option.standalone,
			);
		},
	},
	methods: {
		onToggleClick(value: string) {
			this.$emit('select-change', this.selectedValue === value ? null : value);
		},
	},
});
</script>
