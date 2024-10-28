import{T as a,a as o}from"./TabItem-Cx2nQ_YR.js";import{I as i}from"./Icon-BiVaixmr.js";import"./vue.esm-bundler-BSCmGRHc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/TabItem",component:a},n=r=>({components:{TabItem:a},setup(){return r},template:'<tab-item style="max-width: 150px" :icon="ICONS[icon]" :is-selected="isSelected" :label="label" :size="TAB_ITEM_SIZES[size]" :label-ellipsis="labelEllipsis" />',data(){return{ICONS:Object.freeze(i),TAB_ITEM_SIZES:Object.freeze(o)}}}),e=n.bind({}),c={icon:null,size:"MEDIUM",label:"Tab item",isSelected:!1,labelEllipsis:!1},p={icon:{control:"select",options:[...Object.keys(i),null]},size:{control:"select",options:Object.keys(o)},label:{control:"text"},isSelected:{control:"boolean"},labelEllipsis:{control:"boolean"}};e.argTypes=p;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34956"}};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,d as default};
