import{_ as c,F as n,a as s}from"./FeatureIcon-DVdbBUgw.js";import{I as a}from"./Icon-Sov23HR0.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Icons/FeatureIcon",component:c},u=i=>({components:{FeatureIcon:c},setup(){return i},template:'<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',data(){return{ICONS:Object.freeze(a)}}}),e=u.bind({}),l={size:s.X_LARGE,icon:"FA_CIRCLE_QUESTION",color:n.PRIMARY,doubleBackground:!0},p={size:{control:"select",options:Object.values(s)},icon:{control:"select",options:[null,...Object.keys(a)]},color:{control:"select",options:Object.values(n)},doubleBackground:{control:"boolean"}};e.argTypes=p;e.args=l;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=5604-96259"}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    FeatureIcon
  },
  setup() {
    return args;
  },
  template: '<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const b=["Interactive"];export{e as Interactive,b as __namedExportsOrder,g as default};
