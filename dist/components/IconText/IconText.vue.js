import n from "./IconText.vue2.js";
import { resolveComponent as i, createElementBlock as l, openBlock as o, normalizeClass as r, createBlock as a, createCommentVNode as d, createElementVNode as T, toDisplayString as t } from "vue";
/* empty css              */
import E from "../../_virtual/_plugin-vue_export-helper.js";
function m(e, S, I, c, p, C) {
  const s = i("icon");
  return o(), l("div", {
    class: r(["ds-iconText", {
      "-ds-neutralWeak": e.color === e.ICON_TEXT_COLORS.NEUTRAL_WEAK,
      "-ds-neutral": e.color === e.ICON_TEXT_COLORS.NEUTRAL,
      "-ds-xSmall": e.size === e.ICON_TEXT_SIZES.X_SMALL,
      "-ds-small": e.size === e.ICON_TEXT_SIZES.SMALL,
      "-ds-medium": e.size === e.ICON_TEXT_SIZES.MEDIUM,
      "-ds-bold": e.isLabelBold,
      "-ds-interactive": e.isInteractive && e.state !== e.ICON_TEXT_STATES.DISABLED,
      "-ds-disabled": e.state === e.ICON_TEXT_STATES.DISABLED
    }])
  }, [
    e.icon ? (o(), a(s, {
      key: 0,
      class: "ds-iconText__icon",
      icon: e.icon,
      size: e.iconSize
    }, null, 8, ["icon", "size"])) : d("", !0),
    T("div", null, t(e.label), 1)
  ], 2);
}
const _ = /* @__PURE__ */ E(n, [["render", m], ["__scopeId", "data-v-44f62e6b"]]);
export {
  _ as default
};
//# sourceMappingURL=IconText.vue.js.map
