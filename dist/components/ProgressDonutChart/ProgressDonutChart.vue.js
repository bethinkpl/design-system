import a from "./ProgressDonutChart.vue2.js";
import { resolveComponent as n, createElementBlock as r, openBlock as e, createElementVNode as o, Fragment as l, renderList as T, normalizeStyle as S, normalizeClass as t, createBlock as E, createCommentVNode as c, toDisplayString as O } from "vue";
/* empty css                        */
import d from "../../_virtual/_plugin-vue_export-helper.js";
const i = { class: "ds-progressDonutChart" }, D = ["width", "height"], N = ["cx", "cy", "r"], h = ["cx", "cy", "r"], p = ["cx", "cy", "r"], A = { class: "ds-progressDonutChart__label" }, I = {
  key: 0,
  class: "ds-progressDonutChart__loaderText"
};
function u(s, g, P, m, G, U) {
  const R = n("ds-icon");
  return e(), r("div", i, [
    (e(), r("svg", {
      class: "ds-progressDonutChart__svg",
      width: s.PROGRESS_DONUT_CHART_SIZE,
      height: s.PROGRESS_DONUT_CHART_SIZE,
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      o("circle", {
        class: "ds-progressDonutChart__circle ds-progressDonutChart__thumb",
        cx: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        cy: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        r: s.PROGRESS_DONUT_CHART_CIRCLE_RADIUS
      }, null, 8, N),
      s.state === s.PROGRESS_DONUT_CHART_STATES.LOADING ? (e(), r("circle", {
        key: 0,
        class: "ds-progressDonutChart__circle ds-progressDonutChart__loader",
        cx: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        cy: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        r: s.PROGRESS_DONUT_CHART_CIRCLE_RADIUS
      }, null, 8, h)) : (e(!0), r(l, { key: 1 }, T(s.calculatedRanges, (_, C) => (e(), r("circle", {
        key: `circle_${C}`,
        class: t(["ds-progressDonutChart__circle ds-progressDonutChart__track", [`-ds-${_.color}`]]),
        cx: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        cy: s.PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT,
        r: s.PROGRESS_DONUT_CHART_CIRCLE_RADIUS,
        style: S(`--length: ${_.length}; transform: rotate(${_.rotate}deg);`)
      }, null, 14, p))), 128))
    ], 8, D)),
    o("div", A, [
      s.state === s.PROGRESS_DONUT_CHART_STATES.LOADING ? (e(), r("div", I)) : s.state === s.PROGRESS_DONUT_CHART_STATES.DONE ? (e(), E(R, {
        key: 1,
        class: "ds-progressDonutChart__icon",
        icon: s.ICONS.FA_CHECK_SOLID,
        size: s.ICON_SIZES.X_SMALL
      }, null, 8, ["icon", "size"])) : s.label ? (e(), r("div", {
        key: 2,
        class: t(["ds-progressDonutChart__labelText", { "-ds-hasOverage": s.state === s.PROGRESS_DONUT_CHART_STATES.OVERAGE }])
      }, O(s.labelText), 3)) : c("", !0)
    ])
  ]);
}
const v = /* @__PURE__ */ d(a, [["render", u], ["__scopeId", "data-v-524886a9"]]);
export {
  v as default
};
//# sourceMappingURL=ProgressDonutChart.vue.js.map
