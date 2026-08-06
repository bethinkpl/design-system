<template>
	<form-field v-bind="formFieldProps">
		<template #field="{ fieldId, messageId }">
			<select-root
				v-model="value"
				:disabled="isDisabled"
				:required="formFieldProps.hasRequiredIndicator"
				@update:open="onOpenChange"
			>
				<select-trigger
					:id="fieldId"
					:aria-describedby="hasMessage ? messageId : undefined"
					:aria-label="formFieldProps.label ? undefined : ariaLabel"
					:class="[
						'ds-selectField__trigger',
						{
							'-ds-error': formFieldProps.state === FORM_FIELD_STATES.ERROR,
							'-ds-disabled': isDisabled,
						},
					]"
				>
					<ds-icon
						v-if="leftIcon"
						class="ds-selectField__leftIcon"
						:icon="leftIcon"
						:size="ICON_SIZES.X_SMALL"
					/>
					<select-value class="ds-selectField__value" :placeholder="placeholder" />
					<select-icon as-child>
						<ds-icon
							class="ds-selectField__icon"
							:icon="ICONS.FA_CHEVRON_DOWN"
							:size="ICON_SIZES.X_SMALL"
						/>
					</select-icon>
				</select-trigger>

				<select-portal>
					<select-content
						class="ds-selectField__content"
						position="popper"
						align="start"
						:side-offset="0"
						:style="contentStyle"
					>
						<select-viewport as-child>
							<ds-select-list>
								<template
									v-for="(group, groupIndex) in normalizedOptions"
									:key="groupIndex"
								>
									<select-separator v-if="groupIndex > 0" as-child>
										<ds-select-list-item-divider />
									</select-separator>

									<!-- A labelled group gets real `role="group"` semantics. -->
									<select-group v-if="group.label">
										<select-label as-child>
											<ds-select-list-section-title :label="group.label" />
										</select-label>
										<select-field-option
											v-for="option in group.options"
											:key="option.value"
											:option="option"
											:is-selected="option.value === value"
										/>
									</select-group>

									<!--
										Ungrouped options render as direct children of the listbox:
										an unlabelled SelectGroup would emit `role="group"` with a
										dangling `aria-labelledby`.
									-->
									<template v-else>
										<select-field-option
											v-for="option in group.options"
											:key="option.value"
											:option="option"
											:is-selected="option.value === value"
										/>
									</template>
								</template>
							</ds-select-list>
						</select-viewport>
					</select-content>
				</select-portal>
			</select-root>
		</template>
		<!-- begin: FormField slots -->
		<template v-if="$slots.help" #help>
			<slot name="help" />
		</template>
		<template v-if="$slots.labelAside" #labelAside>
			<slot name="labelAside" />
		</template>
		<template v-if="$slots.message" #message="{ messageId }">
			<slot name="message" :message-id="messageId" />
		</template>
		<template v-if="$slots.fieldStatus" #fieldStatus>
			<slot name="fieldStatus" />
		</template>
		<!-- end: FormField slots -->
	</form-field>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/animations';

.ds-selectField {
	$root: &;

	// The element rules come before `&__trigger` so that the trigger's state overrides, which
	// target the same elements at a higher specificity, stay in ascending order.
	&__leftIcon {
		color: $color-neutral-icon-weak;
	}

	&__value {
		@include formText-s-default-regular;

		color: $color-neutral-text-heavy;
		flex: 1;
		// override the default min-width so long values can ellipsize
		min-width: 0;
		overflow: hidden;
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;

		&[data-placeholder] {
			color: $color-neutral-text-weak;
		}
	}

	&__icon {
		color: $color-neutral-icon;
		transition: $default-cubic-bezier-transition;
	}

	&__trigger {
		align-items: center;
		// FormField__field is `align-items: flex-start`, so the trigger must opt into full width.
		align-self: stretch;
		background: $color-default-background;
		border: $border-xs solid $color-neutral-border-strong;
		border-radius: $radius-s;
		box-shadow: $shadow-inset-m;
		cursor: pointer;
		display: flex;
		font-family: inherit;
		gap: $space-4;
		min-height: 32px;
		// Focus is conveyed by the border color below, so the UA ring is suppressed
		outline: none;
		padding: 0 $space-4;
		text-align: left;

		// The trigger is a button, so `[data-state='open']` replaces InputField's `:focus-within`.
		&[data-state='open'] {
			border-color: $color-primary-border;

			#{$root}__icon {
				transform: rotate(180deg);
			}
		}

		&:focus-visible {
			border-color: $color-primary-border;
		}

		&.-ds-disabled {
			border-color: $color-neutral-border-strong-disabled;
			box-shadow: none;
			cursor: default;

			#{$root}__leftIcon {
				color: $color-neutral-icon-weak-disabled;
			}

			#{$root}__value {
				color: $color-neutral-text-heavy-disabled;

				&[data-placeholder] {
					color: $color-neutral-text-weak-disabled;
				}
			}

			#{$root}__icon {
				color: $color-neutral-icon-disabled;
			}
		}

		// `:focus-visible` is excluded so that focusing an errored trigger shows the primary
		// border, the same way InputField's error rule yields to `:focus-within`.
		&.-ds-error:not([data-state='open']):not(:focus-visible) {
			border-color: $color-danger-border;
		}

		&:hover:not(.-ds-disabled):not([data-state='open']) {
			border-color: $color-neutral-border-strong-hovered;

			#{$root}__icon {
				color: $color-neutral-icon-hovered;
			}
		}
	}
}
</style>

