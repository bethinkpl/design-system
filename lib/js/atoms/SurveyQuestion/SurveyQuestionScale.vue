<template>
	<div class="surveyQuestionScale">
		<card>
			<div slot="content">
				<div class="surveyQuestionScale__title">
					<span>{{ title }}</span>
					<div class="surveyQuestionScale__explanation">
						<icon-button
							:icon="ICONS.FA_QUESTION_CIRCLE"
							:size="ICON_SIZES.MEDIUM"
							:color="BUTTON_COLORS.MINOR_SUPPORTING"
						/>
					</div>
				</div>
				<div class="surveyQuestionScale__content">
					<template v-for="(item, index) in options">
						<survey-toggle
							:key="item.id"
							class="surveyQuestionScale__toggle"
							:color="item.color"
							:content="`${index + 1}`"
							:label="item.label"
							:isActive="item.id === selected"
							:disabled="disabled"
							@click="onToggleClick(item.id)"
						/>
					</template>
				</div>

				<div>
					<hr class="surveyQuestionScale__separator" />
					<div class="surveyQuestionScale__elaboration">
						<label class="surveyQuestionScale__elaborationLabel">{{ label }}</label>
						<textarea
							ref="textarea"
							v-model="elaboration"
							class="surveyQuestionScale__elaborationInput"
							name=""
						></textarea>
					</div>
				</div>
			</div>
		</card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionScale {
	display: inline-block;

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
		display: flex;
		align-items: center;
		background: $color-background-secondary;
		justify-content: space-between;
		padding: $space-s;
		margin-bottom: $space-xxs;
	}

	&__toggle {
		margin-right: $space-m;
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
		border-radius: 4px;
		margin: $space-xxs 0;
	}
}
</style>

<script lang="ts">
import Card from '../Card';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';
import { BUTTON_COLORS } from '../Button';
import SurveyToggle, { SURVEY_TOGGLE_COLORS } from '../SurveyToggle';

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
		},
		label: {
			type: String,
			required: true,
		},
	},
	data() {
		return { selected: null, elaboration: '' };
	},
	created() {
		this.BUTTON_COLORS = BUTTON_COLORS;
		this.ICONS = ICONS;
		this.ICON_SIZES = ICON_SIZES;
		this.SURVEY_TOGGLE_COLORS = SURVEY_TOGGLE_COLORS;
	},
	watch: {
		elaboration() {
			this.$refs.textarea.style.height = 'auto';
			this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
		},
	},
	methods: {
		onToggleClick(id: number) {
			this.selected = id;
			this.$emit('onChange', id);
		},
	},
};
</script>
