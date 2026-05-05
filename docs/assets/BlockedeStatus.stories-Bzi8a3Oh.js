import{B as o}from"./BlockadeStatus-BO__bzg1.js";import{a as r}from"./user-_JB5aHqq.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./Icon-B2cczydO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useLegacyI18n-D8xn4HbG.js";const f={title:"Components/Statuses/BlockadeStatus",component:o},p=n=>({components:{BlockadeStatus:o},setup(){return n},template:'<blockade-status :status="status" />'}),t=p.bind({}),c={status:r.ACTIVE},m={status:{control:"select",options:Object.values(r)}};t.argTypes=m;t.args=c;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3040%3A70712"}};var s,e,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    BlockadeStatus
  },
  setup() {
    return args;
  },
  template: \`<blockade-status :status="status" />\`
})`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const k=["Interactive"];export{t as Interactive,k as __namedExportsOrder,f as default};
