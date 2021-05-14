import * as components from './js/index.ts';

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