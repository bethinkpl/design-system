<template>
	<div
		class="surveyQuestionOpenEnded"
		:class="{ '-disabled': state === SURVEY_QUESTION_STATES.DISABLED }"
	>
		<ds-modal v-if="showModal" @close-modal="showModal = false">
			<slot name="explanation" />
			<div slot="footer">
				<ds-button
					:size="BUTTON_SIZES.LARGE"
					:type="BUTTON_TYPES.OUTLINED"
					@click.native="showModal = false"
				>
					OK, rozumiem
				</ds-button>
			</div>
		</ds-modal>
		<ds-card>
			<template slot="content">
				<div class="surveyQuestionOpenEnded__title">
					<label class="surveyQuestionOpenEnded__label">
						{{ label }}
					</label>
					<div v-if="$slots.explanation" class="surveyQuestionScale__explanation">
						<icon-button
							:color="BUTTON_COLORS.MINOR_SUPPORTING"
							:icon="ICONS.FA_QUESTION_CIRCLE"
							:size="ICON_SIZES.MEDIUM"
							@click.native="showModal = true"
						/>
					</div>
				</div>
				<div class="surveyQuestionOpenEnded__content">
					<survey-question-textarea
						class="surveyQuestionOpenEnded__input"
						:disabled="state === SURVEY_QUESTION_STATES.DISABLED"
						:value="value"
						:placeholder="placeholder"
						@input="$emit('input', $event)"
					/>
				</div>
			</template>
		</ds-card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionOpenEnded {
	&__title {
		display: flex;
		align-items: center;
		margin-bottom: $space-s;
		justify-content: space-between;
	}

	&__content {
		display: flex;
		flex-direction: column;
	}

	&__input {
		margin: $space-xxs 0;
	}
}
</style>

<script lang="ts">
import DsCard from '../Card';
import DsModal from '../Modal';
import DsButton, { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Button';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';
import { SURVEY_QUESTION_STATES } from './SurveyQuestion.consts';
import SurveyQuestionTextarea from './SurveyQuestionTextarea.vue';

export default {
	name: 'SurveyQuestionOpenEnded',
	components: {
		SurveyQuestionTextarea,
		DsButton,
		DsCard,
		IconButton,
		DsModal,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Wpisz swoją odpowiedź',
		},
		state: {
			type: String,
			default: SURVEY_QUESTION_STATES.DEFAULT,
			validate(state) {
				return Object.values(SURVEY_QUESTION_STATES).includes(state);
			},
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
	created() {
		this.BUTTON_COLORS = BUTTON_COLORS;
		this.BUTTON_SIZES = BUTTON_SIZES;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.SURVEY_QUESTION_STATES = SURVEY_QUESTION_STATES;
	},
};
</script>
