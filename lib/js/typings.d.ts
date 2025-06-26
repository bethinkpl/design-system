declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent;
	export default component;
}

declare module '*.svg' {
	import { VueConstructor } from 'vue';
	const content: VueConstructor;
	export default content;
}
