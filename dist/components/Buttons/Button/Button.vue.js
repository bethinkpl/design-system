import { defineComponent as N, computed as i, createBlock as n, openBlock as d, resolveDynamicComponent as m, normalizeStyle as T, normalizeClass as O, unref as t, withCtx as M, createElementVNode as z, createCommentVNode as r, renderSlot as C } from "vue";
import L from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as l, ICONS as v } from "../../Icons/Icon/Icon.consts.js";
import { BUTTON_ELEVATIONS as I, BUTTON_STATES as s, BUTTON_RADIUSES as S, BUTTON_COLORS as A, BUTTON_TYPES as u, BUTTON_SIZES as a } from "./Button.consts.js";
import { useMagicGradient as R, GRADIENT_MAGIC_ICON_DISABLED_ID as U, GRADIENT_MAGIC_ICON_ID as y } from "./useMagicGradient.js";
const B = { class: "ds-button__content" }, F = /* @__PURE__ */ N({
  __name: "Button",
  props: {
    size: { default: () => a.MEDIUM },
    type: { default: () => u.FILLED },
    color: { default: () => A.PRIMARY },
    radius: { default: () => S.CAPSULE },
    state: { default: () => s.DEFAULT },
    iconLeft: { default: null },
    iconRight: { default: null },
    elevation: { default: () => I.NONE },
    as: { default: "span" }
  },
  setup(o) {
    const D = i(() => o.size === a.SMALL || o.size === a.MEDIUM ? l.XX_SMALL : l.X_SMALL), E = i(
      () => o.as === "button" && (o.state === s.LOADING || o.state === s.DISABLED)
    ), c = i(() => `-ds-color-${o.color}`);
    R(() => o.color === A.MAGIC);
    const f = i(() => o.size === a.LARGE ? l.MEDIUM : o.size === a.SMALL ? l.X_SMALL : l.SMALL);
    return (e, G) => (d(), n(m(e.as), {
      class: O(["ds-button", {
        "-ds-outlined": e.type === t(u).OUTLINED,
        "-ds-text": e.type === t(u).TEXT,
        "-ds-small": e.size === t(a).SMALL,
        "-ds-large": e.size === t(a).LARGE,
        "-ds-rounded": e.type !== t(u).TEXT && e.radius === t(S).ROUNDED,
        "-ds-hovered": e.state === t(s).HOVERED,
        "-ds-focused": e.state === t(s).FOCUSED,
        "-ds-loading": e.state === t(s).LOADING,
        "-ds-disabled": e.state === t(s).DISABLED,
        [c.value]: !0,
        "-ds-elevation-x-small": e.elevation === t(I).X_SMALL,
        "-ds-elevation-small": e.elevation === t(I).SMALL
      }]),
      disabled: E.value || void 0,
      "aria-busy": e.state === t(s).LOADING || void 0,
      style: T(
        e.color === t(A).MAGIC ? {
          "--ds-magic-fill": `url(#${e.state === t(s).DISABLED ? t(U) : t(y)})`
        } : void 0
      )
    }, {
      default: M(() => [
        z("span", B, [
          e.iconLeft ? (d(), n(t(L), {
            key: 0,
            class: "ds-button__icon -ds-left",
            icon: e.iconLeft,
            size: D.value
          }, null, 8, ["icon", "size"])) : r("", !0),
          C(e.$slots, "default"),
          e.iconRight ? (d(), n(t(L), {
            key: 1,
            class: "ds-button__icon -ds-right",
            icon: e.iconRight,
            size: D.value
          }, null, 8, ["icon", "size"])) : r("", !0)
        ]),
        e.state === t(s).LOADING ? (d(), n(t(L), {
          key: 0,
          class: "ds-button__loadingIcon",
          icon: t(v).FAD_SPINNER_THIRD,
          size: f.value
        }, null, 8, ["icon", "size"])) : r("", !0)
      ]),
      _: 3
    }, 8, ["class", "disabled", "aria-busy", "style"]));
  }
});
export {
  F as default
};
//# sourceMappingURL=Button.vue.js.map
