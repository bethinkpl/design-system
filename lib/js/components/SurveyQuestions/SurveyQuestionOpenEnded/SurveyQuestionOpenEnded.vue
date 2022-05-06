<template>
	<div
		class="surveyQuestionOpenEnded"
		:class="{ '-disabled': state === SURVEY_QUESTION_STATES.DISABLED }"
	>
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
				<div class="surveyQuestionOpenEnded__header">
					<label class="surveyQuestionOpenEnded__title" :for="inputId">
						{{ title }}
					</label>
					<icon-button
						v-if="$slots.explanation"
						class="surveyQuestionOpenEnded__explanation"
						:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
						:icon="ICONS.FA_CIRCLE_QUESTION"
						:size="ICON_SIZES.MEDIUM"
						:touchable="false"
						@click.native="showModal = true"
					/>
				</div>
				<div class="surveyQuestionOpenEnded__content">
					<survey-question-textarea
						:id="inputId"
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
@import '../../../../styles/settings/buttons';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography';
@import '../../../../styles/settings/colors/tokens';

.surveyQuestionOpenEnded {
	&__header {
		@include headlineS();

		display: flex;
		// header without explanation iconButton has to be the same size as with iconButton
		min-height: $icon-button-medium-size;
		margin-bottom: $space-s;
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
		display: flex;
		flex-direction: column;
	}

	&__input {
		margin-top: $space-xxs;
	}
}
</style>

<script lang="ts">
import DsCard from '../../Cards/Card';
import DsModal from '../../Modal';
import DsButton, { BUTTON_TYPES } from '../../Buttons/Button';
import IconButton, { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';
import { ICON_SIZES, ICONS } from '../../Icon';
import { SURVEY_QUESTION_STATES } from '../SurveyQuestion.consts';
import SurveyQuestionTextarea from '../SurveyQuestionTextarea.vue';
import { randomString } from '../../../utils/string';

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
		title: {
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
			inputId: 'survey-question-' + randomString(8),
		};
	},
	created() {
		this.ICON_BUTTON_COLORS = ICON_BUTTON_COLORS;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.SURVEY_QUESTION_STATES = SURVEY_QUESTION_STATES;
	},
};
</script>
