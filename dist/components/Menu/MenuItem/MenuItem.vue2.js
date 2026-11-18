import { defineComponent as R, mergeModels as _, useSlots as B, useModel as U, computed as a, inject as g, provide as z, createElementBlock as o, openBlock as l, createBlock as d, createCommentVNode as n, renderSlot as E, resolveDynamicComponent as $, mergeProps as F, unref as t, withCtx as V, createElementVNode as i, withModifiers as X, createVNode as P, normalizeClass as r, toDisplayString as p, Fragment as W, createTextVNode as H } from "vue";
import m from "../../Icons/Icon/Icon.vue.js";
import { ICONS as u, ICON_SIZES as f } from "../../Icons/Icon/Icon.consts.js";
import w from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_STATES as T, ICON_BUTTON_SIZES as K, ICON_BUTTON_COLORS as Z } from "../../Buttons/IconButton/IconButton.consts.js";
import { MENU_ITEM_STATES as N, MENU_ITEM_LEVEL_INJECTION_KEY as C, MENU_ITEM_BACKGROUND_COLORS as y, MENU_ITEM_SIZES as D } from "./MenuItem.consts.js";
import { BUTTON_RADIUSES as j } from "../../Buttons/Button/Button.consts.js";
const G = { class: "ds-menuItem__wrapper" }, J = { class: "ds-menuItem__contentWrapper" }, Y = { class: "ds-menuItem__content" }, q = { class: "ds-menuItem__text" }, Q = {
  key: 1,
  class: "ds-menuItem__expanderDotWrapper"
}, x = { class: "ds-menuItem__itemsWrapper" }, ee = { class: "ds-menuItem__labelWrapper" }, te = {
  key: 0,
  class: "ds-menuItem__additionalText"
}, ue = /* @__PURE__ */ R({
  __name: "MenuItem",
  props: /* @__PURE__ */ _({
    href: { default: "" },
    to: { default: "" },
    size: { default: () => D.SMALL },
    backgroundColor: { default: () => y.NONE },
    iconLeft: { default: null },
    iconRight: { default: null },
    iconRightRotation: { default: null },
    index: { default: null },
    label: { default: "" },
    isLabelUppercase: { type: Boolean, default: !1 },
    additionalText: { default: "" },
    state: { default: () => N.DEFAULT },
    isExpandable: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 },
    isDone: { type: Boolean, default: !1 },
    hasSelectedAccessoriesPrimary: { type: Boolean, default: !0 },
    isSelectedInteractive: { type: Boolean, default: !1 },
    level: { default: null }
  }, {
    isExpanded: { type: Boolean },
    isExpandedModifiers: {}
  }),
  emits: ["update:isExpanded"],
  setup(s) {
    const I = B(), c = U(s, "isExpanded"), A = a(() => s.href ? "a" : s.to ? "router-link" : "span"), O = a(() => s.href ? { href: s.href } : s.to ? { to: s.to } : {}), v = a(() => s.state === N.DISABLED), S = a(() => {
      const e = g(C, null);
      return s.level !== null ? s.level : e !== null ? e : 1;
    }), L = a(() => I.default || s.isDone || s.iconRight), b = a(
      () => s.label || s.additionalText || I.labelSlot || s.index !== null || s.iconLeft || L.value
    ), k = a(() => `-ds-level${S.value > 6 ? 6 : S.value}`), M = a(() => I.children ? c.value ? u.FA_CHEVRON_DOWN : u.FA_CHEVRON_RIGHT : u.FA_DOT_SOLID);
    return z(C, S.value + 1), (e, h) => (l(), o("li", G, [
      b.value ? (l(), d($(A.value), F({ key: 0 }, O.value, {
        class: [
          "ds-menuItem",
          k.value,
          {
            "-ds-disabled": v.value,
            "-ds-medium": e.size === t(D).MEDIUM,
            "-ds-selected": e.isSelected,
            "-ds-expandable": e.isExpandable,
            "-ds-hoverable": !e.isSelected || e.isSelectedInteractive,
            "-ds-backgroundNeutral": e.backgroundColor === t(y).NEUTRAL
          }
        ]
      }), {
        default: V(() => [
          i("span", J, [
            i("span", Y, [
              i("span", q, [
                e.isExpandable && e.$slots.children ? (l(), d(t(w), {
                  key: 0,
                  class: "ds-menuItem__expander",
                  color: t(Z).NEUTRAL,
                  radius: t(j).ROUNDED,
                  icon: M.value,
                  size: t(K).X_SMALL,
                  state: v.value ? t(T).DISABLED : t(T).DEFAULT,
                  onClick: h[0] || (h[0] = X((se) => c.value = !c.value, ["stop"]))
                }, null, 8, ["color", "radius", "icon", "size", "state"])) : e.isExpandable && !e.$slots.children ? (l(), o("span", Q, [
                  P(t(m), {
                    icon: t(u).FA_DOT_SOLID,
                    size: t(f).XX_SMALL
                  }, null, 8, ["icon", "size"])
                ])) : n("", !0),
                i("span", x, [
                  e.index !== null ? (l(), o("span", {
                    key: 0,
                    class: r(["ds-menuItem__index", {
                      "-ds-active": e.isSelected && e.hasSelectedAccessoriesPrimary
                    }])
                  }, p(e.index) + ". ", 3)) : n("", !0),
                  e.iconLeft ? (l(), d(t(m), {
                    key: 1,
                    class: r(["ds-menuItem__icon", {
                      "-ds-active": e.isSelected && e.hasSelectedAccessoriesPrimary
                    }]),
                    icon: e.iconLeft,
                    size: t(f).X_SMALL
                  }, null, 8, ["class", "icon", "size"])) : n("", !0),
                  i("span", ee, [
                    i("span", {
                      class: r(["ds-menuItem__label", { "-ds-uppercase": e.isLabelUppercase }])
                    }, [
                      e.$slots.labelSlot ? E(e.$slots, "labelSlot", { key: 0 }, void 0, !0) : (l(), o(W, { key: 1 }, [
                        H(p(e.label), 1)
                      ], 64))
                    ], 2),
                    e.additionalText ? (l(), o("span", te, p(e.additionalText), 1)) : n("", !0)
                  ])
                ])
              ])
            ])
          ]),
          L.value ? (l(), o("span", {
            key: 0,
            class: r(["ds-menuItem__rightContent", { "-ds-centeredContent": e.$slots.default }])
          }, [
            e.$slots.default ? E(e.$slots, "default", { key: 0 }, void 0, !0) : n("", !0),
            e.isDone ? (l(), d(t(m), {
              key: 1,
              class: "ds-menuItem__icon -ds-active",
              icon: t(u).FA_CHECK_SOLID,
              size: t(f).X_SMALL
            }, null, 8, ["icon", "size"])) : e.iconRight ? (l(), d(t(m), {
              key: 2,
              class: r(["ds-menuItem__icon", {
                "-ds-active": e.isSelected && e.hasSelectedAccessoriesPrimary
              }]),
              icon: e.iconRight,
              size: t(f).X_SMALL,
              rotation: e.iconRightRotation
            }, null, 8, ["class", "icon", "size", "rotation"])) : n("", !0)
          ], 2)) : n("", !0)
        ]),
        _: 3
      }, 16, ["class"])) : n("", !0),
      !e.isExpandable || c.value ? E(e.$slots, "children", { key: 1 }, void 0, !0) : n("", !0)
    ]));
  }
});
export {
  ue as default
};
//# sourceMappingURL=MenuItem.vue2.js.map
