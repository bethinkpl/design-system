import HeadWithQuestionMark from '../../../../images/icons/head-with-question-mark.svg';
import Ribbon from '../../../../images/icons/ribbon.svg';
import SlidersSearch from '../../../../images/icons/sliders-search.svg';
import CommentsCheck from '../../../../images/icons/comments-check.svg';
import Answers from '../../../../images/icons/icon-answers.svg';
import HideAnswers from '../../../../images/icons/icon-hide-answers.svg';
import SidebarFlipSolid from '../../../../images/icons/sidebar-flip-solid.svg';

import { FONTAWESOME_ICONS } from '../../../icons/fontawesome';
import { Value } from '../../../utils/type.utils';

export const ICON_COLORS = {
	ACCENT: 'accent',
	DANGER: 'danger',
	DEFAULT: 'default',
	FAIL: 'fail',
	INFO: 'info',
	INVERTED: 'inverted',
	NEUTRAL: 'neutral',
	NEUTRAL_STRONG: 'neutralStrong',
	NEUTRAL_WEAK: 'neutralWeak',
	PRIMARY: 'primary',
	PRIMARY_WEAK: 'primaryWeak',
	SUCCESS: 'success',
	WARNING: 'warning',
};

export type IconColor = Value<typeof ICON_COLORS>;

export const ICON_SIZES = {
	XXX_SMALL: 'xxx-small',
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
	XX_LARGE: 'xx-large',
};

export type IconSize = Value<typeof ICON_SIZES>;

const BETHINK_ICONS = {
	HEAD_WITH_QUESTION_MARK: HeadWithQuestionMark,
	RIBBON: Ribbon,
	SLIDERS_SEARCH: SlidersSearch,
	COMMENTS_CHECK: CommentsCheck,
	ANSWERS: Answers,
	HIDE_ANSWERS: HideAnswers,
	SIDEBAR_FLIP_SOLID: SidebarFlipSolid,
} as const;

export const ICONS = {
	...FONTAWESOME_ICONS,
	...BETHINK_ICONS,
} as const;

export type IconKey = keyof typeof ICONS;
export type IconItem = typeof ICONS[IconKey];
