import { useFormFieldWithinForm as l } from "../../../composables/useFormFieldWithinForm.js";
function m(e, r) {
  const { value: n, errors: t, field: o } = l(e, r);
  return {
    value: n,
    errors: t,
    onClose: (i) => {
      o == null || o.handleBlur(i, !0);
    }
  };
}
export {
  m as useSelectFieldWithinForm
};
//# sourceMappingURL=useSelectFieldWithinForm.js.map
