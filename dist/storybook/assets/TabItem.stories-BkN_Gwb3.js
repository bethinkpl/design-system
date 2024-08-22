import{T as t,a as s}from"./TabItem-DWBPH2UN.js";import{I as l}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Components/TabItem",component:t},o=a=>({components:{TabItem:t},setup(){return a},template:'<tab-item style="max-width: 150px" :icon="ICONS[icon]" :is-selected="isSelected" :label="label" :size="TAB_ITEM_SIZES[size]" :label-ellipsis="labelEllipsis" />',data(){return{ICONS:Object.freeze(l),TAB_ITEM_SIZES:Object.freeze(s)}}}),e=o.bind({}),i={icon:null,size:"MEDIUM",label:"Tab item",isSelected:!1,labelEllipsis:!1},r={icon:{control:"select",options:[...Object.keys(l),null]},size:{control:"select",options:Object.keys(s)},label:{control:"text"},isSelected:{control:"boolean"},labelEllipsis:{control:"boolean"}};e.argTypes=r;e.args=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34956"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    TabItem
  },
  setup() {
    return args;
  },
  template: '<tab-item style="max-width: 150px" :icon="ICONS[icon]" :is-selected="isSelected" :label="label" :size="TAB_ITEM_SIZES[size]" :label-ellipsis="labelEllipsis" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS),
      TAB_ITEM_SIZES: Object.freeze(TAB_ITEM_SIZES)
    };
  }
})`,...e.parameters?.docs?.source}}};const b=["Interactive"];export{e as Interactive,b as __namedExportsOrder,I as default};
