import o from "vue-popperjs";
/* empty css                                                  */
import { DROPDOWN_LEGACY_PLACEMENTS as i, DROPDOWN_LEGACY_RADIUSES as t, DROPDOWN_LEGACY_TRIGGER_ACTIONS as a } from "./DropdownLegacy.consts.js";
import { defineComponent as r } from "vue";
const u = r({
  name: "DropdownLegacy",
  components: {
    VuePopper: o
  },
  props: {
    boundariesSelector: {
      type: String,
      default: null
    },
    forceShow: {
      type: Boolean,
      default: !1
    },
    sameWidth: {
      type: Boolean,
      default: !1
    },
    triggerAction: {
      type: String,
      default: a.CLICK,
      validator(e) {
        return Object.values(a).includes(e);
      }
    },
    radius: {
      type: String,
      default: t.BOTH,
      validate(e) {
        return Object.values(t).includes(e);
      }
    },
    placement: {
      type: String,
      default: i.BOTTOM_START,
      validate(e) {
        return Object.values(i).includes(e);
      }
    },
    maxHeight: {
      type: String,
      default: null
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["document-click", "hide", "show"],
  data() {
    return {
      key: 1,
      isOpened: !1,
      DROPDOWN_LEGACY_RADIUSES: Object.freeze(t)
    };
  },
  computed: {
    scrollableWrapperStyles() {
      return {
        ...this.maxHeight && { maxHeight: this.maxHeight }
      };
    },
    options() {
      return {
        modifiers: { preventOverflow: { padding: 0 } },
        placement: this.placement,
        ...this.sameWidth && {
          // See https://github.com/floating-ui/floating-ui/issues/794
          // We can't use onCreate because vue-popper overrides it.
          // Width is set just fine without it, though.
          onUpdate: ({ instance: { reference: e, popper: s } }) => {
            s.style.width = `${e.offsetWidth}px`;
          }
        }
      };
    }
  },
  watch: {
    triggerAction() {
      this.updateKey();
    },
    sameWidth() {
      this.updateKey();
    },
    boundariesSelector() {
      this.updateKey();
    },
    placement() {
      this.updateKey();
    }
  },
  methods: {
    close() {
      this.isOpened = !1, this.$refs.popper.doClose();
    },
    updateKey() {
      this.key++;
    },
    onHide() {
      this.isOpened = !1, this.$emit("hide");
    },
    onShow() {
      this.isOpened = !0, this.$emit("show");
    }
  }
});
export {
  u as default
};
//# sourceMappingURL=DropdownLegacy.vue2.js.map
