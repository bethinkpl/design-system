import { PropType } from 'vue';
import DsTile from '../../Tile';
declare const _default: {
    name: string;
    components: {
        DatePickerBox: typeof DsTile;
        DsTile: typeof DsTile;
    };
    props: {
        triggerType: {
            type: PropType<string>;
            default: string;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        date: {
            type: DateConstructor;
            default: null;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        isLabelUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: (ObjectConstructor | null)[];
            default: import("@fortawesome/fontawesome-common-types").IconDefinition;
            validate: (icon: any) => boolean;
        };
        isIconHiddenOnMobile: {
            type: BooleanConstructor;
            default: boolean;
        };
        calendarPosition: {
            type: PropType<string>;
            default: string;
        };
        errorMessage: {
            type: StringConstructor;
            default: string;
        };
        state: {
            type: PropType<string>;
            default: string;
        };
        color: {
            type: PropType<string>;
            default: string;
        };
        disableDates: {
            type: ArrayConstructor;
            default: () => never[];
        };
        minDate: {
            type: DateConstructor;
            default: null;
        };
        maxDate: {
            type: DateConstructor;
            default: null;
        };
    };
    emits: {
        'update:date': () => boolean;
    };
    data(): {
        datePicker: null;
        isOpen: boolean;
        DATE_PICKER_STATES: Readonly<{
            DEFAULT: string;
            DISABLED: string;
            LOADING: string;
        }>;
        DATE_PICKER_TRIGGER_TYPES: Readonly<{
            BOX: string;
            TILE: string;
        }>;
    };
    computed: {
        isDatePickerEnabled(): any;
        eyebrowText(): string;
        text(): any;
        flatpickrConfigString(): any[];
    };
    watch: {
        flatpickrConfigString: {
            handler(): void;
            flush: "post";
        };
    };
    mounted(): Promise<void>;
    unmounted(): void;
    methods: {
        toggle(): void;
    };
};
export default _default;
