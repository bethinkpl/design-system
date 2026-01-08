import{M as o}from"./MenuDivider-CkEnsgQA.js";import{a as s,b as i}from"./Divider-DibbBBgz.js";import"./vue.esm-bundler-ByLATHYC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Menu/MenuDivider",component:o},a=p=>({components:{MenuDivider:o},setup(){return p},template:`
        <menu-divider :prominence="prominence" :size="size" />`}),e=a.bind({}),m={prominence:{control:"select",options:Object.values(i)},size:{control:"select",options:Object.values(s)}};e.args={prominence:i.DEFAULT,size:s.S};e.argTypes=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    MenuDivider
  },
  setup() {
    return args;
  },
  template: \`
        <menu-divider :prominence="prominence" :size="size" />\`
})`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const I=["Interactive"];export{e as Interactive,I as __namedExportsOrder,g as default};
