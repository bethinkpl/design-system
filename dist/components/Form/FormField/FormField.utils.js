import { FORM_FIELD_STATES as c } from "./FormField.consts.js";
function f({
  label: F,
  state: o,
  hasRequiredIndicator: R,
  labelInfo: n,
  subLabel: p,
  fieldId: E,
  messageText: r
}, i = []) {
  return {
    label: F,
    state: o != null ? o : i[0] ? c.ERROR : void 0,
    hasRequiredIndicator: R,
    labelInfo: n,
    subLabel: p,
    fieldId: E,
    messageText: r != null ? r : i[0]
  };
}
export {
  f as extractFormFieldProps
};
//# sourceMappingURL=FormField.utils.js.map
