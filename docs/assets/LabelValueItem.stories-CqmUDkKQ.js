import{L as s,a as o,b as r,c as n}from"./LabelValueItem-Dc_ik1Aq.js";import{S as i,a as p}from"./SlotPlaceholder-BZV-a8Mn.js";import{t as L}from"./vue.esm-bundler-Dauw-loN.js";import"./Icon-CgiTwonM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/LabelValue/LabelValueItem",component:s},m=c=>({components:{LabelValueItem:s,SlotPlaceholder:i},setup(){return{...L(c),SLOT_PLACEHOLDER_SIZES:p}},template:`<div style="height: 300px; width: 200px;">
        <label-value-item
            :label="label"
            :value-text="valueText"
            :state="state"
            :size="size"
            :is-label-strong="isLabelStrong"
            :value-color="valueColor"
        >
            <template #accessory>
                <div v-if="accessorySlot" v-html="accessorySlot" />
                <slot-placeholder v-else :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="accessory" />
            </template>
        </label-value-item>
        </div>`}),e=m.bind({}),S={label:"Label",valueText:"value",state:n.DEFAULT,size:r.MEDIUM,isLabelStrong:!1,valueColor:o.NEUTRAL,accessorySlot:"accessory slot"},u={state:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(r)},valueColor:{control:"select",options:Object.values(o)},isLabelStrong:{control:"boolean"},accessorySlot:{control:"text"}};e.argTypes=u;e.args=S;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4"}};var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    LabelValueItem,
    SlotPlaceholder
  },
  setup() {
    return {
      ...toRefs(args),
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`<div style="height: 300px; width: 200px;">
        <label-value-item
            :label="label"
            :value-text="valueText"
            :state="state"
            :size="size"
            :is-label-strong="isLabelStrong"
            :value-color="valueColor"
        >
            <template #accessory>
                <div v-if="accessorySlot" v-html="accessorySlot" />
                <slot-placeholder v-else :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="accessory" />
            </template>
        </label-value-item>
        </div>\`
})`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const y=["Interactive"];export{e as Interactive,y as __namedExportsOrder,g as default};
