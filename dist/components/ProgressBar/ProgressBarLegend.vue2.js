import { defineComponent as c, createElementBlock as n, openBlock as o, normalizeClass as i, unref as a, Fragment as p, renderList as m, createBlock as d } from "vue";
import { PROGRESS_BAR_LEGEND_SIZES as s, PROGRESS_BAR_LEGEND_LAYOUTS as t } from "./ProgressBarLegend.consts.js";
import L from "./ProgressBarLegendItem.vue.js";
const _ = /* @__PURE__ */ c({
  __name: "ProgressBarLegend",
  props: {
    layout: { default: () => t.DEFAULT },
    ranges: {},
    size: { default: () => s.SMALL },
    hasPercentValue: { type: Boolean, default: !0 }
  },
  setup(g) {
    return (e, f) => (o(), n("div", {
      class: i(["ds-progressBarLegend", {
        "-ds-compact": e.layout === a(t).COMPACT,
        "-ds-small": e.size === a(s).SMALL
      }])
    }, [
      (o(!0), n(p, null, m(e.ranges, (r, u) => {
        var l;
        return o(), d(L, {
          key: u,
          size: e.size,
          color: r.color,
          data: r.data,
          label: r.label,
          icon: r.icon,
          "percent-value": e.hasPercentValue ? (l = r.length) == null ? void 0 : l.toString() : void 0
        }, null, 8, ["size", "color", "data", "label", "icon", "percent-value"]);
      }), 128))
    ], 2));
  }
});
export {
  _ as default
};
//# sourceMappingURL=ProgressBarLegend.vue2.js.map
