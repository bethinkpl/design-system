import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';

import LabelValueItemGroup from './LabelValueItemGroup.vue';

describe('LabelValueItemGroup', () => {
	it('should create', () => {
		const component = mount(LabelValueItemGroup);

		expect(component.exists()).toBe(true);
		expect(component.find('.ds-labelValueItemGroup').exists()).toBe(true);
	});

	it('renders default slot content', () => {
		const component = mount(LabelValueItemGroup, {
			slots: {
				default: () => h('span', { class: 'child' }, 'Slotted content'),
			},
		});

		expect(component.find('.ds-labelValueItemGroup .child').text()).toBe('Slotted content');
	});
});
