import{F as c,a as n,b as s}from"./FeatureIcon-Bt2WOK2R.js";import{I as a}from"./Icon-Mp5xMpaO.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Icons/FeatureIcon",component:c},u=i=>({components:{FeatureIcon:c},setup(){return i},template:'<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',data(){return{ICONS:Object.freeze(a)}}}),e=u.bind({}),l={size:n.X_LARGE,icon:"FA_CIRCLE_QUESTION",color:s.PRIMARY,doubleBackground:!0},p={size:{control:"select",options:Object.values(n)},icon:{control:"select",options:[null,...Object.keys(a)]},color:{control:"select",options:Object.values(s)},doubleBackground:{control:"boolean"}};e.argTypes=p;e.args=l;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