<!--
	`ds-selectField__content` is styled unscoped on purpose. SelectContent renders through
	Presence's slot rather than as its root, so Vue never forwards this component's scope id to
	that element — a scoped rule would not match it. It is also portalled to `<body>`, so
	`:deep()` has no ancestor to hang off either. Same approach as DatePicker.vue.
-->
<style lang="scss">
@import '../../../../styles/settings/z-indexes';
@import '../../../../styles/mixins/dropdown-surface';

.ds-selectField__content {
	@include dropdownSurface;
	@include dropdownSurfaceRadiusBottom;

	// SelectViewport owns the scrolling; this is the flex column that caps the height.
	display: flex;
	flex-direction: column;
	max-height: min(
		var(--select-field-max-height, 320px),
		var(--reka-select-content-available-height)
	);
	// Widens to fit the longest option but never narrower than the trigger, and never wider
	// than the space available in the viewport.
	max-width: var(--reka-select-content-available-width);
	min-width: var(--reka-select-trigger-width);
	// Portalled to <body>, so it needs to clear modal content. It sits on the modal layer
	// rather than above it: the listbox is appended after the (also teleported) modal, so an
	// equal z-index still paints it on top, and tooltips at 16777271 stay above both.
	z-index: $z-index-modal;
}
</style>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import {
	SelectContent,
	SelectGroup,
	SelectIcon,
	SelectLabel,
	SelectPortal,
	SelectRoot,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from 'reka-ui';
import FormField, { FORM_FIELD_STATES, FormFieldProps } from '../FormField';
import { extractFormFieldProps } from '../FormField/FormField.utils';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import DsSelectList from '../../SelectList/SelectList.vue';
import DsSelectListItemDivider from '../../SelectList/SelectListItemDivider/SelectListItemDivider.vue';
import DsSelectListSectionTitle from '../../SelectList/SelectListSectionTitle/SelectListSectionTitle.vue';
import SelectFieldOption from './SelectFieldOption.vue';
import { SelectFieldProps, SelectFieldSlots, SelectFieldValue } from './SelectField.types';
import { assertOptionValues, normalizeOptions, toCssLength } from './SelectField.utils';
import { useSelectFieldWithinForm } from './useSelectFieldWithinForm';

const { options, placeholder, leftIcon, ariaLabel, maxHeight, name, ...rest } =
	defineProps<SelectFieldProps>();

const slots = defineSlots<SelectFieldSlots>();

const emit = defineEmits<{
	'open-change': [isOpen: boolean];
}>();

const modelValue = defineModel<SelectFieldValue>();

const { value, errors, onClose } = useSelectFieldWithinForm(() => name, modelValue);

const { formFieldProps, isDisabled, hasMessage } = useFormFieldState();
const { normalizedOptions } = useOptions();

const contentStyle = computed<CSSProperties | undefined>(() => {
	const resolvedMaxHeight = toCssLength(maxHeight);

	return resolvedMaxHeight
		? ({ '--select-field-max-height': resolvedMaxHeight } as CSSProperties)
		: undefined;
});

function onOpenChange(isOpen: boolean) {
	// Closing the listbox is a select's equivalent of blur.
	if (!isOpen) {
		onClose(new Event('blur'));
	}

	emit('open-change', isOpen);
}

function useFormFieldState() {
	const formFieldProps = computed<FormFieldProps>(() =>
		// this is needed to avoid passing modelValue to FormField as prop
		extractFormFieldProps(rest, errors.value),
	);

	const isDisabled = computed(() => formFieldProps.value.state === FORM_FIELD_STATES.DISABLED);

	// Avoids pointing `aria-describedby` at a message element that is never rendered.
	const hasMessage = computed(() => !!(formFieldProps.value.messageText || slots.message));

	return { formFieldProps, isDisabled, hasMessage };
}

function useOptions() {
	const normalizedOptions = computed(() => normalizeOptions(options));

	// Dev-time guard, called synchronously so invalid options fail at mount instead of
	// surfacing as an unhandled rejection while the offscreen content fragment renders.
	assertOptionValues(normalizedOptions.value);

	return { normalizedOptions };
}
</script>
