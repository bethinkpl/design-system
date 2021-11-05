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
				<div class="surveyQuestionScale__title">
					<span>{{ title }}</span>
					<div v-if="$slots.explanation" class="surveyQuestionScale__explanation">
						<icon-button
							:color="BUTTON_COLORS.MINOR_SUPPORTING"
							:icon="ICONS.FA_QUESTION_CIRCLE"
							:size="ICON_SIZES.MEDIUM"
							:touchable="false"
							@click.native="showModal = true"
						/>
					</div>
				</div>
				<div class="surveyQuestionScale__content">
					<div
						v-for="option in options"
						:key="option.id"
						class="surveyQuestionScale__toggle"
						:class="{
							'-standAlone': option.standAlone,
						}"
					>
						<survey-toggle
							:meaning="option.meaning"
							:content-text="option.content"
							:label="option.label"
							:status="
								selected === option.id
									? SURVEY_TOGGLE_STATUSES.SELECTED
									: SURVEY_TOGGLE_STATUSES.DEFAULT
							"
							:is-active="option.selected"
							:state="
								state === SURVEY_QUESTION_STATES.DISABLED
									? SURVEY_TOGGLE_STATES.DISABLED
									: SURVEY_TOGGLE_STATES.DEFAULT
							"
							@click="onToggleClick(option.id)"
						/>
					</div>
				</div>

				<template v-if="selected !== null">
					<hr class="surveyQuestionScale__separator" />
					<div class="surveyQuestionScale__elaboration">
						<label class="surveyQuestionScale__elaborationLabel" :for="inputId">
							{{ elaborationLabel }}
						</label>
						<survey-question-textarea
							:id="inputId"
							:value="elaboration"
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
@import '../../../styles/settings/colors';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionScale {
	&__title {
		@include headlineS();

		display: flex;
		align-items: center;
		margin-bottom: $space-m;
		justify-content: space-between;
	}

	&__content {
		background: $color-background-secondary;
		border-radius: $radius-s;
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-xxs;
		padding: $space-s $space-xxs;
		overflow-x: auto;

		@media #{breakpoint-s()} {
			padding: $space-s $space-xl;
		}
	}

	&__toggle {
		margin-right: $space-xxs;

		@media #{breakpoint-s()} {
			margin-right: $space-m;

			&.-standAlone {
				display: flex;
				flex-grow: 2;
				justify-content: flex-end;
			}
		}

		&:last-child {
			margin-right: 0;
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
		margin: $space-xxs 0;
	}
}
</style>

<script lang="ts">
import DsCard from '../Card';
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
		options: {
			type: Array,
			required: true,
			validate(options) {
				return options.every((option) => typeof option === 'object');
			},
		},
		elaborationLabel: {
			type: String,
			required: true,
		},
		elaboration: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Wpisz swoją odpowiedź',
		},
		selected: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			showModal: false,
			inputId:
				'survey-question' +
				Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, '')
					.substr(0, 8),
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
		onToggleClick(id: number) {
			this.$emit('select-change', this.selected === id ? null : id);
		},
	},
};
</script>
