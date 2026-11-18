import { defineComponent as u, computed as A, createElementBlock as i, openBlock as a, normalizeClass as m, unref as o, createElementVNode as t, createCommentVNode as n, createBlock as S, toDisplayString as g, renderSlot as E } from "vue";
import { BADGE_ELEVATIONS as d, BADGE_SIZES as s, BADGE_COLORS as l } from "./Badge.consts.js";
import M from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as r } from "../Icons/Icon/Icon.consts.js";
const p = {
  key: 0,
  class: "ds-badge__content"
}, f = {
  key: 2,
  class: "ds-badge__image"
}, z = ["src"], D = /* @__PURE__ */ u({
  __name: "Badge",
  props: {
    color: { default: () => l.PRIMARY },
    size: { default: () => s.SMALL },
    label: {},
    icon: {},
    imageUrl: {},
    elevation: { default: () => d.X_SMALL }
  },
  setup(c) {
    const L = A(() => {
      switch (c.size) {
        case s.SMALL:
          return r.XXX_SMALL;
        case s.MEDIUM:
          return r.XX_SMALL;
        case s.LARGE:
          return r.X_SMALL;
        case s.X_LARGE:
        default:
          return r.SMALL;
      }
    });
    return (e, R) => (a(), i("div", {
      class: m(["ds-badge", {
        "-ds-x-small": e.size === o(s).X_SMALL,
        "-ds-small": e.size === o(s).SMALL,
        "-ds-medium": e.size === o(s).MEDIUM,
        "-ds-large": e.size === o(s).LARGE,
        "-ds-x-large": e.size === o(s).X_LARGE,
        "-ds-color-primary": e.color === o(l).PRIMARY,
        "-ds-color-success": e.color === o(l).SUCCESS,
        "-ds-color-fail": e.color === o(l).FAIL,
        "-ds-color-danger": e.color === o(l).DANGER,
        "-ds-color-neutral": e.color === o(l).NEUTRAL
      }])
    }, [
      t("div", {
        class: m([
          "ds-badge__elevation",
          {
            "-ds-no-elevation": e.elevation === o(d).NONE,
            "-ds-elevation-s": e.elevation === o(d).SMALL
          }
        ])
      }, null, 2),
      !e.$slots.image && !e.imageUrl && !e.icon ? (a(), i("div", p, g(e.label), 1)) : n("", !0),
      !e.$slots.image && !e.imageUrl && e.icon ? (a(), S(o(M), {
        key: 1,
        icon: e.icon,
        size: L.value,
        class: "ds-badge__icon"
      }, null, 8, ["icon", "size"])) : n("", !0),
      e.$slots.image || e.imageUrl ? (a(), i("span", f, [
        E(e.$slots, "image", {}, () => [
          t("img", { src: e.imageUrl }, null, 8, z)
        ], !0)
      ])) : n("", !0)
    ], 2));
  }
});
export {
  D as default
};
//# sourceMappingURL=Badge.vue2.js.map
