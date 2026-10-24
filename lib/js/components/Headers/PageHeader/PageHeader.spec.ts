import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import PageHeader from './PageHeader.vue';

enableAutoUnmount(afterEach);

const createComponent = (props = {}) => {
	return mount(PageHeader, {
		props: {
			pageTitle: 'Kardiologia 1',
			...props,
		},
	});
};

describe('PageHeader', () => {
	describe('eyebrow', () => {
		it('should not render eyebrow by default', () => {
			const component = createComponent();

			expect(component.find('.ds-pageHeader__eyebrow').exists()).toBe(false);
		});

		it('should render eyebrow above the title', () => {
			const component = createComponent({ eyebrow: 'Interna' });

			const titleWrapper = component.find('.ds-pageHeader__titleWrapper');
			const children = titleWrapper.element.children;

			expect(titleWrapper.find('.ds-pageHeader__eyebrow').text()).toBe('Interna');
			expect(children[0].classList).toContain('ds-pageHeader__eyebrow');
			expect(children[1].classList).toContain('ds-pageHeader__title');
		});
	});
});
