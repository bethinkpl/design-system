import{D as i,a as t,b as s}from"./Divider-Ba-XwrF-.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/Divider",component:i},n=r=>({components:{Divider:i},setup(){return r},template:`
        <div style="height: 200px; width: 200px;">
        <divider :is-vertical="isVertical" :prominence="prominence" :size="size" />
        </div>`}),e=n.bind({}),o={isVertical:!1,prominence:t.DEFAULT,size:s.S},a={prominence:{control:"select",options:Object.values(t)},size:{control:"select",options:Object.values(s)}};e.argTypes=a;e.args=o;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34960"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Divider
  },
  setup() {
    return args;
  },
  template: \`
        <div style="height: 200px; width: 200px;">
        <divider :is-vertical="isVertical" :prominence="prominence" :size="size" />
        </div>\`
})`,...e.parameters?.docs?.source}}};const l=["Interactive"];export{e as Interactive,l as __namedExportsOrder,d as default};
