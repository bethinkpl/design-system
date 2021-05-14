import { FUNCTIONAL_COLORS, THEME_COLORS } from './colors';

export const VUETIFY_THEME = {
	themes: {
		light: {
			primary: THEME_COLORS.PRIMARY,
			secondary: THEME_COLORS.SECONDARY,
			error: FUNCTIONAL_COLORS.DANGER,
			success: FUNCTIONAL_COLORS.SUCCESS,
			warning: FUNCTIONAL_COLORS.WARNING,
		}
	}
} as const