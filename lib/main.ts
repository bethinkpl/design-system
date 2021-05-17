import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import * as components from './js/index.ts';
import { VUETIFY_THEME } from './js/consts/vuetifyTheme.const';

Vue.use(Vuetify, { theme: VUETIFY_THEME });
const ComponentLibrary = {
	install(Vue, _options = {}) {
		for (const componentName in components) {
			const component = components[componentName];

			Vue.component(component.name, component);
		}
	},
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(ComponentLibrary);
}
