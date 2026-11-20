import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import DatePicker from './DatePicker.vue';
import { Tile, TILE_COMPACT_LAYOUTS } from '../../../';
import { SUPPORTED_LOCALE } from '../../../i18n';
import { parseCalendarDate } from '../calendarDate';
import { setTestLocale } from '../../../tests/helpers';

const createComponent = (props = {}) => {
	return mount(DatePicker, {
		props,
		attachTo: document.body,
	});
};

/** Mounts, opens the calendar and hands back the flatpickr instance it created. */
const openCalendar = async (props = {}) => {
	const component = createComponent(props);

	await component.vm.toggle();

	const flatpickr = component.vm.flatpickrInstance;

	if (!flatpickr) {
		throw new Error('The calendar did not create a flatpickr instance');
	}

	return { component, flatpickr };
};

// The calendars mount into the document body — tear them down so their flatpickr instances stop
// listening on it.
enableAutoUnmount(afterEach);

describe('DatePicker', () => {
	afterEach(() => {
		setTestLocale(SUPPORTED_LOCALE.pl);
	});

	describe('Hidden Icon', () => {
		it('should pass DEFAULT compact layout to Tile when isIconHiddenOnMobile is not set', () => {
			const component = createComponent();

			const tile = component.findComponent(Tile);

			expect(tile.exists()).toBeTruthy();
			expect(tile.props().compactLayout).toEqual(TILE_COMPACT_LAYOUTS.DEFAULT);
		});

		it('should pass DEFAULT compact layout to Tile when isIconHiddenOnMobile is set to false', () => {
			const component = createComponent({ isIconHiddenOnMobile: false });

			const tile = component.findComponent(Tile);

			expect(tile.exists()).toBeTruthy();
			expect(tile.props().compactLayout).toEqual(TILE_COMPACT_LAYOUTS.DEFAULT);
		});

		it('should pass ICON_RIGHT_HIDDEN compact layout to Tile when isIconHiddenOnMobile is set to true', () => {
			const component = createComponent({ isIconHiddenOnMobile: true });

			const tile = component.findComponent(Tile);

			expect(tile.exists()).toBeTruthy();
			expect(tile.props().compactLayout).toEqual(TILE_COMPACT_LAYOUTS.ICON_RIGHT_HIDDEN);
		});
	});

	describe('Display', () => {
		it.each([
			{
				locale: SUPPORTED_LOCALE.pl,
				expectedText: '5 sie 2026',
				expectedEyebrow: 'Środa',
			},
			{
				locale: SUPPORTED_LOCALE.en,
				expectedText: 'Aug 5, 2026',
				expectedEyebrow: 'Wednesday',
			},
		])(
			'should render the day the string names in the $locale locale',
			async ({ locale, expectedText, expectedEyebrow }) => {
				const component = createComponent({ date: '2026-08-05' });
				setTestLocale(locale);
				await nextTick();

				const tile = component.findComponent(Tile);

				expect(tile.props().text).toBe(expectedText);
				expect(tile.props().eyebrowText).toBe(expectedEyebrow);
			},
		);

		it('should render the placeholder when no date is set', () => {
			const component = createComponent({ placeholder: 'Wybierz datę' });

			const tile = component.findComponent(Tile);

			expect(tile.props().text).toBe('Wybierz datę');
			expect(tile.props().eyebrowText).toBe('');
		});
	});

	describe('Emitted day', () => {
		it('should emit the picked day as a calendar date', async () => {
			const { component, flatpickr } = await openCalendar({ date: '2026-08-05' });

			flatpickr.setDate(new Date(2026, 7, 17), true);

			expect(component.emitted('update:date')).toEqual([['2026-08-17']]);
		});
	});

	describe('today', () => {
		it('should hand flatpickr the local midnight of today', async () => {
			const { flatpickr } = await openCalendar({ today: '2026-08-05' });

			expect(flatpickr.config.now).toEqual(parseCalendarDate('2026-08-05'));
			expect(flatpickr.now).toEqual(parseCalendarDate('2026-08-05'));
		});

		it('should open an empty calendar on today', async () => {
			const { flatpickr } = await openCalendar({ today: '2026-08-05' });

			expect(flatpickr.config.defaultDate).toEqual(parseCalendarDate('2026-08-05'));
		});

		it('should keep the date as the default when both are set', async () => {
			const { flatpickr } = await openCalendar({
				date: '2026-08-17',
				today: '2026-08-05',
			});

			expect(flatpickr.config.defaultDate).toEqual(parseCalendarDate('2026-08-17'));
			expect(flatpickr.now).toEqual(parseCalendarDate('2026-08-05'));
		});

		it('should fall back to the browser now when today is not set', async () => {
			const before = new Date();
			const { flatpickr } = await openCalendar();
			const after = new Date();

			const defaultDate = flatpickr.config.defaultDate as Date;

			expect(defaultDate.getTime()).toBeGreaterThanOrEqual(before.getTime());
			expect(defaultDate.getTime()).toBeLessThanOrEqual(after.getTime());
			expect(flatpickr.config.now).toBeUndefined();
		});
	});

	describe('Prop watchers', () => {
		it('should hand flatpickr parsed dates when the boundaries change after mount', async () => {
			const { component, flatpickr } = await openCalendar({ date: '2026-08-05' });

			await component.setProps({
				minDate: '2026-08-03',
				maxDate: '2026-08-28',
				disableDates: ['2026-08-11', '2026-08-12'],
			});

			expect(flatpickr.config.minDate).toEqual(parseCalendarDate('2026-08-03'));
			expect(flatpickr.config.maxDate).toEqual(parseCalendarDate('2026-08-28'));
			expect(flatpickr.config.disable).toEqual([
				parseCalendarDate('2026-08-11'),
				parseCalendarDate('2026-08-12'),
			]);
		});

		it('should hand flatpickr the parsed date when the date changes after mount', async () => {
			const { component, flatpickr } = await openCalendar({ date: '2026-08-05' });

			await component.setProps({ date: '2026-09-01' });

			expect(flatpickr.selectedDates).toEqual([parseCalendarDate('2026-09-01')]);
		});
	});
});
