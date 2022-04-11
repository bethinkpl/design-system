// TypeScript compiler doesn't read webpack config so we need to tell him how interpret import Vue files

declare module '*.vue' {
	import { CompatVue } from '@vue/runtime-dom'
	const Vue: CompatVue
	export default Vue
	export * from '@vue/runtime-dom'
	const { configureCompat } = Vue
	export { configureCompat }
}

declare module '*.svg' {
	import { CompatVue } from '@vue/runtime-dom'
	const Vue: CompatVue
	export default Vue
	export * from '@vue/runtime-dom'
	const { configureCompat } = Vue
	export { configureCompat }
}
