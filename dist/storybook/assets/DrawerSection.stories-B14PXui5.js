import{D as t}from"./DrawerSection-CmGhst42.js";import{S as n,a as i}from"./SectionHeader-BlqMWTUw.js";import{I as o}from"./Icon-CVHceNst.js";import"./IconButton-o4H-Dbj2.js";import"./Button-Cbw2_9er.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Ba-XwrF-.js";const x={title:"Components/Drawer/DrawerSection",component:t},a=(s,{updateArgs:l})=>({components:{DrawerSection:t},setup(){return s},data(){return{ICONS:Object.freeze(o)}},methods:{infoClicked(){console.log("info clicked")},isExpandedUpdated(r){l({isExpanded:r})}},template:`
        <drawer-section
            :size="size"
            :title="title"
            :title-ellipsis="titleEllipsis"
            :supporting-text="supportingText"
            :eyebrow="eyebrow"
            :icon-left="ICONS[iconLeft]"
            :icon-left-color="iconLeftColor"
            :icon-right="ICONS[iconRight]"
            :icon-right-color="iconRightColor"
            :info="info"
            :has-divider="hasDivider"
            :is-expandable="isExpandable"
            :is-expanded="isExpanded"
            @infoClick="infoClicked"
            @update:isExpanded="isExpandedUpdated"
        >
            Default slot
            <template #uncollapsible>Uncollapsible slot</template>
        </drawer-section>`}),e=a.bind({}),c={size:i.MEDIUM,title:"Drawer Section Header",titleEllipsis:!1,supportingText:"",eyebrow:"",iconLeft:null,iconLeftColor:n.NEUTRAL,iconRight:null,iconRightColor:n.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!0},p={iconLeft:{control:"select",options:[null,...Object.keys(o)]},iconLeftColor:{control:"select",options:[null,...Object.values(n)]},iconRight:{control:"select",options:[null,...Object.keys(o)]},iconRightColor:{control:"select",options:[null,...Object.values(n)]},size:{control:"select",options:Object.values(i)},hasDivider:{control:"boolean"},info:{control:"boolean"}};e.argTypes=p;e.args=c;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
  components: {
    DrawerSection
  },
  setup() {
    return args;
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  methods: {
    infoClicked() {
      console.log('info clicked');
    },
    isExpandedUpdated(isExpanded: boolean) {
      updateArgs({
        isExpanded
      });
    }
  },
  template: \`
        <drawer-section
            :size="size"
            :title="title"
            :title-ellipsis="titleEllipsis"
            :supporting-text="supportingText"
            :eyebrow="eyebrow"
            :icon-left="ICONS[iconLeft]"
            :icon-left-color="iconLeftColor"
            :icon-right="ICONS[iconRight]"
            :icon-right-color="iconRightColor"
            :info="info"
            :has-divider="hasDivider"
            :is-expandable="isExpandable"
            :is-expanded="isExpanded"
            @infoClick="infoClicked"
            @update:isExpanded="isExpandedUpdated"
        >
            Default slot
            <template #uncollapsible>Uncollapsible slot</template>
        </drawer-section>\`
})`,...e.parameters?.docs?.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,x as default};
