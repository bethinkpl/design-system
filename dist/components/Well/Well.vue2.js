import { defineComponent as O, computed as i, createElementBlock as r, openBlock as l, normalizeClass as I, unref as n, createCommentVNode as u, createElementVNode as N, createVNode as f, renderSlot as b } from "vue";
import T from "../ContainerRibbon/ContainerRibbon.vue.js";
import { WELL_RIBBON_COLORS as m, WELL_RIBBON_SIZES as B, WELL_RIBBON_POSITIONS as s, WELL_DEFAULT_COLOR as p, WELL_PADDINGS as d, WELL_COLORS as e } from "./Well.consts.js";
import { CONTAINER_RIBBON_LAYOUTS as R, CONTAINER_RIBBON_RADIUSES as t } from "../ContainerRibbon/ContainerRibbon.consts.js";
const S = {
  key: 0,
  class: "ds-well__ribbon"
}, A = {
  key: 1,
  class: "ds-well__accessorySlot"
}, C = { class: "ds-well__content" }, v = /* @__PURE__ */ O({
  __name: "Well",
  props: {
    padding: { default: null },
    color: { default: () => p },
    hasRadius: { type: Boolean, default: !0 },
    hasBorder: { type: Boolean, default: !1 },
    hasRibbon: { type: Boolean, default: !1 },
    ribbonPosition: { default: () => s.TOP },
    ribbonSize: { default: () => B.MEDIUM },
    ribbonColor: { default: () => m.NEUTRAL_HEAVY }
  },
  setup(a) {
    const c = i(() => ({
      [e.ACCENT]: "-ds-accent",
      [e.PRIMARY]: "-ds-primary",
      [e.FAIL]: "-ds-fail",
      [e.HIGHLIGHT]: "-ds-highlight",
      [e.INFO]: "-ds-info",
      [e.INVERTED]: "-ds-inverted",
      [e.NEUTRAL]: "-ds-neutral",
      [e.SUCCESS]: "-ds-success",
      [e.WARNING]: "-ds-warning"
    })[a.color]), L = i(() => ({
      [s.TOP]: R.HORIZONTAL,
      [s.LEFT]: R.VERTICAL
    })[a.ribbonPosition]), E = i(() => {
      const o = {
        [s.TOP]: t.BOTTOM,
        [s.LEFT]: t.RIGHT
      };
      return a.hasRadius ? t.NONE : o[a.ribbonPosition];
    });
    return (o, h) => (l(), r("div", {
      class: I(["ds-well", [
        c.value,
        {
          "-ds-large": n(d).LARGE === o.padding,
          "-ds-medium": n(d).MEDIUM === o.padding,
          "-ds-small": n(d).SMALL === o.padding,
          "-ds-noRadius": !o.hasRadius,
          "-ds-hasBorder": o.hasBorder,
          "-ds-leftRibbon": o.hasRibbon && o.ribbonPosition === n(s).LEFT
        }
      ]])
    }, [
      o.hasRibbon ? (l(), r("div", S, [
        f(T, {
          size: o.ribbonSize,
          color: o.ribbonColor,
          layout: L.value,
          radius: E.value
        }, null, 8, ["size", "color", "layout", "radius"])
      ])) : u("", !0),
      o.$slots.accessory ? (l(), r("div", A, [
        b(o.$slots, "accessory", {}, void 0, !0)
      ])) : u("", !0),
      N("div", C, [
        b(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
});
export {
  v as default
};
//# sourceMappingURL=Well.vue2.js.map
