import { defineComponent as k, mergeModels as A, useModel as B, computed as E, createElementBlock as n, openBlock as t, createElementVNode as d, normalizeClass as C, unref as s, createCommentVNode as i, createVNode as a, createTextVNode as S, toDisplayString as f, renderSlot as N, withCtx as D } from "vue";
import h from "../Buttons/Button/Button.vue.js";
import { BUTTON_SIZES as y, BUTTON_TYPES as $, BUTTON_COLORS as F, BUTTON_RADIUSES as L } from "../Buttons/Button/Button.consts.js";
import W from "../Divider/Divider.vue.js";
import { DIVIDER_PROMINENCES as g } from "../Divider/Divider.consts.js";
import R from "../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as I, ICON_BUTTON_SIZES as O } from "../Buttons/IconButton/IconButton.consts.js";
import { BANNER_SIZES as c, BANNER_COLORS as o } from "./Banner.consts.js";
import b from "../Icons/FeatureIcon/FeatureIcon.vue.js";
/* empty css                                    */
import { FEATURE_ICON_COLOR as l, FEATURE_ICON_SIZES as v } from "../Icons/FeatureIcon/FeatureIcon.consts.js";
import { ICONS as m } from "../Icons/Icon/Icon.consts.js";
const P = { class: "ds-banner" }, G = { class: "ds-banner__content" }, V = { class: "ds-banner__header" }, x = {
  key: 0,
  class: "ds-banner__iconWrapper"
}, H = { class: "ds-banner__textWrapper" }, Y = { class: "ds-banner__titleWrapper" }, Z = {
  key: 0,
  class: "ds-banner__iconWrapperSmall"
}, w = {
  key: 0,
  class: "ds-banner__defaultText"
}, X = {
  key: 0,
  class: "ds-banner__rightWrapper"
}, K = {
  key: 0,
  class: "ds-banner__buttonWrapper"
}, j = {
  key: 1,
  class: "ds-banner__rightSlot"
}, q = {
  key: 0,
  class: "ds-banner__expander"
}, J = {
  key: 1,
  class: "ds-banner__close"
}, Q = {
  key: 0,
  class: "ds-banner__expandedContainer"
}, ee = { class: "ds-banner__expandedText" }, pe = /* @__PURE__ */ k({
  __name: "Banner",
  props: /* @__PURE__ */ A({
    icon: { default: null },
    buttonText: {},
    closable: { type: Boolean, default: !1 },
    color: { default: () => o.DEFAULT },
    title: {},
    isIconHiddenOnMobile: { type: Boolean, default: !1 },
    size: { default: () => c.MEDIUM },
    isTitleWeak: { type: Boolean, default: !1 }
  }, {
    isExpanded: { type: Boolean, default: !1 },
    isExpandedModifiers: {}
  }),
  emits: /* @__PURE__ */ A(["button-clicked", "close"], ["update:isExpanded"]),
  setup(u) {
    const _ = B(u, "isExpanded"), { sizeClass: M, colorClass: U } = z(), T = E(() => ({
      [o.DEFAULT]: l.NEUTRAL,
      [o.NEUTRAL]: l.NEUTRAL,
      [o.PRIMARY]: l.PRIMARY,
      [o.INFO]: l.INFO,
      [o.SUCCESS]: l.SUCCESS,
      [o.WARNING]: l.WARNING,
      [o.FAIL]: l.FAIL,
      [o.DANGER]: l.DANGER,
      [o.ACCENT]: l.ACCENT
    })[u.color]);
    function z() {
      const e = E(() => ({
        [o.NEUTRAL]: "-ds-neutral",
        [o.DEFAULT]: "-ds-default",
        [o.PRIMARY]: "-ds-primary",
        [o.FAIL]: "-ds-fail",
        [o.INFO]: "-ds-info",
        [o.SUCCESS]: "-ds-success",
        [o.WARNING]: "-ds-warning",
        [o.DANGER]: "-ds-danger",
        [o.ACCENT]: "-ds-accent"
      })[u.color]), r = E(() => ({
        [c.SMALL]: "-ds-small",
        [c.MEDIUM]: "-ds-medium"
      })[u.size]);
      return {
        colorClass: e,
        sizeClass: r
      };
    }
    return (e, r) => (t(), n("div", P, [
      d("div", {
        class: C(["ds-banner__inner", [
          s(U),
          s(M),
          {
            "-ds-iconHiddenOnMobile": e.isIconHiddenOnMobile
          }
        ]])
      }, [
        d("div", G, [
          d("div", V, [
            e.icon && e.size === s(c).MEDIUM ? (t(), n("div", x, [
              a(s(b), {
                icon: e.icon,
                color: T.value,
                size: s(v).SMALL
              }, null, 8, ["icon", "color", "size"])
            ])) : i("", !0),
            d("div", H, [
              d("div", Y, [
                d("div", {
                  class: C(["ds-banner__title", { "-ds-titleWeak": e.isTitleWeak }])
                }, [
                  e.icon && e.size === s(c).SMALL ? (t(), n("div", Z, [
                    a(s(b), {
                      icon: e.icon,
                      color: T.value,
                      size: s(v).X_SMALL
                    }, null, 8, ["icon", "color", "size"])
                  ])) : i("", !0),
                  S(" " + f(e.title), 1)
                ], 2),
                e.$slots.defaultText ? (t(), n("div", w, [
                  N(e.$slots, "defaultText", {}, void 0, !0)
                ])) : i("", !0)
              ]),
              e.buttonText || e.$slots.rightSlot ? (t(), n("div", X, [
                e.buttonText ? (t(), n("div", K, [
                  a(s(h), {
                    class: "ds-banner__ctaButton",
                    color: s(F).NEUTRAL,
                    type: s($).OUTLINED,
                    size: s(y).SMALL,
                    onClick: r[0] || (r[0] = (p) => e.$emit("button-clicked"))
                  }, {
                    default: D(() => [
                      S(f(e.buttonText), 1)
                    ]),
                    _: 1
                  }, 8, ["color", "type", "size"])
                ])) : i("", !0),
                e.$slots.rightSlot ? (t(), n("div", j, [
                  N(e.$slots, "rightSlot", {}, void 0, !0)
                ])) : i("", !0)
              ])) : i("", !0)
            ])
          ]),
          e.$slots.expandedText ? (t(), n("div", q, [
            a(s(R), {
              size: s(O).SMALL,
              icon: _.value ? s(m).FA_CHEVRON_UP : s(m).FA_CHEVRON_DOWN,
              color: s(I).NEUTRAL,
              radius: s(L).CAPSULE,
              onClick: r[1] || (r[1] = (p) => _.value = !_.value)
            }, null, 8, ["size", "icon", "color", "radius"])
          ])) : i("", !0),
          !e.$slots.expandedText && e.closable ? (t(), n("div", J, [
            a(s(R), {
              size: s(O).SMALL,
              icon: s(m).FA_XMARK,
              color: s(I).NEUTRAL,
              radius: s(L).CAPSULE,
              onClick: r[2] || (r[2] = (p) => e.$emit("close"))
            }, null, 8, ["size", "icon", "color", "radius"])
          ])) : i("", !0)
        ]),
        e.$slots.expandedText && _.value ? (t(), n("div", Q, [
          a(s(W), {
            prominence: s(g).STRONG
          }, null, 8, ["prominence"]),
          d("div", ee, [
            N(e.$slots, "expandedText", {}, void 0, !0)
          ])
        ])) : i("", !0)
      ], 2)
    ]));
  }
});
export {
  pe as default
};
//# sourceMappingURL=Banner.vue2.js.map
