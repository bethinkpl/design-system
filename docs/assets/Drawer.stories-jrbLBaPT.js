import{D as o,a}from"./Drawer-CH5Qyc5B.js";import"./vue.esm-bundler-BSCmGRHc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/Drawer",component:o},i=s=>({components:{Drawer:o},setup(){return s},template:`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>`}),t=i.bind({}),b={position:a.RIGHT,stickyHeader:!0,stickyFooter:!0},d={position:{control:"select",options:Object.values(a)}};t.argTypes=d;t.args=b;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3343%3A61189"}};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    Drawer
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>\`
})`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Interactive"];export{t as Interactive,m as __namedExportsOrder,l as default};
