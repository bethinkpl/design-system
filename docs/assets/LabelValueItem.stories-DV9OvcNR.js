import{L as a,a as s,b as n,c as r}from"./LabelValueItem-CLqx75xC.js";import{S as p,a as L}from"./SlotPlaceholder-BQQBev8O.js";import{I as c}from"./Icon-DjEhQlHu.js";import{t as S}from"./vue.esm-bundler-BjwGMXGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Components/LabelValue/LabelValueItem",component:a},m=i=>({components:{LabelValueItem:a,SlotPlaceholder:p},setup(){return{...S(i),SLOT_PLACEHOLDER_SIZES:L,ICONS:c}},template:`<div style="height: 300px; width: 200px;">
        <label-value-item
            :label="label"
            :value-text="valueText"
            :state="state"
            :size="size"
            :is-label-strong="isLabelStrong"
            :value-color="valueColor"
            :icon="icon ? ICONS[icon] : null"
        >
            <template #accessory>
                <div v-if="accessorySlot" v-html="accessorySlot" />
                <slot-placeholder v-else :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="accessory" />
            </template>
        </label-value-item>
        </div>`}),e=m.bind({}),u={label:"Label",valueText:"value",state:r.DEFAULT,size:n.MEDIUM,isLabelStrong:!1,valueColor:s.NEUTRAL,accessorySlot:"accessory slot",icon:null},v={state:{control:"select",options:Object.values(r)},size:{control:"select",options:Object.values(n)},valueColor:{control:"select",options:Object.values(s)},isLabelStrong:{control:"boolean"},accessorySlot:{control:"text"},icon:{control:"select",options:[null,...Object.keys(c)]}};e.argTypes=v;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111025&t=pzyp7YuJcnGNBfS5-4"}};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    LabelValueItem,
    SlotPlaceholder
  },
  setup() {
    return {
      ...toRefs(args),
      SLOT_PLACEHOLDER_SIZES,
      ICONS
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
            :icon="icon ? ICONS[icon] : null"
        >
            <template #accessory>
                <div v-if="accessorySlot" v-html="accessorySlot" />
                <slot-placeholder v-else :size="SLOT_PLACEHOLDER_SIZES.SMALL" label="accessory" />
            </template>
        </label-value-item>
        </div>\`
})`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,y as default};
