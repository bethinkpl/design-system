import { createLocalVue, shallowMount } from '@vue/test-utils';

import Tile from './Tile.vue';
import { ICONS } from "../Icon";

const createComponent = function ({
                                      title = '',
                                      eyebrow = '',
                                      clickable = true,
                                      text = '',
                                      left = null,
                                      right = null,
                                  }) {
    const localVue = createLocalVue();
    return shallowMount(Tile, {
        localVue,
        mocks: {},
        propsData: { clickable, text, left, right },
        slots: {
            eyebrow,
            default: title,
        },
        stubs: {},
    });

}

describe('Tile', () => {
    it('Is clickable without left icon', () => {
        const props = { title: 'title text', eyebrow: 'eyebrow text', text: 'text text', right: ICONS.FA_ANGLE_RIGHT };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(true);
        expect(component.find('.a-tile__left').exists()).toBe(false);

        expect(component.find('.a-tile__right').exists()).toBe(false);
        expect(component.find('.a-tile__text').exists()).toBe(false);
    })
    it('Is clickable with left icon', () => {
        const props = {
            title: 'title text',
            eyebrow: 'eyebrow text',
            text: 'text text',
            right: ICONS.FA_ANGLE_RIGHT,
            left: ICONS.FA_ARCHIVE
        };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(true);
        expect(component.find('.a-tile__left').exists()).toBe(true);

        expect(component.find('.a-tile__right').exists()).toBe(false);
        expect(component.find('.a-tile__text').exists()).toBe(false);
    })
    it('Is not clickable without right and text', () => {
        const props = { title: 'title text', eyebrow: 'eyebrow text', clickable: false, left: ICONS.FA_ARCHIVE };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(false);

        expect(component.find('.a-tile__left').exists()).toBe(true);
        expect(component.find('.a-tile__right').exists()).toBe(false);
        expect(component.find('.a-tile__text').exists()).toBe(false);
    })
    it('Is not clickable with right and without text', () => {
        const props = {
            title: 'title text',
            eyebrow: 'eyebrow text',
            right: ICONS.FA_ANGLE_RIGHT,
            clickable: false,
            left: ICONS.FA_ARCHIVE
        };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(false);
        expect(component.find('.a-tile__right').exists()).toBe(true);

        expect(component.find('.a-tile__left').exists()).toBe(true);
        expect(component.find('.a-tile__text').exists()).toBe(false);
    })
    it('Is not clickable without right and with text', () => {
        const props = {
            title: 'title text',
            eyebrow: 'eyebrow text',
            text: 'text text',
            clickable: false,
            left: ICONS.FA_ARCHIVE
        };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(false);
        expect(component.find('.a-tile__text').exists()).toBe(true);

        expect(component.find('.a-tile__right').exists()).toBe(false);
        expect(component.find('.a-tile__left').exists()).toBe(true);
    })
    it('Is not clickable with right and text but text is not visible when right is present', () => {
        const props = {
            title: 'title text',
            eyebrow: 'eyebrow text',
            text: 'text text',
            right: ICONS.FA_ANGLE_RIGHT,
            clickable: false,
            left: ICONS.FA_ARCHIVE
        };
        const component = createComponent(props)
        expect(component.find('.a-tile__eyebrow').text()).toBe('eyebrow text');
        expect(component.find('.a-tile__title').text()).toBe('title text');
        expect(component.find('.a-tile__clickableIcon').exists()).toBe(false);
        expect(component.find('.a-tile__text').exists()).toBe(false);

        expect(component.find('.a-tile__right').exists()).toBe(true);
        expect(component.find('.a-tile__left').exists()).toBe(true);
    })
});