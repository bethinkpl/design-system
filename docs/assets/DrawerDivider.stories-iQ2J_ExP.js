import{D as i}from"./DrawerDivider-CKRXkKRz.js";import{a as s,b as o}from"./Divider-NOTDPuJ1.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Drawer/DrawerDivider",component:i},p=a=>({components:{DrawerDivider:i},setup(){return a},template:`
        <div style="height: 200px; width: 200px;">
        <drawer-divider :prominence="prominence" :size="size" />
        </div>`}),e=p.bind({}),c={prominence:o.DEFAULT,size:s.S},m={prominence:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(s)}};e.argTypes=m;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111032&t=2Z2n2tIHRHEsWjoW-4"}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const w=["Interactive"];export{e as Interactive,w as __namedExportsOrder,g as default};
