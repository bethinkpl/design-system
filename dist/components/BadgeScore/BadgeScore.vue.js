import l from "./BadgeScore.vue2.js";
import { resolveComponent as i, createElementBlock as a, openBlock as o, normalizeClass as d, createBlock as S, createCommentVNode as E, createElementVNode as s, toDisplayString as r } from "vue";
/* empty css                */
import c from "../../_virtual/_plugin-vue_export-helper.js";
const O = { class: "ds-badgeScore__text" }, t = { class: "ds-badgeScore__suffix" };
function C(e, R, _, m, p, f) {
  const n = i("wnl-icon");
  return o(), a("div", {
    class: d(["ds-badgeScore", {
      "-ds-success": e.color === e.BADGE_SCORE_COLORS.SUCCESS,
      "-ds-warning": e.color === e.BADGE_SCORE_COLORS.WARNING,
      "-ds-fail": e.color === e.BADGE_SCORE_COLORS.FAIL,
      "-ds-inverted": e.color === e.BADGE_SCORE_COLORS.INVERTED,
      "-ds-neutralWeak": e.color === e.BADGE_SCORE_COLORS.NEUTRAL_WEAK,
      "-ds-neutral": e.color === e.BADGE_SCORE_COLORS.NEUTRAL,
      "-ds-small": e.size === e.BADGE_SCORE_SIZES.SMALL,
      "-ds-xsmall": e.size === e.BADGE_SCORE_SIZES.XSMALL,
      "-ds-fullWidth": e.fullWidth
    }])
  }, [
    e.icon ? (o(), S(n, {
      key: 0,
      class: "ds-badgeScore__icon",
      icon: e.icon,
      size: e.iconSize
    }, null, 8, ["icon", "size"])) : E("", !0),
    s("div", O, r(e.text), 1),
    s("span", t, r(e.suffix), 1)
  ], 2);
}
const D = /* @__PURE__ */ c(l, [["render", C], ["__scopeId", "data-v-52a165b4"]]);
export {
  D as default
};
//# sourceMappingURL=BadgeScore.vue.js.map
