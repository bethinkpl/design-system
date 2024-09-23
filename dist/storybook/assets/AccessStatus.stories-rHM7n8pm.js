import{A as s}from"./AccessStatus-DJi_6J7X.js";import{C as e}from"./user-DY5hg_iu.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Icon-CVHceNst.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/Statuses/AccessStatus",component:s},r=a=>({components:{AccessStatus:s},setup(){return a},template:'<access-status :status="status" />'}),t=r.bind({}),o={status:e.ACTIVE},n={status:{control:"select",options:Object.values(e)}};t.argTypes=n;t.args=o;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3040%3A70712"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    AccessStatus
  },
  setup() {
    return args;
  },
  template: \`<access-status :status="status" />\`
})`,...t.parameters?.docs?.source}}};const d=["Interactive"];export{t as Interactive,d as __namedExportsOrder,S as default};
