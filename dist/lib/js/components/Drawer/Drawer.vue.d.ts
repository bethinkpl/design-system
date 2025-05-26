import { PropType } from 'vue';
import { DrawerPosition } from './Drawer.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    position: {
        type: PropType<DrawerPosition>;
        default: "right";
        validator(position: DrawerPosition): boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    positionClassName(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    position: {
        type: PropType<DrawerPosition>;
        default: "right";
        validator(position: DrawerPosition): boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    position: DrawerPosition;
    stickyHeader: boolean;
    stickyFooter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
