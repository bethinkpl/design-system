import{a as s,L as a,b as n}from"./LoadingBar-BFdA2k9I.js";import"./vue.esm-bundler-ByLATHYC.js";import"./ContainerRibbon-DUYZHMNL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Components/LoadingBar",component:s},c=i=>({components:{DsLoadingBar:s},setup(){return i},template:'<ds-loading-bar :size="size" :color="color" :time="time" />'}),e=c.bind({}),m={size:n.LARGE,color:a.NEUTRAL_HEAVY,time:"5"},p={size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(a)}};e.argTypes=p;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853"}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    DsLoadingBar: LoadingBar
  },
  setup() {
    return args;
  },
  template: \`<ds-loading-bar :size="size" :color="color" :time="time" />\`
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const B=["Interactive"];export{e as Interactive,B as __namedExportsOrder,u as default};
