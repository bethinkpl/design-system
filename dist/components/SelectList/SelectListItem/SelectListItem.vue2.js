import { defineComponent as v, useSlots as y, computed as a, createBlock as n, openBlock as o, resolveDynamicComponent as C, mergeProps as h, withCtx as b, renderSlot as r, createCommentVNode as d, createElementVNode as f, createElementBlock as L, unref as s, normalizeClass as D, toDisplayString as m, createTextVNode as M } from "vue";
import { SELECT_LIST_ITEM_STATES as u, SELECT_LIST_ITEM_SIZES as N, SELECT_LIST_ITEM_SELECTION_MODE as g } from "./SelectListItem.consts.js";
import S from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as E, ICONS as I } from "../../Icons/Icon/Icon.consts.js";
const k = { class: "ds-selectListItem__textWrapper" }, A = { class: "ds-selectListItem__text" }, w = {
  key: 2,
  class: "ds-selectListItem__placeholderRight"
}, F = /* @__PURE__ */ v({
  __name: "SelectListItem",
  props: {
    href: { default: "" },
    to: { default: "" },
    iconLeft: { default: null },
    isSelected: { type: Boolean, default: !1 },
    label: {},
    eyebrowText: { default: "" },
    isEyebrowTextUppercase: { type: Boolean, default: !1 },
    selectionMode: { default: () => g.SELECT_ONLY },
    size: { default: () => N.SMALL },
    state: { default: () => u.DEFAULT }
  },
  setup(t) {
    const T = y(), l = a(() => t.state === u.LOADING), c = a(() => t.state === u.DISABLED), p = a(() => !!T.metadata), i = a(() => c.value || l.value ? "div" : t.href ? "a" : t.to ? "router-link" : "div"), _ = a(() => i.value === "a" ? { href: t.href } : i.value === "router-link" ? { to: t.to } : {});
    return (e, z) => (o(), n(C(i.value), h(_.value, {
      class: ["ds-selectListItem", {
        "-ds-disabled": c.value,
        "-ds-loading": l.value,
        "-ds-selected": e.isSelected,
        [`-ds-${e.size}`]: !0,
        [`-ds-${e.selectionMode}`]: !0
      }],
      title: e.label
    }), {
      default: b(() => [
        r(e.$slots, "accessory", {}, void 0, !0),
        e.iconLeft || l.value ? (o(), n(s(S), {
          key: 0,
          class: "ds-selectListItem__iconLeft",
          icon: l.value ? s(I).FAD_SPINNER_THIRD : e.iconLeft,
          size: s(E).X_SMALL,
          spinning: l.value
        }, null, 8, ["icon", "size", "spinning"])) : d("", !0),
        f("span", k, [
          e.eyebrowText ? (o(), L("span", {
            key: 0,
            class: D(["ds-selectListItem__eyebrowText", { "-ds-uppercase": e.isEyebrowTextUppercase }])
          }, m(e.eyebrowText), 3)) : d("", !0),
          f("span", A, [
            r(e.$slots, "text", {}, () => [
              M(m(e.label), 1)
            ], !0)
          ])
        ]),
        r(e.$slots, "metadata", {}, void 0, !0),
        e.isSelected ? (o(), n(s(S), {
          key: 1,
          class: "ds-selectListItem__iconRight",
          icon: s(I).FA_CHECK_SOLID,
          size: s(E).XX_SMALL
        }, null, 8, ["icon", "size"])) : p.value ? d("", !0) : (o(), L("div", w))
      ]),
      _: 3
    }, 16, ["class", "title"]));
  }
});
export {
  F as default
};
//# sourceMappingURL=SelectListItem.vue2.js.map
