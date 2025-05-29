import{I as a,a as n}from"./Image-DBf62AYO.js";import"./vue.esm-bundler-C__e7YM5.js";import"./Skeleton-Cpsye1IX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/Image",component:a},i=o=>({components:{DsImage:a},setup(){return o},template:`
        <div style="height: 500px; width: 800px;">
            <ds-image
                :fit="fit"
                :src="src"
            />
        </div>`}),e=i.bind({});e.args={fit:n.COVER,src:"https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg"};e.argTypes={fit:{control:"select",options:Object.values(n)}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const l=["Interactive"];export{e as Interactive,l as __namedExportsOrder,d as default};
