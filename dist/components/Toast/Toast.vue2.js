import { defineComponent as L, computed as i, onMounted as z, onUnmounted as h, createElementBlock as d, openBlock as n, normalizeClass as P, createVNode as p, createCommentVNode as s, unref as t, createSlots as M, withCtx as l, createElementVNode as c, toDisplayString as m, renderSlot as $, createBlock as B, createTextVNode as N } from "vue";
import O from "../Buttons/Button/Button.vue.js";
import { BUTTON_COLORS as u, BUTTON_SIZES as C, BUTTON_RADIUSES as g, BUTTON_TYPES as _ } from "../Buttons/Button/Button.consts.js";
import V from "../Cards/Card/Card.vue.js";
import w from "../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as G, ICON_BUTTON_SIZES as Z } from "../Buttons/IconButton/IconButton.consts.js";
import { TOAST_COLORS as f, TOAST_POSITIONS as F, TOAST_SIZES as E } from "./Toast.consts.js";
import { ICONS as K } from "../Icons/Icon/Icon.consts.js";
const Y = { class: "ds-toast__body" }, W = {
  key: 0,
  class: "ds-toast__title"
}, X = { class: "ds-toast__content" }, j = { class: "ds-toast__footerButtons" }, q = {
  key: 0,
  class: "ds-toast__close"
}, no = /* @__PURE__ */ L({
  __name: "Toast",
  props: {
    title: { default: "" },
    size: { default: () => E.MEDIUM },
    position: { default: () => F.CENTER },
    color: { default: () => f.INFO },
    footerPrimaryButtonText: { default: "" },
    footerPrimaryButtonIcon: { default: null },
    footerSecondaryButtonText: { default: "" },
    footerSecondaryButtonIcon: { default: null },
    isDisappearing: { type: Boolean, default: !0 },
    disappearingTimeout: { default: "0" },
    isClosable: { type: Boolean, default: !1 }
  },
  emits: ["close", "primary-button-click", "secondary-button-click"],
  setup(e, { emit: I }) {
    const b = I, v = i(
      () => e.color === f.DANGER ? u.NEUTRAL : u.PRIMARY
    ), A = i(
      () => e.color === f.DANGER ? u.DANGER : u.NEUTRAL
    ), T = i(
      () => e.size === E.SMALL ? C.SMALL : C.MEDIUM
    ), D = i(() => `-ds-size-${e.size.toLowerCase()}`), R = i(() => `-ds-position-${e.position.toLowerCase()}`), U = i(() => `-ds-color-${e.color}`);
    let r = null;
    const S = () => {
      r !== null && (clearTimeout(r), r = null);
    }, y = () => {
      S(), b("close");
    };
    return z(() => {
      e.isDisappearing && e.disappearingTimeout !== "0" && (r = setTimeout(
        y,
        parseInt(e.disappearingTimeout, 10) * 1e3 + 100
        // 100 ms is to let loading bar animation to finish
      ));
    }), h(S), (o, a) => (n(), d("div", {
      class: P(["ds-toast", D.value, R.value, U.value, { "-ds-closable": o.isClosable }])
    }, [
      p(t(V), {
        "loading-bar-color": o.color,
        "has-loading-bar": "",
        "loading-bar-time": o.disappearingTimeout
      }, M({
        content: l(() => [
          c("div", Y, [
            o.title ? (n(), d("div", W, m(o.title), 1)) : s("", !0),
            c("div", X, [
              $(o.$slots, "content", {}, void 0, !0)
            ])
          ])
        ]),
        _: 2
      }, [
        o.footerPrimaryButtonText.length > 0 || o.footerSecondaryButtonText.length > 0 ? {
          name: "footer",
          fn: l(() => [
            c("div", j, [
              o.footerSecondaryButtonText.length ? (n(), B(t(O), {
                key: 0,
                color: A.value,
                size: T.value,
                "icon-right": o.footerSecondaryButtonIcon,
                type: t(_).OUTLINED,
                radius: t(g).ROUNDED,
                onClick: a[0] || (a[0] = (k) => o.$emit("secondary-button-click"))
              }, {
                default: l(() => [
                  N(m(o.footerSecondaryButtonText), 1)
                ]),
                _: 1
              }, 8, ["color", "size", "icon-right", "type", "radius"])) : s("", !0),
              o.footerPrimaryButtonText.length ? (n(), B(t(O), {
                key: 1,
                color: v.value,
                size: T.value,
                "icon-right": o.footerPrimaryButtonIcon,
                radius: t(g).ROUNDED,
                onClick: a[1] || (a[1] = (k) => o.$emit("primary-button-click"))
              }, {
                default: l(() => [
                  N(m(o.footerPrimaryButtonText), 1)
                ]),
                _: 1
              }, 8, ["color", "size", "icon-right", "radius"])) : s("", !0)
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["loading-bar-color", "loading-bar-time"]),
      o.isClosable ? (n(), d("div", q, [
        p(t(w), {
          icon: t(K).FA_XMARK,
          size: t(Z).SMALL,
          color: t(G).NEUTRAL_WEAK,
          onClick: y
        }, null, 8, ["icon", "size", "color"])
      ])) : s("", !0)
    ], 2));
  }
});
export {
  no as default
};
//# sourceMappingURL=Toast.vue2.js.map
