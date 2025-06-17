import{B as o}from"./BlockadeStatus-D1j0ZWIW.js";import{a as r}from"./user-_JB5aHqq.js";import"./vue.esm-bundler-DD4BrEtS.js";import"./Icon-I3Cniv10.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Statuses/BlockadeStatus",component:o},c=n=>({components:{BlockadeStatus:o},setup(){return n},template:'<blockade-status :status="status" />'}),t=c.bind({}),p={status:r.ACTIVE},m={status:{control:"select",options:Object.values(r)}};t.argTypes=m;t.args=p;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3040%3A70712"}};var s,e,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    BlockadeStatus
  },
  setup() {
    return args;
  },
  template: \`<blockade-status :status="status" />\`
})`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const f=["Interactive"];export{t as Interactive,f as __namedExportsOrder,g as default};
