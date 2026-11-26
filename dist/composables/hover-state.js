import { ref as o } from "vue";
import { isTouchDevice as u } from "../utils/device.js";
function f() {
  const e = o(!1), t = u();
  return {
    isHovered: e,
    mouseOver() {
      t || (e.value = !0);
    },
    mouseLeave() {
      t || (e.value = !1);
    },
    touchStart() {
      t && (e.value = !0);
    },
    touchEnd() {
      t && (e.value = !1);
    }
  };
}
export {
  f as useHoverState
};
//# sourceMappingURL=hover-state.js.map
