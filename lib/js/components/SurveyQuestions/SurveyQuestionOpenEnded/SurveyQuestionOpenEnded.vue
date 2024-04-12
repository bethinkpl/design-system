<template>
	<div
		class="surveyQuestionOpenEnded"
		:class="{ '-disabled': state === SURVEY_QUESTION_STATES.DISABLED }"
	>
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
						@click="showModal = true"
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
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.surveyQuestionOpenEnded {
	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-s;
		// header without explanation iconButton has to be the same size as with iconButton
		min-height: $icon-button-medium-size;
	}

	&__title {
		@include heading-m-default-regular;

		align-self: center;
	}

	&__explanation {
		align-self: flex-start;
		margin-left: $space-4xs;
	}

	&__content {
		display: flex;
		flex-direction: column;
	}

	&__input {
		margin-top: $space-2xs;
	}
}
</style>

<script lang="ts">
import DsCard from '../../Cards/Card';
import DsModal from '../../Modal';
import DsButton, { BUTTON_TYPES } from '../../Buttons/Button';
import IconButton, { ICON_BUTTON_COLORS } from '../../Buttons/IconButton';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
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
			validator(state) {
				return Object.values(SURVEY_QUESTION_STATES).includes(state);
			},
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['input'],
	data() {
		return {
			showModal: false,
			inputId: 'survey-question-' + randomString(8),
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			SURVEY_QUESTION_STATES: Object.freeze(SURVEY_QUESTION_STATES),
		};
	},
};
</script>
