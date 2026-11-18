import { defineComponent as v, useSlots as I, useId as p, computed as r, createElementBlock as l, openBlock as s, normalizeClass as k, unref as d, createCommentVNode as a, createElementVNode as o, renderSlot as t, toDisplayString as n, createBlock as $, withCtx as y, createTextVNode as S } from "vue";
import T from "./FormFieldMessage/FormFieldMessage.vue.js";
import { FORM_FIELD_STATES as b } from "./FormField.consts.js";
const L = {
  key: 0,
  class: "ds-formField__labels"
}, A = { class: "ds-formField__labelRow" }, R = { class: "ds-formField__labelWrapper" }, E = ["id", "for"], M = { class: "ds-formField__labelText" }, B = {
  key: 0,
  class: "ds-formField__labelRequired",
  "aria-hidden": "true"
}, D = {
  key: 1,
  class: "ds-formField__labelInfo"
}, w = {
  key: 0,
  class: "ds-formField__labelAside"
}, C = {
  key: 0,
  class: "ds-formField__subLabelRow"
}, q = { class: "ds-formField__field" }, N = {
  key: 1,
  class: "ds-formField__footerRow"
}, V = { class: "ds-formField__message" }, z = {
  key: 0,
  class: "ds-formField__fieldStatus"
}, j = /* @__PURE__ */ v({
  __name: "FormField",
  props: {
    label: {},
    state: { default: () => b.DEFAULT },
    hasRequiredIndicator: { type: Boolean, default: !1 },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  },
  setup(m) {
    const c = I(), h = p(), i = r(() => m.fieldId || `form-field-${h}`), f = r(() => `${i.value}-label`), { hasMessage: g, messageId: u } = F();
    function F() {
      const e = r(() => !!(c.message || m.messageText)), _ = r(() => `${i.value}-message`);
      return {
        hasMessage: e,
        messageId: _
      };
    }
    return (e, _) => (s(), l("div", {
      class: k([
        "ds-formField",
        {
          "-ds-disabled": e.state === d(b).DISABLED
        }
      ])
    }, [
      e.label || e.subLabel || e.$slots.labelAside ? (s(), l("div", L, [
        o("div", A, [
          o("div", R, [
            e.label ? (s(), l("label", {
              key: 0,
              id: f.value,
              class: "ds-formField__label",
              for: i.value
            }, [
              o("span", M, n(e.label), 1),
              e.hasRequiredIndicator ? (s(), l("span", B, "*")) : a("", !0),
              e.labelInfo ? (s(), l("span", D, n(e.labelInfo), 1)) : a("", !0)
            ], 8, E)) : a("", !0),
            t(e.$slots, "help", {}, void 0, !0)
          ]),
          e.$slots.labelAside ? (s(), l("div", w, [
            t(e.$slots, "labelAside", {}, void 0, !0)
          ])) : a("", !0)
        ]),
        e.subLabel ? (s(), l("div", C, n(e.subLabel), 1)) : a("", !0)
      ])) : a("", !0),
      o("div", q, [
        t(e.$slots, "field", {
          fieldId: i.value,
          messageId: d(u),
          labelId: f.value
        }, void 0, !0)
      ]),
      d(g) || e.$slots.fieldStatus ? (s(), l("div", N, [
        o("div", V, [
          t(e.$slots, "message", { messageId: d(u) }, () => [
            e.messageText ? (s(), $(T, {
              key: 0,
              state: e.state,
              "message-id": d(u)
            }, {
              default: y(() => [
                S(n(e.messageText), 1)
              ]),
              _: 1
            }, 8, ["state", "message-id"])) : a("", !0)
          ], !0)
        ]),
        e.$slots.fieldStatus ? (s(), l("div", z, [
          t(e.$slots, "fieldStatus", {}, void 0, !0)
        ])) : a("", !0)
      ])) : a("", !0)
    ], 2));
  }
});
export {
  j as default
};
//# sourceMappingURL=FormField.vue2.js.map
