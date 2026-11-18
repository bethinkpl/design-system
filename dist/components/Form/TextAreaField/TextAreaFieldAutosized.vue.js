import { defineComponent as u, useModel as m, useTemplateRef as d, computed as n, withDirectives as s, createElementBlock as i, openBlock as p, vModelText as x } from "vue";
import { useTextareaAutosize as c } from "@vueuse/core";
const T = /* @__PURE__ */ u({
  __name: "TextAreaFieldAutosized",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const e = m(a, "modelValue"), l = d("textarea");
    return c({
      element: l,
      input: n(() => {
        var t;
        return (t = e.value) != null ? t : "";
      })
    }), (t, o) => s((p(), i("textarea", {
      ref: "textarea",
      "onUpdate:modelValue": o[0] || (o[0] = (r) => e.value = r)
    }, null, 512)), [
      [x, e.value]
    ]);
  }
});
export {
  T as default
};
//# sourceMappingURL=TextAreaFieldAutosized.vue.js.map
