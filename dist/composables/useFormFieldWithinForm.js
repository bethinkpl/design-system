import { toValue as m, inject as s, ref as l } from "vue";
import { FormContextKey as a, useField as F } from "vee-validate";
function f(r, n) {
  var t;
  const e = m(r), i = s(a, null);
  if (e && !i)
    throw new Error(
      `Field with name "${r}" must be used within a component that provides a FormContext, e.g. by using useForm()`
    );
  const o = e ? F(e, void 0) : null, u = o ? o.value : n;
  return {
    field: o,
    value: u,
    errors: (t = o == null ? void 0 : o.errors) != null ? t : l([])
  };
}
export {
  f as useFormFieldWithinForm
};
//# sourceMappingURL=useFormFieldWithinForm.js.map
