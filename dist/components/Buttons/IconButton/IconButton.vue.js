import T from "./IconButton.vue2.js";
import { resolveComponent as i, createElementBlock as a, openBlock as n, normalizeStyle as d, normalizeClass as l, createCommentVNode as O, createVNode as N, renderSlot as S, withCtx as C, createBlock as r } from "vue";
/* empty css                */
import I from "../../../_virtual/_plugin-vue_export-helper.js";
function m(o, e, B, E, p, L) {
  const t = i("wnl-icon"), u = i("wnl-button");
  return n(), a("div", {
    class: l(["ds-iconButton", {
      "-ds-xx-small": o.size === o.ICON_BUTTON_SIZES.XX_SMALL,
      "-ds-x-small": o.size === o.ICON_BUTTON_SIZES.X_SMALL,
      "-ds-small": o.size === o.ICON_BUTTON_SIZES.SMALL,
      "-ds-large": o.size === o.ICON_BUTTON_SIZES.LARGE,
      "-ds-hovered": o.state === o.ICON_BUTTON_STATES.HOVERED,
      "-ds-focused": o.state === o.ICON_BUTTON_STATES.FOCUSED,
      "-ds-disabled": o.state === o.ICON_BUTTON_STATES.DISABLED,
      "-ds-loading": o.state === o.ICON_BUTTON_STATES.LOADING,
      [o.colorClassName]: o.isButtonColor,
      "-ds-touchable": o.touchableDeprecated
    }]),
    style: d({ color: o.computedColor }),
    onMouseover: e[0] || (e[0] = (...s) => o.mouseOver && o.mouseOver(...s)),
    onMouseleave: e[1] || (e[1] = (...s) => o.mouseLeave && o.mouseLeave(...s)),
    onTouchstart: e[2] || (e[2] = (...s) => o.touchStart && o.touchStart(...s)),
    onTouchend: e[3] || (e[3] = (...s) => o.touchEnd && o.touchEnd(...s))
  }, [
    o.$slots.default && o.type !== o.ICON_BUTTON_TYPES.ICON_ONLY ? (n(), a("div", {
      key: 0,
      class: l(["ds-iconButton__label", {
        "-ds-neutral": o.colorScheme === o.ICON_BUTTON_COLOR_SCHEMES.NEUTRAL_LABEL
      }])
    }, [
      S(o.$slots, "default", {}, void 0, !0)
    ], 2)) : O("", !0),
    N(u, {
      ref: "button",
      class: l(["ds-iconButton__button", {
        "-ds-iconOnly": o.type === o.ICON_BUTTON_TYPES.ICON_ONLY
      }]),
      radius: o.radius,
      type: o.buttonType,
      state: o.ICON_BUTTON_STATE_MAP[o.state],
      elevation: o.elevation,
      color: o.isButtonColor ? o.color : null
    }, {
      default: C(() => [
        o.state === o.ICON_BUTTON_STATES.LOADING ? (n(), r(t, {
          key: 0,
          class: "ds-iconButton__icon",
          icon: o.ICONS.FAD_SPINNER_THIRD,
          size: o.iconSize,
          spinning: ""
        }, null, 8, ["icon", "size"])) : (n(), r(t, {
          key: 1,
          class: "ds-iconButton__icon",
          icon: o.icon,
          size: o.iconSize
        }, null, 8, ["icon", "size"]))
      ]),
      _: 1
    }, 8, ["class", "radius", "type", "state", "elevation", "color"])
  ], 38);
}
const z = /* @__PURE__ */ I(T, [["render", m], ["__scopeId", "data-v-c4a44a89"]]);
export {
  z as default
};
//# sourceMappingURL=IconButton.vue.js.map
