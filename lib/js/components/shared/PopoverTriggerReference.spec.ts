import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, ref } from 'vue';
import { flushPromises, mount } from '@vue/test-utils';
import Dropdown from '../Dropdown/Dropdown.vue';
import Popover from '../Popover/Popover.vue';
import DsButton, { BUTTON_TYPES } from '../Buttons/Button';
import DsIconButton, { ICON_BUTTON_TYPES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';

afterEach(() => {
	document.body.innerHTML = '';
});

describe.each([
	{ name: 'Dropdown', component: Dropdown, panel: '.ds-dropdown' },
	{ name: 'Popover', component: Popover, panel: '.ds-popover' },
])('$name reference forwarding', ({ component, panel }) => {
	it.each([
		{
			name: 'DsButton',
			reference: DsButton,
			props: { type: BUTTON_TYPES.TEXT, as: 'button' as const },
			buttonType: BUTTON_TYPES.TEXT,
		},
		{
			name: 'DsIconButton',
			reference: DsIconButton,
			props: { type: ICON_BUTTON_TYPES.OUTLINED, icon: ICONS.FAD_SPINNER_THIRD },
			buttonType: BUTTON_TYPES.OUTLINED,
		},
	])(
		'preserves direct and wrapped $name props and trigger interaction',
		async ({ reference, props, buttonType }) => {
			for (const wrapped of [false, true]) {
				const referenceRef = ref();
				const onClick = vi.fn();
				const ReferenceWrapper = defineComponent({
					name: 'ReferenceWrapper',
					setup: () => () => h(reference, props, () => 'Reference'),
				});
				const wrapper = mount(component, {
					attachTo: document.body,
					props: { appendToBody: false },
					slots: {
						reference: () =>
							wrapped
								? h(ReferenceWrapper, { ref: referenceRef, onClick })
								: h(
										reference,
										{ ...props, ref: referenceRef, onClick },
										() => 'Reference',
									),
						default: ({ close }: { close: () => void }) =>
							h('button', { class: 'close', onClick: close }, 'Close'),
					},
				});
				const trigger = wrapper.find('[aria-haspopup="dialog"]');
				expect(trigger.element).toBe(wrapper.element.firstElementChild);
				expect(referenceRef.value.$el).toBe(trigger.element);
				expect(wrapper.findComponent(DsButton).props('type')).toBe(buttonType);
				if (wrapped) {
					expect(
						Object.prototype.hasOwnProperty.call(
							wrapper.findComponent(ReferenceWrapper).vm.$attrs,
							'type',
						),
					).toBe(false);
				}
				expect(trigger.attributes('aria-expanded')).toBe('false');
				await trigger.trigger('click');
				await flushPromises();
				expect(onClick).toHaveBeenCalledTimes(1);
				expect(wrapper.find(panel).exists()).toBe(true);
				expect(trigger.attributes('aria-expanded')).toBe('true');
				expect(trigger.attributes()).toHaveProperty('aria-controls');
				expect(wrapper.findComponent(DsButton).props('type')).toBe(buttonType);
				await trigger.trigger('click');
				await flushPromises();
				expect(wrapper.find(panel).exists()).toBe(false);
				await trigger.trigger('click');
				await flushPromises();
				await wrapper.find('.close').trigger('click');
				await flushPromises();
				expect(wrapper.find(panel).exists()).toBe(false);
				wrapper.unmount();
			}
		},
	);
});
