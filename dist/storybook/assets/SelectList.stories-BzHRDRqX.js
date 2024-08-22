import{S as s}from"./SelectList-BiYiZ8_O.js";import{S as i,a as o,b as n}from"./SelectListItem-B5BpBuxD.js";import{I as c}from"./Icon-CVHceNst.js";import{S}from"./SelectListItemDivider-DJEbDLeE.js";import{S as a}from"./SelectListItemToggle-BhIF97Dg.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Ba-XwrF-.js";const O={title:"Components/SelectList",component:s},e=l=>({components:{SelectList:s,SelectListItem:i,SelectListItemDivider:S,SelectListItemToggle:a},setup(){return l},template:`
            <select-list>
            <select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL"
                                                :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE" />
            <select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected
                                                :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY" />
            <select-list-item-divider />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji"
                                                             label-off="Dodaj do kolekcji" />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji"
                                                             label-off="Dodaj do kolekcji" />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-loading
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji" />
            </select-list>`,data(){return{ICONS:Object.freeze(c),SELECT_LIST_ITEM_SELECTION_MODE:Object.freeze(o),SELECT_LIST_ITEM_SIZES:Object.freeze(n)}}});e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=0%3A1"}};const t=l=>({components:{SelectList:s,SelectListItem:i},props:Object.keys(l),template:`
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
            </select-list>`,data(){return{selected:0}}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    SelectList,
    SelectListItem,
    SelectListItemDivider,
    SelectListItemToggle
  },
  setup() {
    return args;
  },
  template: \`
            <select-list>
            <select-list-item label="Small" :size="SELECT_LIST_ITEM_SIZES.SMALL"
                                                :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.TOGGLE" />
            <select-list-item :icon-left="ICONS.FA_BAN" label="Medium" :size="SELECT_LIST_ITEM_SIZES.MEDIUM" is-selected
                                                :selection-mode="SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY" />
            <select-list-item-divider />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-on label-on="Usuń z kolekcji"
                                                             label-off="Dodaj do kolekcji" />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" label-on="Usuń z kolekcji"
                                                             label-off="Dodaj do kolekcji" />
            <select-list-item-toggle :icon-off="ICONS.FA_STAR" :icon-on="ICONS.FA_STAR_SOLID" is-loading
                                                             label-on="Usuń z kolekcji" label-off="Dodaj do kolekcji" />
            </select-list>\`,
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(SELECT_LIST_ITEM_SELECTION_MODE),
      SELECT_LIST_ITEM_SIZES: Object.freeze(SELECT_LIST_ITEM_SIZES)
    };
  }
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`argTypes => ({
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
})`,...t.parameters?.docs?.source}}};const p=["Mix","SelectableList"];export{e as Mix,t as SelectableList,p as __namedExportsOrder,O as default};
