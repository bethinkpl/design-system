import DsModalDialog from './DsModalDialog.vue';
import { ICONS } from '../../Icons/Icon';
import { FEATURE_ICON_COLOR } from '../../Icons/FeatureIcon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Modals/DsModalDialog',
	component: DsModalDialog,
} as Meta<typeof DsModalDialog>;

const StoryTemplate: StoryFn<typeof DsModalDialog> = (argTypes) => ({
	components: { DsModalDialog },
	props: Object.keys(argTypes),
	template:
		'<ds-modal-dialog :headerFeatureIcon="ICONS[headerFeatureIcon]" :danger="danger" ' +
		':headerTitle="headerTitle" :headerSubtitle="headerSubtitle" :headerFeatureIconColor="headerFeatureIconColor" ' +
		':footerPrimaryButtonText="footerPrimaryButtonText" :footerPrimaryButtonIcon="footerPrimaryButtonIcon" ' +
		':headerImage="headerImage" ' +
		':footerSecondaryButtonText="footerSecondaryButtonText" :footerSecondaryButtonIcon="footerSecondaryButtonIcon">' +
		'{{ defaultSlot }}' +
		'</ds-modal-dialog>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	defaultSlot:
		'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
	danger: false,
	headerImage: '',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
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
	footerSecondaryButtonText: { control: { type: 'text' } },
	footerSecondaryButtonIcon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
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
		'Text. Occaecati qui debitis ut minima ab ut ipsa. Eos qui eum. Vel eaque sint. Aut voluptatem est. Eos est aut sit soluta est facere qui soluta aspernatur. Et sint repellat sunt.',
	danger: true,
	headerImage: '',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
} as Args;

export const Danger = StoryTemplate.bind({});

Danger.argTypes = argTypes;
Danger.args = argsDanger;

const argsWithImage = {
	defaultSlot: '',
	danger: false,
	headerImage:
		'https://wiecejnizlek.pl/wp-content/uploads/2022/10/WNL-Strona-cover-dla-filmu-2-1.jpg',
	headerTitle: 'Modal Title Accusantium occaecati atque similique gg provident nobis.',
	headerSubtitle: 'Modal Subtitle Aut vitae neque consequatur. Consequuntur natus sint ad.',
	headerFeatureIcon: 'FA_CIRCLE_EXCLAMATION',
	headerFeatureIconColor: FEATURE_ICON_COLOR.NEUTRAL,
	footerPrimaryButtonText: 'Primary M',
	footerPrimaryButtonIcon: null,
	footerSecondaryButtonText: 'Secondary M',
	footerSecondaryButtonIcon: null,
} as Args;

export const WithImage = StoryTemplate.bind({});

WithImage.argTypes = argTypes;
WithImage.args = argsWithImage;
