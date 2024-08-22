import{B as s}from"./BlockadeStatus-B-NvJrOV.js";import{a as e}from"./user-DY5hg_iu.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/Statuses/BlockadeStatus",component:s},o=a=>({components:{BlockadeStatus:s},setup(){return a},template:'<blockade-status :status="status" />'}),t=o.bind({}),r={status:e.ACTIVE},n={status:{control:"select",options:Object.values(e)}};t.argTypes=n;t.args=r;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3040%3A70712"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockadeStatus
  },
  setup() {
    return args;
  },
  template: \`<blockade-status :status="status" />\`
})`,...t.parameters?.docs?.source}}};const l=["Interactive"];export{t as Interactive,l as __namedExportsOrder,d as default};
