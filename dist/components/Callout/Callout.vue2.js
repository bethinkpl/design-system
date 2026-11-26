import { defineComponent as A, computed as a, createElementBlock as s, openBlock as i, normalizeClass as S, unref as e, createElementVNode as C, createCommentVNode as u, createBlock as I, createVNode as c, renderSlot as O, withCtx as R, createTextVNode as b, toDisplayString as U } from "vue";
import _ from "../Icons/FeatureIcon/FeatureIcon.vue.js";
/* empty css                                    */
import { FEATURE_ICON_SIZES as T } from "../Icons/FeatureIcon/FeatureIcon.consts.js";
import y from "../TextGroup/TextGroup.vue.js";
import { TEXT_GROUP_SIZES as d, TEXT_GROUP_ALIGNS as m } from "../TextGroup/TextGroup.consts.js";
import N from "../Buttons/Button/Button.vue.js";
import { BUTTON_STATES as z, BUTTON_RADIUSES as M, BUTTON_SIZES as D, BUTTON_TYPES as g, BUTTON_COLORS as k } from "../Buttons/Button/Button.consts.js";
import { CALLOUT_MAIN_TEXT_COLORS as v, CALLOUT_ICON_COLORS as B, CALLOUT_SIZES as n, CALLOUT_LAYOUTS as o } from "./Callout.consts.js";
const G = { class: "ds-callout__content" }, V = {
  key: 0,
  class: "ds-callout__actions"
}, H = /* @__PURE__ */ A({
  __name: "Callout",
  props: {
    icon: { default: null },
    layout: { default: () => o.VERTICAL },
    size: { default: () => n.MEDIUM },
    iconColor: { default: () => B.PRIMARY },
    eyebrowText: { default: null },
    mainText: { default: null },
    supportingText: { default: null },
    mainTextColor: { default: () => v.PRIMARY },
    buttonLabel: { default: null },
    buttonIcon: { default: null },
    buttonState: { default: () => z.DEFAULT },
    isActionVertical: { type: Boolean, default: !1 }
  },
  emits: ["button-clicked"],
  setup(l) {
    const f = a(
      () => l.size === n.LARGE ? T.LARGE : T.MEDIUM
    ), L = a(
      () => l.size === n.SMALL ? d.MEDIUM : d.LARGE
    ), p = a(
      () => l.layout === o.VERTICAL ? m.CENTER : m.LEFT
    );
    return (t, r) => (i(), s("div", {
      class: S(["ds-callout", {
        "-ds-layout-vertical": t.layout === e(o).VERTICAL,
        "-ds-layout-horizontal": t.layout === e(o).HORIZONTAL,
        "-ds-actions-vertical": t.isActionVertical
      }])
    }, [
      C("div", G, [
        t.icon ? (i(), I(e(_), {
          key: 0,
          class: "ds-callout__icon",
          icon: t.icon,
          color: t.iconColor,
          size: f.value,
          "double-background": ""
        }, null, 8, ["icon", "color", "size"])) : u("", !0),
        c(y, {
          class: "ds-callout__text",
          "eyebrow-text": t.eyebrowText,
          "is-eyebrow-text-uppercase": !1,
          "main-text": t.mainText,
          "supporting-text": t.supportingText,
          size: L.value,
          align: p.value,
          "main-text-color": t.mainTextColor,
          "is-interactive": !1
        }, null, 8, ["eyebrow-text", "main-text", "supporting-text", "size", "align", "main-text-color"])
      ]),
      t.$slots.actions || t.buttonLabel ? (i(), s("div", V, [
        O(t.$slots, "actions", {}, () => [
          c(e(N), {
            color: e(k).PRIMARY,
            type: e(g).FILLED,
            size: e(D).SMALL,
            state: t.buttonState,
            radius: e(M).ROUNDED,
            "icon-left": t.buttonIcon,
            onClick: r[0] || (r[0] = (E) => t.$emit("button-clicked", E))
          }, {
            default: R(() => [
              b(U(t.buttonLabel), 1)
            ]),
            _: 1
          }, 8, ["color", "type", "size", "state", "radius", "icon-left"])
        ], !0)
      ])) : u("", !0)
    ], 2));
  }
});
export {
  H as default
};
//# sourceMappingURL=Callout.vue2.js.map
