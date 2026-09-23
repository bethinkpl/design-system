import{S as o,c as r,a as l,b as c}from"./SelectListItem-D2YG5jEi.js";import{I as n}from"./Icon-D5w-paEm.js";import{S,a as p}from"./SlotPlaceholder-BQQBev8O.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/SelectList/SelectListItem",component:o},m=i=>({components:{SelectListItem:o,SlotPlaceholder:S},setup(){return{args:i,ICONS:n,SLOT_PLACEHOLDER_SIZES:p}},template:`
            <select-list-item
                    :icon-left="ICONS[args.iconLeft]"
                    :href="args.href"
                    :label="args.label"
                    :eyebrow-text="args.eyebrowText"
                    :is-eyebrow-text-uppercase="args.isEyebrowTextUppercase"
                    :is-selected="args.isSelected"
                    :selection-mode="args.selectionMode"
                    :size="args.size"
                    :state="args.state"
            >
                <template v-if="args.accessorySlot" #accessory>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" :label="args.accessorySlot" />
                </template>
                <template v-if="args.metadataSlot" #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" :label="args.metadataSlot" />
                </template>
            </select-list-item>
    `}),e=m.bind({}),L={size:c.SMALL,iconLeft:null,href:"",label:"Label",eyebrowText:"Eyebrow Text",isEyebrowTextUppercase:!1,state:l.DEFAULT,isSelected:!1,selectionMode:r.SELECT_ONLY,accessorySlot:"accessory",metadataSlot:"metadata"},E={iconLeft:{control:"select",options:[null,...Object.keys(n)]},selectionMode:{control:"select",options:Object.values(r)},size:{control:"select",options:Object.values(c)},state:{control:"select",options:Object.values(l)},href:{control:"text"},accessorySlot:{control:"text"},metadataSlot:{control:"text"}};e.argTypes=E;e.args=L;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=854%3A20150&t=rKEt9RQrHIDsfC7p-4"}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    SelectListItem,
    SlotPlaceholder
  },
  setup() {
    return {
      args,
      ICONS,
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
            <select-list-item
                    :icon-left="ICONS[args.iconLeft]"
                    :href="args.href"
                    :label="args.label"
                    :eyebrow-text="args.eyebrowText"
                    :is-eyebrow-text-uppercase="args.isEyebrowTextUppercase"
                    :is-selected="args.isSelected"
                    :selection-mode="args.selectionMode"
                    :size="args.size"
                    :state="args.state"
            >
                <template v-if="args.accessorySlot" #accessory>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" :label="args.accessorySlot" />
                </template>
                <template v-if="args.metadataSlot" #metadata>
                    <slot-placeholder :size="SLOT_PLACEHOLDER_SIZES.SMALL" :label="args.metadataSlot" />
                </template>
            </select-list-item>
    \`
})`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["Interactive"];export{e as Interactive,y as __namedExportsOrder,f as default};
