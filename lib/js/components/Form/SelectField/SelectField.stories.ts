import { Meta, StoryObj } from '@storybook/vue3';
import { reactive, toRefs } from 'vue';
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

const meta: Meta<typeof SelectField> = {
	title: 'Components/Form/SelectField',
	component: SelectField,
	decorators: [withActions],
	render: (args) => ({
		components: { SelectField, HelpButton, Modal },
		setup() {
			const { help, labelAside, message, fieldStatus, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs });

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				FORM_FIELD_STATES,
				ICONS,
			};
		},
		data: () => ({
			value: undefined,
		}),
		template: `<SelectField v-bind="props" :left-icon="props.leftIcon ? ICONS[props.leftIcon] : null" v-model="value">
			<template v-if="help" #help>
				<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template #labelAside v-if="labelAside">
				<div v-html="labelAside" />
			</template>
			<template #fieldStatus v-if="fieldStatus">
				<div v-html="fieldStatus" />
			</template>
			<template #message v-if="message">
				<div v-html="message" />
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
};

export const WithIconsAndEyebrow: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		options: RICH_OPTIONS,
		placeholder: 'Wybierz status',
	},
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
};

export const Disabled: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.DISABLED,
	},
};

export const Error: Story = {
	...Interactive,
	args: {
		...Interactive.args,
		state: FORM_FIELD_STATES.ERROR,
		messageText: 'Error message text',
	},
};
