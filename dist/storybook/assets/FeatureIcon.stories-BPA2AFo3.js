import{F as o,a as t,b as r}from"./FeatureIcon-BGi9s7MD.js";import{I as c}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Icons/FeatureIcon",component:o},s=n=>({components:{FeatureIcon:o},setup(){return n},template:'<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',data(){return{ICONS:Object.freeze(c)}}}),e=s.bind({}),a={size:t.X_LARGE,icon:"FA_CIRCLE_QUESTION",color:r.PRIMARY,doubleBackground:!0},i={size:{control:"select",options:Object.values(t)},icon:{control:"select",options:[null,...Object.keys(c)]},color:{control:"select",options:Object.values(r)},doubleBackground:{control:"boolean"}};e.argTypes=i;e.args=a;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,m as default};
