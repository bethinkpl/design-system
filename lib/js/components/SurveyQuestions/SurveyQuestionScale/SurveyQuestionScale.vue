<template>
	<div class="surveyQuestionScale">
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
				<div class="surveyQuestionScale__header">
					<span class="surveyQuestionScale__title">{{ title }}</span>
					<icon-button
						v-if="$slots.explanation"
						class="surveyQuestionScale__explanation"
						:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
						:icon="ICONS.FA_CIRCLE_QUESTION"
						:size="ICON_SIZES.MEDIUM"
						:touchable="false"
						@click="showModal = true"
					/>
				</div>
				<div class="surveyQuestionScale__content">
					<div class="surveyQuestionScale__container">
						<template
							v-for="(option, index) in scaleOptions"
							:key="`surveyQuestionScale-${index}`"
						>
							<div
								class="surveyQuestionScale__toggle"
								:class="{ '-visibleOnMobile': option.standalone }"
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
						</template>
					</div>

					<div
						v-if="standaloneOptions.length > 0"
						class="surveyQuestionScale__container -hideOnMobile"
					>
						<template
							v-for="(option, index) in standaloneOptions"
							:key="`surveyQuestionScale-standalone-${index}`"
						>
							<div class="surveyQuestionScale__toggle">
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
						</template>
					</div>
				</div>

				<template v-if="selectedValue !== null && elaborationLabel !== null">
					<hr class="surveyQuestionScale__separator" />
					<div class="surveyQuestionScale__elaboration">
						<label class="surveyQuestionScale__elaborationLabel" :for="inputId">
							{{ elaborationLabel }}
						</label>
						<survey-question-textarea
							:id="inputId"
							:value="elaborationValue"
							class="surveyQuestionScale__elaborationInput"
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

.surveyQuestionScale {
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
		margin-left: $space-xxxxs;
	}

	&__content {
		background: $color-neutral-background;
		border-radius: $radius-s;
		display: flex;
		justify-content: space-between;
		overflow-x: auto;
		padding: $space-s $space-xxs;

		@media #{breakpoint-s()} {
			gap: $space-l;
			padding: $space-s $space-l;
		}
	}

	&__toggle {
		display: flex;
		justify-content: center;
		margin-right: $space-xxs;

		&:last-child {
			margin-right: 0;
		}
	}

	&__toggleSeparator {
		display: none;

		@media #{breakpoint-s()} {
			display: block;
			width: $space-l;
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
		margin-top: $space-xxs;
	}

	&__container {
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: space-between;

		@media #{breakpoint-s()} {
			flex: 0;
			justify-content: initial;
			gap: $space-l;
		}

		&.-hideOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: flex;
			}
		}
	}
}

.-visibleOnMobile {
	display: flex;

	@media #{breakpoint-s()} {
		display: none;
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
import { SURVEY_QUESTION_STATES } from '../SurveyQuestion.consts';
import SurveyQuestionTextarea from '../';
import { SurveyQuestionScaleOption } from '../SurveyQuestion.domain';
import { randomString } from '../../../utils/string';

export default {
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
			validator(state) {
				return Object.values(SURVEY_QUESTION_STATES).includes(state);
			},
		},
		scaleOptions: {
			type: Array as () => Array<SurveyQuestionScaleOption>,
			required: true,
			validator(scaleOptions) {
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
	},
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
};
</script>
