import I from "./Switch.vue2.js";
import { resolveComponent as c, createElementBlock as l, openBlock as s, normalizeClass as o, createElementVNode as n, createBlock as t, createCommentVNode as i, toDisplayString as r } from "vue";
/* empty css            */
import u from "../../_virtual/_plugin-vue_export-helper.js";
const E = ["title"], h = {
  key: 1,
  class: "ds-switch__label"
}, T = ["title"], m = {
  key: 1,
  class: "ds-switch__label"
}, L = {
  key: 1,
  class: "ds-switch__label"
};
function C(e, S, D, f, p, H) {
  const d = c("ds-icon");
  return s(), l("div", {
    class: o(["ds-switch", {
      "-ds-small": e.size === e.SWITCH_SIZE.SMALL,
      "-ds-medium": e.size === e.SWITCH_SIZE.MEDIUM,
      "-ds-rounded": e.radius === e.SWITCH_RADIUSES.ROUNDED,
      "-ds-disabled": e.state === e.SWITCH_STATE.DISABLED
    }]),
    onClick: S[0] || (S[0] = (...a) => e.onSwitch && e.onSwitch(...a))
  }, [
    n("div", {
      class: o(["ds-switch__item -ds-left", {
        "-ds-clickable": e.currentSide !== e.SWITCH_SIDE.LEFT && e.state !== e.SWITCH_STATE.DISABLED,
        "-ds-selected": e.currentSide === e.SWITCH_SIDE.LEFT
      }]),
      title: e.labelLeft
    }, [
      e.iconLeft ? (s(), t(d, {
        key: 0,
        class: "ds-switch__icon",
        icon: e.iconLeft,
        size: e.ICON_SIZES.XX_SMALL
      }, null, 8, ["icon", "size"])) : i("", !0),
      e.labelLeft ? (s(), l("div", h, r(e.labelLeft), 1)) : i("", !0)
    ], 10, E),
    n("div", {
      class: o(["ds-switch__item -ds-right", {
        "-ds-clickable": e.currentSide !== e.SWITCH_SIDE.RIGHT && e.state !== e.SWITCH_STATE.DISABLED,
        "-ds-selected": e.currentSide === e.SWITCH_SIDE.RIGHT
      }]),
      title: e.labelRight
    }, [
      e.iconRight ? (s(), t(d, {
        key: 0,
        class: "ds-switch__icon",
        icon: e.iconRight,
        size: e.ICON_SIZES.XX_SMALL
      }, null, 8, ["icon", "size"])) : i("", !0),
      e.labelRight ? (s(), l("div", m, r(e.labelRight), 1)) : i("", !0)
    ], 10, T),
    n("div", {
      class: o(["ds-switch__item -ds-selection", {
        "-ds-left": e.currentSide === e.SWITCH_SIDE.LEFT,
        "-ds-right": e.currentSide === e.SWITCH_SIDE.RIGHT
      }])
    }, [
      e.currentIcon ? (s(), t(d, {
        key: 0,
        class: "ds-switch__icon",
        icon: e.currentIcon,
        size: e.ICON_SIZES.XX_SMALL
      }, null, 8, ["icon", "size"])) : i("", !0),
      e.currentLabel ? (s(), l("div", L, r(e.currentLabel), 1)) : i("", !0)
    ], 2)
  ], 2);
}
const W = /* @__PURE__ */ u(I, [["render", C], ["__scopeId", "data-v-ccaa1a81"]]);
export {
  W as default
};
//# sourceMappingURL=Switch.vue.js.map
