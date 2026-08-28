import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import DateBox from './DateBox.vue';
import { SUPPORTED_LOCALE } from '../../../i18n';
import { setTestLocale } from '../../../tests/helpers';

const createComponent = (props = {}) => mount(DateBox, { props });

const dateTexts = (component: ReturnType<typeof createComponent>) =>
	component.findAll('.ds-dateBox__dateText').map((element) => element.text());

const eyebrowTexts = (component: ReturnType<typeof createComponent>) =>
	component.findAll('.ds-dateBox__eyebrow').map((element) => element.text());

describe('DateBox', () => {
	afterEach(() => {
		setTestLocale(SUPPORTED_LOCALE.pl);
	});

	it('should render a single date when the start and the end name the same day', () => {
		const component = createComponent({ startDate: '2026-08-05', endDate: '2026-08-05' });

		expect(dateTexts(component)).toEqual(['05 sie']);
		expect(eyebrowTexts(component)).toEqual(['Środa']);
		expect(component.find('.ds-dateBox__separator').exists()).toBe(false);
	});

	it('should render both dates when the end names a different day', () => {
		const component = createComponent({ startDate: '2026-08-05', endDate: '2026-08-17' });

		expect(dateTexts(component)).toEqual(['05 sie', '17 sie']);
		expect(eyebrowTexts(component)).toEqual(['Środa', 'Poniedziałek']);
		expect(component.find('.ds-dateBox__separator').exists()).toBe(true);
	});

	it('should render the placeholder and no eyebrow when both dates are null', () => {
		const component = createComponent({
			startDate: null,
			endDate: null,
			placeholder: 'Ustaw',
		});

		expect(dateTexts(component)).toEqual(['Ustaw']);
		expect(eyebrowTexts(component)).toEqual([]);
	});

	it('should render the day the string names in the en locale', async () => {
		const component = createComponent({ startDate: '2026-08-05', endDate: '2026-08-17' });
		setTestLocale(SUPPORTED_LOCALE.en);
		await nextTick();

		expect(dateTexts(component)).toEqual(['Aug 05', 'Aug 17']);
		expect(eyebrowTexts(component)).toEqual(['Wednesday', 'Monday']);
	});
});
