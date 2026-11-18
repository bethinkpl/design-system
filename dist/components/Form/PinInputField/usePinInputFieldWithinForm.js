import { computed as s } from "vue";
import { useFormFieldWithinForm as c } from "../../../composables/useFormFieldWithinForm.js";
function a(e, t) {
  const { value: n, errors: u, field: r } = c(e, t), o = (i) => {
    r == null || r.handleBlur(i, !0);
  }, m = s(() => r != null && r.meta.touched ? u.value : []);
  return {
    value: n,
    errors: m,
    onComplete: o,
    onBlur: o
  };
}
export {
  a as usePinInputFieldWithinForm
};
//# sourceMappingURL=usePinInputFieldWithinForm.js.map
