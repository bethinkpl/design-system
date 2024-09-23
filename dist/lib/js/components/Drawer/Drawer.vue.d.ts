import { PropType } from 'vue';
import { DrawerPosition } from './Drawer.consts';

declare const _default: import('vue').DefineComponent<{
    position: {
        type: PropType<DrawerPosition>;
        default: "right";
        validator(position: unknown): boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    positionClassName(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    position: {
        type: PropType<DrawerPosition>;
        default: "right";
        validator(position: unknown): boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    position: DrawerPosition;
    stickyHeader: boolean;
    stickyFooter: boolean;
}>;
export default _default;
