const o = () => typeof window != "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
export {
  o as isTouchDevice
};
//# sourceMappingURL=device.js.map
