import { defineComponent as A, mergeModels as R, createPropsRestProxy as L, useSlots as T, useModel as D, computed as m, provide as I, toRef as f, createBlock as O, openBlock as g, normalizeProps as y, guardReactiveProps as B, createSlots as h, withCtx as o, createVNode as k, unref as u, isRef as V, renderSlot as a } from "vue";
import { CheckboxGroupRoot as $ } from "reka-ui";
import M from "../FormField/FormField.vue.js";
import { extractFormFieldProps as P } from "../FormField/FormField.utils.js";
import { CHECKBOX_STATES as s, CHECKBOX_ELEVATIONS as U, CHECKBOX_SIZES as N } from "../Checkbox/Checkbox.consts.js";
import { CHECKBOX_GROUP_INJECTION_KEY as z } from "./CheckboxGroupField.consts.js";
import { useFormFieldWithinForm as K } from "../../../composables/useFormFieldWithinForm.js";
import { FORM_FIELD_STATES as t } from "../FormField/FormField.consts.js";
const Y = /* @__PURE__ */ A({
  __name: "CheckboxGroupField",
  props: /* @__PURE__ */ R({
    size: { default: () => N.SMALL },
    state: {},
    elevation: { default: () => U.NONE },
    name: {},
    label: {},
    hasRequiredIndicator: { type: Boolean },
    labelInfo: {},
    subLabel: {},
    fieldId: {},
    messageText: {}
  }, {
    modelValue: {
      default: []
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const p = L(l, ["size", "elevation", "name"]), v = T(), E = D(l, "modelValue"), { value: d, errors: S } = K(() => l.name, E), r = m(() => P(p, S.value)), b = m(() => !!(r.value.messageText || v.message)), c = m(() => ({
      [t.DEFAULT]: s.DEFAULT,
      [t.ERROR]: s.ERROR,
      [t.DISABLED]: s.DISABLED,
      [t.SUCCESS]: s.DEFAULT
    })[r.value.state || s.DEFAULT]);
    return I(z, {
      size: f(() => l.size),
      state: c,
      elevation: f(() => l.elevation)
    }), (e, n) => (g(), O(M, y(B(r.value)), h({
      field: o(({ messageId: i, labelId: F }) => [
        k(u($), {
          modelValue: u(d),
          "onUpdate:modelValue": n[0] || (n[0] = (C) => V(d) ? d.value = C : null),
          class: "ds-checkboxGroupField",
          role: "group",
          "aria-describedby": b.value ? i : void 0,
          "aria-labelledby": F,
          disabled: r.value.state === u(t).DISABLED,
          loop: ""
        }, {
          default: o(() => [
            a(e.$slots, "field", {}, void 0, !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "aria-describedby", "aria-labelledby", "disabled"])
      ]),
      _: 2
    }, [
      e.$slots.labelAside ? {
        name: "labelAside",
        fn: o(() => [
          a(e.$slots, "labelAside", {}, void 0, !0)
        ]),
        key: "0"
      } : void 0,
      e.$slots.help ? {
        name: "help",
        fn: o(() => [
          a(e.$slots, "help", {}, void 0, !0)
        ]),
        key: "1"
      } : void 0,
      e.$slots.message ? {
        name: "message",
        fn: o(({ messageId: i }) => [
          a(e.$slots, "message", { messageId: i }, void 0, !0)
        ]),
        key: "2"
      } : void 0,
      e.$slots.fieldStatus ? {
        name: "fieldStatus",
        fn: o(() => [
          a(e.$slots, "fieldStatus", {}, void 0, !0)
        ]),
        key: "3"
      } : void 0
    ]), 1040));
  }
});
export {
  Y as default
};
//# sourceMappingURL=CheckboxGroupField.vue2.js.map
