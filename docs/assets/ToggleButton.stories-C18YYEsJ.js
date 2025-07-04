import{T as n,a as l,b as i,c as r,d as c,e as p}from"./ToggleButton-YUVnfx-x.js";import{I as t}from"./Icon-DUeXRUm6.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Components/Toggles/ToggleButton",component:n},d=g=>({components:{ToggleButton:n},setup(){return g},data(){return{ICONS:Object.freeze(t)}},template:`
        <toggle-button
            :color="color"
            :has-small-horizontal-padding="hasSmallHorizontalPadding"
            :icon-left="ICONS[iconLeft]"
            :icon-right="ICONS[iconRight]"
            :is-interactive="isInteractive"
            :is-label-uppercase="isLabelUppercase"
            :is-selected="isSelected"
            :label="label"
            :label-size="labelSize"
            :radius="radius"
            :size="size"
            :state="state"
        />`}),e=d.bind({}),u={size:p.MEDIUM,hasSmallHorizontalPadding:!1,color:c.NEUTRAL,isSelected:!1,radius:r.CAPSULE,label:"1",isLabelUppercase:!1,labelSize:i.MEDIUM,isInteractive:!0,iconLeft:null,iconRight:null,state:l.DEFAULT},S={size:{control:"select",options:Object.values(p)},color:{control:"select",options:Object.values(c)},radius:{control:"select",options:Object.values(r)},labelSize:{control:"select",options:Object.values(i)},state:{control:"select",options:Object.values(l)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]}};e.argTypes=S;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4115%3A70578"}};var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ToggleButton
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
        <toggle-button
            :color="color"
            :has-small-horizontal-padding="hasSmallHorizontalPadding"
            :icon-left="ICONS[iconLeft]"
            :icon-right="ICONS[iconRight]"
            :is-interactive="isInteractive"
            :is-label-uppercase="isLabelUppercase"
            :is-selected="isSelected"
            :label="label"
            :label-size="labelSize"
            :radius="radius"
            :size="size"
            :state="state"
        />\`
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Interactive"];export{e as Interactive,z as __namedExportsOrder,I as default};
