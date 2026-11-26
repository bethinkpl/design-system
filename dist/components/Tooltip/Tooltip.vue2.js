import { TOOLTIP_PLACEMENTS as e } from "./Tooltip.consts.js";
import { defineComponent as o } from "vue";
import { isTouchDevice as a } from "../../utils/device.js";
const l = o({
  name: "Tooltip",
  props: {
    placement: {
      type: String,
      default: e.BOTTOM,
      validator(t) {
        return Object.values(e).includes(t);
      }
    },
    text: {
      type: String,
      default: ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    isPointerVisible: {
      type: Boolean,
      default: !0
    },
    inline: {
      type: Boolean,
      default: !1
    },
    isHiddenOnMobile: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    tooltipParams() {
      return {
        position: this.placement,
        event: a() ? "focus" : "hover"
      };
    },
    options() {
      return {
        value: this.text,
        disabled: this.isDisabled,
        dt: {
          shadow: "0px 0px 4px 0px var(--color-default-shadow), 0px 6px 12px 0px var(--color-default-shadow-strong), 0px 2px 4px 0px var(--color-default-shadow-weak)",
          padding: "var(--spacing-space-3xs, 6px) var(--spacing-space-2xs, 8px)",
          background: "var(--color-neutral-background-medium)",
          color: "var(--color-neutral-text-heavy)",
          borderRadius: "4px",
          maxWidth: "900px"
        },
        class: this.isHiddenOnMobile ? "ds-tooltip-hide-on-mobile" : null,
        ptOptions: {
          mergeProps: !0
        },
        pt: {
          text: "ds-tooltip-text",
          arrow: this.isPointerVisible ? "" : "ds-tooltip-arrow-hide"
        }
      };
    }
  }
});
export {
  l as default
};
//# sourceMappingURL=Tooltip.vue2.js.map
