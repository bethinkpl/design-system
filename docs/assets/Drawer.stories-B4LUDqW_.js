import{D as n,a,b as s}from"./Drawer-6RLQTPd7.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Drawer",component:n},b=i=>({components:{Drawer:n},setup(){return i},template:`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter" :background-color="backgroundColor">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>`}),t=b.bind({}),d={position:s.RIGHT,stickyHeader:!0,stickyFooter:!0,backgroundColor:a.NONE},c={position:{control:"select",options:Object.values(s)},backgroundColor:{control:"select",options:Object.values(a)}};t.argTypes=c;t.args=d;t.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3343%3A61189"}};var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Drawer
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter" :background-color="backgroundColor">
        <template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
        <div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
        <template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
        </drawer>
        </div>\`
})`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const v=["Interactive"];export{t as Interactive,v as __namedExportsOrder,m as default};
