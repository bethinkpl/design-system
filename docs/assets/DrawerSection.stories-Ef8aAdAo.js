import{D as r}from"./DrawerSection-Ch4ErDvj.js";import{S as n,a as l}from"./SectionHeader-BXQYUMZJ.js";import{I as t}from"./Icon-Dg-H1Zak.js";import"./IconButton-tAYYPmG6.js";import"./Button-CsOCHUpA.js";import"./vue.esm-bundler-Dgz4BqwH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-DTjC3ra5.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Drawer/DrawerSection",component:r},f=a=>{const[m,c]=d();return{components:{DrawerSection:r},setup(){return a},data(){return{ICONS:Object.freeze(t)}},methods:{infoClicked(){console.log("info clicked")},isExpandedUpdated(p){c({isExpanded:p})}},template:`
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
            </drawer-section>`}},e=f.bind({}),u={size:l.MEDIUM,title:"Drawer Section Header",titleEllipsis:!1,supportingText:"",eyebrow:"",iconLeft:null,iconLeftColor:n.NEUTRAL,iconRight:null,iconRightColor:n.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!0},g={iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconLeftColor:{control:"select",options:[null,...Object.values(n)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},iconRightColor:{control:"select",options:[null,...Object.values(n)]},size:{control:"select",options:Object.values(l)},hasDivider:{control:"boolean"},info:{control:"boolean"}};e.argTypes=g;e.args=u;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4"}};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
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
  };
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Interactive"];export{e as Interactive,D as __namedExportsOrder,w as default};
