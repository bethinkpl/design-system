<template>
	<div class="surveyQuestionScale">
		<ds-modal v-if="showModal" @close-modal="showModal = false">
			<slot name="explanation" />
			<div slot="footer">
				<ds-button :type="BUTTON_TYPES.OUTLINED" @click.native="showModal = false">
					OK, rozumiem
				</ds-button>
			</div>
		</ds-modal>
		<ds-card>
			<template slot="content">
				<div class="surveyQuestionScale__header">
					<span class="surveyQuestionScale__title">{{ title }}</span>
					<icon-button
						v-if="$slots.explanation"
						class="surveyQuestionScale__explanation"
						:color="BUTTON_COLORS.MINOR_SUPPORTING"
						:icon="ICONS.FA_CIRCLE_QUESTION"
						:size="ICON_SIZES.MEDIUM"
						:touchable="false"
						@click.native="showModal = true"
					/>
				</div>
				<div class="surveyQuestionScale__content">
					<template v-for="(option, index) in scaleOptions">
						<div
							v-if="option.standalone"
							:key="`surveyQuestionScale__toggleSeparator-${index}`"
							class="surveyQuestionScale__toggleSeparator"
						/>
						<div
							:key="`surveyQuestionScale__toggle${index}`"
							class="surveyQuestionScale__toggle"
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

				<template v-if="selectedValue !== null">
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
@import '../../../styles/settings/buttons';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionScale {
	&__header {
		@include headlineS();

		display: flex;
		// title without explanation iconButton has to be the same size as with iconButton
		min-height: $icon-button-medium-size;
		margin-bottom: $space-m;
		justify-content: space-between;
	}

	&__title {
		align-self: center;
	}

	&__explanation {
		align-self: flex-start;
		margin-left: $space-xxxxs;
	}

	&__content {
		background: $color-background-secondary;
		border-radius: $radius-s;
		display: flex;
		justify-content: space-between;
		padding: $space-s $space-xxs;
		overflow-x: auto;

		@media #{breakpoint-s()} {
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
			width: $space-l;
			display: block;
		}
	}

	&__separator {
		border-bottom: none;
		border-top: 1px solid $color-mischka-gray;
		margin: $space-m 0 $space-s 0;
	}

	&__elaboration {
		display: flex;
		flex-direction: column;
	}

	&__elaborationLabel {
		@include headlineXS();
	}

	&__elaborationInput {
		margin-top: $space-xxs;
	}
}
</style>

<script lang="ts">
import { Prop } from 'vue/types/options';

import DsCard from '../../components/Cards/Card.vue';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';
import DsButton, { BUTTON_COLORS, BUTTON_TYPES } from '../Button';
import DsModal from '../Modal';
import SurveyToggle, {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from '../SurveyToggle';
import { SURVEY_QUESTION_STATES } from './SurveyQuestion.consts';
import SurveyQuestionTextarea from './SurveyQuestionTextarea.vue';
import { SurveyQuestionScaleOption } from './SurveyQuestion.domain';
import { randomString } from '../../utils/string';

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
			validate(state) {
				return Object.values(SURVEY_QUESTION_STATES).includes(state);
			},
		},
		scaleOptions: {
			type: Array as Prop<Array<SurveyQuestionScaleOption>>,
			required: true,
			validate(scaleOptions) {
				return scaleOptions.every((option) => typeof option === 'object');
			},
		},
		elaborationLabel: {
			type: String,
			required: true,
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
	data() {
		return {
			showModal: false,
			inputId: 'survey-question-' + randomString(8),
		};
	},
	created() {
		this.BUTTON_COLORS = BUTTON_COLORS;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.SURVEY_TOGGLE_COLORS = SURVEY_TOGGLE_MEANINGS;
		this.SURVEY_TOGGLE_STATES = SURVEY_TOGGLE_STATES;
		this.SURVEY_TOGGLE_STATUSES = SURVEY_TOGGLE_STATUSES;
		this.SURVEY_QUESTION_STATES = SURVEY_QUESTION_STATES;
	},
	methods: {
		onToggleClick(value: string) {
			this.$emit('select-change', this.selectedValue === value ? null : value);
		},
	},
};
</script>
