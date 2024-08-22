import{T as s,a as o,b as a,c as n,d as l,e as i}from"./ToggleButton-oQhLWTnw.js";import{I as t}from"./Icon-CVHceNst.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/Toggles/ToggleButton",component:s},c=r=>({components:{ToggleButton:s},setup(){return r},data(){return{ICONS:Object.freeze(t)}},template:`
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
        />`}),e=c.bind({}),p={size:o.MEDIUM,hasSmallHorizontalPadding:!1,color:a.NEUTRAL,isSelected:!1,radius:n.CAPSULE,label:"1",isLabelUppercase:!1,labelSize:l.MEDIUM,isInteractive:!0,iconLeft:null,iconRight:null,state:i.DEFAULT},g={size:{control:"select",options:Object.values(o)},color:{control:"select",options:Object.values(a)},radius:{control:"select",options:Object.values(n)},labelSize:{control:"select",options:Object.values(l)},state:{control:"select",options:Object.values(i)},iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconRight:{control:"select",options:[null,...Object.keys(t)]}};e.argTypes=g;e.args=p;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4115%3A70578"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const m=["Interactive"];export{e as Interactive,m as __namedExportsOrder,b as default};
