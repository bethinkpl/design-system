<template>
	<div class="surveyQuestionOpenEnded" :class="{ '-disabled': disabled }">
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
			<div slot="content">
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
					<textarea
						ref="textarea"
						class="surveyQuestionOpenEnded__input"
						:disabled="disabled"
						:value="value"
						:placeholder="placeholder"
						@input="updateValue($event.target.value)"
					></textarea>
				</div>
			</div>
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
		border: 1px solid $color-mischka-gray;
		box-sizing: border-box;
		box-shadow: inset 0 1px 3px $color-minor-supporting;
		border-radius: $radius-s;
		margin: $space-xxs 0;
		padding: $space-xxs;
		min-height: 2em;
		resize: none;

		&.-disabled & {
			color: $color-minor-supporting;
		}
	}
}
</style>

<script lang="ts">
import DsCard from '../Card';
import DsModal from '../Modal';
import DsButton, { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Button';
import IconButton from '../IconButton';
import { ICON_SIZES, ICONS } from '../Icon';

export default {
	name: 'SurveyQuestionOpenEnded',
	components: {
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
		disabled: {
			type: Boolean,
			default: false,
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
