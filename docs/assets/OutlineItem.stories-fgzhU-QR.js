import{O as i,a,b as s,c as r}from"./OutlineItem-DX1galOv.js";import{C as d}from"./Chip-DseOCaPi.js";import{I as t}from"./Icon-Dg-H1Zak.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-tAYYPmG6.js";import"./Button-CsOCHUpA.js";const C={title:"Components/Outline/OutlineItem",component:i},p=c=>({components:{OutlineItem:i,DsChip:d},setup(){return c},data(){return{ICONS:Object.freeze(t)}},template:`
        <outline-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
                                    :is-selected-interactive="isSelectedInteractive">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default v-if="defaultSlot.length > 0">
                <ds-chip :label="defaultSlot" />
            </template>
        </outline-item>`}),e=p.bind({}),m={additionalText:"",defaultSlot:"10 / 20",labelSlot:"Outline Item label in slot",size:a.SMALL,backgroundColor:s.NEUTRAL_WEAK,iconLeft:null,iconRight:null,iconRightRotation:null,index:null,label:"Outline Item label",isLabelUppercase:!1,state:r.DEFAULT,isSelected:!1,isDone:!1,hasSelectedIconsColorPrimary:!0,isSelectedInteractive:!1},u={defaultSlot:{control:"text"},labelSlot:{control:"text"},size:{control:"select",options:Object.values(a)},backgroundColor:{control:"select",options:Object.values(s)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},iconRightRotation:{control:"select",options:[null,90,180,270]},index:{control:{type:"number"}},label:{control:"text"},isLabelUppercase:{control:"boolean"},additionalText:{control:"text"},state:{control:"select",options:Object.values(r)},isSelected:{control:"boolean"},isDone:{control:"boolean"},hasSelectedIconsColorPrimary:{control:"boolean"},isSelectedInteractive:{control:"boolean"}};e.argTypes=u;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    OutlineItem,
    DsChip
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <outline-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
                                    :is-selected-interactive="isSelectedInteractive">
            <template #labelSlot v-if="labelSlot">
                <span v-html="labelSlot" />
            </template>
            <template #default v-if="defaultSlot.length > 0">
                <ds-chip :label="defaultSlot" />
            </template>
        </outline-item>\`
})`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const x=["Interactive"];export{e as Interactive,x as __namedExportsOrder,C as default};
