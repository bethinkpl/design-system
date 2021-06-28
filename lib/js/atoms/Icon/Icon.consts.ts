import FileVerified from '../../../images/icons/file-verified.svg';
import HeadWithQuestionMark from '../../../images/icons/head-with-question-mark.svg';
import Ribbon from '../../../images/icons/ribbon.svg';
import BadgeTeam from '../../../images/icons/badge-team.svg';
import { FONTAWESOME_ICONS } from '../../icons/fontawesome';

export const ICON_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
	XX_LARGE: 'xx-large',
};

const BETHINK_ICONS = {
	FILE_VERIFIED: FileVerified,
	HEAD_WITH_QUESTION_MARK: HeadWithQuestionMark,
	RIBBON: Ribbon,
	BADGE_TEAM: BadgeTeam,
} as const;

export const ICONS = {
	...FONTAWESOME_ICONS,
	...BETHINK_ICONS,
} as const;

export type IconKey = keyof typeof ICONS;
export type IconItem = typeof ICONS[IconKey];
