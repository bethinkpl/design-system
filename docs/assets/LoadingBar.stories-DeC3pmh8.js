import{a as r,b as a,L as n}from"./LoadingBar-Bo6mXGaA.js";import"./vue.esm-bundler-CzUSCRPq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={title:"Components/LoadingBar",component:r},c=i=>({components:{DsLoadingBar:r},setup(){return i},template:'<ds-loading-bar :size="size" :color="color" :time="time" />'}),e=c.bind({}),m={size:a.LARGE,color:n.NEUTRAL_HEAVY,time:"5"},p={size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(n)}};e.argTypes=p;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853"}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    DsLoadingBar: LoadingBar
  },
  setup() {
    return args;
  },
  template: \`<ds-loading-bar :size="size" :color="color" :time="time" />\`
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const u=["Interactive"];export{e as Interactive,u as __namedExportsOrder,L as default};
