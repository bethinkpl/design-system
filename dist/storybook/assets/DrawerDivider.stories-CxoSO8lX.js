import{D as r}from"./DrawerDivider-BCQ7qlei.js";import{a as t,b as n}from"./Divider-Ba-XwrF-.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/Drawer/DrawerDivider",component:r},s=i=>({components:{DrawerDivider:r},setup(){return i},template:`
        <div style="height: 200px; width: 200px;">
        <drawer-divider :prominence="prominence" :size="size" />
        </div>`}),e=s.bind({}),o={prominence:t.DEFAULT,size:n.S},a={prominence:{control:"select",options:Object.values(t)},size:{control:"select",options:Object.values(n)}};e.argTypes=a;e.args=o;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111032&t=2Z2n2tIHRHEsWjoW-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DrawerDivider
  },
  setup() {
    return args;
  },
  template: \`
        <div style="height: 200px; width: 200px;">
        <drawer-divider :prominence="prominence" :size="size" />
        </div>\`
})`,...e.parameters?.docs?.source}}};const D=["Interactive"];export{e as Interactive,D as __namedExportsOrder,l as default};
