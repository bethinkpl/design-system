import{a as o,b as t,L as s}from"./LoadingBar-IDhNuLj_.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/LoadingBar",component:o},a=r=>({components:{DsLoadingBar:o},setup(){return r},template:'<ds-loading-bar :size="size" :color="color" :time="time" />'}),e=a.bind({}),n={size:t.LARGE,color:s.NEUTRAL_HEAVY,time:"5"},i={size:{control:"select",options:Object.values(t)},color:{control:"select",options:Object.values(s)}};e.argTypes=i;e.args=n;e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DsLoadingBar: LoadingBar
  },
  setup() {
    return args;
  },
  template: \`<ds-loading-bar :size="size" :color="color" :time="time" />\`
})`,...e.parameters?.docs?.source}}};const l=["Interactive"];export{e as Interactive,l as __namedExportsOrder,d as default};
