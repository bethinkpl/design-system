import{O as t}from"./OutlineDivider-C_YR1F0q.js";import{a as n,b as i}from"./Divider-Ba-XwrF-.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/Outline/OutlineDivider",component:t},o=r=>({components:{OutlineDivider:t},setup(){return r},template:`
        <outline-divider :prominence="prominence" :size="size" />`}),e=o.bind({}),s={prominence:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(i)}};e.args={prominence:n.DEFAULT,size:i.S};e.argTypes=s;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    OutlineDivider
  },
  setup() {
    return args;
  },
  template: \`
        <outline-divider :prominence="prominence" :size="size" />\`
})`,...e.parameters?.docs?.source}}};const l=["Interactive"];export{e as Interactive,l as __namedExportsOrder,d as default};
