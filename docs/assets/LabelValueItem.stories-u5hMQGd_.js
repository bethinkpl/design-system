import{L as s,a as o,b as n,c as r}from"./LabelValueItem-L66t2Oyc.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./Icon-sA9NtGkq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/LabelValue/LabelValueItem",component:s},p=i=>({components:{LabelValueItem:s},setup(){return i},template:`<div style="height: 300px; width: 200px;">
        <label-value-item
            :label="label"
            :value-text="valueText"
            :state="state"
            :size="size"
            :is-label-strong="isLabelStrong"
            :value-color="valueColor"
        />
        </div>`}),e=p.bind({}),c={label:"Label",valueText:"value",state:r.DEFAULT,size:n.MEDIUM,isLabelStrong:!1,valueColor:o.NEUTRAL},u={state:{control:"select",options:Object.values(r)},size:{control:"select",options:Object.values(n)},valueColor:{control:"select",options:Object.values(o)},isLabelStrong:{control:"boolean"}};e.argTypes=u;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4"}};var t,a,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    LabelValueItem
  },
  setup() {
    return args;
  },
  template: \`<div style="height: 300px; width: 200px;">
        <label-value-item
            :label="label"
            :value-text="valueText"
            :state="state"
            :size="size"
            :is-label-strong="isLabelStrong"
            :value-color="valueColor"
        />
        </div>\`
})`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const d=["Interactive"];export{e as Interactive,d as __namedExportsOrder,g as default};
