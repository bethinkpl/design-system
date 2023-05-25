import { PropType } from 'vue';
import { ThreeColumnLayoutRightColumnSize } from './ThreeColumnLayout.consts';
declare const _default: {
    name: string;
    props: {
        rightColumnSize: {
            type: PropType<ThreeColumnLayoutRightColumnSize>;
            default: "medium";
            validator(rightColumnSize: any): boolean;
        };
        rightColumnVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        leftColumnVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        initialMobileRightColumnVisibleState: {
            type: BooleanConstructor;
            default: boolean;
        };
        initialMobileLeftColumnVisibleState: {
            type: BooleanConstructor;
            default: boolean;
        };
        contentWithoutPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
    data(): {
        THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE: Readonly<{
            readonly MEDIUM: "medium";
            readonly LARGE: "large";
        }>;
        leftColumnVisibleMobile: boolean;
        rightColumnVisibleMobile: boolean;
    };
    watch: {
        leftColumnVisible(state: any): void;
        rightColumnVisible(state: any): void;
    };
    created(): void;
};
export default _default;
