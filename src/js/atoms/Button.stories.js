// TODO absolute imports
import WnlButton from './Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Button',
	decorators: [withKnobs]
};

// default task state
export const Default = () => ({
	components: { WnlButton },
	props: {
		small: {
			default: boolean('Small', false)
		},
		disabled: {
			default: boolean('Disabled', false)
		},
		text: {
			default: text('Text', 'Hello Storybook')
		}
	},
	template: '<wnl-button :small="small" :disabled="disabled">{{text}}</wnl-button>',
});
