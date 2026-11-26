import f from "./SurveyQuestionOpenEnded.vue2.js";
import { resolveComponent as t, createElementBlock as v, openBlock as s, normalizeClass as E, createBlock as l, createCommentVNode as r, createVNode as i, withCtx as a, renderSlot as c, createElementVNode as d, toDisplayString as O } from "vue";
/* empty css                             */
import S from "../../../_virtual/_plugin-vue_export-helper.js";
const y = { class: "ds-surveyQuestionOpenEnded__header" }, C = ["for"], I = { class: "ds-surveyQuestionOpenEnded__content" };
function N(e, o, $, Q, b, k) {
  const u = t("ds-modal"), p = t("icon-button"), m = t("ds-text-area-field"), _ = t("ds-card");
  return s(), v("div", {
    class: E(["ds-surveyQuestionOpenEnded", { "-ds-disabled": e.state === e.SURVEY_QUESTION_STATES.DISABLED }])
  }, [
    e.showModal ? (s(), l(u, {
      key: 0,
      "footer-secondary-button-text": e.t("ds.globals.confirmation"),
      onCloseModal: o[0] || (o[0] = (n) => e.showModal = !1),
      onSecondaryButtonClick: o[1] || (o[1] = (n) => e.showModal = !1)
    }, {
      default: a(() => [
        c(e.$slots, "explanation", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["footer-secondary-button-text"])) : r("", !0),
    i(_, null, {
      content: a(() => [
        d("div", y, [
          d("label", {
            class: "ds-surveyQuestionOpenEnded__title",
            for: e.inputId
          }, O(e.title), 9, C),
          e.$slots.explanation ? (s(), l(p, {
            key: 0,
            class: "ds-surveyQuestionOpenEnded__explanation",
            color: e.ICON_BUTTON_COLORS.NEUTRAL_WEAK,
            icon: e.ICONS.FA_CIRCLE_QUESTION,
            size: e.ICON_SIZES.MEDIUM,
            onClick: o[2] || (o[2] = (n) => e.showModal = !0)
          }, null, 8, ["color", "icon", "size"])) : r("", !0)
        ]),
        d("div", I, [
          i(m, {
            class: "ds-surveyQuestionOpenEnded__input",
            "field-id": e.inputId,
            state: e.textAreaFieldState,
            "model-value": e.value,
            "input-props": { placeholder: e.resolvedPlaceholder },
            "is-autoresizing": "",
            "onUpdate:modelValue": o[3] || (o[3] = (n) => e.$emit("input", n))
          }, null, 8, ["field-id", "state", "model-value", "input-props"])
        ])
      ]),
      _: 1
    })
  ], 2);
}
const B = /* @__PURE__ */ S(f, [["render", N], ["__scopeId", "data-v-dfb13d1f"]]);
export {
  B as default
};
//# sourceMappingURL=SurveyQuestionOpenEnded.vue.js.map
