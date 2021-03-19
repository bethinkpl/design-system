// TypeScript compiler doesn't read webpack config so we need to tell him how interpret import Vue files

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
	// vue-jest doesn't understand import many from Vue component in a test.
	// This is only szpachla for this.
	// We don't want to suport all extra vue exports here, however we don't know yet how to fix it.
	export const BUTTON_TYPES;
	export const BUTTON_SIZES;
	export const BUTTON_COLORS;
	export const BUTTON_RADIUSES;
	export const BUTTON_STATES;
	export const BADGE_SCORE_COLORS;
	export const BADGE_SCORE_SIZES;
	export const ICONS;
	export const QUIZ_QUESTION_UNCERTAIN_STATE;
	export const QUIZ_QUESTION_MARKED_STATE;
}

declare module '*.svg' {
	import Vue, { VueConstructor } from 'vue';
	const content: VueConstructor<Vue>;
	export default content;
}

declare global {
	// eslint-disable-next-line no-redeclare
	var $wnl: any;
	var jQuery: any;
	// eslint-disable-next-line no-redeclare
	var $: any;
	// eslint-disable-next-line no-redeclare
	var ga: any;
	// eslint-disable-next-line no-redeclare
	var fbq: any;
	// eslint-disable-next-line no-redeclare
	var Echo: any;
	var axios: any;
	var io: any;
	var Laravel: any;
	var quill: any;
}
