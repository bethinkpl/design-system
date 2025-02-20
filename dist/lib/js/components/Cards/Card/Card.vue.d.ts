import { PropType } from 'vue';
import { LoadingBarColors } from '../../LoadingBar';
import { CardBorderColors, CardBorderPositions, CardBorderSizes } from './Card.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    headerHasPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    dividerUnderHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderPosition: {
        type: PropType<CardBorderPositions>;
        default: string;
    };
    borderSize: {
        type: PropType<CardBorderSizes>;
        default: string;
    };
    borderColor: {
        type: PropType<CardBorderColors>;
        default: string;
    };
    hasLoadingBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingBarColor: {
        type: PropType<LoadingBarColors>;
        default: string;
    };
    loadingBarTime: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    hasLeftBoarder(): any;
    hasTopBoarder(): any;
    borderColorClass(): string;
    borderSizeClass(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    headerHasPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    dividerUnderHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderPosition: {
        type: PropType<CardBorderPositions>;
        default: string;
    };
    borderSize: {
        type: PropType<CardBorderSizes>;
        default: string;
    };
    borderColor: {
        type: PropType<CardBorderColors>;
        default: string;
    };
    hasLoadingBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingBarColor: {
        type: PropType<LoadingBarColors>;
        default: string;
    };
    loadingBarTime: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    headerHasPadding: boolean;
    dividerUnderHeader: boolean;
    hasBorder: boolean;
    borderPosition: string;
    borderSize: string;
    borderColor: string;
    hasLoadingBar: boolean;
    loadingBarColor: string;
    loadingBarTime: string;
}, {}, {
    DsDivider: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        isVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>, {}, {
        DIVIDER_PROMINENCES: Readonly<{
            DEFAULT: string;
            STRONG: string;
            WEAK: string;
        }>;
    }, {
        sizeClass(): string;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        isVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {
        size: string;
        isVertical: boolean;
        prominence: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    DsLoadingBar: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        color: {
            type: PropType<LoadingBarColors>;
            default: string;
        };
        size: {
            type: PropType<import('../../LoadingBar').LoadingBarSizes>;
            default: string;
        };
        time: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {
        intervalId: number;
        width: number;
    }, {
        sizeClassName(): string;
        loadingBarStyles(): {
            width: string;
            transition: string;
        };
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
            type: PropType<LoadingBarColors>;
            default: string;
        };
        size: {
            type: PropType<import('../../LoadingBar').LoadingBarSizes>;
            default: string;
        };
        time: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {
        size: string;
        color: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
