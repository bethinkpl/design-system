import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

import ModalDialog from './ModalDialog.vue';
import { ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR } from '../../Icons/FeatureIcon';
import { BUTTON_STATES } from '../../Buttons/Button';

export default {
	title: 'Components/Modals/ModalDialog',
	component: ModalDialog,
} as Meta<typeof ModalDialog>;

const StoryTemplate: StoryFn<typeof ModalDialog> = (args) => ({
	components: { ModalDialog },
	setup() {
		return { ...args };
	},
	template:
		'<modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" ' +
		':headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" ' +
		':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" :footerPrimaryButtonState="footerPrimaryButtonState" ' +
		':headerImage="headerImage" ' +
		':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" :footerSecondaryButtonState="footerSecondaryButtonState">' +
		'<div v-html="defaultSlot" />' +
		'</modal-dialog>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			BUTTON_STATES: Object.freeze(BUTTON_STATES),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	defaultSlot:
		'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',
	danger: false,
	headerImage: '',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerPrimaryButtonState: BUTTON_STATES.DEFAULT,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerSecondaryButtonState: BUTTON_STATES.DEFAULT,
} as Args;

const argTypes = {
	danger: { control: { type: 'boolean' }, defaultValue: false },
	headerImage: {
		control: { type: 'text' },
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: 'Hello' },
		},
	},
	headerTitle: { control: { type: 'text' } },
	headerSubtitle: { control: { type: 'text' } },
	headerFeatureIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_CIRCLE_QUESTION',
	},
	headerFeatureIconColor: {
		control: { type: 'select', options: Object.values(FEATURE_ICON_COLOR) },
		defaultValue: FEATURE_ICON_COLOR.NEUTRAL,
	},
	footerPrimaryButtonText: { control: { type: 'text' } },
	footerPrimaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	footerPrimaryButtonState: {
		control: { type: 'select', options: Object.values(BUTTON_STATES) },
		defaultValue: BUTTON_STATES.DEFAULT,
	},
	footerSecondaryButtonText: { control: { type: 'text' } },
	footerSecondaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	footerSecondaryButtonState: {
		control: { type: 'select', options: Object.values(BUTTON_STATES) },
		defaultValue: BUTTON_STATES.DEFAULT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5658%3A96416&t=lgUXCZhvWDuBr3qw-0',
	},
};

const argsDanger = {
	defaultSlot:
		'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',
	danger: true,
	headerImage: '',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerPrimaryButtonState: BUTTON_STATES.DEFAULT,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerSecondaryButtonState: BUTTON_STATES.DEFAULT,
} as Args;

export const Danger = StoryTemplate.bind({});

Danger.argTypes = argTypes;
Danger.args = argsDanger;

const argsWithImage = {
	defaultSlot: '',
	danger: false,
	headerImage:
		'https://wiecejnizlek.pl/wp-content/themes/uncode-child/assets/patterns/pattern-black.png',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerPrimaryButtonState: BUTTON_STATES.DEFAULT,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerSecondaryButtonState: BUTTON_STATES.DEFAULT,
} as Args;

export const WithImage = StoryTemplate.bind({});

WithImage.argTypes = argTypes;
WithImage.args = argsWithImage;
