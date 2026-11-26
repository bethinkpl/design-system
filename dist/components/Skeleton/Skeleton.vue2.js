import r from "primevue/skeleton";
import { defineComponent as e } from "vue";
import { SKELETON_RADIUS_SIZES as t } from "./Skeleton.consts.js";
const m = e({
  name: "Skeleton",
  components: {
    PrimeSkeleton: r
  },
  props: {
    height: {
      type: String,
      default: "100%"
    },
    radius: {
      type: String,
      default: t.MEDIUM
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      designTokens: {
        animation: {
          background: "var(--color-neutral-shimmer)"
        },
        background: "var(--color-neutral-background-medium)"
      }
    };
  },
  computed: {
    radiusTranslated() {
      return `${{
        [t.SMALL]: 0,
        [t.MEDIUM]: 6,
        [t.LARGE]: 200
      }[this.radius]}px`;
    }
  }
});
export {
  m as default
};
//# sourceMappingURL=Skeleton.vue2.js.map
