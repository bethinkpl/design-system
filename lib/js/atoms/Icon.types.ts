import { ICONS } from './Icon.vue';

export type IconKey = keyof typeof ICONS;
export type IconValue = typeof ICONS[IconKey];
