import { defineComponent as k, mergeModels as p, useModel as z, inject as O, computed as t, createElementBlock as B, openBlock as r, normalizeClass as X, unref as l, createVNode as C, createBlock as m, createCommentVNode as R, withCtx as L, renderSlot as U } from "vue";
import { CheckboxRoot as V, CheckboxIndicator as N } from "reka-ui";
import { CHECKBOX_SIZES as s, CHECKBOX_STATES as n, CHECKBOX_ELEVATIONS as M } from "./Checkbox.consts.js";
import S from "../../Icons/Icon/Icon.vue.js";
import { CHECKBOX_GROUP_INJECTION_KEY as T } from "../CheckboxGroupField/CheckboxGroupField.consts.js";
import F from "../FormControlLabel/FormControlLabel.vue.js";
import { FORM_CONTROL_STATE as D } from "../FormControlLabel/FormControlLabel.consts.js";
import { ICON_SIZES as E, ICONS as _ } from "../../Icons/Icon/Icon.consts.js";
const $ = /* @__PURE__ */ k({
  __name: "Checkbox",
  props: /* @__PURE__ */ p({
    size: {},
    state: {},
    elevation: {},
    value: {}
  }, {
    modelValue: {
      default: !1
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(A) {
    const u = A, f = z(A, "modelValue"), o = O(T, null), i = t(() => {
      var e, a;
      return (a = (e = u.size) != null ? e : o == null ? void 0 : o.size.value) != null ? a : s.SMALL;
    }), d = t(() => {
      var e, a;
      return (a = (e = u.state) != null ? e : o == null ? void 0 : o.state.value) != null ? a : n.DEFAULT;
    }), I = t(
      () => {
        var e, a;
        return (a = (e = u.elevation) != null ? e : o == null ? void 0 : o.elevation.value) != null ? a : M.X_SMALL;
      }
    ), b = t(() => {
      var e;
      if (o && !u.value)
        throw new Error(
          '[Checkbox]: When used inside a CheckboxGroupField, each Checkbox should have a unique "value" prop.'
        );
      return (e = u.value) != null ? e : "on";
    }), v = t(() => {
      switch (i.value) {
        case s.X_SMALL:
          return E.XX_SMALL;
        case s.SMALL:
          return E.X_SMALL;
        default:
        case s.MEDIUM:
          return E.SMALL;
      }
    }), h = t(() => d.value === n.DISABLED ? D.DISABLED : D.DEFAULT);
    return (e, a) => (r(), B("label", {
      class: X([
        "ds-checkbox",
        {
          "-ds-x-small": i.value === l(s).X_SMALL,
          "-ds-small": i.value === l(s).SMALL,
          "-ds-medium": i.value === l(s).MEDIUM,
          "-ds-elevation": I.value === l(M).X_SMALL,
          "-ds-disabled": d.value === l(n).DISABLED,
          "-ds-error": d.value === l(n).ERROR
        }
      ])
    }, [
      C(l(V), {
        modelValue: f.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => f.value = c),
        disabled: d.value === l(n).DISABLED,
        class: "ds-checkbox__root",
        value: b.value
      }, {
        default: L(({ state: c }) => [
          C(l(N), {
            "force-mount": !0,
            class: "ds-checkbox__indicator",
            as: "div"
          }, {
            default: L(() => [
              c === "indeterminate" ? (r(), m(S, {
                key: 0,
                icon: l(_).FAD_SQUARE_MINUS,
                size: v.value
              }, null, 8, ["icon", "size"])) : c ? (r(), m(S, {
                key: 1,
                icon: l(_).FAD_SQUARE_CHECK,
                size: v.value
              }, null, 8, ["icon", "size"])) : (r(), m(S, {
                key: 2,
                icon: l(_).FAD_SQUARE,
                size: v.value
              }, null, 8, ["icon", "size"]))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "value"]),
      e.$slots.default ? (r(), m(F, {
        key: 0,
        size: i.value,
        state: h.value
      }, {
        default: L(() => [
          U(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["size", "state"])) : R("", !0)
    ], 2));
  }
});
export {
  $ as default
};
//# sourceMappingURL=Checkbox.vue2.js.map
