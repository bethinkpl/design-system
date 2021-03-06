import { config, dom, library } from '@fortawesome/fontawesome-svg-core';

import {
	faAddressCard,
	faAngleDown,
	faAngleLeft,
	faAngleRight,
	faAngleUp,
	faArchive,
	faArrowCircleLeft,
	faArrowCircleRight,
	faArrowToBottom,
	faBadgePercent,
	faBan,
	faBars,
	faBell,
	faBellSlash,
	faBook,
	faCalendarAlt,
	faExclamationCircle,
	faCaretSquareRight,
	faChartBar,
	faChartLine,
	faCheckCircle,
	faCheckSquare,
	faCircle,
	faCircleNotch,
	faClock,
	faCode,
	faCog,
	faComment,
	faCommentDots,
	faComments,
	faCompress,
	faEllipsisH,
	faExpandArrows,
	faExclamationTriangle,
	faEye,
	faEyeSlash,
	faFileAlt,
	faFileInvoiceDollar,
	faFilm,
	faFilter,
	faFlag,
	faFrown,
	faGem,
	faGift,
	faGlobeAmericas,
	faGraduationCap,
	faHandPointLeft,
	faHeartbeat,
	faHistory,
	faHome,
	faHourglassEnd,
	faHourglassHalf,
	faHourglassStart,
	faInfoCircle,
	faKey,
	faKeyboard,
	faLightbulb,
	faLink,
	faList,
	faLockAlt,
	faMagic,
	faMapMarkerAlt,
	faMedal,
	faMeh,
	faMinus,
	faMoneyBillAlt,
	faMousePointer,
	faMusic,
	faPaperPlane,
	faPaperclip,
	faPencil,
	faPlay,
	faPlus,
	faQuestionCircle,
	faReply,
	faSave,
	faSearch,
	faShare,
	faShieldAlt,
	faShoppingCart,
	faSignOut,
	faSignal,
	faSitemap,
	faSlidersH,
	faSmile,
	faSquare,
	faStar,
	faSync,
	faTachometerAltFast,
	faTag,
	faTags,
	faTasks,
	faThumbsUp,
	faTimes,
	faTimesCircle,
	faTrashAlt,
	faTrophyAlt,
	faUndo,
	faUnlink,
	faUnlockAlt,
	faUpload,
	faUser,
	faWindowMaximize,
} from '@fortawesome/pro-regular-svg-icons';
import {
	faArrowDown as fasArrowDown,
	faArrowLeft as fasArrowLeft,
	faArrowRight as fasArrowRight,
	faArrowUp as fasArrowUp,
	faArrowsH as fasArrowsH,
	faBookmark as fasBookmark,
	faCameraAlt as fasCameraAlt,
	faCheck as fasCheck,
	faCheckCircle as fasCheckCircle,
	faChevronDown as fasChevronDown,
	faChevronLeft as fasChevronLeft,
	faChevronRight as fasChevronRight,
	faChevronUp as fasChevronUp,
	faCog as fasCog,
	faCogs as fasCogs,
	faComment as fasComment,
	faExclamation as fasExclamation,
	faFileAlt as fasFileAlt,
	faFolder as fasFolder,
	faHandSpock as fasHandSpock,
	faHeart as fasHeart,
	faInfo as fasInfo,
	faLightbulb as fasLightbulb,
	faPlayCircle as fasPlayCircle,
	faSignLanguage as fasSignLanguage,
	faSitemap as fasSitemap,
	faStar as fasStar,
	faStopwatch as fasStopwach,
	faThumbsUp as fasThumbsUp,
	faThumbtack as fasThumbtack,
	faVideo as fasVideo,
	faVolumeUp as fasVolumeUp,
} from '@fortawesome/pro-solid-svg-icons';

import {
	faChevronLeft as falChevronLeft,
	faChevronRight as falChevronRight,
} from '@fortawesome/pro-light-svg-icons';

