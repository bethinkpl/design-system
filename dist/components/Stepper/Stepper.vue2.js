import { defineComponent as l, createElementBlock as t, openBlock as s, createCommentVNode as r, createElementVNode as n, toDisplayString as o, Fragment as p, renderList as u, normalizeClass as d } from "vue";
const i = { class: "ds-stepper" }, c = {
  key: 0,
  class: "ds-stepper__header"
}, _ = { class: "ds-stepper__title" }, h = {
  key: 0,
  class: "ds-stepper__counter"
}, m = {
  key: 0,
  class: "ds-stepper__counterLabel"
}, S = {
  key: 1,
  class: "ds-stepper__counterValue"
}, k = { class: "ds-stepper__steps" }, L = /* @__PURE__ */ l({
  __name: "Stepper",
  props: {
    title: {},
    counterLabel: {},
    hasCounterValue: { type: Boolean, default: !0 },
    totalSteps: {},
    currentStep: {}
  },
  setup(v) {
    return (e, y) => (s(), t("div", i, [
      e.title || e.counterLabel || e.hasCounterValue ? (s(), t("div", c, [
        n("div", _, o(e.title), 1),
        e.counterLabel || e.hasCounterValue ? (s(), t("div", h, [
          e.counterLabel ? (s(), t("span", m, o(e.counterLabel), 1)) : r("", !0),
          e.hasCounterValue ? (s(), t("span", S, o(e.currentStep) + "/" + o(e.totalSteps), 1)) : r("", !0)
        ])) : r("", !0)
      ])) : r("", !0),
      n("div", k, [
        (s(!0), t(p, null, u(e.totalSteps, (a) => (s(), t("div", {
          key: a,
          class: d(["ds-stepper__step", { "-ds-active": a <= e.currentStep }])
        }, null, 2))), 128))
      ])
    ]));
  }
});
export {
  L as default
};
//# sourceMappingURL=Stepper.vue2.js.map
