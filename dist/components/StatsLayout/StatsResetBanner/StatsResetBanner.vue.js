import { defineComponent as m, ref as f, createElementBlock as d, openBlock as u, Fragment as p, createVNode as r, renderSlot as n, createCommentVNode as C, unref as e, createSlots as c, withCtx as s } from "vue";
import { BANNER_COLORS as B } from "../../Banner/Banner.consts.js";
import S from "../../Banner/Banner.vue.js";
import L from "../../Buttons/HelpButton/HelpButton.vue.js";
import { useLegacyI18n as N } from "../../../composables/useLegacyI18n.js";
import { ICON_BUTTON_SIZES as T } from "../../Buttons/IconButton/IconButton.consts.js";
const O = /* @__PURE__ */ m({
  __name: "StatsResetBanner",
  props: {
    infoModalTitle: {}
  },
  setup(_) {
    const { t: a } = N(), o = f(!1), i = () => {
      o.value = !1;
    };
    return (t, l) => (u(), d(p, null, [
      r(S, {
        title: e(a)("ds.statsLayout.statsResetBanner.title"),
        "button-text": e(a)("ds.statsLayout.statsResetBanner.buttonText"),
        color: e(B).NEUTRAL,
        onButtonClicked: l[0] || (l[0] = ($) => o.value = !0)
      }, c({ _: 2 }, [
        t.$slots.message ? {
          name: "defaultText",
          fn: s(() => [
            n(t.$slots, "message")
          ]),
          key: "0"
        } : void 0,
        t.$slots.infoModalContent ? {
          name: "rightSlot",
          fn: s(() => [
            r(L, {
              size: e(T).SMALL,
              "modal-title": t.infoModalTitle
            }, {
              modalContent: s(() => [
                n(t.$slots, "infoModalContent")
              ]),
              _: 3
            }, 8, ["size", "modal-title"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["title", "button-text", "color"]),
      o.value ? n(t.$slots, "resetModal", {
        key: 0,
        onClose: i
      }) : C("", !0)
    ], 64));
  }
});
export {
  O as default
};
//# sourceMappingURL=StatsResetBanner.vue.js.map
