import { defineComponent as U, mergeModels as v, createPropsRestProxy as $, useSlots as B, useModel as O, ref as V, watch as M, computed as m, createBlock as p, openBlock as r, unref as i, normalizeProps as j, guardReactiveProps as q, createSlots as w, withCtx as n, createElementBlock as I, createVNode as z, Fragment as G, renderList as H, renderSlot as d } from "vue";
import { PinInputRoot as W, PinInputInput as Y } from "reka-ui";
import Z from "../FormField/FormField.vue.js";
import { FORM_FIELD_STATES as _ } from "../FormField/FormField.consts.js";
import { extractFormFieldProps as J } from "../FormField/FormField.utils.js";
import K from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as Q, ICONS as X } from "../../Icons/Icon/Icon.consts.js";
import { PIN_INPUT_FIELD_STATES as c, PIN_INPUT_FIELD_TYPES as x, PIN_INPUT_FIELD_DEFAULT_LENGTH as ee } from "./PinInputField.consts.js";
import { toPinChars as b } from "./PinInputField.utils.js";
import { usePinInputFieldWithinForm as le } from "./usePinInputFieldWithinForm.js";
const te = {
  key: 0,
  class: "ds-pinInputField -ds-loading",
  "aria-busy": "true"
}, ce = /* @__PURE__ */ U({
  __name: "PinInputField",
  props: /* @__PURE__ */ v({
    state: { default: () => c.DEFAULT },
    length: { default: () => ee },
    otp: { type: Boolean, default: !0 },
    type: { default: () => x.NUMBER },
    name: {},
    ariaLabel: {},
    label: {},
    hasRequiredIndicator: { type: Boolean },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ v(["complete"], ["update:modelValue"]),
  setup(l, { emit: g }) {
    const F = $(l, ["length", "state", "otp", "type", "ariaLabel", "name"]), h = B(), y = g, P = O(l, "modelValue"), { value: u, errors: E, onComplete: R, onBlur: T } = le(() => l.name, P), t = V(b(u.value, l.length));
    function L(e) {
      t.value = e, u.value = e.join("");
    }
    M([u, () => l.length], ([e]) => {
      const o = e != null ? e : "";
      if (t.value.length <= l.length && t.value.join("") === o)
        return;
      t.value = b(e, l.length);
      const a = t.value.join("");
      a !== o && (u.value = a);
    });
    const s = m(() => J(
      {
        ...F,
        state: l.state === c.ERROR ? _.ERROR : void 0
      },
      E.value
    )), S = m(() => l.state === c.LOADING), N = m(() => !!(s.value.messageText || h.message));
    function k(e) {
      const o = e.currentTarget;
      o != null && o.contains(e.relatedTarget) || T(e);
    }
    function A() {
      R(new Event("blur")), y("complete", t.value.join(""));
    }
    return (e, o) => (r(), p(i(Z), j(q(s.value)), w({
      field: n(({ fieldId: a, messageId: D, labelId: C }) => [
        S.value ? (r(), I("div", te, [
          z(i(K), {
            class: "ds-pinInputField__spinner",
            icon: i(X).FAD_SPINNER_THIRD,
            size: i(Q).LARGE,
            spinning: ""
          }, null, 8, ["icon", "size"])
        ])) : (r(), p(i(W), {
          key: 1,
          id: a,
          class: "ds-pinInputField",
          role: "group",
          "model-value": t.value,
          otp: e.otp,
          type: e.type,
          required: s.value.hasRequiredIndicator,
          "aria-labelledby": s.value.label ? C : void 0,
          "aria-label": s.value.label ? void 0 : e.ariaLabel,
          "aria-describedby": N.value ? D : void 0,
          onComplete: A,
          onFocusout: k,
          "onUpdate:modelValue": L
        }, {
          default: n(() => [
            (r(!0), I(G, null, H(e.length, (f) => (r(), p(i(Y), {
              key: f,
              class: "ds-pinInputField__item",
              index: f - 1
            }, null, 8, ["index"]))), 128))
          ]),
          _: 2
        }, 1032, ["id", "model-value", "otp", "type", "required", "aria-labelledby", "aria-label", "aria-describedby"]))
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
        fn: n(({ messageId: a }) => [
          d(e.$slots, "message", { messageId: a }, void 0, !0)
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
  ce as default
};
//# sourceMappingURL=PinInputField.vue2.js.map
