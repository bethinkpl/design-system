<template>
	<div class="surveyQuestionScale">
		<modal v-if="showModal" @close-modal="showModal = false">
			<slot name="explanation" />
			<div slot="footer">
				<ds-button :size="BUTTON_SIZES.LARGE" :type="BUTTON_TYPES.OUTLINED" @click.native="showModal = false">
					OK, rozumiem
				</ds-button>
			</div>
		</modal>
		<card>
			<div slot="content">
				<div class="surveyQuestionScale__title">
					<span>{{ title }}</span>
					<div v-if="$slots.explanation" class="surveyQuestionScale__explanation">
						<icon-button
							:color="BUTTON_COLORS.MINOR_SUPPORTING"
							:icon="ICONS.FA_QUESTION_CIRCLE"
							:size="ICON_SIZES.MEDIUM"
							@click.native="showModal = true"
						/>
					</div>
				</div>
				<div class="surveyQuestionScale__content">
					<template v-for="option in options">
						<survey-toggle
							:key="option.id"
							class="surveyQuestionScale__toggle"
							:class="{
								'-standAlone': option.standAlone,
							}"
							:color="option.color"
							:content="option.content"
							:label="option.label"
							:status="
								selected === option.id
									? SURVEY_TOGGLE_STATUSES.SELECTED
									: SURVEY_TOGGLE_STATUSES.DEFAULT
							"
							:is-active="option.selected"
							:state="
								disabled
									? SURVEY_TOGGLE_STATES.DISABLED
									: SURVEY_TOGGLE_STATES.DEFAULT
							"
							@click="onToggleClick(option.id)"
						/>
					</template>
				</div>

				<template v-if="selected !== null">
					<hr class="surveyQuestionScale__separator" />
					<div class="surveyQuestionScale__elaboration">
						<label class="surveyQuestionScale__elaborationLabel" for="elaboration">
							{{ elaborationLabel }}
						</label>
						<textarea
							ref="textarea"
							v-model="elaboration"
							class="surveyQuestionScale__elaborationInput"
							:disabled="disabled"
							:placeholder="placeholder"
							name="elaboration"
						></textarea>
					</div>
				</template>
			</div>
		</card>
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
		align-items: baseline;
		margin-bottom: $space-m;
		justify-content: space-between;
	}

	&__explanation {
		color: $color-minor-supporting;
	}

	&__content {
		background: $color-background-secondary;
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-xxs;
		border-radius: $radius-s;

		@media #{breakpoint-s()} {
			padding: $space-s;
		}
	}

	&__toggle {
		margin-right: $space-xxs;

		@media #{breakpoint-s()} {
			margin-right: $space-m;
		}

		&.-standAlone {
			flex-grow: 2;
			align-items: flex-end;
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
		border: 1px solid $color-mischka-gray;
		box-sizing: border-box;
		box-shadow: inset 0 1px 3px $color-minor-supporting;
		border-radius: $radius-s;
		margin: $space-xxs 0;
		min-height: 2em;
		padding: $space-xxs;
		resize: none;
	}
}
</style>

<script lang="ts">
import Card from '../Card';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';
import DsButton, { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Button';
import Modal from '../Modal';
import SurveyToggle, {
	SURVEY_TOGGLE_COLORS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from '../SurveyToggle';

export default {
	name: 'SurveyQuestionScale',
	components: {
		Card,
		IconButton,
		SurveyToggle,
		Modal,
		DsButton,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
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
			elaboration: '',
			showModal: false,
		};
	},
	watch: {
		elaboration() {
			this.$refs.textarea.style.height = 'auto';
			this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
			this.$emit('elaboration-change', this.elaboration);
		},
	},
	created() {
		this.BUTTON_COLORS = BUTTON_COLORS;
		this.BUTTON_SIZES = BUTTON_SIZES;
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.SURVEY_TOGGLE_COLORS = SURVEY_TOGGLE_COLORS;
		this.SURVEY_TOGGLE_STATES = SURVEY_TOGGLE_STATES;
		this.SURVEY_TOGGLE_STATUSES = SURVEY_TOGGLE_STATUSES;
	},
	methods: {
		onToggleClick(id: number) {
			this.$emit('selectChange', this.selected === id ? null : id);
		},
	},
};
</script>
