import Modal from './Modal.vue';
import { ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR } from '../../Icons/FeatureIcon';
import { MODAL_SIZES, MODAL_HEADER_TITLE_SIZES } from './Modal.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Modals/Modal',
	component: Modal,
} as Meta<typeof Modal>;

const StoryTemplate: StoryFn<typeof Modal> = (argTypes) => ({
	components: { Modal },
	props: Object.keys(argTypes),
	template:
		'<modal :headerFeatureIcon="ICONS[headerFeatureIcon]" :size="size" :danger="danger" ' +
		':headerTitleSize="headerTitleSize" :headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :contentCentered="contentCentered" :headerFeatureIconColor="headerFeatureIconColor" ' +
		':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" ' +
		':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon" ' +
		':footerTertiaryButtonText="footerTertiaryButtonText" :footerTertiaryButtonIcon="footerTertiaryButtonIcon" ' +
		':footerCheckboxText="footerCheckboxText" :headerImage="headerImage">{{slot}}</modal>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: MODAL_SIZES.MEDIUM,
	danger: false,
	contentCentered: false,
	headerImage: '',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.MEDIUM,
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
	footerTertiaryButtonText: 'Tertiary M',
	footerTertiaryButtonIcon: null,
	footerCheckboxText: '',
	slot: 'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(MODAL_SIZES) },
		defaultValue: MODAL_SIZES.MEDIUM,
	},
	danger: { control: { type: 'boolean' }, defaultValue: false },
	headerTitleSize: {
		control: { type: 'select', options: Object.values(MODAL_HEADER_TITLE_SIZES) },
		defaultValue: MODAL_SIZES.MEDIUM,
	},
	headerTitle: { control: { type: 'text' } },
	headerImage: { control: { type: 'text' } },
	headerSubtitle: { control: { type: 'text' } },
	headerFeatureIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_CIRCLE_QUESTION',
	},
	headerFeatureIconColor: {
		control: { type: 'select', options: Object.values(FEATURE_ICON_COLOR) },
		defaultValue: FEATURE_ICON_COLOR.NEUTRAL,
	},
	contentCentered: { control: { type: 'boolean' }, defaultValue: false },
	footerPrimaryButtonText: { control: { type: 'text' } },
	footerPrimaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	footerSecondaryButtonText: { control: { type: 'text' } },
	footerSecondaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
	footerTertiaryButtonText: { control: { type: 'text' } },
	footerTertiaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_CHART_COLUMN',
	},
	footerCheckboxText: { control: { type: 'text' } },
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
	danger: true,
	headerImage: '',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	slot: 'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
	footerPrimaryButtonText: 'Primary M',
	footerSecondaryButtonText: 'Secondary M',
	footerTertiaryButtonText: '',
	footerCheckboxText: '',
} as Args;

export const Danger = StoryTemplate.bind({});
Danger.argTypes = argTypes;
Danger.args = argsDanger;

const argsWithImage = {
	headerImage:
		'https://wiecejnizlek.pl/wp-content/themes/uncode-child/assets/patterns/pattern-black.png',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	slot: 'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
	footerPrimaryButtonText: 'Primary M',
	footerSecondaryButtonText: 'Secondary M',
	footerTertiaryButtonText: '',
	footerCheckboxText: '',
} as Args;

export const WithImage = StoryTemplate.bind({});
WithImage.argTypes = argTypes;
WithImage.args = argsWithImage;

const argsSmallHeaderAndCentered = {
	contentCentered: true,
	headerImage: '',
	headerTitleSize: MODAL_HEADER_TITLE_SIZES.SMALL,
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	slot: 'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
	footerPrimaryButtonText: 'Primary M',
	footerSecondaryButtonText: 'Secondary M',
	footerTertiaryButtonText: '',
	footerCheckboxText: '',
} as Args;

export const SmallHeaderAndCentered = StoryTemplate.bind({});
SmallHeaderAndCentered.argTypes = argTypes;
SmallHeaderAndCentered.args = argsSmallHeaderAndCentered;