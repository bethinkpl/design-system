import{O as r}from"./OutlineDivider-DpgF_2B_.js";import{a as o,b as s}from"./Divider-BNN8PhWF.js";import"./vue.esm-bundler-CC_vsnCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Outline/OutlineDivider",component:r},a=p=>({components:{OutlineDivider:r},setup(){return p},template:`
        <outline-divider :prominence="prominence" :size="size" />`}),e=a.bind({}),m={prominence:{control:"select",options:Object.values(s)},size:{control:"select",options:Object.values(o)}};e.args={prominence:s.DEFAULT,size:o.S};e.argTypes=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    OutlineDivider
  },
  setup() {
    return args;
  },
  template: \`
        <outline-divider :prominence="prominence" :size="size" />\`
})`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,g as default};
