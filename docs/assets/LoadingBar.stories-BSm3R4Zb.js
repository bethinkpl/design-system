import{a as r,L as a,b as n}from"./LoadingBar-F3NzMWvh.js";import"./vue.esm-bundler-F3F7hH0X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={title:"Components/LoadingBar",component:r},c=i=>({components:{DsLoadingBar:r},setup(){return i},template:'<ds-loading-bar :size="size" :color="color" :time="time" />'}),e=c.bind({}),m={size:n.LARGE,color:a.NEUTRAL_HEAVY,time:"5"},p={size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(a)}};e.argTypes=p;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853"}};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    DsLoadingBar: LoadingBar
  },
  setup() {
    return args;
  },
  template: \`<ds-loading-bar :size="size" :color="color" :time="time" />\`
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const u=["Interactive"];export{e as Interactive,u as __namedExportsOrder,L as default};