export const FONTAWESOME_ICONS = {
	FA_ADDRESS_CARD: faAddressCard,
	FA_ANGLE_DOWN: faAngleDown,
	FA_ANGLE_LEFT: faAngleLeft,
	FA_ANGLE_RIGHT: faAngleRight,
	FA_ANGLE_UP: faAngleUp,
	FA_ARCHIVE: faArchive,
	FA_ARROWS_H_SOLID: fasArrowsH,
	FA_ARROW_CIRCLE_LEFT: faArrowCircleLeft,
	FA_ARROW_CIRCLE_RIGHT: faArrowCircleRight,
	FA_ARROW_DOWN_SOLID: fasArrowDown,
	FA_ARROW_LEFT_SOLID: fasArrowLeft,
	FA_ARROW_RIGHT_SOLID: fasArrowRight,
	FA_ARROW_UP_SOLID: fasArrowUp,
	FA_ARROW_TO_BOTTOM: faArrowToBottom,
	FA_BADGE_PERCENT: faBadgePercent,
	FA_BAN: faBan,
	FA_BARS: faBars,
	FA_BELL: faBell,
	FA_BELL_SLASH: faBellSlash,
	FA_BOOK: faBook,
	FA_BOOKMARK_SOLID: fasBookmark,
	FA_CALENDAR_ALT: faCalendarAlt,
	FA_CAMERA_ALT_SOLID: fasCameraAlt,
	FA_CARET_SQUARE_RIGHT: faCaretSquareRight,
	FA_CHART_BAR: faChartBar,
	FA_CHART_LINE: faChartLine,
	FA_CHECK_SOLID: fasCheck,
	FA_CHECK_CIRCLE: faCheckCircle,
	FA_CHECK_CIRCLE_SOLID: fasCheckCircle,
	FA_CHECK_SQUARE: faCheckSquare,
	FA_CHEVRON_DOWN_SOLID: fasChevronDown,
	FA_CHEVRON_LEFT_SOLID: fasChevronLeft,
	FA_CHEVRON_LEFT_LIGHT: falChevronLeft,
	FA_CHEVRON_RIGHT_SOLID: fasChevronRight,
	FA_CHEVRON_RIGHT_LIGHT: falChevronRight,
	FA_CHEVRON_UP_SOLID: fasChevronUp,
	FA_CIRCLE: faCircle,
	FA_CIRCLE_NOTCH: faCircleNotch,
	FA_CLOCK: faClock,
	FA_CODE: faCode,
	FA_COG: faCog,
	FA_COGS_SOLID: fasCogs,
	FA_COG_SOLID: fasCog,
	FA_COMMENT: faComment,
	FA_COMMENTS: faComments,
	FA_COMMENT_DOTS: faCommentDots,
	FA_COMMENT_SOLID: fasComment,
	FA_COMPRESS: faCompress,
	FA_ELLIPSIS_H: faEllipsisH,
	FA_EXCLAMATION_SOLID: fasExclamation,
	FA_EXCLAMATION_CIRCLE: faExclamationCircle,
	FA_EXCLAMATION_TRIANGLE: faExclamationTriangle,
	FA_EXPAND_ARROWS: faExpandArrows,
	FA_EYE: faEye,
	FA_EYE_SLASH: faEyeSlash,
	FA_FILE_ALT: faFileAlt,
	FA_FILE_INVOICE_DOLLAR: faFileInvoiceDollar,
	FA_FILE_ALT_SOLID: fasFileAlt,
	FA_FILM: faFilm,
	FA_FILTER: faFilter,
	FA_FLAG: faFlag,
	FA_FOLDER_SOLID: fasFolder,
	FA_FROWN: faFrown,
	FA_GEM: faGem,
	FA_GIFT: faGift,
	FA_GLOBE: faGlobeAmericas,
	FA_GRADUATION_CAP: faGraduationCap,
	FA_HAND_POINT_LEFT: faHandPointLeft,
	FA_HAND_SPOCK_SOLID: fasHandSpock,
	FA_HEARTBEAT: faHeartbeat,
	FA_HEART_SOLID: fasHeart,
	FA_HISTORY: faHistory,
	FA_HOME: faHome,
	FA_HOURGLASS_END: faHourglassEnd,
	FA_HOURGLASS_HALF: faHourglassHalf,
	FA_HOURGLASS_START: faHourglassStart,
	FA_INFO_SOLID: fasInfo,
	FA_INFO_CIRCLE: faInfoCircle,
	FA_KEY: faKey,
	FA_KEYBOARD: faKeyboard,
	FA_LIGHTBULB: faLightbulb,
	FA_LIGHTBULB_SOLID: fasLightbulb,
	FA_LINK: faLink,
	FA_LIST: faList,
	FA_LOCK_ALT: faLockAlt,
	FA_MAGIC: faMagic,
	FA_MAP_MARKER_ALT: faMapMarkerAlt,
	FA_MEDAL: faMedal,
	FA_MEH: faMeh,
	FA_MINUS: faMinus,
	FA_MONEY_BILL_ALT: faMoneyBillAlt,
	FA_MOUSE_POINTER: faMousePointer,
	FA_MUSIC: faMusic,
	FA_PAPERCLIP: faPaperclip,
	FA_PAPER_PLANE: faPaperPlane,
	FA_PENCIL: faPencil,
	FA_PLAY: faPlay,
	FA_PLAY_CIRCLE_SOLID: fasPlayCircle,
	FA_PLUS: faPlus,
	FA_QUESTION_CIRCLE: faQuestionCircle,
	FA_REPLY: faReply,
	FA_SAVE: faSave,
	FA_SEARCH: faSearch,
	FA_SHARE: faShare,
	FA_SHIELD_ALT: faShieldAlt,
	FA_SHOPPING_CART: faShoppingCart,
	FA_SIGNAL: faSignal,
	FA_SIGN_LANGUAGE_SOLID: fasSignLanguage,
	FA_SIGN_OUT: faSignOut,
	FA_SITEMAP: faSitemap,
	FA_SITEMAP_SOLID: fasSitemap,
	FA_SLIDERS_H: faSlidersH,
	FA_SMILE: faSmile,
	FA_SQUARE: faSquare,
	FA_STAR: faStar,
	FA_STAR_SOLID: fasStar,
	FA_STOPWATCH_SOLID: fasStopwach,
	FA_SYNC: faSync,
	FA_TACHOMETER_ALT_FAST: faTachometerAltFast,
	FA_TAG: faTag,
	FA_TAGS: faTags,
	FA_TASKS: faTasks,
	FA_THUMBS_UP: faThumbsUp,
	FA_THUMBS_UP_SOLID: fasThumbsUp,
	FA_THUMBTACK_SOLID: fasThumbtack,
	FA_TIMES: faTimes,
	FA_TIMES_CIRCLE: faTimesCircle,
	FA_TRASH_ALT: faTrashAlt,
	FA_TROPHY_ALT: faTrophyAlt,
	FA_UNDO: faUndo,
	FA_UNLINK: faUnlink,
	FA_UNLOCK_ALT: faUnlockAlt,
	FA_UPLOAD: faUpload,
	FA_USER: faUser,
	FA_VIDEO_SOLID: fasVideo,
	FA_VOLUME_UP_SOLID: fasVolumeUp,
	FA_WINDOW_MAXIMIZE: faWindowMaximize,
} as const;

export function initialize() {
	library.add(...Object.values(FONTAWESOME_ICONS));
}

export function initializeWithDomWatcher() {
	initialize();

	config.autoReplaceSvg = 'nest';
	dom.watch();
}
