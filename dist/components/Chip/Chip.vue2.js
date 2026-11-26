import { defineComponent as p, computed as d, createElementBlock as n, openBlock as r, normalizeStyle as O, normalizeClass as v, unref as o, createCommentVNode as c, createBlock as D, renderSlot as M, createVNode as C, toDisplayString as U } from "vue";
import X from "../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as l, ICON_BUTTON_SIZES as B, ICON_BUTTON_STATES as m } from "../Buttons/IconButton/IconButton.consts.js";
import N from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as A, ICONS as _ } from "../Icons/Icon/Icon.consts.js";
import { CHIP_STATES as I, CHIP_DEFAULT_COLOR as z, CHIP_SIZES as i, CHIP_RADIUSES as R, CHIP_COLORS as s } from "./Chip.consts.js";
import { BUTTON_ELEVATIONS as P } from "../Buttons/Button/Button.consts.js";
const b = ["title"], h = {
  key: 0,
  class: "ds-chip__leftIcon"
}, k = {
  key: 1,
  class: "ds-chip__label"
}, y = {
  key: 2,
  class: "ds-chip__rightIcon"
}, W = /* @__PURE__ */ p({
  __name: "Chip",
  props: {
    label: { default: null },
    isLabelUppercase: { type: Boolean, default: !1 },
    leftIcon: { default: null },
    rightIcon: { default: null },
    radius: { default: () => R.CAPSULE },
    size: { default: () => i.SMALL },
    color: { default: () => z },
    colorHex: { default: null },
    state: { default: () => I.DEFAULT },
    isRemovable: { type: Boolean, default: !1 },
    isInteractive: { type: Boolean, default: !1 }
  },
  emits: ["remove", "chipClick"],
  setup(t) {
    const E = {
      [s.INVERTED]: l.PRIMARY,
      [s.NEUTRAL]: l.NEUTRAL,
      [s.NEUTRAL_WEAK]: l.NEUTRAL,
      [s.PRIMARY]: l.PRIMARY,
      [s.PRIMARY_STRONG]: l.PRIMARY,
      [s.FAIL]: l.FAIL,
      [s.DANGER]: l.DANGER,
      [s.WARNING]: l.WARNING,
      [s.SUCCESS]: l.SUCCESS,
      [s.INFO]: l.INFO,
      [s.ACCENT]: l.ACCENT
    }, u = d(() => t.isInteractive && t.state !== I.DISABLED), f = d(() => t.colorHex ? "-ds-color-invertedHex" : `-ds-color-${t.color}`), T = d(() => t.colorHex ? l.NEUTRAL : E[t.color] || l.PRIMARY);
    return (e, a) => {
      var L;
      return r(), n("div", {
        class: v(["ds-chip", {
          "-ds-x-small": e.size === o(i).X_SMALL,
          [f.value]: !0,
          "-ds-disabled": e.state === o(I).DISABLED,
          "-ds-uppercase": e.isLabelUppercase,
          "-ds-rounded": e.radius === o(R).ROUNDED,
          "-ds-removable": e.size !== o(i).X_SMALL && e.isRemovable,
          "-ds-interactive": u.value
        }]),
        title: (L = e.label) != null ? L : void 0,
        style: O(e.colorHex ? { backgroundColor: e.colorHex } : void 0),
        onClick: a[1] || (a[1] = (S) => u.value && e.$emit("chipClick", S))
      }, [
        e.$slots.accessory || e.leftIcon ? (r(), n("span", h, [
          M(e.$slots, "accessory", {}, () => [
            C(o(N), {
              icon: e.leftIcon,
              size: e.size === o(i).X_SMALL ? o(A).XXX_SMALL : o(A).XX_SMALL
            }, null, 8, ["icon", "size"])
          ], !0)
        ])) : c("", !0),
        e.label ? (r(), n("span", k, U(e.label), 1)) : c("", !0),
        e.rightIcon ? (r(), n("span", y, [
          C(o(N), {
            icon: e.rightIcon,
            size: e.size === o(i).X_SMALL ? o(A).XXX_SMALL : o(A).XX_SMALL
          }, null, 8, ["icon", "size"])
        ])) : c("", !0),
        e.size !== o(i).X_SMALL && e.isRemovable ? (r(), D(o(X), {
          key: 3,
          class: "ds-chip__remove",
          state: e.state === o(I).DISABLED ? o(m).DISABLED : o(m).DEFAULT,
          color: T.value,
          size: o(B).XX_SMALL,
          icon: o(_).FA_XMARK,
          elevation: o(P).X_SMALL,
          onClick: a[0] || (a[0] = (S) => e.$emit("remove"))
        }, null, 8, ["state", "color", "size", "icon", "elevation"])) : c("", !0)
      ], 14, b);
    };
  }
});
export {
  W as default
};
//# sourceMappingURL=Chip.vue2.js.map
