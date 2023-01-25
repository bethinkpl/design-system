// TypeScript compiler doesn't read webpack config so we need to tell him how interpret import Vue files

declare module '*.vue' {
	import { ConcreteComponent } from '@vue/runtime-dom';
	export { ConcreteComponent };
}

declare module '*.svg' {
	import { CompatVue } from '@vue/runtime-dom';
	const Vue: CompatVue;
	export default Vue;
	export * from '@vue/runtime-dom';
	const { configureCompat } = Vue;
	export { configureCompat };
}

declare module 'vue-ripple-directive' {
	// TODO does it work?
	import { DirectiveFunction } from 'vue/types/options';
	export default {} as DirectiveFunction;
}
