import { defineComponent as O, computed as C, createElementBlock as u, openBlock as l, normalizeClass as f, unref as s, createElementVNode as a, createBlock as T, createCommentVNode as S, toDisplayString as L } from "vue";
import { SELECTION_TILE_STATE as t, SELECTION_TILE_TYPE as m } from "./SelectionTile.consts.js";
import N from "../Icons/Icon/Icon.vue.js";
import { SELECTION_CONTROL_STATE as r, SELECTION_CONTROL_SIZE as B } from "../Form/SelectionControl/SelectionControl.consts.js";
import v from "../Form/Checkbox/Checkbox.vue.js";
import k from "../Form/RadioButton/RadioButton.vue.js";
import { CHECKBOX_STATES as c, CHECKBOX_SIZES as U } from "../Form/Checkbox/Checkbox.consts.js";
import { ICON_SIZES as g, ICONS as y } from "../Icons/Icon/Icon.consts.js";
const F = { class: "ds-selectionTile__wrapper" }, R = { class: "ds-selectionTile__textWrapper" }, z = { class: "ds-selectionTile__title" }, X = {
  key: 0,
  class: "ds-selectionTile__supportingText"
}, w = /* @__PURE__ */ O({
  __name: "SelectionTile",
  props: {
    type: { default: () => m.RADIO_BUTTON },
    title: {},
    supportingText: { default: null },
    icon: { default: null },
    isSelected: { type: Boolean, default: !1 },
    state: { default: () => t.DEFAULT }
  },
  emits: ["update:is-selected", "icon-click"],
  setup(E, { emit: A }) {
    const D = {
      [t.DEFAULT]: r.DEFAULT,
      [t.LOADING]: r.LOADING,
      [t.DISABLED]: r.DISABLED
    }, I = {
      [t.DEFAULT]: c.DEFAULT,
      [t.LOADING]: c.DEFAULT,
      [t.DISABLED]: c.DISABLED
    }, p = A, i = C(() => E.state === t.LOADING), d = (e) => {
      i.value || E.state === t.DISABLED || p("update:is-selected", e);
    }, _ = (e) => {
      i.value || (e.stopPropagation(), p("icon-click"));
    };
    return (e, o) => (l(), u("div", {
      class: f(["ds-selectionTile", [
        {
          "-ds-selected": e.isSelected,
          "-ds-default": e.state === s(t).DEFAULT,
          "-ds-disabled": e.state === s(t).DISABLED,
          "-ds-loading": i.value
        }
      ]]),
      onClick: o[2] || (o[2] = (n) => d(!e.isSelected))
    }, [
      a("div", F, [
        e.type === s(m).RADIO_BUTTON ? (l(), T(k, {
          key: 0,
          size: s(B).X_SMALL,
          "is-selected": e.isSelected,
          state: D[e.state],
          "onUpdate:isSelected": o[0] || (o[0] = (n) => d(n))
        }, null, 8, ["size", "is-selected", "state"])) : (l(), T(v, {
          key: 1,
          size: s(U).X_SMALL,
          "model-value": e.isSelected,
          state: I[e.state],
          "onUpdate:modelValue": o[1] || (o[1] = (n) => d(n !== !1))
        }, null, 8, ["size", "model-value", "state"])),
        a("div", R, [
          a("div", z, L(e.title), 1),
          e.supportingText ? (l(), u("div", X, L(e.supportingText), 1)) : S("", !0)
        ])
      ]),
      e.icon || i.value ? (l(), T(N, {
        key: 0,
        class: "ds-selectionTile__icon",
        icon: i.value ? s(y).FAD_SPINNER_THIRD : e.icon,
        size: s(g).X_SMALL,
        spinning: i.value,
        onClick: _
      }, null, 8, ["icon", "size", "spinning"])) : S("", !0)
    ], 2));
  }
});
export {
  w as default
};
//# sourceMappingURL=SelectionTile.vue2.js.map
