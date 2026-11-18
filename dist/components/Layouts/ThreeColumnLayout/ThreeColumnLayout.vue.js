import t from "./ThreeColumnLayout.vue2.js";
import { createElementBlock as n, openBlock as d, createElementVNode as o, normalizeClass as l, renderSlot as i } from "vue";
/* empty css                       */
import r from "../../../_virtual/_plugin-vue_export-helper.js";
const u = { class: "ds-threeColumnLayout" }, m = { class: "ds-threeColumnLayout__contentColumn" };
function a(e, s, C, b, h, f) {
  return d(), n("div", u, [
    o("div", {
      class: l(["ds-threeColumnLayout__overlay", {
        "-ds-visible": e.rightColumnVisibleMobile || e.leftColumnVisibleMobile
      }]),
      onClick: s[0] || (s[0] = (_) => e.$emit("overlay-clicked"))
    }, null, 2),
    o("div", {
      class: l(["ds-threeColumnLayout__leftColumn", {
        "-ds-desktopVisible": e.leftColumnVisible || e.leftColumnVisibleMobile,
        "-ds-mobileVisible": e.leftColumnVisibleMobile
      }])
    }, [
      i(e.$slots, "leftColumn", {}, void 0, !0)
    ], 2),
    o("div", m, [
      o("div", {
        class: l(["ds-threeColumnLayout__content", {
          "-ds-noPadding": e.contentWithoutPadding
        }])
      }, [
        i(e.$slots, "default", {}, void 0, !0)
      ], 2)
    ]),
    o("div", {
      class: l(["ds-threeColumnLayout__rightColumn", {
        "-ds-medium": e.rightColumnSize === e.THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
        "-ds-large": e.rightColumnSize === e.THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
        "-ds-desktopVisible": e.rightColumnVisible || e.rightColumnVisibleMobile,
        "-ds-mobileVisible": e.rightColumnVisibleMobile
      }])
    }, [
      i(e.$slots, "rightColumn", {}, void 0, !0)
    ], 2)
  ]);
}
const M = /* @__PURE__ */ r(t, [["render", a], ["__scopeId", "data-v-e725c29a"]]);
export {
  M as default
};
//# sourceMappingURL=ThreeColumnLayout.vue.js.map
