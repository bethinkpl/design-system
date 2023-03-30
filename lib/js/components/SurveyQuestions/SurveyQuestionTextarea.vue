<template>
	<textarea
		ref="textarea"
		class="surveyQuestionTextarea"
		:disabled="disabled"
		:placeholder="placeholder"
		:value="value"
		@input="onInput"
	/>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

.surveyQuestionTextarea {
	@include formText-s-default-regular;

	border: 1px solid $color-neutral-border-weak;
	border-radius: $radius-s;
	box-shadow: inset 0 1px 3px var(--raw-gray-400);
	box-sizing: border-box;
	min-height: 2em;
	padding: $space-xxs;
	resize: none;

	&:disabled {
		background: $color-default-background;
		color: $color-neutral-text-weak;
	}
}
</style>

<script lang="ts">
export default {
	name: 'SurveyQuestionTextarea',
	props: {
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Wpisz swoją odpowiedź',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		value() {
			// we want to update height of textarea based on content that is inside
			// https://stackoverflow.com/a/24676492
			this.$refs.textarea.style.height = 'auto';
			this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
		},
	},

	methods: {
		onInput(evt) {
			this.$emit('input', evt.target.value);
		},
	},
};
</script>
