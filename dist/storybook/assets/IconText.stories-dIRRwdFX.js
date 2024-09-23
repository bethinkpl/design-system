import{I as t,a as o,b as n,c as s}from"./IconText-BOLUXj-5.js";import{I as a}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/IconText",component:t},c=r=>({components:{IconText:t},setup(){return r},template:`
            <icon-text
                    :color="color"
                    :icon="ICONS[icon]"
                    :label="label"
                    :is-interactive="isInteractive"
                    :is-label-bold="isLabelBold"
                    :size="size"
                    :state="state"
            />`,data(){return{ICONS:Object.freeze(a)}}}),e=c.bind({});e.args={size:o.X_SMALL,color:n.NEUTRAL_WEAK,label:"Tagi lub filtry po przecinku",isLabelBold:!1,icon:"FA_TAGS",isInteractive:!1,state:s.DEFAULT};const i={color:{control:"select",options:Object.values(n)},icon:{control:"select",options:Object.keys(a)},size:{control:"select",options:Object.values(o)},state:{control:"select",options:Object.values(s)}};e.argTypes=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    IconText
  },
  setup() {
    return args;
  },
  template: \`
            <icon-text
                    :color="color"
                    :icon="ICONS[icon]"
                    :label="label"
                    :is-interactive="isInteractive"
                    :is-label-bold="isLabelBold"
                    :size="size"
                    :state="state"
            />\`,
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  }
})`,...e.parameters?.docs?.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,b as default};
