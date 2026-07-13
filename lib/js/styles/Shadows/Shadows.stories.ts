import { Meta, StoryFn } from '@storybook/vue3';
import './Shadows.stories.scss';

export default {
	title: 'foundations/Shadows',
} as Meta;

// Names mirror lib/styles/settings/_shadows.scss; the shadows themselves are
// applied from that source via the `.sb-shadow` classes in Shadows.stories.scss.
const shadows = [
	'shadow-s',
	'shadow-m',
	'shadow-l',
	'shadow-xl',
	'shadow-inset-s',
	'shadow-inset-m',
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
					\${{ shadow }}
				</code>
				<div :class="['sb-shadow', '-' + shadow]" style="margin-top: 12px;"></div>
			</div>
		</div>
	`,
});

export const Static = StoryTemplate.bind({});
