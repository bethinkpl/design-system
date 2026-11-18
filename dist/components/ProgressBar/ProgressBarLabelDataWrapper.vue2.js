import { defineComponent as p, createElementBlock as e, openBlock as r, createCommentVNode as t, toDisplayString as s, createElementVNode as o, createTextVNode as n } from "vue";
const D = { class: "ds-progressBarLabelDataWrapper" }, b = {
  key: 0,
  class: "ds-progressBarLabelDataWrapper__labelData"
}, i = {
  key: 1,
  class: "ds-progressBarLabelDataWrapper__labelDataSupporting"
}, _ = {
  key: 2,
  class: "ds-progressBarLabelDataWrapper__labelDataSuffix"
}, f = /* @__PURE__ */ p({
  __name: "ProgressBarLabelDataWrapper",
  props: {
    labelData: {},
    labelDataSupporting: {},
    labelDataSuffix: {}
  },
  setup(d) {
    return (a, l) => (r(), e("div", D, [
      a.labelData ? (r(), e("span", b, s(a.labelData), 1)) : t("", !0),
      a.labelDataSupporting ? (r(), e("span", i, [
        l[0] || (l[0] = o("span", { class: "ds-progressBarLabelDataWrapper__labelDataSeparator" }, "/", -1)),
        n(" " + s(a.labelDataSupporting), 1)
      ])) : t("", !0),
      a.labelDataSuffix ? (r(), e("span", _, s(a.labelDataSuffix), 1)) : t("", !0)
    ]));
  }
});
export {
  f as default
};
//# sourceMappingURL=ProgressBarLabelDataWrapper.vue2.js.map
