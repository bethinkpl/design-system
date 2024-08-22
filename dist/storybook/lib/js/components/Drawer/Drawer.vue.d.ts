import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { DrawerPosition } from './Drawer.consts';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
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
}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
