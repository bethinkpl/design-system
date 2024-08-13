// TypeScript compiler doesn't read webpack config so we need to tell him how interpret import Vue files

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent;
	export default component;
}

declare module '*.svg' {
	import Vue, { VueConstructor } from 'vue';
	const content: VueConstructor<Vue>;
	export default content;
}
