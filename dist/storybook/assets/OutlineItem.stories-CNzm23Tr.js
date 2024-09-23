import{O as o,a as n,b as l,c as i}from"./OutlineItem-Bvmt1BZ1.js";import{C as s}from"./Chip-ji2hlWAf.js";import{I as t}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconButton-o4H-Dbj2.js";import"./Button-Cbw2_9er.js";const f={title:"Components/Outline/OutlineItem",component:o},r=a=>({components:{OutlineItem:o,DsChip:s},setup(){return a},data(){return{ICONS:Object.freeze(t)}},template:`
        <outline-item :label="label" :additional-text="additionalText" :size="size" :state="state"
                                    :icon-left="ICONS[iconLeft]" :icon-right="ICONS[iconRight]" :is-done="isDone"
                                    :is-selected="isSelected" :background-color="backgroundColor" :index="index"
                                    :is-label-uppercase="isLabelUppercase" :icon-right-rotation="iconRightRotation"
                                    :has-selected-icons-color-primary="hasSelectedIconsColorPrimary"
                                    :is-selected-interactive="isSelectedInteractive">
            <template #default v-if="defaultSlot.length > 0">
                <ds-chip :label="defaultSlot" />
            </template>
        </outline-item>`}),e=r.bind({}),c={defaultSlot:"10 / 20",size:n.SMALL,backgroundColor:l.NEUTRAL_WEAK,iconLeft:null,iconRight:null,iconRightRotation:null,index:null,label:"Outline Item label",isLabelUppercase:!1,state:i.DEFAULT,isSelected:!1,isDone:!1,hasSelectedIconsColorPrimary:!0,isSelectedInteractive:!1},d={defaultSlot:{control:"text"},size:{control:"select",options:Object.values(n)},backgroundColor:{control:"select",options:Object.values(l)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},iconRightRotation:{control:"select",options:[null,90,180,270]},index:{control:{type:"number"}},label:{control:"text"},isLabelUppercase:{control:"boolean"},additionalText:{control:"text"},state:{control:"select",options:Object.values(i)},isSelected:{control:"boolean"},isDone:{control:"boolean"},hasSelectedIconsColorPrimary:{control:"boolean"},isSelectedInteractive:{control:"boolean"}};e.argTypes=d;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6148-111431&t=Amd0mke9FMknuKCX-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
            <template #default v-if="defaultSlot.length > 0">
                <ds-chip :label="defaultSlot" />
            </template>
        </outline-item>\`
})`,...e.parameters?.docs?.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,f as default};
