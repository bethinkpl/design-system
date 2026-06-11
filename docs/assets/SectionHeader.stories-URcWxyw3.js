import{D as a,b as r,S as n,a as t}from"./SectionHeader-BzmFOma-.js";import{I as o}from"./Icon-q3A7t-gx.js";import{S,a as E}from"./SlotPlaceholder-CM9EKUVA.js";import{w as u}from"./decorator-dmUe8Ksx.js";import"./IconButton-BCnp7r4q.js";import"./Button-0V5_T79J.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Cv_Se4zt.js";import"./v4-CwV2VaSl.js";const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Headers/SectionHeader",component:a,decorators:[u]},O=c=>{const[h,d]=L();return{components:{SectionHeader:a,SlotPlaceholder:S},setup(){return c},data(){return{ICONS:Object.freeze(o),SLOT_PLACEHOLDER_SIZES:Object.freeze(E)}},methods:{onIsExpandedUpdated(p){d({isExpanded:p})}},template:'<section-header :is-expandable="isExpandable" :hide-slot-when-collapsed="hideSlotWhenCollapsed" :icon-left="ICONS[iconLeft]" :icon-left-color="iconLeftColor" :icon-right="ICONS[iconRight]" :icon-right-color="iconRightColor" :is-expanded="isExpanded" :size="size" :info="info" :title="title" :title-ellipsis="titleEllipsis" :eyebrow="eyebrow" :has-divider="hasDivider" :mobile-layout="mobileLayout" :supportingText="supportingText" @update:isExpanded="onIsExpandedUpdated"><template v-if="titleAccessorySlot" #titleAccessory><slot-placeholder :label="titleAccessorySlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template><slot-placeholder v-if="defaultSlot" :label="defaultSlot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" /></section-header>'}},e=O.bind({}),f={size:n.MEDIUM,title:"Section Header",titleEllipsis:!1,supportingText:"Supporting text. Et doloribus aspernatur suscipit provident maiores. Natus natus et pariatur. Eligendi illo quo esse. Tenetur ad neque veniam.",eyebrow:"eyebrow text",iconLeft:null,iconLeftColor:t.NEUTRAL,iconRight:null,iconRightColor:t.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!1,hideSlotWhenCollapsed:!1,mobileLayout:r.VERTICAL,titleAccessorySlot:"title accessory slot",defaultSlot:"default slot"},m={iconLeft:{control:"select",options:[null,...Object.keys(o)]},iconLeftColor:{control:"select",options:[null,...Object.values(t)]},iconRight:{control:"select",options:[null,...Object.keys(o)]},iconRightColor:{control:"select",options:[null,...Object.values(t)]},size:{control:"select",options:Object.values(n)},hasDivider:{control:"boolean"},info:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(r)},titleEllipsis:{control:"boolean"}};e.argTypes=m;e.args=f;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0"}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SectionHeader,
      SlotPlaceholder
    },
    setup() {
      return args;
    },
    data() {
      return {
        ICONS: Object.freeze(ICONS),
        SLOT_PLACEHOLDER_SIZES: Object.freeze(SLOT_PLACEHOLDER_SIZES)
      };
    },
    methods: {
      onIsExpandedUpdated(isExpanded) {
        updateArgs({
          isExpanded
        });
      }
    },
    template: '<section-header' + ' :is-expandable="isExpandable"' + ' :hide-slot-when-collapsed="hideSlotWhenCollapsed"' + ' :icon-left="ICONS[iconLeft]"' + ' :icon-left-color="iconLeftColor"' + ' :icon-right="ICONS[iconRight]"' + ' :icon-right-color="iconRightColor"' + ' :is-expanded="isExpanded"' + ' :size="size"' + ' :info="info"' + ' :title="title"' + ' :title-ellipsis="titleEllipsis"' + ' :eyebrow="eyebrow"' + ' :has-divider="hasDivider"' + ' :mobile-layout="mobileLayout"' + ' :supportingText="supportingText"' + ' @update:isExpanded="onIsExpandedUpdated"' + '>' + '<template v-if="titleAccessorySlot" #titleAccessory><slot-placeholder :label="titleAccessorySlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template>' + '<slot-placeholder v-if="defaultSlot" :label="defaultSlot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />' + '</section-header>'
  };
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const H=["Interactive"];export{e as Interactive,H as __namedExportsOrder,v as default};
