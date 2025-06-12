import { describe, it, expect } from 'vitest';
import FormFieldMessage from './FormFieldMessage.vue';
import { mount } from '@vue/test-utils';
import Icon, { ICONS } from '../../../Icons/Icon';
import { FORM_FIELD_MESSAGE_VARIANTS } from './FormFieldMessage.consts';
import { ComponentProps } from 'vue-component-type-helpers';

const id = 'message-id';

function setup(
	props: ComponentProps<typeof FormFieldMessage> = {
		messageId: id,
	},
) {
	return mount(FormFieldMessage, {
		props,
		slots: {
			default: () => 'Test message',
		},
	});
}

describe('FormFieldMessage', () => {
	it('should render', () => {
		const wrapper = setup();

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toBe('Test message');
		expect(wrapper.attributes('id')).toBe(id);
		expect(wrapper.findComponent(Icon).exists()).toBe(false);
	});

	it.each([
		{
			variant: FORM_FIELD_MESSAGE_VARIANTS.ERROR,
			expectedIcon: ICONS.FA_CIRCLE_EXCLAMATION,
		},
		{
			variant: FORM_FIELD_MESSAGE_VARIANTS.SUCCESS,
			expectedIcon: ICONS.FA_CIRCLE_CHECK,
		},
	])('should render icon for variant: $variant', ({ variant, expectedIcon }) => {
		const wrapper = setup({
			variant,
			messageId: id,
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toBe('Test message');
		expect(wrapper.findComponent(Icon).exists()).toBe(true);
		expect(wrapper.findComponent(Icon).props().icon).toEqual(expectedIcon);
	});
});
