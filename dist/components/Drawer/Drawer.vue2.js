import { defineComponent as r } from "vue";
import { DRAWER_BACKGROUND_COLORS as t, DRAWER_POSITIONS as o } from "./Drawer.consts.js";
const s = r({
  name: "Drawer",
  props: {
    position: {
      type: String,
      default: o.RIGHT,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    stickyHeader: {
      type: Boolean,
      default: !0
    },
    stickyFooter: {
      type: Boolean,
      default: !0
    },
    backgroundColor: {
      type: String,
      default: t.NONE,
      validator(e) {
        return Object.values(t).includes(e);
      }
    }
  },
  computed: {
    positionClassName() {
      return this.position === o.LEFT ? "-ds-positionLeft" : "-ds-positionRight";
    },
    backgroundColorClassName() {
      switch (this.backgroundColor) {
        case t.DEFAULT:
          return "-ds-backgroundDefault";
        case t.NEUTRAL:
          return "-ds-backgroundNeutral";
        default:
          return null;
      }
    }
  }
});
export {
  s as default
};
//# sourceMappingURL=Drawer.vue2.js.map
