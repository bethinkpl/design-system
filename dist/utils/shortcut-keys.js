const E = (a) => (a == null ? void 0 : a.tagName) === "INPUT" || (a == null ? void 0 : a.tagName) === "SELECT" || (a == null ? void 0 : a.tagName) === "TEXTAREA" || !!(a != null && a.isContentEditable);
export {
  E as isElementEditable
};
//# sourceMappingURL=shortcut-keys.js.map
