import { config, dom, library } from '@fortawesome/fontawesome-svg-core';

import { faAddressCard } from '@fortawesome/pro-regular-svg-icons/faAddressCard';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faAngleLeft } from '@fortawesome/pro-regular-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons/faAngleRight';
import { faAngleUp } from '@fortawesome/pro-regular-svg-icons/faAngleUp';
import { faArrowDownLeftAndArrowUpRightToCenter } from '@fortawesome/pro-regular-svg-icons/faArrowDownLeftAndArrowUpRightToCenter';
import { faArrowDownToLine } from '@fortawesome/pro-regular-svg-icons/faArrowDownToLine';
import { faArrowPointer } from '@fortawesome/pro-regular-svg-icons/faArrowPointer';
import { faArrowRightFromBracket } from '@fortawesome/pro-regular-svg-icons/faArrowRightFromBracket';
import { faArrowRotateLeft } from '@fortawesome/pro-regular-svg-icons/faArrowRotateLeft';
import { faArrowRotateRight } from '@fortawesome/pro-regular-svg-icons/faArrowRotateRight';
import { faArrowsMaximize } from '@fortawesome/pro-regular-svg-icons/faArrowsMaximize';
import { faArrowsRotate } from '@fortawesome/pro-regular-svg-icons/faArrowsRotate';
import { faArrowUpRightAndArrowDownLeftFromCenter } from '@fortawesome/pro-regular-svg-icons/faArrowUpRightAndArrowDownLeftFromCenter';
import { faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons/faArrowUpRightFromSquare';
import { faAtom } from '@fortawesome/pro-regular-svg-icons/faAtom';
import { faBadgePercent } from '@fortawesome/pro-regular-svg-icons/faBadgePercent';
import { faBan } from '@fortawesome/pro-regular-svg-icons/faBan';
import { faBars } from '@fortawesome/pro-regular-svg-icons/faBars';
import { faBell } from '@fortawesome/pro-regular-svg-icons/faBell';
import { faBellSlash } from '@fortawesome/pro-regular-svg-icons/faBellSlash';
import { faBook } from '@fortawesome/pro-regular-svg-icons/faBook';
import { faBookBlank } from '@fortawesome/pro-regular-svg-icons/faBookBlank';
import { faBookCopy } from '@fortawesome/pro-regular-svg-icons/faBookCopy';
import { faBox } from '@fortawesome/pro-regular-svg-icons/faBox';
import { faBoxArchive } from '@fortawesome/pro-regular-svg-icons/faBoxArchive';
import { faCalendar } from '@fortawesome/pro-regular-svg-icons/faCalendar';
import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons/faCalendarDays';
import { faCalendarDay } from '@fortawesome/pro-regular-svg-icons/faCalendarDay';
import { faCalendarRange } from '@fortawesome/pro-regular-svg-icons/faCalendarRange';
import { faCalendarCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCalendarCircleExclamation';
import { faCalendarCheck } from '@fortawesome/pro-regular-svg-icons/faCalendarCheck';
import { faCartShopping } from '@fortawesome/pro-regular-svg-icons/faCartShopping';
import { faChartColumn } from '@fortawesome/pro-regular-svg-icons/faChartColumn';
import { faChartLineUp } from '@fortawesome/pro-regular-svg-icons/faChartLineUp';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons/faChevronRight';
import { faChevronUp } from '@fortawesome/pro-regular-svg-icons/faChevronUp';
import { faCircle } from '@fortawesome/pro-regular-svg-icons/faCircle';
import { faCircleArrowLeft } from '@fortawesome/pro-regular-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/pro-regular-svg-icons/faCircleArrowRight';
import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';
import { faCircleEllipsis } from '@fortawesome/pro-regular-svg-icons/faCircleEllipsis';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { faCircleNotch } from '@fortawesome/pro-regular-svg-icons/faCircleNotch';
import { faCircleQuestion } from '@fortawesome/pro-regular-svg-icons/faCircleQuestion';
import { faCircleXmark } from '@fortawesome/pro-regular-svg-icons/faCircleXmark';
import { faClipboardMedical } from '@fortawesome/pro-regular-svg-icons/faClipboardMedical';
import { faClipboardList } from '@fortawesome/pro-regular-svg-icons/faClipboardList';
import { faClock } from '@fortawesome/pro-regular-svg-icons/faClock';
import { faClockRotateLeft } from '@fortawesome/pro-regular-svg-icons/faClockRotateLeft';
import { faCode } from '@fortawesome/pro-regular-svg-icons/faCode';
import { faCodeSimple } from '@fortawesome/pro-regular-svg-icons';
import { faComment } from '@fortawesome/pro-regular-svg-icons/faComment';
import { faCommentDots } from '@fortawesome/pro-regular-svg-icons/faCommentDots';
import { faComments } from '@fortawesome/pro-regular-svg-icons/faComments';
import { faCompress } from '@fortawesome/pro-regular-svg-icons/faCompress';
import { faCopy } from '@fortawesome/pro-regular-svg-icons/faCopy';
import { faCreditCard } from '@fortawesome/pro-regular-svg-icons/faCreditCard';
import { faEarthAmericas } from '@fortawesome/pro-regular-svg-icons/faEarthAmericas';
import { faEllipsis } from '@fortawesome/pro-regular-svg-icons/faEllipsis';
import { faEllipsisVertical } from '@fortawesome/pro-regular-svg-icons/faEllipsisVertical';
import { faEye } from '@fortawesome/pro-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-regular-svg-icons/faEyeSlash';
import { faFaceFrown } from '@fortawesome/pro-regular-svg-icons/faFaceFrown';
import { faFaceGrimace } from '@fortawesome/pro-regular-svg-icons/faFaceGrimace';
import { faFaceMeh } from '@fortawesome/pro-regular-svg-icons/faFaceMeh';
import { faFaceSmile } from '@fortawesome/pro-regular-svg-icons/faFaceSmile';
import { faFileInvoiceDollar } from '@fortawesome/pro-regular-svg-icons/faFileInvoiceDollar';
import { faFileLines } from '@fortawesome/pro-regular-svg-icons/faFileLines';
import { faFileMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons/faFileMagnifyingGlass';
import { faFilm } from '@fortawesome/pro-regular-svg-icons/faFilm';
import { faFilter } from '@fortawesome/pro-regular-svg-icons/faFilter';
import { faFlag } from '@fortawesome/pro-regular-svg-icons/faFlag';
import { faFloppyDisk } from '@fortawesome/pro-regular-svg-icons/faFloppyDisk';
import { faGaugeHigh } from '@fortawesome/pro-regular-svg-icons/faGaugeHigh';
import { faGear } from '@fortawesome/pro-regular-svg-icons/faGear';
import { faGem } from '@fortawesome/pro-regular-svg-icons/faGem';
import { faGift } from '@fortawesome/pro-regular-svg-icons/faGift';
import { faGraduationCap } from '@fortawesome/pro-regular-svg-icons/faGraduationCap';
import { faGrid } from '@fortawesome/pro-regular-svg-icons/faGrid';
import { faHandPointLeft } from '@fortawesome/pro-regular-svg-icons/faHandPointLeft';
import { faHandPointRight } from '@fortawesome/pro-regular-svg-icons/faHandPointRight';
import { faHeartPulse } from '@fortawesome/pro-regular-svg-icons/faHeartPulse';
import { faHourglass } from '@fortawesome/pro-regular-svg-icons/faHourglass';
import { faHourglassEnd } from '@fortawesome/pro-regular-svg-icons/faHourglassEnd';
import { faHourglassStart } from '@fortawesome/pro-regular-svg-icons/faHourglassStart';
import { faHouse } from '@fortawesome/pro-regular-svg-icons/faHouse';
import { faImages } from '@fortawesome/pro-regular-svg-icons/faImages';
import { faImages as fasImages } from '@fortawesome/pro-solid-svg-icons/faImages';
import { faKey } from '@fortawesome/pro-regular-svg-icons/faKey';
import { faKeyboard } from '@fortawesome/pro-regular-svg-icons/faKeyboard';
import { faLightbulb } from '@fortawesome/pro-regular-svg-icons/faLightbulb';
import { faLink } from '@fortawesome/pro-regular-svg-icons/faLink';
import { faLinkSlash } from '@fortawesome/pro-regular-svg-icons/faLinkSlash';
import { faList } from '@fortawesome/pro-regular-svg-icons/faList';
import { faListCheck } from '@fortawesome/pro-regular-svg-icons/faListCheck';
import { faListOl } from '@fortawesome/pro-regular-svg-icons/faListOl';
import { faLocationDot } from '@fortawesome/pro-regular-svg-icons/faLocationDot';
import { faLockKeyhole } from '@fortawesome/pro-regular-svg-icons/faLockKeyhole';
import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons/faMagnifyingGlass';
import { faMedal } from '@fortawesome/pro-regular-svg-icons/faMedal';
import { faMemoCircleInfo } from '@fortawesome/pro-regular-svg-icons/faMemoCircleInfo';
import { faMinus } from '@fortawesome/pro-regular-svg-icons/faMinus';
import { faMoneyBill1 } from '@fortawesome/pro-regular-svg-icons/faMoneyBill1';
import { faMusic } from '@fortawesome/pro-regular-svg-icons/faMusic';
import { faPaperclip } from '@fortawesome/pro-regular-svg-icons/faPaperclip';
import { faPaperPlane } from '@fortawesome/pro-regular-svg-icons/faPaperPlane';
import { faPencil } from '@fortawesome/pro-regular-svg-icons/faPencil';
import { faPenCircle } from '@fortawesome/pro-regular-svg-icons/faPenCircle';
import { faPenField } from '@fortawesome/pro-regular-svg-icons/faPenField';
import { faPlay } from '@fortawesome/pro-regular-svg-icons/faPlay';
import { faPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faPresentationScreen } from '@fortawesome/pro-regular-svg-icons/faPresentationScreen';
import { faPrint } from '@fortawesome/pro-regular-svg-icons/faPrint';
import { faRectangleCode } from '@fortawesome/pro-regular-svg-icons/faRectangleCode';
import { faRectangleList } from '@fortawesome/pro-regular-svg-icons/faRectangleList';
import { faReply } from '@fortawesome/pro-regular-svg-icons/faReply';
import { faRotateLeft } from '@fortawesome/pro-regular-svg-icons/faRotateLeft';
import { faShare } from '@fortawesome/pro-regular-svg-icons/faShare';
import { faShareNodes } from '@fortawesome/pro-regular-svg-icons/faShareNodes';
import { faShieldHalved } from '@fortawesome/pro-regular-svg-icons/faShieldHalved';
import { faSidebarFlip } from '@fortawesome/pro-regular-svg-icons/faSidebarFlip';
import { faSignal } from '@fortawesome/pro-regular-svg-icons/faSignal';
import { faSitemap } from '@fortawesome/pro-regular-svg-icons/faSitemap';
import { faSliders } from '@fortawesome/pro-regular-svg-icons/faSliders';
import { faSpellCheck } from '@fortawesome/pro-regular-svg-icons/faSpellCheck';
import { faSquare } from '@fortawesome/pro-regular-svg-icons/faSquare';
import { faSquareCaretRight } from '@fortawesome/pro-regular-svg-icons/faSquareCaretRight';
import { faSquareCheck } from '@fortawesome/pro-regular-svg-icons/faSquareCheck';
import { faSquareList } from '@fortawesome/pro-regular-svg-icons/faSquareList';
import { faStar } from '@fortawesome/pro-regular-svg-icons/faStar';
import { faTag } from '@fortawesome/pro-regular-svg-icons/faTag';
import { faTags } from '@fortawesome/pro-regular-svg-icons/faTags';
import { faText } from '@fortawesome/pro-regular-svg-icons/faText';
import { faTextSlash } from '@fortawesome/pro-regular-svg-icons/faTextSlash';
import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons/faThumbsUp';
import { faTrashCan } from '@fortawesome/pro-regular-svg-icons/faTrashCan';
import { faTreePalm } from '@fortawesome/pro-regular-svg-icons/faTreePalm';
import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons/faTriangleExclamation';
import { faTrophyStar } from '@fortawesome/pro-regular-svg-icons/faTrophyStar';
import { faUnlockKeyhole } from '@fortawesome/pro-regular-svg-icons/faUnlockKeyhole';
import { faUpload } from '@fortawesome/pro-regular-svg-icons/faUpload';
import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import { faWandMagicSparkles } from '@fortawesome/pro-regular-svg-icons/faWandMagicSparkles';
import { faWindowMaximize } from '@fortawesome/pro-regular-svg-icons/faWindowMaximize';
import { faXmark } from '@fortawesome/pro-regular-svg-icons/faXmark';
import { faCommentsQuestion } from '@fortawesome/pro-regular-svg-icons/faCommentsQuestion';
import { faCommentsQuestionCheck } from '@fortawesome/pro-regular-svg-icons/faCommentsQuestionCheck';
import { faCalendarClock } from '@fortawesome/pro-regular-svg-icons/faCalendarClock';
import { faFileCheck } from '@fortawesome/pro-regular-svg-icons/faFileCheck';
import { faArrowDown as fasArrowDown } from '@fortawesome/pro-solid-svg-icons/faArrowDown';
import { faArrowLeft as fasArrowLeft } from '@fortawesome/pro-solid-svg-icons/faArrowLeft';
import { faArrowRight as fasArrowRight } from '@fortawesome/pro-solid-svg-icons/faArrowRight';
import { faArrowsLeftRight as fasArrowsLeftRight } from '@fortawesome/pro-solid-svg-icons/faArrowsLeftRight';
import { faArrowUp as fasArrowUp } from '@fortawesome/pro-solid-svg-icons/faArrowUp';
import { faBookmark as fasBookmark } from '@fortawesome/pro-solid-svg-icons/faBookmark';
import { faBookSparkles as fasBookSparkles } from '@fortawesome/pro-solid-svg-icons/faBookSparkles';
import { faCamera as fasCamera } from '@fortawesome/pro-solid-svg-icons/faCamera';
import { faCaretSquareRight as fasCaretSquareRight } from '@fortawesome/pro-solid-svg-icons/faCaretSquareRight';
import { faCheck as fasCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faCircleCheck as fasCircleCheck } from '@fortawesome/pro-solid-svg-icons/faCircleCheck';
import { faCirclePlay as fasCirclePlay } from '@fortawesome/pro-solid-svg-icons/faCirclePlay';
import { faComment as fasComment } from '@fortawesome/pro-solid-svg-icons/faComment';
import { faCompass as fasCompass } from '@fortawesome/pro-solid-svg-icons/faCompass';
import { faExclamation as fasExclamation } from '@fortawesome/pro-solid-svg-icons/faExclamation';
import { faFileLines as fasFileLines } from '@fortawesome/pro-solid-svg-icons/faFileLines';
import { faFilePen as fasFilePen } from '@fortawesome/pro-solid-svg-icons/faFilePen';
import { faFlask as fasFlask } from '@fortawesome/pro-solid-svg-icons/faFlask';
import { faFolder as fasFolder } from '@fortawesome/pro-solid-svg-icons/faFolder';
import { faGear as fasGear } from '@fortawesome/pro-solid-svg-icons/faGear';
import { faGears as fasGears } from '@fortawesome/pro-solid-svg-icons/faGears';
import { faHands as fasHands } from '@fortawesome/pro-solid-svg-icons/faHands';
import { faHandSpock as fasHandSpock } from '@fortawesome/pro-solid-svg-icons/faHandSpock';
import { faHeart as fasHeart } from '@fortawesome/pro-solid-svg-icons/faHeart';
import { faInfo as fasInfo } from '@fortawesome/pro-solid-svg-icons/faInfo';
import { faLightbulb as fasLightbulb } from '@fortawesome/pro-solid-svg-icons/faLightbulb';
import { faMemoCircleInfo as fasMemoCircleInfo } from '@fortawesome/pro-solid-svg-icons/faMemoCircleInfo';
import { faMessageQuestion as fasMessageQuestion } from '@fortawesome/pro-solid-svg-icons/faMessageQuestion';
import { faMessageXmark } from '@fortawesome/pro-regular-svg-icons/faMessageXmark';
import { faSitemap as fasSitemap } from '@fortawesome/pro-solid-svg-icons/faSitemap';
import { faSquareCheck as fasSquareCheck } from '@fortawesome/pro-solid-svg-icons/faSquareCheck';
import { faSquareList as fasSquareList } from '@fortawesome/pro-solid-svg-icons/faSquareList';
import { faStar as fasStar } from '@fortawesome/pro-solid-svg-icons/faStar';
import { faStethoscope } from '@fortawesome/pro-regular-svg-icons/faStethoscope';
import { faStopwatch as fasStopwach } from '@fortawesome/pro-solid-svg-icons/faStopwatch';
import { faThumbsUp as fasThumbsUp } from '@fortawesome/pro-solid-svg-icons/faThumbsUp';
import { faThumbtack as fasThumbtack } from '@fortawesome/pro-solid-svg-icons/faThumbtack';
import { faTriangleExclamation as fasTriangleExclamation } from '@fortawesome/pro-solid-svg-icons/faTriangleExclamation';
import { faUserDoctor as fasUserDoctor } from '@fortawesome/pro-solid-svg-icons/faUserDoctor';
import { faVideo as fasVideo } from '@fortawesome/pro-solid-svg-icons/faVideo';
import { faVolumeHigh as fasVolumeHigh } from '@fortawesome/pro-solid-svg-icons/faVolumeHigh';
import { faCircleDot as fasCircleDot } from '@fortawesome/pro-solid-svg-icons/faCircleDot';

import { faChevronLeft as falChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight as falChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';

import { faSpinnerThird as fadSpinnerThird } from '@fortawesome/pro-duotone-svg-icons/faSpinnerThird';

import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faUserGear } from '@fortawesome/pro-regular-svg-icons/faUserGear';

export const FONTAWESOME_ICONS = {
	FA_ADDRESS_CARD: faAddressCard,
	FA_ANGLE_DOWN: faAngleDown,
	FA_ANGLE_LEFT: faAngleLeft,
	FA_ANGLE_RIGHT: faAngleRight,
	FA_ANGLE_UP: faAngleUp,
	FA_ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER: faArrowDownLeftAndArrowUpRightToCenter,
	FA_ARROW_DOWN_SOLID: fasArrowDown,
	FA_ARROW_DOWN_TO_LINE: faArrowDownToLine,
	FA_ARROW_LEFT_SOLID: fasArrowLeft,
	FA_ARROW_POINTER: faArrowPointer,
	FA_ARROW_RIGHT_FROM_BRACKET: faArrowRightFromBracket,
	FA_ARROW_RIGHT_SOLID: fasArrowRight,
	FA_ARROW_ROTATE_LEFT: faArrowRotateLeft,
	FA_ARROW_ROTATE_RIGHT: faArrowRotateRight,
	FA_ARROW_UP_SOLID: fasArrowUp,
	FA_ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER: faArrowUpRightAndArrowDownLeftFromCenter,
	FA_ARROW_UP_RIGHT_FROM_SQUARE: faArrowUpRightFromSquare,
	FA_ARROWS_LEFT_RIGHT_SOLID: fasArrowsLeftRight,
	FA_ARROWS_MAXIMIZE: faArrowsMaximize,
	FA_ARROWS_ROTATE: faArrowsRotate,
	FA_ATOM: faAtom,
	FA_BADGE_PERCENT: faBadgePercent,
	FA_BAN: faBan,
	FA_BARS: faBars,
	FA_BELL: faBell,
	FA_BELL_SLASH: faBellSlash,
	FA_BOOK: faBook,
	FA_BOOK_BLANK: faBookBlank,
	FA_BOOK_COPY: faBookCopy,
	FA_BOOK_SPARKLES_SOLID: fasBookSparkles,
	FA_BOOKMARK_SOLID: fasBookmark,
	FA_BOX: faBox,
	FA_BOX_ARCHIVE: faBoxArchive,
	FA_CALENDAR: faCalendar,
	FA_CALENDAR_CLOCK: faCalendarClock,
	FA_CALENDAR_CIRCLE_EXCLAMATION: faCalendarCircleExclamation,
	FA_CALENDAR_CHECK: faCalendarCheck,
	FA_CALENDAR_DAY: faCalendarDay,
	FA_CALENDAR_DAYS: faCalendarDays,
	FA_CALENDAR_RANGE: faCalendarRange,
	FA_CAMERA_SOLID: fasCamera,
	FA_CARET_SQUARE_RIGHT_SOLID: fasCaretSquareRight,
	FA_CART_SHOPPING: faCartShopping,
	FA_CHART_COLUMN: faChartColumn,
	FA_CHART_LINE_UP: faChartLineUp,
	FA_CHECK_SOLID: fasCheck,
	FA_CHEVRON_DOWN: faChevronDown,
	FA_CHEVRON_LEFT: faChevronLeft,
	FA_CHEVRON_LEFT_LIGHT: falChevronLeft,
	FA_CHEVRON_RIGHT: faChevronRight,
	FA_CHEVRON_RIGHT_LIGHT: falChevronRight,
	FA_CHEVRON_UP: faChevronUp,
	FA_CIRCLE: faCircle,
	FA_CIRCLE_ARROW_LEFT: faCircleArrowLeft,
	FA_CIRCLE_ARROW_RIGHT: faCircleArrowRight,
	FA_CIRCLE_CHECK: faCircleCheck,
	FA_CIRCLE_CHECK_SOLID: fasCircleCheck,
	FA_CIRCLE_ELLIPSIS: faCircleEllipsis,
	FA_CIRCLE_EXCLAMATION: faCircleExclamation,
	FA_CIRCLE_INFO: faCircleInfo,
	FA_CIRCLE_NOTCH: faCircleNotch,
	FA_CIRCLE_PLAY_SOLID: fasCirclePlay,
	FA_CIRCLE_QUESTION: faCircleQuestion,
	FA_CIRCLE_XMARK: faCircleXmark,
	FA_CLIPBOARD_MEDICAL: faClipboardMedical,
	FA_CLIPBOARD_LIST: faClipboardList,
	FA_CLOCK: faClock,
	FA_CLOCK_ROTATE_LEFT: faClockRotateLeft,
	FA_CODE: faCode,
	FA_CODE_SIMPLE: faCodeSimple,
	FA_COMMENT: faComment,
	FA_COMMENT_DOTS: faCommentDots,
	FA_COMMENT_SOLID: fasComment,
	FA_COMMENTS: faComments,
	FA_COMMENTS_QUESTION: faCommentsQuestion,
	FA_COMMENTS_QUESTION_CHECK: faCommentsQuestionCheck,
	FA_COMPASS_SOLID: fasCompass,
	FA_COMPRESS: faCompress,
	FA_COPY: faCopy,
	FA_CREDIT_CARD: faCreditCard,
	FA_DOT_CIRCLE_SOLID: fasCircleDot,
	FA_EARTH_AMERICAS: faEarthAmericas,
	FA_ELLIPSIS: faEllipsis,
	FA_ELLIPSIS_VERTICAL: faEllipsisVertical,
	FA_EXCLAMATION_SOLID: fasExclamation,
	FA_EYE: faEye,
	FA_EYE_SLASH: faEyeSlash,
	FA_FACE_FROWN: faFaceFrown,
	FA_FACE_GRIMACE: faFaceGrimace,
	FA_FACE_MEH: faFaceMeh,
	FA_FACE_SMILE: faFaceSmile,
	FA_FACEBOOK: faFacebook,
	FA_FILE_CHECK: faFileCheck,
	FA_FILE_INVOICE_DOLLAR: faFileInvoiceDollar,
	FA_FILE_LINES: faFileLines,
	FA_FILE_LINES_SOLID: fasFileLines,
	FA_FILE_MAGNIFYING_GLASS: faFileMagnifyingGlass,
	FA_FILE_PEN_SOLID: fasFilePen,
	FA_FILM: faFilm,
	FA_FILTER: faFilter,
	FA_FLAG: faFlag,
	FA_FLASK_SOLID: fasFlask,
	FA_FLOPPY_DISK: faFloppyDisk,
	FA_FOLDER_SOLID: fasFolder,
	FA_GAUGE_HIGH: faGaugeHigh,
	FA_GEAR: faGear,
	FA_GEAR_SOLID: fasGear,
	FA_GEARS_SOLID: fasGears,
	FA_GEM: faGem,
	FA_GIFT: faGift,
	FA_GRADUATION_CAP: faGraduationCap,
	FA_GRID: faGrid,
	FA_HAND_POINT_LEFT: faHandPointLeft,
	FA_HAND_POINT_RIGHT: faHandPointRight,
	FA_HAND_SPOCK_SOLID: fasHandSpock,
	FA_HANDS_SOLID: fasHands,
	FA_HEART_PULSE: faHeartPulse,
	FA_HEART_SOLID: fasHeart,
	FA_HOURGLASS: faHourglass,
	FA_HOURGLASS_END: faHourglassEnd,
	FA_HOURGLASS_START: faHourglassStart,
	FA_HOUSE: faHouse,
	FA_IMAGES: faImages,
	FA_IMAGES_SOLID: fasImages,
	FA_INFO_SOLID: fasInfo,
	FA_KEY: faKey,
	FA_KEYBOARD: faKeyboard,
	FA_LIGHTBULB: faLightbulb,
	FA_LIGHTBULB_SOLID: fasLightbulb,
	FA_LINK: faLink,
	FA_LINK_SLASH: faLinkSlash,
	FA_LIST: faList,
	FA_LIST_CHECK: faListCheck,
	FA_LIST_OL: faListOl,
	FA_LOCATION_DOT: faLocationDot,
	FA_LOCK_KEYHOLE: faLockKeyhole,
	FA_MAGNIFYING_GLASS: faMagnifyingGlass,
	FA_MEDAL: faMedal,
	FA_MEMO_CIRCLE_INFO: faMemoCircleInfo,
	FA_MEMO_CIRCLE_INFO_SOLID: fasMemoCircleInfo,
	FA_MESSAGE_QUESTION_SOLID: fasMessageQuestion,
	FA_MESSAGE_XMARK: faMessageXmark,
	FA_MINUS: faMinus,
	FA_MONEY_BILL1: faMoneyBill1,
	FA_MUSIC: faMusic,
	FA_PAPER_PLANE: faPaperPlane,
	FA_PAPERCLIP: faPaperclip,
	FA_PEN_CIRCLE: faPenCircle,
	FA_PEN_FIELD: faPenField,
	FA_PENCIL: faPencil,
	FA_PLAY: faPlay,
	FA_PLUS: faPlus,
	FA_PRESENTATION_SCREEN: faPresentationScreen,
	FA_PRINT: faPrint,
	FA_RECTANGLE_CODE: faRectangleCode,
	FA_RECTANGLE_LIST: faRectangleList,
	FA_REPLY: faReply,
	FA_ROTATE_LEFT: faRotateLeft,
	FA_SHARE: faShare,
	FA_SHARE_NODES: faShareNodes,
	FA_SHIELD_HALVED: faShieldHalved,
	FA_SIDEBAR_FLIP: faSidebarFlip,
	FA_SIGNAL: faSignal,
	FA_SITEMAP: faSitemap,
	FA_SITEMAP_SOLID: fasSitemap,
	FA_SLIDERS: faSliders,
	FA_SPELL_CHECK: faSpellCheck,
	FA_SQUARE: faSquare,
	FA_SQUARE_CARET_RIGHT: faSquareCaretRight,
	FA_SQUARE_CHECK: faSquareCheck,
	FA_SQUARE_CHECK_SOLID: fasSquareCheck,
	FA_SQUARE_LIST: faSquareList,
	FA_SQUARE_LIST_SOLID: fasSquareList,
	FA_STAR: faStar,
	FA_STAR_SOLID: fasStar,
	FA_STETHOSCOPE: faStethoscope,
	FA_STOPWATCH_SOLID: fasStopwach,
	FA_TAG: faTag,
	FA_TAGS: faTags,
	FA_TEXT: faText,
	FA_TEXT_SLASH: faTextSlash,
	FA_THUMBS_UP: faThumbsUp,
	FA_THUMBS_UP_SOLID: fasThumbsUp,
	FA_THUMBTACK_SOLID: fasThumbtack,
	FA_TRASH_CAN: faTrashCan,
	FA_TREE_PALM: faTreePalm,
	FA_TRIANGLE_EXCLAMATION: faTriangleExclamation,
	FA_TRIANGLE_EXCLAMATION_SOLID: fasTriangleExclamation,
	FA_TROPHY_STAR: faTrophyStar,
	FA_UNLOCK_KEYHOLE: faUnlockKeyhole,
	FA_UPLOAD: faUpload,
	FA_USER: faUser,
	FA_USER_GEAR: faUserGear,
	FA_USER_DOCTOR_SOLID: fasUserDoctor,
	FA_VIDEO_SOLID: fasVideo,
	FA_VOLUME_HIGH_SOLID: fasVolumeHigh,
	FA_WAND_MAGIC_SPARKLES: faWandMagicSparkles,
	FA_WINDOW_MAXIMIZE: faWindowMaximize,
	FA_XMARK: faXmark,
	FAD_SPINNER_THIRD: fadSpinnerThird,
} as const;

export function initialize() {
	library.add(...Object.values(FONTAWESOME_ICONS));
}

export function initializeWithDomWatcher() {
	initialize();

	config.autoReplaceSvg = 'nest';
	dom.watch();
}

export type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
