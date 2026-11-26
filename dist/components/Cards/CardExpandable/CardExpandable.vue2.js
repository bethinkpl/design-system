import { defineComponent as a } from "vue";
import t from "../Card/Card.vue.js";
import d from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as n, ICONS as r } from "../../Icons/Icon/Icon.consts.js";
import { useLegacyI18n as p } from "../../../composables/useLegacyI18n.js";
const u = a({
  name: "CardExpandable",
  components: {
    DsCard: t,
    DsIcon: d
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: !1
    },
    isExpanderVisible: {
      type: Boolean,
      default: !0
    },
    expanderTextCollapsed: {
      type: String,
      default: null
    },
    expanderTextExpanded: {
      type: String,
      default: null
    },
    headerHasPadding: {
      type: Boolean,
      default: !1
    },
    dividerUnderHeader: {
      type: Boolean,
      default: !1
    }
  },
  emits: { "update:isExpanded": (e) => !0 },
  setup() {
    const { t: e } = p();
    return { t: e };
  },
  data() {
    return {
      isExpandedInternal: !1,
      ICONS: Object.freeze(r),
      ICON_SIZES: Object.freeze(n)
    };
  },
  computed: {
    resolvedExpanderTextCollapsed() {
      var e;
      return (e = this.expanderTextCollapsed) != null ? e : this.t("ds.cardExpandable.expand");
    },
    resolvedExpanderTextExpanded() {
      var e;
      return (e = this.expanderTextExpanded) != null ? e : this.t("ds.cardExpandable.collapse");
    },
    chevronRotation() {
      return this.isExpandedInternal ? 180 : null;
    }
  },
  watch: {
    isExpanded: {
      handler(e) {
        e !== this.isExpandedInternal && (this.isExpandedInternal = e);
      },
      immediate: !0
    }
  },
  methods: {
    onExpanderClick() {
      this.isExpandedInternal = !this.isExpandedInternal, this.$emit("update:isExpanded", this.isExpandedInternal);
    }
  }
});
export {
  u as default
};
//# sourceMappingURL=CardExpandable.vue2.js.map
