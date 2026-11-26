import { defineComponent as t } from "vue";
import { IMAGE_FITS as r } from "./Image.consts.js";
import { SKELETON_RADIUS_SIZES as o } from "../Skeleton/Skeleton.consts.js";
import i from "../Skeleton/Skeleton.vue.js";
const S = t({
  // <image> is "an ancient and poorly supported precursor to the <img> element"
  // so there should be no conflicts. Also, we prefix all DS components with ds-
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element#obsolete_and_deprecated_elements
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Image",
  components: {
    DsSkeleton: i
  },
  props: {
    fit: {
      type: String,
      default: r.COVER
    },
    src: {
      type: String,
      required: !0
    }
  },
  emits: {
    error: (e) => e instanceof Event
  },
  data() {
    return {
      isLoading: !0,
      IMAGE_FITS: Object.freeze(r),
      SKELETON_RADIUS_SIZES: Object.freeze(o)
    };
  },
  methods: {
    onError(e) {
      this.isLoading = !1, this.$emit("error", e);
    }
  }
});
export {
  S as default
};
//# sourceMappingURL=Image.vue2.js.map
