import _ from "./ProgressBar.vue2.js";
import { resolveComponent as d, createElementBlock as s, openBlock as a, normalizeClass as l, createCommentVNode as r, createElementVNode as o, createBlock as i, toDisplayString as E, Fragment as p, renderList as B, normalizeStyle as S, createVNode as R } from "vue";
/* empty css                 */
import m from "../../_virtual/_plugin-vue_export-helper.js";
const f = {
  key: 0,
  class: "ds-progressBar__label"
}, A = ["title"], O = { class: "ds-progressBar__bottomWrapper" }, D = { key: 0 };
function I(e, T, L, P, y, v) {
  const n = d("progress-bar-label-data-wrapper"), b = d("ds-icon"), u = d("progress-bar-legend");
  return a(), s("div", {
    class: l(["ds-progressBar", {
      "-ds-compact": e.layout === e.PROGRESS_BAR_LAYOUTS.COMPACT
    }])
  }, [
    e.labelText || e.labelDataExists ? (a(), s("div", f, [
      o("div", {
        class: l(["ds-progressBar__labelText", {
          "-ds-medium": e.labelTextSize === e.PROGRESS_BAR_LABEL_TEXT_SIZES.MEDIUM,
          "-ds-ellipsis": e.labelTextEllipsis
        }]),
        title: e.labelTextEllipsis ? e.labelText : void 0
      }, E(e.labelText), 11, A),
      e.labelDataExists && e.labelDataPosition === e.PROGRESS_BAR_LABEL_DATA_POSITIONS.TOP ? (a(), i(n, {
        key: 0,
        class: "ds-progressBar__labelDataWrapperTop",
        "label-data": e.labelData,
        "label-data-supporting": e.labelDataSupporting,
        "label-data-suffix": e.labelDataSuffix
      }, null, 8, ["label-data", "label-data-supporting", "label-data-suffix"])) : r("", !0)
    ])) : r("", !0),
    o("div", {
      class: l(["ds-progressBar__barWrapper", {
        "-ds-small": e.size === e.PROGRESS_BAR_SIZES.SMALL,
        "-ds-xsmall": e.size === e.PROGRESS_BAR_SIZES.XSMALL
      }])
    }, [
      o("div", {
        class: l(["ds-progressBar__bar", {
          "-ds-noRadius": e.radius === e.PROGRESS_BAR_RADII.NONE
        }])
      }, [
        (a(!0), s(p, null, B(e.ranges, (t, g) => (a(), s("div", {
          key: g,
          class: l(["ds-progressBar__range", `-ds-${t.color}`]),
          style: S({ left: t.start + "%", width: t.length + "%" })
        }, null, 6))), 128))
      ], 2),
      e.badgePosition !== null ? (a(), i(b, {
        key: 0,
        class: l(["ds-progressBar__badge", {
          "-ds-small": e.size !== e.PROGRESS_BAR_SIZES.MEDIUM,
          [`-ds-${e.badgeColor}`]: !0
        }]),
        style: S(`left: ${e.badgePosition}%`),
        icon: e.ICONS.FA_LOCATION_DOT,
        size: e.size === e.PROGRESS_BAR_SIZES.MEDIUM ? e.ICON_SIZES.XX_SMALL : e.ICON_SIZES.XXX_SMALL
      }, null, 8, ["class", "style", "icon", "size"])) : r("", !0)
    ], 2),
    o("div", O, [
      e.hasLegend ? (a(), i(u, {
        key: 0,
        class: "ds-progressBar__legend",
        ranges: e.ranges,
        layout: e.layout,
        size: e.legendSize,
        "has-percent-value": e.hasLegendPercentValue
      }, null, 8, ["ranges", "layout", "size", "has-percent-value"])) : r("", !0),
      e.labelDataExists && e.labelDataPosition === e.PROGRESS_BAR_LABEL_DATA_POSITIONS.BOTTOM ? (a(), s(p, { key: 1 }, [
        e.hasLegend ? r("", !0) : (a(), s("div", D)),
        R(n, {
          class: "ds-progressBar__labelDataWrapperBottom",
          "label-data": e.labelData,
          "label-data-supporting": e.labelDataSupporting,
          "label-data-suffix": e.labelDataSuffix
        }, null, 8, ["label-data", "label-data-supporting", "label-data-suffix"])
      ], 64)) : r("", !0)
    ])
  ], 2);
}
const k = /* @__PURE__ */ m(_, [["render", I], ["__scopeId", "data-v-dffe7fe6"]]);
export {
  k as default
};
//# sourceMappingURL=ProgressBar.vue.js.map
