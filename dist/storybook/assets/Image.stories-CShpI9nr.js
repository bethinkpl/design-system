import{I as t,a as s}from"./Image-BHURkMBQ.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./Skeleton-BrRagspw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/Image",component:t},a=r=>({components:{DsImage:t},setup(){return r},template:`
        <div style="height: 500px; width: 800px;">
            <ds-image
                :fit="fit"
                :src="src"
            />
        </div>`}),e=a.bind({});e.args={fit:s.COVER,src:"https://storage.googleapis.com/media-manager/lek/018f6291-3956-7342-8e6b-0ee901d48643/018f6291-3a56-7213-aef6-b5da7253839f.jpg"};e.argTypes={fit:{control:"select",options:Object.values(s)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const c=["Interactive"];export{e as Interactive,c as __namedExportsOrder,m as default};
