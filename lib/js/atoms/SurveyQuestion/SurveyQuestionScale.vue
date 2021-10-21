<template>
	<div class="surveyQuestionScale">
		<card>
			<div slot="content">
				<div class="surveyQuestionScale__title">
					<span>{{ title }}</span>
					<div v-if="explanation" class="surveyQuestionScale__explanation">
						<icon-button
							:color="BUTTON_COLORS.MINOR_SUPPORTING"
							:icon="ICONS.FA_QUESTION_CIRCLE"
							:size="ICON_SIZES.MEDIUM"
							:touchable="false"
							@click.native="$emit('explanation-click')"
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
							:disabled="disabled"
							@click="onToggleClick(option.id)"
						/>
					</template>
				</div>

				<div v-if="selected !== null">
					<hr class="surveyQuestionScale__separator" />
					<div class="surveyQuestionScale__elaboration">
						<label class="surveyQuestionScale__elaborationLabel" for="elaboration">
							{{ label }}
						</label>
						<textarea
							ref="textarea"
							v-model="elaboration"
							class="surveyQuestionScale__elaborationInput"
							:disabled="disabled"
							name="elaboration"
						></textarea>
					</div>
				</div>
			</div>
		</card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionScale {
	max-width: 600px;

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
		align-items: center;
		background: $color-background-secondary;
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-xxs;
		padding: $space-s;
		border-radius: $radius-s;
	}

	&__toggle {
		margin-right: $space-m;

		&.-standAlone {
			flex-grow: 2;
			align-items: flex-end;
		}
	}

	&__separator {
		color: $color-mischka-gray;
		margin: $space-s 0;
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
		resize: none;
	}
}
</style>

<script lang="ts">
import Card from '../Card';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';
import { BUTTON_COLORS } from '../Button';
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
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		explanation: {
			type: Boolean,
			default: false,
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
		label: {
			type: String,
			required: true,
		},
		selected: {
			type: String,
			default: null,
		},
	},
	data() {
		return { elaboration: '' };
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
