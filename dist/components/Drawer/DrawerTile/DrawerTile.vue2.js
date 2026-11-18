import e from "../../Tile/Tile.vue.js";
import { props as o } from "../../Tile/Tile.shared.js";
import { defineComponent as m } from "vue";
const n = m({
  name: "DrawerTile",
  components: {
    DsTile: e
  },
  // Only allow props that are supported by Tile
  props: o,
  emits: { click: () => !0 }
});
export {
  n as default
};
//# sourceMappingURL=DrawerTile.vue2.js.map
