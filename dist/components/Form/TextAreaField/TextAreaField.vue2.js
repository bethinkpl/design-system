import { defineComponent as $, mergeModels as h, useCssVars as D, computed as a, createPropsRestProxy as M, useSlots as z, useModel as E, createBlock as F, openBlock as p, unref as t, normalizeProps as x, guardReactiveProps as w, createSlots as C, withCtx as n, createElementVNode as L, normalizeClass as O, withDirectives as U, mergeProps as b, isRef as P, createElementBlock as W, vModelText as q, renderSlot as d } from "vue";
import N from "../FormField/FormField.vue.js";
import { FORM_FIELD_STATES as g } from "../FormField/FormField.consts.js";
import { extractFormFieldProps as j } from "../FormField/FormField.utils.js";
import G from "./TextAreaFieldAutosized.vue.js";
import { useTextFieldWithinForm as H } from "../../../composables/useTextFieldWithinForm.js";
const J = ["id", "aria-describedby"], K = 3, se = /* @__PURE__ */ $({
  __name: "TextAreaField",
  props: /* @__PURE__ */ h({
    inputProps: {},
    isAutoresizing: { type: Boolean, default: !1 },
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
  setup(i) {
    D((e) => ({
      "7315b33f": k.value
    }));
    const A = M(i, ["inputProps", "isAutoresizing", "name"]), y = z(), I = E(i, "modelValue"), {
      value: r,
      errors: S,
      onInput: B,
      onBlur: V
    } = H(() => i.name, I), { formFieldProps: f, isDisabled: c, hasMessage: v } = R(), { finalInputProps: u } = T(), k = a(() => u.value.rows);
    function R() {
      const e = a(
        () => (
          // this is needed to avoid passing modelValue to FormField as prop
          j(A, S.value)
        )
      ), o = a(() => e.value.state === g.DISABLED), s = a(() => !!(e.value.messageText || y.message));
      return { formFieldProps: e, isDisabled: o, hasMessage: s };
    }
    function T() {
      return { finalInputProps: a(() => ({
        disabled: c.value,
        rows: K,
        ...i.inputProps,
        onInput: (o) => {
          var s, l;
          B(), (l = (s = i.inputProps) == null ? void 0 : s.onInput) == null || l.call(s, o);
        },
        onBlur: (o) => {
          var s, l;
          V(o), (l = (s = i.inputProps) == null ? void 0 : s.onBlur) == null || l.call(s, o);
        }
      })) };
    }
    return (e, o) => (p(), F(t(N), x(w(t(f))), C({
      field: n(({ fieldId: s, messageId: l }) => [
        L("div", {
          class: O([
            "ds-textAreaField",
            {
              "-ds-autoresizing": e.isAutoresizing,
              "-ds-error": t(f).state === t(g).ERROR,
              "-ds-disabled": t(c)
            }
          ])
        }, [
          e.isAutoresizing ? (p(), F(G, b({ key: 0 }, t(u), {
            id: s,
            modelValue: t(r),
            "onUpdate:modelValue": o[0] || (o[0] = (m) => P(r) ? r.value = m : null),
            class: "ds-textAreaField__input",
            "aria-describedby": t(v) ? l : void 0
          }), null, 16, ["id", "modelValue", "aria-describedby"])) : U((p(), W("textarea", b({ key: 1 }, t(u), {
            id: s,
            "onUpdate:modelValue": o[1] || (o[1] = (m) => P(r) ? r.value = m : null),
            class: "ds-textAreaField__input",
            "aria-describedby": t(v) ? l : void 0
          }), null, 16, J)), [
            [q, t(r)]
          ])
        ], 2)
      ]),
      _: 2
    }, [
      e.$slots.help ? {
        name: "help",
        fn: n(() => [
          d(e.$slots, "help", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      e.$slots.labelAside ? {
        name: "labelAside",
        fn: n(() => [
          d(e.$slots, "labelAside", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      e.$slots.message ? {
        name: "message",
        fn: n(({ messageId: s }) => [
          d(e.$slots, "message", { messageId: s }, void 0, !0)
        ]),
        key: "2"
      } : void 0,
      e.$slots.fieldStatus ? {
        name: "fieldStatus",
        fn: n(() => [
          d(e.$slots, "fieldStatus", {}, void 0, !0)
        ]),
        key: "3"
      } : void 0
    ]), 1040));
  }
});
export {
  se as default
};
//# sourceMappingURL=TextAreaField.vue2.js.map
