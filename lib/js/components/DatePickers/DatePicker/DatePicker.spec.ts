import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import DatePicker from './DatePicker.vue';
import { Tile, TILE_COMPACT_LAYOUTS } from '../../../';

const createComponent = (props = {}) => {
	return mount(DatePicker, {
		props,
	});
};

describe('DrawerHeader', () => {
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
});
