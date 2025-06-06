import{S as n,b as r,c,a}from"./SelectListItem-Bd8O0NCh.js";import{I as i}from"./Icon-CytrC3Ws.js";import"./vue.esm-bundler-C__e7YM5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={title:"Components/SelectList/SelectListItem",component:n},p=l=>({components:{SelectListItem:n},setup(){return l},template:`
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
    `,data(){return{ICONS:Object.freeze(i)}}}),e=p.bind({}),S={size:r.SMALL,iconLeft:null,label:"Label",eyebrowText:"Eyebrow Text",isEyebrowTextUppercase:!1,state:c.DEFAULT,isSelected:!1,selectionMode:a.SELECT_ONLY},m={iconLeft:{control:"select",options:[null,...Object.keys(i)]},selectionMode:{control:"select",options:Object.values(a)},size:{control:"select",options:Object.values(r)},state:{control:"select",options:Object.values(c)}};e.argTypes=m;e.args=S;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=854%3A20150&t=rKEt9RQrHIDsfC7p-4"}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const L=["Interactive"];export{e as Interactive,L as __namedExportsOrder,E as default};
