import { defineComponent as k, createElementBlock as i, openBlock as o, normalizeClass as d, unref as l, createElementVNode as a, createBlock as r, createCommentVNode as s, renderSlot as p, withCtx as C, createTextVNode as b, toDisplayString as u } from "vue";
import v from "../../Buttons/Button/Button.vue.js";
import { BUTTON_TYPES as T } from "../../Buttons/Button/Button.consts.js";
import w from "../../Divider/Divider.vue.js";
import { DIVIDER_PROMINENCES as I, DIVIDER_SIZES as _ } from "../../Divider/Divider.consts.js";
import c from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_SIZES as m } from "../../Buttons/IconButton/IconButton.consts.js";
import D from "../../Chip/Chip.vue.js";
import L from "../../Icons/Icon/Icon.vue.js";
import { ICONS as f, ICON_SIZES as B, ICON_COLORS as N } from "../../Icons/Icon/Icon.consts.js";
import { DRAWER_HEADER_BACKGROUND_COLORS as E, DRAWER_HEADER_TITLE_COLORS as R } from "./DrawerHeader.consts.js";
import { useLegacyI18n as S } from "../../../composables/useLegacyI18n.js";
const O = { class: "ds-drawerHeader__headerWrapper" }, H = { class: "ds-drawerHeader__titleWrapper" }, $ = { class: "ds-drawerHeader__textWrapper" }, A = { class: "ds-drawerHeader__title" }, U = ["title"], h = { key: 3 }, g = {
  key: 1,
  class: "ds-drawerHeader__actions"
}, J = /* @__PURE__ */ k({
  __name: "DrawerHeader",
  props: {
    eyebrowText: { default: null },
    isInteractiveEyebrow: { type: Boolean, default: !1 },
    eyebrowEllipsis: { type: Boolean, default: !1 },
    isEyebrowTextUppercase: { type: Boolean, default: !0 },
    title: { default: null },
    titleEllipsis: { type: Boolean, default: !1 },
    isTitleTextUppercase: { type: Boolean, default: !1 },
    titleColor: { default: () => R.NEUTRAL_STRONG },
    leftIcon: { default: null },
    chipLabel: { default: null },
    isClosable: { type: Boolean, default: !0 },
    hasDivider: { type: Boolean, default: !1 },
    isSecondLevel: { type: Boolean, default: !1 },
    hasBackButton: { type: Boolean, default: !1 },
    backgroundColor: { default: () => E.NONE }
  },
  emits: ["backClicked", "close", "eyebrowClicked"],
  setup(z) {
    const { t: y } = S();
    return (e, t) => (o(), i("div", {
      class: d(["ds-drawerHeader", {
        "-ds-backgroundDefault": e.backgroundColor === l(E).DEFAULT
      }])
    }, [
      a("div", O, [
        a("div", H, [
          e.isSecondLevel ? (o(), r(l(v), {
            key: 0,
            "icon-left": l(f).FA_CHEVRON_LEFT,
            type: l(T).TEXT,
            class: "ds-drawerHeader__secondLevel",
            onClick: t[0] || (t[0] = (n) => e.$emit("backClicked"))
          }, {
            default: C(() => [
              b(u(l(y)("ds.globals.back")), 1)
            ]),
            _: 1
          }, 8, ["icon-left", "type"])) : s("", !0),
          a("div", {
            class: d([{ "-ds-hidden": e.isSecondLevel }, "ds-drawerHeader__firstLevel"])
          }, [
            e.hasBackButton ? (o(), r(l(c), {
              key: 0,
              size: l(m).MEDIUM,
              icon: l(f).FA_CHEVRON_LEFT,
              onClick: t[1] || (t[1] = (n) => e.$emit("backClicked"))
            }, null, 8, ["size", "icon"])) : s("", !0),
            a("div", $, [
              e.eyebrowText ? (o(), i("span", {
                key: 0,
                class: d([{
                  "-ds-isInteractive": e.isInteractiveEyebrow,
                  "-ds-ellipsis": e.eyebrowEllipsis,
                  "-ds-uppercase": e.isEyebrowTextUppercase
                }, "ds-drawerHeader__eyebrow"]),
                onClick: t[2] || (t[2] = (n) => e.isInteractiveEyebrow && e.$emit("eyebrowClicked"))
              }, u(e.eyebrowText), 3)) : s("", !0),
              a("div", A, [
                e.leftIcon ? (o(), r(l(L), {
                  key: 0,
                  icon: e.leftIcon,
                  size: l(B).X_SMALL,
                  class: "ds-drawerHeader__leftIcon"
                }, null, 8, ["icon", "size"])) : s("", !0),
                e.title ? (o(), i("span", {
                  key: 1,
                  class: d(["ds-drawerHeader__titleText", {
                    "-ds-ellipsis": e.titleEllipsis,
                    "-ds-uppercase": e.isTitleTextUppercase,
                    [`-ds-${e.titleColor}`]: !0
                  }]),
                  title: e.titleEllipsis ? e.title : void 0
                }, u(e.title), 11, U)) : s("", !0),
                e.chipLabel ? (o(), r(l(D), {
                  key: 2,
                  label: e.chipLabel
                }, null, 8, ["label"])) : s("", !0),
                e.$slots.titleTrailing ? (o(), i("div", h, [
                  p(e.$slots, "titleTrailing", {}, void 0, !0)
                ])) : s("", !0)
              ])
            ])
          ], 2),
          e.$slots.actions ? (o(), i("div", g, [
            p(e.$slots, "actions", {}, void 0, !0)
          ])) : s("", !0),
          e.isClosable ? (o(), r(l(c), {
            key: 2,
            color: l(N).NEUTRAL,
            icon: l(f).FA_XMARK,
            size: l(m).MEDIUM,
            onClick: t[3] || (t[3] = (n) => e.$emit("close"))
          }, null, 8, ["color", "icon", "size"])) : s("", !0)
        ]),
        p(e.$slots, "supporting", {}, void 0, !0)
      ]),
      e.hasDivider ? (o(), r(l(w), {
        key: 0,
        size: l(_).L,
        prominence: l(I).WEAK
      }, null, 8, ["size", "prominence"])) : s("", !0)
    ], 2));
  }
});
export {
  J as default
};
//# sourceMappingURL=DrawerHeader.vue2.js.map
