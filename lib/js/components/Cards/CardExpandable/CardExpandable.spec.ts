import { mount } from '@vue/test-utils';

import CardExpandable from './CardExpandable.vue';

interface createComponentOptions {
	isExpanded?: boolean;
	expanderTextExpanded?: string | null;
	expanderTextCollapsed?: string | null;
	headerSlot?: string;
	contentSlot?: string;
	expandedContentSlot?: string;
}

describe('CardExpandable', () => {
	const createComponent = ({
		isExpanded = false,
		expanderTextExpanded = null,
		expanderTextCollapsed = null,
		headerSlot = '',
		contentSlot = '',
		expandedContentSlot = '',
	}: createComponentOptions = {}) => {
		return mount(CardExpandable, {
			props: {
				isExpanded,
				...(expanderTextExpanded && { expanderTextExpanded }),
				...(expanderTextCollapsed && { expanderTextCollapsed }),
			} as any,
			slots: {
				...(headerSlot !== '' && { header: headerSlot }),
				...(contentSlot !== '' && { content: contentSlot }),
				...(expandedContentSlot !== '' && { expandedContent: expandedContentSlot }),
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render content slot', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ contentSlot: content });

		expect(component.text()).toContain(content);
	});

	it('should render header slot', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header });

		expect(component.text()).toContain(header);
	});

	it('should render expander with default text', async () => {
		const component = createComponent();

		const expander = component.find('.ds-cardExpandable__expander');
		expect(expander.exists()).toBe(true);
		expect(expander.text()).toBe('Rozwiń');

		await expander.trigger('click');
		expect(expander.text()).toBe('Zwiń');
	});

	it('should render expander with custom text', async () => {
		const component = createComponent({
			expanderTextExpanded: 'collapse',
			expanderTextCollapsed: 'expand',
		});

		const expander = component.find('.ds-cardExpandable__expander');
		expect(expander.exists()).toBe(true);
		expect(expander.text()).toBe('expand');
		await expander.trigger('click');
		expect(expander.text()).toBe('collapse');
	});

	it('expander click should emit update:isExpanded event', async () => {
		const component = createComponent();

		const expander = component.find('.ds-cardExpandable__expander');
		await expander.trigger('click');

		expect(component.emitted()?.['update:isExpanded']?.[0]).toStrictEqual([true]);

		await expander.trigger('click');

		expect(component.emitted()?.['update:isExpanded']?.[1]).toStrictEqual([false]);
	});

	it('should render expandedContentSlot after expander click', async () => {
		const expandedSlotContent = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ expandedContentSlot: expandedSlotContent });

		expect(component.text()).not.toContain(expandedSlotContent);

		const expander = component.find('.ds-cardExpandable__expander');
		await expander.trigger('click');

		expect(component.text()).toContain(expandedSlotContent);

		await expander.trigger('click');

		expect(component.text()).not.toContain(expandedSlotContent);
	});

	it('should render expandedContentSlot when isExpanded prop set', async () => {
		const expandedSlotContent = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			isExpanded: true,
			expandedContentSlot: expandedSlotContent,
		});

		expect(component.text()).toContain(expandedSlotContent);

		const expander = component.find('.ds-cardExpandable__expander');
		await expander.trigger('click');

		expect(component.text()).not.toContain(expandedSlotContent);
	});

	it('should render expandedContentSlot when isExpanded prop changed', async () => {
		const expandedSlotContent = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			expandedContentSlot: expandedSlotContent,
		});

		expect(component.text()).not.toContain(expandedSlotContent);
		await component.setProps({ isExpanded: true });

		expect(component.text()).toContain(expandedSlotContent);
		expect(component.find('.ds-cardExpandable__expander').text()).toBe('Zwiń');
	});
});
