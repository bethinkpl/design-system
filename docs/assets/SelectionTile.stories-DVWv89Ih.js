import{S as i,a as c,b as l}from"./SelectionTile-Dn02TUQw.js";import{I as r}from"./Icon-D3_O-s4-.js";import{w as d}from"./decorator-B_8W69Nd.js";import"./iframe-C1SUCAAY.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./SelectionControl-CgJrxdmx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CwV2VaSl.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,k={title:"Components/SelectionTile",component:i,decorators:[t=>({components:{story:t},template:"<div style='display: flex; max-width: 300px;'><story /></div>"}),d]},S=t=>{const[u,p]=m();return{components:{SelectionTile:i},setup(){return t},methods:{onIsSelectedUpdated(a){p({isSelected:a})},onIconClick(){alert("Klik w ikonę")}},data(){return{ICONS:Object.freeze(r)}},template:`
            <SelectionTile
                :title="title"
                :supporting-text="supportingText"
                :type="type"
                :icon="ICONS[icon]"
                :is-selected="isSelected"
                :state="state"
                @icon-click="onIconClick"
                @update:is-selected="onIsSelectedUpdated"
            />`}},e=S.bind({});e.argTypes={type:{control:"select",options:Object.values(l)},title:{control:"text"},supportingText:{control:"text"},icon:{control:"select",options:[null,...Object.keys(r)]},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(c)}};e.args={type:l.RADIO_BUTTON,title:"Example title",supportingText:"",icon:null,isSelected:!1,state:c.DEFAULT};e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6085-110809&t=436AgbJEEFBphXVn-0"}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,k as default};
