<template>
	<div class="surveyQuestionOpenEnded">
		<card>
			<div slot="content">
				<div class="surveyQuestionOpenEnded__content">
					<label class="surveyQuestionOpenEnded__label" for="surveyQuestion">
						{{ label }}
					</label>
					<textarea
						ref="textarea"
						class="surveyQuestionOpenEnded__input"
						:disabled="disabled"
						name="surveyQuestion"
						:value="value"
						:placeholder="placeholder"
						@input="updateValue($event.target.value)"
					></textarea>
				</div>
			</div>
		</card>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/colors';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.surveyQuestionOpenEnded {
	max-width: 600px;

	&__content {
		display: flex;
		flex-direction: column;
		padding: $space-xxs;
	}

	&__label {
		margin-bottom: $space-m;
	}

	&__input {
		border: 1px solid $color-mischka-gray;
		box-sizing: border-box;
		box-shadow: inset 0 1px 3px $color-minor-supporting;
		border-radius: 4px;
		margin: $space-xxs 0;
		resize: none;
	}
}
</style>

<script lang="ts">
import Card from '../Card';

export default {
	name: 'SurveyQuestionOpenEnded',
	components: {
		Card,
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
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return { content: '' };
	},
	methods: {
		updateValue(value) {
			this.$emit('input', value);
			this.$refs.textarea.style.height = 'auto';
			this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
		},
	},
};
</script>
