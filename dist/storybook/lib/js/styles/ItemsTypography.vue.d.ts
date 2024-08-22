import { PropType } from '../../../vue/dist/vue.esm-bundler.js';
import { TypographyToken } from './TokenTypes';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    items: {
        type: PropType<TypographyToken[]>;
        required: true;
    };
}, unknown, unknown, {}, {
    attributesAsStyle(attributes: any): string;
    variableToValue(variable: any): string | undefined;
}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    items: {
        type: PropType<TypographyToken[]>;
        required: true;
    };
}>>, {}>;
export default _default;
