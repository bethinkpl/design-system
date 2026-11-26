import { ref as i } from "vue";
import { useFormFieldWithinForm as s } from "./useFormFieldWithinForm.js";
function F(t, n) {
  const { value: e, errors: u, field: r } = s(t, n), o = i(!1);
  return {
    onBlur: (l) => {
      r == null || r.handleBlur(l, !0), o.value = !0;
    },
    onInput: () => {
      o.value && (r == null || r.validate());
    },
    value: e,
    errors: u
  };
}
export {
  F as useTextFieldWithinForm
};
//# sourceMappingURL=useTextFieldWithinForm.js.map
