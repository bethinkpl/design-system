import{D as r}from"./DrawerSection-DnuXnCTi.js";import{S as a,a as t}from"./SectionHeader-BwMttz4G.js";import{I as o}from"./Icon-CKWWk5j6.js";import{S as d,a as E}from"./SlotPlaceholder-CO-eEw7O.js";import{t as f}from"./vue.esm-bundler-BEu-HfQJ.js";import"./IconButton-B4DWTg6I.js";import"./Button-D3P_KPx1.js";import"./device-9fgosCm4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-CsYapLKZ.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Drawer/DrawerSection",component:r},S=c=>{const[L,p]=u();return{components:{DrawerSection:r,SlotPlaceholder:d},setup(){return{...f(c),ICONS:o,SLOT_PLACEHOLDER_SIZES:E}},methods:{infoClicked(){console.log("info clicked")},isExpandedUpdated(n){p({isExpanded:n})}},template:`
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
                <slot-placeholder label="default slot" />
                <template #uncollapsible>
                    <slot-placeholder label="uncollapsible slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" /></template>
                <template #sectionHeaderDefault>
                    <slot-placeholder label="section header default slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
                </template>
            </drawer-section>`}},e=S.bind({}),m={size:a.MEDIUM,title:"Drawer Section Header",titleEllipsis:!1,supportingText:"",eyebrow:"",iconLeft:null,iconLeftColor:t.NEUTRAL,iconRight:null,iconRightColor:t.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!0},g={iconLeft:{control:"select",options:[null,...Object.keys(o)]},iconLeftColor:{control:"select",options:[null,...Object.values(t)]},iconRight:{control:"select",options:[null,...Object.keys(o)]},iconRightColor:{control:"select",options:[null,...Object.values(t)]},size:{control:"select",options:Object.values(a)},hasDivider:{control:"boolean"},info:{control:"boolean"}};e.argTypes=g;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4"}};var i,l,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      DrawerSection,
      SlotPlaceholder
    },
    setup() {
      const reactiveArgs = toRefs(args);
      return {
        ...reactiveArgs,
        ICONS,
        SLOT_PLACEHOLDER_SIZES
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
                <slot-placeholder label="default slot" />
                <template #uncollapsible>
                    <slot-placeholder label="uncollapsible slot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" /></template>
                <template #sectionHeaderDefault>
                    <slot-placeholder label="section header default slot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
                </template>
            </drawer-section>\`
  };
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,w as default};
