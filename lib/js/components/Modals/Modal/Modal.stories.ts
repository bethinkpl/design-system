import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

import Modal from './Modal.vue';
import { ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR } from '../../Icons/FeatureIcon';
import { MODAL_HEADER_TITLE_SIZES, MODAL_SIZES } from './Modal.consts';
import { BUTTON_STATES } from '../../Buttons/Button';

export default {
	title: 'Components/Modals/Modal',
	component: Modal,
} as Meta<typeof Modal>;

const StoryTemplate: StoryFn<typeof Modal> = (args) => ({
	components: { Modal },
	setup() {
		return args;
	},
	template:
		'<modal :headerFeatureIcon="ICONS[headerFeatureIcon]" :size="size" :danger="danger" ' +
		':headerTitleSize="headerTitleSize" :headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :contentCentered="contentCentered" :headerFeatureIconColor="headerFeatureIconColor" ' +
		':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="ICONS[footerPrimaryButtonIcon]" :footerPrimaryButtonState="footerPrimaryButtonState" ' +
		':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="ICONS[footerSecondaryButtonIcon]" :footerSecondaryButtonState="footerSecondaryButtonState" ' +
		':footerTertiaryButtonText="footerTertiaryButtonText" :footerTertiaryButtonIcon="ICONS[footerTertiaryButtonIcon]" :footerTertiaryButtonState="footerTertiaryButtonState" ' +
		':footerCheckboxText="footerCheckboxText" :headerImage="headerImage">' +
		'<div v-html="defaultSlot" />' +
		'<template #rightActions><div style="display: inline-flex;" v-if="rightActionsSlot" v-html="rightActionsSlot" /></template>' +
		'</modal>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	defaultSlot:
		'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',
	rightActionsSlot: 'Right actions',
	size: MODAL_SIZES.MEDIUM,
	danger: false,
	contentCentered: false,
	headerImage: '',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.MEDIUM,
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_QUESTION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerPrimaryButtonState: BUTTON_STATES.DEFAULT,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerSecondaryButtonState: BUTTON_STATES.DEFAULT,
	footerTertiaryButtonText: 'Tertiary M',
	footerTertiaryButtonIcon: null,
	footerTertiaryButtonState: BUTTON_STATES.DEFAULT,
	footerCheckboxText: '',
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(MODAL_SIZES),
	},
	danger: { control: 'boolean' },
	headerTitleSize: {
		control: 'select',
		options: Object.values(MODAL_HEADER_TITLE_SIZES),
	},
	headerTitle: { control: 'text' },
	headerImage: { control: 'text' },
	headerSubtitle: { control: 'text' },
	headerFeatureIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	headerFeatureIconColor: {
		control: 'select',
		options: Object.values(FEATURE_ICON_COLOR),
	},
	contentCentered: { control: 'boolean' },
	footerPrimaryButtonText: { control: 'text' },
	footerPrimaryButtonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	footerPrimaryButtonState: {
		control: 'select',
		options: Object.values(BUTTON_STATES),
	},
	footerSecondaryButtonText: { control: 'text' },
	footerSecondaryButtonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	footerSecondaryButtonState: {
		control: 'select',
		options: Object.values(BUTTON_STATES),
	},
	footerTertiaryButtonText: { control: 'text' },
	footerTertiaryButtonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	footerTertiaryButtonState: {
		control: 'select',
		options: Object.values(BUTTON_STATES),
	},
	footerCheckboxText: { control: 'text' },
	onCloseModal: { action: 'close-modal' },
	onCheckboxChange: { action: 'checkbox-change' },
	onPrimaryButtonClick: { action: 'primary-button-click' },
	onSecondaryButtonClick: { action: 'secondary-button-click' },
	onTertiaryButtonClick: { action: 'tertiary-button-click' },
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
	rightActionsSlot: 'Right actions',
	size: MODAL_SIZES.MEDIUM,
	danger: true,
	contentCentered: false,
	headerImage: '',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.MEDIUM,
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
	footerTertiaryButtonText: '',
	footerTertiaryButtonIcon: null,
	footerTertiaryButtonState: BUTTON_STATES.DEFAULT,
	footerCheckboxText: '',
} as Args;

export const Danger = StoryTemplate.bind({});
Danger.argTypes = argTypes;
Danger.args = argsDanger;

const argsWithImage = {
	defaultSlot:
		'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',
	rightActionsSlot: 'Right actions',
	size: MODAL_SIZES.MEDIUM,
	danger: false,
	contentCentered: false,
	headerImage:
		'https://wiecejnizlek.pl/wp-content/uploads/2022/10/WNL-Strona-cover-dla-filmu-2-1.jpg',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.MEDIUM,
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: null,
	headerFeatureIconColor: null,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerPrimaryButtonState: BUTTON_STATES.DEFAULT,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerSecondaryButtonState: BUTTON_STATES.DEFAULT,
	footerTertiaryButtonText: '',
	footerTertiaryButtonIcon: null,
	footerTertiaryButtonState: BUTTON_STATES.DEFAULT,
	footerCheckboxText: '',
} as Args;

export const WithImage = StoryTemplate.bind({});
WithImage.argTypes = argTypes;
WithImage.args = argsWithImage;

const argsSmallHeaderAndCentered = {
	defaultSlot:
		'<p style="margin-top: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p><p style="margin-top: 0; margin-bottom: 0">Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.</p>',
	rightActionsSlot: 'Right actions',
	size: MODAL_SIZES.SMALL,
	danger: false,
	contentCentered: true,
	headerImage: '',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.SMALL,
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
	footerTertiaryButtonText: '',
	footerTertiaryButtonIcon: null,
	footerTertiaryButtonState: BUTTON_STATES.DEFAULT,
	footerCheckboxText: '',
} as Args;

export const SizeSAndCentered = StoryTemplate.bind({});
SizeSAndCentered.argTypes = argTypes;
SizeSAndCentered.args = argsSmallHeaderAndCentered;
