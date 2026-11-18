import { defineComponent as l } from "vue";
import { THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE as e } from "./ThreeColumnLayout.consts.js";
const n = l({
  name: "ThreeColumnLayout",
  props: {
    rightColumnSize: {
      type: String,
      default: e.MEDIUM,
      validator(i) {
        return Object.values(e).includes(
          i
        );
      }
    },
    rightColumnVisible: {
      type: Boolean,
      default: !0
    },
    leftColumnVisible: {
      type: Boolean,
      default: !0
    },
    initialMobileRightColumnVisibleState: {
      type: Boolean,
      default: !1
    },
    initialMobileLeftColumnVisibleState: {
      type: Boolean,
      default: !1
    },
    contentWithoutPadding: {
      type: Boolean,
      default: !1
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["overlay-clicked"],
  data() {
    return {
      THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE: Object.freeze(
        e
      ),
      leftColumnVisibleMobile: !1,
      rightColumnVisibleMobile: !1
    };
  },
  watch: {
    leftColumnVisible(i) {
      this.leftColumnVisibleMobile !== i && (this.leftColumnVisibleMobile = i);
    },
    rightColumnVisible(i) {
      this.rightColumnVisibleMobile !== i && (this.rightColumnVisibleMobile = i);
    }
  },
  created() {
    this.leftColumnVisibleMobile = this.initialMobileLeftColumnVisibleState, this.rightColumnVisibleMobile = this.initialMobileRightColumnVisibleState;
  }
});
export {
  n as default
};
//# sourceMappingURL=ThreeColumnLayout.vue2.js.map
