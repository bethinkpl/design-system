import{S as t,b as s,c as o,a as n}from"./SelectListItem-B5BpBuxD.js";import{I as r}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Components/SelectList/SelectListItem",component:t},a=c=>({components:{SelectListItem:t},setup(){return c},template:`
            <select-list-item
                    :icon-left="ICONS[iconLeft]"
                    :label="label"
                    :eyebrow-text="eyebrowText"
                    :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
                    :is-selected="isSelected"
                    :selection-mode="selectionMode"
                    :size="size"
                    :state="state"
            />
    `,data(){return{ICONS:Object.freeze(r)}}}),e=a.bind({}),i={size:s.SMALL,iconLeft:null,label:"Label",eyebrowText:"Eyebrow Text",isEyebrowTextUppercase:!1,state:o.DEFAULT,isSelected:!1,selectionMode:n.SELECT_ONLY},l={iconLeft:{control:"select",options:[null,...Object.keys(r)]},selectionMode:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(s)},state:{control:"select",options:Object.values(o)}};e.argTypes=l;e.args=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=854%3A20150&t=rKEt9RQrHIDsfC7p-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    SelectListItem
  },
  setup() {
    return args;
  },
  template: \`
            <select-list-item
                    :icon-left="ICONS[iconLeft]"
                    :label="label"
                    :eyebrow-text="eyebrowText"
                    :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
                    :is-selected="isSelected"
                    :selection-mode="selectionMode"
                    :size="size"
                    :state="state"
            />
    \`,
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...e.parameters?.docs?.source}}};const d=["Interactive"];export{e as Interactive,d as __namedExportsOrder,I as default};
