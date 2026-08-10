import { Meta, StoryObj } from '@storybook/vue3';
import { computed } from 'vue';
import { withActions } from '@storybook/addon-actions/decorator';
import SelectField from './SelectField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import Modal from '../../Modals/Modal';
import { ICONS } from '../../Icons/Icon';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { SelectFieldOption, SelectFieldOptionGroup } from './SelectField.types';

const OPTIONS: Array<SelectFieldOption> = [
	{ value: 'pl', label: 'Polska' },
	{ value: 'de', label: 'Niemcy' },
	{ value: 'cz', label: 'Czechy' },
	{ value: 'sk', label: 'Słowacja', isDisabled: true },
	{ value: 'jp', label: 'Japonia' },
];

const GROUPED_OPTIONS: Array<SelectFieldOption | SelectFieldOptionGroup> = [
	{ value: 'all', label: 'Wszystkie kraje' },
	{
		label: 'Europa',
		options: [
			{ value: 'pl', label: 'Polska' },
			{ value: 'de', label: 'Niemcy' },
			{ value: 'cz', label: 'Czechy' },
		],
	},
	{
		label: 'Azja',
		options: [
			{ value: 'jp', label: 'Japonia' },
			{ value: 'kr', label: 'Korea Południowa' },
		],
	},
];

const RICH_OPTIONS: Array<SelectFieldOption> = [
	{ value: 'draft', label: 'Szkic', eyebrowText: 'Status', iconLeft: ICONS.FA_PENCIL },
	{
		value: 'published',
		label: 'Opublikowany',
		eyebrowText: 'Status',
		iconLeft: ICONS.FA_CHECK_SOLID,
	},
	{ value: 'archived', label: 'Zarchiwizowany', eyebrowText: 'Status', iconLeft: ICONS.FA_BOX },
];

const LONG_OPTIONS: Array<SelectFieldOption> = Array.from({ length: 30 }, (_, index) => ({
	value: `option-${index + 1}`,
	label: `Opcja numer ${index + 1}`,
}));

const LONG_LABEL_OPTIONS: Array<SelectFieldOption> = [
	{ value: 'anatomia', label: 'Anatomia prawidłowa człowieka z elementami histologii' },
	{ value: 'biochemia', label: 'Biochemia kliniczna i diagnostyka laboratoryjna' },
	{ value: 'farmakologia', label: 'Farmakologia z toksykologią dla kierunku lekarskiego' },
	{ value: 'short', label: 'Krótka nazwa' },
	{
		value: 'bardzo-dlugi',
		label: 'Wyjątkowo długa nazwa kursu, która nie zmieści się w dostępnej szerokości okna i zostanie skrócona wielokropkiem',
	},
];

/**
 * The `maxHeight` control is a text input, so a unitless `320` would reach the component as the
 * string `'320'` and produce invalid CSS. Turn such a value into a number, which the component
 * reads as pixels; anything carrying a unit is passed through.
 */
function normalizeMaxHeight(maxHeight: string | number | undefined): string | number | undefined {
	if (
		typeof maxHeight === 'string' &&
		maxHeight.trim() !== '' &&
		!Number.isNaN(Number(maxHeight))
	) {
		return Number(maxHeight);
	}

	return maxHeight;
}

const meta: Meta<typeof SelectField> = {
	title: 'Components/Form/SelectField',
	component: SelectField,
	decorators: [withActions],
	render: (args) => ({
		components: { SelectField, HelpButton, Modal },
		setup() {
			const props = computed(() => {
				const { help, labelAside, message, fieldStatus, ...rest } = args;

				return { ...rest, maxHeight: normalizeMaxHeight(rest.maxHeight) };
			});

			return {
				args,
				props,
				FORM_FIELD_STATES,
				ICONS,
			};
		},
		data: () => ({
			value: undefined,
		}),
		template: `<SelectField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
			<template v-if="args.help" #help>
				<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template #labelAside v-if="args.labelAside">
				<div v-html="args.labelAside" />
			</template>
			<template #fieldStatus v-if="args.fieldStatus">
				<div v-html="args.fieldStatus" />
			</template>
			<template #message v-if="args.message">
				<div v-html="args.message" />
			</template>
		</SelectField>`,
	}),
	argTypes: {
		...argTypes,
		options: {
			control: 'object',
		},
		placeholder: {
			control: 'text',
		},
		leftIcon: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
		ariaLabel: {
			control: 'text',
		},
		maxHeight: {
			control: 'text',
		},
		isGroupLabelUppercase: {
			control: 'boolean',
		},
	},
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Interactive: Story = {
	args: {
		...args,
		options: OPTIONS,
		placeholder: 'Wybierz kraj',
		leftIcon: null,
		isGroupLabelUppercase: true,
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13216-6915',
		},
	},
};

export const WithGroups: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		options: GROUPED_OPTIONS,
	},
	parameters: {},
};

export const WithIconsAndEyebrow: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		options: RICH_OPTIONS,
		placeholder: 'Wybierz status',
	},
	parameters: {},
};

/**
 * The field is constrained to 360px while the option labels are much longer. Two behaviours to
 * check here:
 *
 * - the trigger keeps the field's width and ellipsizes the selected label;
 * - the dropdown uses the trigger width only as a *minimum*, widening to fit the longest
 *   option, and stops at the space available in the viewport — where the last option, which is
 *   longer still, ellipsizes inside the list.
 *
 * Try it near the right edge of the canvas, and switch to a mobile viewport, to see the
 * `max-width` clamp take over.
 */
export const ConstrainedWidthWithLongLabels: Story = {
	render: (args) => ({
		components: { SelectField },
		setup() {
			return { args };
		},
		data: () => ({
			// Preselected so the trigger's ellipsis is visible without opening the dropdown.
			value: 'farmakologia',
		}),
		template: `
			<div style="width: 360px;">
				<SelectField v-bind="args" v-model="value" />
			</div>
		`,
	}),
	args: {
		label: 'Kurs',
		placeholder: 'Wybierz kurs',
		options: LONG_LABEL_OPTIONS,
	},
};

/** The dropdown caps at `maxHeight` (320px by default) and scrolls beyond it. */
export const LongList: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		options: LONG_OPTIONS,
		placeholder: 'Wybierz opcję',
	},
	parameters: {},
};

/**
 * The field sits at the bottom of the viewport, so there is no room for the dropdown below the
 * trigger — the popper flips and the list opens upwards. Uses the long list to make sure the
 * dropdown is tall enough to force the flip on any viewport height.
 */
export const OpeningUpwards: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => ({
		components: { SelectField },
		setup() {
			return { args };
		},
		data: () => ({
			value: undefined,
		}),
		template: `
			<div
				style="display: flex; align-items: flex-end; box-sizing: border-box; min-height: 100vh; padding: 16px;"
			>
				<div style="width: 360px;">
					<SelectField v-bind="args" v-model="value" />
				</div>
			</div>
		`,
	}),
	args: {
		label: 'Opcja',
		placeholder: 'Wybierz opcję',
		options: LONG_OPTIONS,
	},
};

export const Disabled: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.DISABLED,
	},
	parameters: {},
};

export const Error: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.ERROR,
		messageText: 'Error message text',
	},
	parameters: {},
};
