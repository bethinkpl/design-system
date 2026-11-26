import r from "./SelectionControl.vue2.js";
import { resolveComponent as d, createElementBlock as l, openBlock as t, normalizeClass as a, createElementVNode as n, createCommentVNode as p, createVNode as c, toDisplayString as C } from "vue";
/* empty css                      */
import u from "../../../_virtual/_plugin-vue_export-helper.js";
const T = { class: "ds-selectionControl__iconWrapper" }, E = {
  key: 0,
  class: "ds-selectionControl__labelWrapper"
}, m = { class: "ds-selectionControl__label" }, O = ["type", "value"];
function S(o, e, N, f, L, _) {
  const i = d("icon");
  return t(), l("label", {
    class: a(["ds-selectionControl", [
      `-ds-${o.size}`,
      {
        "-ds-selected": o.isSelected,
        "-ds-default": o.state === o.SELECTION_CONTROL_STATE.DEFAULT,
        "-ds-disabled": o.state === o.SELECTION_CONTROL_STATE.DISABLED,
        "-ds-loading": o.state === o.SELECTION_CONTROL_STATE.LOADING,
        "-ds-focused": o.isFocused
      }
    ]])
  }, [
    n("span", T, [
      c(i, {
        icon: o.icon,
        size: o.iconSize,
        class: "ds-selectionControl__icon"
      }, null, 8, ["icon", "size"])
    ]),
    o.label ? (t(), l("span", E, [
      n("span", m, C(o.label), 1)
    ])) : p("", !0),
    n("input", {
      type: o.type === o.SELECTION_CONTROL_TYPE.CHECKBOX ? "checkbox" : "radio",
      class: "ds-selectionControl__checkbox",
      value: o.isSelected,
      onChange: e[0] || (e[0] = (...s) => o.onToggle && o.onToggle(...s)),
      onFocus: e[1] || (e[1] = (...s) => o.onFocus && o.onFocus(...s)),
      onBlur: e[2] || (e[2] = (...s) => o.onBlur && o.onBlur(...s))
    }, null, 40, O)
  ], 2);
}
const A = /* @__PURE__ */ u(r, [["render", S], ["__scopeId", "data-v-f5cd8746"]]);
export {
  A as default
};
//# sourceMappingURL=SelectionControl.vue.js.map
