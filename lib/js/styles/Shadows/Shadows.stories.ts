import { Meta, StoryFn } from '@storybook/vue3';
import './Shadows.stories.scss';

export default {
	title: 'foundations/Shadows',
} as Meta;

// Names mirror lib/styles/settings/_shadows.scss; the shadows themselves are
// applied from that source via the `.ds-shadow` classes in Shadows.stories.scss.
const shadows = [
	{ name: 'shadow-s', modifier: '-ds-shadowS' },
	{ name: 'shadow-m', modifier: '-ds-shadowM' },
	{ name: 'shadow-l', modifier: '-ds-shadowL' },
	{ name: 'shadow-xl', modifier: '-ds-shadowXl' },
	{ name: 'shadow-top-s', modifier: '-ds-shadowTopS' },
	{ name: 'shadow-top-m', modifier: '-ds-shadowTopM' },
	{ name: 'shadow-top-l', modifier: '-ds-shadowTopL' },
	{ name: 'shadow-top-xl', modifier: '-ds-shadowTopXl' },
	{ name: 'shadow-inset-s', modifier: '-ds-shadowInsetS' },
	{ name: 'shadow-inset-m', modifier: '-ds-shadowInsetM' },
];

const StoryTemplate: StoryFn = () => ({
	setup() {
		return {
			shadows,
		};
	},
	template: `
		<div style="padding: 24px;">
			<div v-for="shadow in shadows" style="margin-bottom: 48px;">
				<code>
					\${{ shadow.name }}
				</code>
				<div :class="['ds-shadow', shadow.modifier]" style="margin-top: 12px;"></div>
			</div>
		</div>
	`,
});

export const Static = StoryTemplate.bind({});
