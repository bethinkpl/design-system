import{I as a,a as o}from"./Image-Ixu31zL3.js";import"./vue.esm-bundler-S9zc6Wpc.js";import"./Skeleton-Dph7qEcf.js";import"./index-CPvnfNuQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/Image",component:a},i=n=>({components:{DsImage:a},setup(){return n},template:`
        <div style="height: 500px; width: 800px;">
            <ds-image
                :fit="fit"
                :src="src"
            />
        </div>`}),e=i.bind({});e.args={fit:o.COVER,src:"https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg"};e.argTypes={fit:{control:"select",options:Object.values(o)}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    DsImage
  },
  setup() {
    return args;
  },
  template: \`
        <div style="height: 500px; width: 800px;">
            <ds-image
                :fit="fit"
                :src="src"
            />
        </div>\`
})`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,l as default};
