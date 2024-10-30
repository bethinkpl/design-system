import{S as s}from"./SelectList-CuEvdEjE.js";import{S as E,a as T,b as I,c as _}from"./SelectListItem-lIcI2WfB.js";import{I as r}from"./Icon-DI8g7n3G.js";import{S as L}from"./SelectListItemDivider-CAyAhQva.js";import{S as m}from"./SelectListItemToggle-PQMcINZy.js";import{S as d}from"./SelectListSectionTitle-CWSXIOD_.js";import"./vue.esm-bundler-DjLn_Drf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-DSLZy8UN.js";const j={title:"Components/SelectList",component:s},e=l=>({components:{SelectList:s,SelectListItem:E,SelectListItemDivider:L,SelectListItemToggle:m,SelectListSectionTitle:d},setup(){return l},template:`
            <select-list>
                <select-list-section-title label="Nazwa sekcji uppercasem tutaj" />
                <select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL"
                                                    :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE" />
                <select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected
                                                    :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY" />
                <select-list-item-divider />
                <select-list-section-title label="I nazwa sekcji bez uppercase tutaj" :is-uppercase="false" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji"
                                                                 label-off="Dodaj do kolekcji" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji"
                                                                 label-off="Dodaj do kolekcji" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.LOADING"
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w trakcie ładowania" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.DISABLED"
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w stanie disabled" />
            </select-list>`,data(){return{ICONS:Object.freeze(r),SELECT_LIST_ITEM_SELECTION_MODE:Object.freeze(T),SELECT_LIST_ITEM_SIZES:Object.freeze(I),SELECT_LIST_ITEM_STATES:Object.freeze(_)}}});e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=0%3A1"}};const t=l=>({components:{SelectList:s,SelectListItem:E},props:Object.keys(l),template:`
            <select-list>
            <select-list-item
                    :is-selected="selected === 0"
                    label="Short text"
                    @click.native="selected = 0"
            />
            <select-list-item
                    :is-selected="selected === 1"
                    label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada commodo diam, a venenatis ipsum. Praesent vitae bibendum dolor."
                    @click.native="selected = 1"
            />
            </select-list>`,data(){return{selected:0}}});var i,o,S;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    SelectList,
    SelectListItem,
    SelectListItemDivider,
    SelectListItemToggle,
    SelectListSectionTitle
  },
  setup() {
    return args;
  },
  template: \`
            <select-list>
                <select-list-section-title label="Nazwa sekcji uppercasem tutaj" />
                <select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL"
                                                    :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE" />
                <select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected
                                                    :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY" />
                <select-list-item-divider />
                <select-list-section-title label="I nazwa sekcji bez uppercase tutaj" :is-uppercase="false" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji"
                                                                 label-off="Dodaj do kolekcji" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji"
                                                                 label-off="Dodaj do kolekcji" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.LOADING"
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w trakcie ładowania" />
                <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" :state="SELECT_LIST_ITEM_STATES.DISABLED"
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji w stanie disabled" />
            </select-list>\`,
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(SELECT_LIST_ITEM_SELECTION_MODE),
      SELECT_LIST_ITEM_SIZES: Object.freeze(SELECT_LIST_ITEM_SIZES),
      SELECT_LIST_ITEM_STATES: Object.freeze(SELECT_LIST_ITEM_STATES)
    };
  }
})`,...(S=(o=e.parameters)==null?void 0:o.docs)==null?void 0:S.source}}};var c,n,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`argTypes => ({
  components: {
    SelectList,
    SelectListItem
  },
  props: Object.keys(argTypes),
  template: \`
            <select-list>
            <select-list-item
                    :is-selected="selected === 0"
                    label="Short text"
                    @click.native="selected = 0"
            />
            <select-list-item
                    :is-selected="selected === 1"
                    label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada commodo diam, a venenatis ipsum. Praesent vitae bibendum dolor."
                    @click.native="selected = 1"
            />
            </select-list>\`,
  data() {
    return {
      selected: 0
    };
  }
})`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Mix","SelectableList"];export{e as Mix,t as SelectableList,N as __namedExportsOrder,j as default};
