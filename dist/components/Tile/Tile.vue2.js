import { defineComponent as N, computed as a, createElementBlock as d, openBlock as i, normalizeClass as o, createBlock as r, createCommentVNode as c, createElementVNode as m, unref as t, toDisplayString as p } from "vue";
import u from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as L, ICONS as S } from "../Icons/Icon/Icon.consts.js";
import { TILE_COMPACT_LAYOUTS as T, TILE_COLORS as s, TILE_STATES as n, TILE_ADDITIONAL_TEXT_MAX_WIDTHS as I } from "./Tile.consts.js";
import { props as O } from "./Tile.shared.js";
const R = { class: "ds-tile__center" }, f = ["textContent"], y = ["textContent"], w = /* @__PURE__ */ N({
  __name: "Tile",
  props: O,
  setup(_) {
    const l = _, E = a(() => {
      switch (l.compactLayout) {
        case T.ICON_LEFT_ONLY:
          return "-ds-iconLeftOnly";
        case T.ICON_RIGHT_ONLY:
          return "-ds-iconRightOnly";
        case T.ICON_RIGHT_HIDDEN:
          return "-ds-iconRightHidden";
        default:
          return "";
      }
    }), A = a(
      () => ({
        [s.NEUTRAL]: "-ds-neutral",
        [s.NEUTRAL_WEAK]: "-ds-neutralWeak",
        [s.PRIMARY]: "-ds-primary",
        [s.SUCCESS]: "-ds-success",
        [s.FAIL]: "-ds-fail",
        [s.DANGER]: "-ds-danger",
        [s.WARNING]: "-ds-warning",
        [s.INFO]: "-ds-info"
      })[l.color]
    ), C = a(
      () => ({
        [n.DEFAULT]: null,
        [n.DISABLED]: "-ds-disabled",
        [n.LOADING]: "-ds-loading"
      })[l.state]
    );
    return (e, D) => (i(), d("div", {
      class: o([[
        A.value,
        C.value,
        E.value,
        {
          "-ds-interactive": e.interactive,
          [`-ds-border-${e.borderColor}`]: e.borderColor !== null
        }
      ], "ds-tile"])
    }, [
      e.iconLeft ? (i(), r(t(u), {
        key: 0,
        icon: e.iconLeft,
        size: t(L).SMALL,
        class: "ds-tile__iconLeft"
      }, null, 8, ["icon", "size"])) : c("", !0),
      m("div", R, [
        e.eyebrowText ? (i(), d("span", {
          key: 0,
          class: o(["ds-tile__eyebrowText", {
            "-ds-uppercase": e.isEyebrowTextUppercase,
            "-ds-ellipsis": e.eyebrowEllipsis
          }]),
          textContent: p(e.eyebrowText)
        }, null, 10, f)) : c("", !0),
        m("span", {
          class: o(["ds-tile__text", { "-ds-ellipsis": e.textEllipsis }]),
          textContent: p(e.text)
        }, null, 10, y)
      ]),
      e.state === t(n).LOADING ? (i(), r(t(u), {
        key: 1,
        class: "ds-tile__iconRight",
        icon: t(S).FAD_SPINNER_THIRD,
        size: t(L).SMALL,
        spinning: ""
      }, null, 8, ["icon", "size"])) : e.iconRight ? (i(), r(t(u), {
        key: 2,
        class: "ds-tile__iconRight",
        icon: e.iconRight,
        size: t(L).SMALL
      }, null, 8, ["icon", "size"])) : e.additionalText ? (i(), d("div", {
        key: 3,
        class: o(["ds-tile__additionalText", {
          "-ds-max-width-small": e.additionalTextMaxWidth === t(I).SMALL,
          "-ds-max-width-medium": e.additionalTextMaxWidth === t(I).MEDIUM
        }])
      }, p(e.additionalText), 3)) : c("", !0)
    ], 2));
  }
});
export {
  w as default
};
//# sourceMappingURL=Tile.vue2.js.map
