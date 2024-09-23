import{S as n,a as o,b as s}from"./SelectionTile-BudOTDXs.js";import{I as i}from"./Icon-CVHceNst.js";import"./iframe-BNDpys9r.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./SelectionControl-DB3v0tUg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Components/SelectionTile",component:n,decorators:[t=>({components:{story:t},template:"<div style='display: flex; max-width: 300px;'><story /></div>"})]},r=(t,{updateArgs:c})=>({components:{SelectionTile:n},setup(){return t},methods:{onIsSelectedUpdated(l){c({isSelected:l})},onIconClick(){alert("Klik w ikonę")}},data(){return{ICONS:Object.freeze(i)}},template:`
        <SelectionTile
            :title="title"
            :supporting-text="supportingText"
            :type="type"
            :icon="ICONS[icon]"
            :is-selected="isSelected"
            :state="state"
            @icon-click="onIconClick"
            @update:is-selected="onIsSelectedUpdated"
        />`}),e=r.bind({});e.argTypes={type:{control:"select",options:Object.values(o)},title:{control:"text"},supportingText:{control:"text"},icon:{control:"select",options:[null,...Object.keys(i)]},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(s)}};e.args={type:o.RADIO_BUTTON,title:"Example title",supportingText:"",icon:null,isSelected:!1,state:s.DEFAULT};e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6085-110809&t=436AgbJEEFBphXVn-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    SelectionTile
  },
  setup() {
    return args;
  },
  methods: {
    onIsSelectedUpdated(isSelected) {
      updateArgs({
        isSelected
      });
    },
    onIconClick() {
      alert('Klik w ikonę');
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <SelectionTile
            :title="title"
            :supporting-text="supportingText"
            :type="type"
            :icon="ICONS[icon]"
            :is-selected="isSelected"
            :state="state"
            @icon-click="onIconClick"
            @update:is-selected="onIsSelectedUpdated"
        />\`
})`,...e.parameters?.docs?.source}}};const g=["Interactive"];export{e as Interactive,g as __namedExportsOrder,T as default};
