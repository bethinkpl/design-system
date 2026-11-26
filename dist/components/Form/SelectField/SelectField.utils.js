function s(e) {
  return "options" in e;
}
function o(e) {
  const r = [];
  let t = null;
  return e.forEach((n) => {
    if (s(n)) {
      r.push({ ...n, options: [...n.options] }), t = null;
      return;
    }
    if (t) {
      t.options.push(n);
      return;
    }
    t = { options: [n] }, r.push(t);
  }), r;
}
function u(e) {
  if (e.some(({ options: t }) => t.some(({ value: n }) => n === "")))
    throw new Error(
      "[SelectField]: An option value must not be an empty string, because an empty string clears the selection."
    );
}
function i(e) {
  return typeof e == "number" ? `${e}px` : e || void 0;
}
function l(e) {
  return e.eyebrowText ? `${e.eyebrowText} ${e.label}` : e.label;
}
export {
  u as assertOptionValues,
  l as getOptionAccessibleName,
  s as isSelectFieldOptionGroup,
  o as normalizeOptions,
  i as toCssLength
};
//# sourceMappingURL=SelectField.utils.js.map
