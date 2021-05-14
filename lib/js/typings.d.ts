// TypeScript compiler doesn't read webpack config so we need to tell him how interpret import Vue files

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare module '*.svg' {
	import Vue, { VueConstructor } from 'vue';
	const content: VueConstructor<Vue>;
	export default content;
}

declare module 'vue-ripple-directive' {
	import { DirectiveFunction } from 'vue/types/options';
	export default {} as DirectiveFunction;
}
