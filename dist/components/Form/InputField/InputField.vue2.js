import { defineComponent as h, mergeModels as k, createPropsRestProxy as D, useSlots as $, useModel as E, computed as d, createBlock as f, openBlock as u, unref as l, normalizeProps as R, guardReactiveProps as A, createSlots as M, withCtx as n, createElementVNode as p, normalizeClass as V, createCommentVNode as c, withDirectives as L, createElementBlock as x, renderSlot as r, mergeProps as C, isRef as z, vModelDynamic as N, toDisplayString as O } from "vue";
import w from "../FormField/FormField.vue.js";
import { FORM_FIELD_STATES as m } from "../FormField/FormField.consts.js";
import q from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as U } from "../../Icons/Icon/Icon.consts.js";
import { extractFormFieldProps as W } from "../FormField/FormField.utils.js";
import { useTextFieldWithinForm as X } from "../../../composables/useTextFieldWithinForm.js";
const Z = ["id", "aria-describedby"], j = {
  key: 1,
  class: "ds-inputField__suffixText"
}, ee = /* @__PURE__ */ h({
  __name: "InputField",
  props: /* @__PURE__ */ k({
    inputProps: {},
    leftIcon: {},
    suffixText: {},
    name: {},
    label: {},
    state: {},
    hasRequiredIndicator: { type: Boolean },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const v = D(t, ["inputProps", "leftIcon", "suffixText", "name"]), I = $(), F = E(t, "modelValue"), {
      value: a,
      errors: S,
      onInput: b,
      onBlur: P
    } = X(() => t.name, F), i = d(() => W(v, S.value)), y = d(() => !!(i.value.messageText || I.message)), g = d(() => ({
      disabled: i.value.state === m.DISABLED,
      ...t.inputProps,
      onInput: (e) => {
        var o, s;
        b(), (s = (o = t.inputProps) == null ? void 0 : o.onInput) == null || s.call(o, e);
      },
      onBlur: (e) => {
        var o, s;
        P(e), (s = (o = t.inputProps) == null ? void 0 : o.onBlur) == null || s.call(o, e);
      }
    }));
    return (e, o) => (u(), f(l(w), R(A(i.value)), M({
      field: n(({ fieldId: s, messageId: B }) => [
        p("div", {
          class: V([
            "ds-inputField",
            {
              "-ds-error": i.value.state === l(m).ERROR,
              "-ds-disabled": i.value.state === l(m).DISABLED
            }
          ])
        }, [
          e.leftIcon ? (u(), f(l(q), {
            key: 0,
            icon: e.leftIcon,
            class: "ds-inputField__leftIcon",
            size: l(U).X_SMALL
          }, null, 8, ["icon", "size"])) : c("", !0),
          L(p("input", C(g.value, {
            id: s,
            "onUpdate:modelValue": o[0] || (o[0] = (T) => z(a) ? a.value = T : null),
            class: "ds-inputField__input",
            "aria-describedby": y.value ? B : void 0
          }), null, 16, Z), [
            [N, l(a)]
          ]),
          e.suffixText ? (u(), x("div", j, O(e.suffixText), 1)) : c("", !0),
          r(e.$slots, "action", {}, void 0, !0)
        ], 2)
      ]),
      _: 2
    }, [
      e.$slots.help ? {
        name: "help",
        fn: n(() => [
          r(e.$slots, "help", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      e.$slots.labelAside ? {
        name: "labelAside",
        fn: n(() => [
          r(e.$slots, "labelAside", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      e.$slots.message ? {
        name: "message",
        fn: n(({ messageId: s }) => [
          r(e.$slots, "message", { messageId: s }, void 0, !0)
        ]),
        key: "2"
      } : void 0,
      e.$slots.fieldStatus ? {
        name: "fieldStatus",
        fn: n(() => [
          r(e.$slots, "fieldStatus", {}, void 0, !0)
        ]),
        key: "3"
      } : void 0
    ]), 1040));
  }
});
export {
  ee as default
};
//# sourceMappingURL=InputField.vue2.js.map
