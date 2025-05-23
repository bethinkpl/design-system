import{I as s,a,b as r,c}from"./IconText-CHD1e6XV.js";import{I as i}from"./Icon-D0llnARZ.js";import"./vue.esm-bundler-DmkhfO_9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/IconText",component:s},p=l=>({components:{IconText:s},setup(){return l},template:`
            <icon-text
                    :color="color"
                    :icon="ICONS[icon]"
                    :label="label"
                    :is-interactive="isInteractive"
                    :is-label-bold="isLabelBold"
                    :size="size"
                    :state="state"
            />`,data(){return{ICONS:Object.freeze(i)}}}),e=p.bind({});e.args={size:a.X_SMALL,color:r.NEUTRAL_WEAK,label:"Tagi lub filtry po przecinku",isLabelBold:!1,icon:"FA_TAGS",isInteractive:!1,state:c.DEFAULT};const I={color:{control:"select",options:Object.values(r)},icon:{control:"select",options:Object.keys(i)},size:{control:"select",options:Object.values(a)},state:{control:"select",options:Object.values(c)}};e.argTypes=I;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,d as default};
