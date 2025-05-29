import{D as r,a as n,b as o}from"./Divider-C8Drds6C.js";import"./vue.esm-bundler-C__e7YM5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Divider",component:r},p=a=>({components:{Divider:r},setup(){return a},template:`
        <div style="height: 200px; width: 200px;">
        <divider :is-vertical="isVertical" :prominence="prominence" :size="size" />
        </div>`}),e=p.bind({}),c={isVertical:!1,prominence:n.DEFAULT,size:o.S},m={prominence:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(o)}};e.argTypes=m;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34960"}};var i,t,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const D=["Interactive"];export{e as Interactive,D as __namedExportsOrder,g as default};
