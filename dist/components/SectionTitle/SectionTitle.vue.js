import s from "./SectionTitle.vue2.js";
import { createElementBlock as i, openBlock as c, createElementVNode as e, toDisplayString as o } from "vue";
/* empty css                  */
import n from "../../_virtual/_plugin-vue_export-helper.js";
const r = { class: "ds-sectionTitle" }, _ = { class: "ds-sectionTitle__title" }, p = { class: "ds-sectionTitle__supportingText" };
function d(t, l, a, m, f, T) {
  return c(), i("div", r, [
    e("div", _, o(t.titleText), 1),
    e("div", p, o(t.supportingText), 1)
  ]);
}
const $ = /* @__PURE__ */ n(s, [["render", d], ["__scopeId", "data-v-e89e8c32"]]);
export {
  $ as default
};
//# sourceMappingURL=SectionTitle.vue.js.map
