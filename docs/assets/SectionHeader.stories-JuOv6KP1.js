import{D as s,b as n,S as r,a as t}from"./SectionHeader-B16etDtz.js";import{I as o}from"./Icon-CdUzGdbx.js";import{S,a as E}from"./SlotPlaceholder-BQQBev8O.js";import{w as L}from"./decorator-CcL-F-0p.js";import"./IconButton-QdkwLB9f.js";import"./Button-DXBV2lSl.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./device-mzBmLsxe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Bk_mEbdR.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,H={title:"Components/Headers/SectionHeader",component:s,decorators:[L]},g=d=>{const[f,p]=u();return{components:{SectionHeader:s,SlotPlaceholder:S},setup(){return d},data(){return{ICONS:Object.freeze(o),SLOT_PLACEHOLDER_SIZES:Object.freeze(E)}},methods:{onIsExpandedUpdated(c){p({isExpanded:c})}},template:'<section-header :is-expandable="isExpandable" :hide-slot-when-collapsed="hideSlotWhenCollapsed" :icon-left="ICONS[iconLeft]" :icon-left-color="iconLeftColor" :icon-right="ICONS[iconRight]" :icon-right-color="iconRightColor" :is-expanded="isExpanded" :size="size" :info="info" :title="title" :title-ellipsis="titleEllipsis" :eyebrow="eyebrow" :has-divider="hasDivider" :mobile-layout="mobileLayout" :supportingText="supportingText" @update:isExpanded="onIsExpandedUpdated"><template v-if="titleLeadingSlot" #titleLeading><slot-placeholder :label="titleLeadingSlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template><template v-if="titleTrailingSlot" #titleTrailing><slot-placeholder :label="titleTrailingSlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template><slot-placeholder v-if="defaultSlot" :label="defaultSlot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" /></section-header>'}},e=g.bind({}),O={size:r.MEDIUM,title:"Section Header",titleEllipsis:!1,supportingText:"Supporting text. Et doloribus aspernatur suscipit provident maiores. Natus natus et pariatur. Eligendi illo quo esse. Tenetur ad neque veniam.",eyebrow:"eyebrow text",iconLeft:null,iconLeftColor:t.NEUTRAL,iconRight:null,iconRightColor:t.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!1,hideSlotWhenCollapsed:!1,mobileLayout:n.VERTICAL,titleLeadingSlot:"title leading slot",titleTrailingSlot:"title trailing slot",defaultSlot:"default slot"},m={iconLeft:{control:"select",options:[null,...Object.keys(o)]},iconLeftColor:{control:"select",options:[null,...Object.values(t)]},iconRight:{control:"select",options:[null,...Object.keys(o)]},iconRightColor:{control:"select",options:[null,...Object.values(t)]},size:{control:"select",options:Object.values(r)},hasDivider:{control:"boolean"},info:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(n)},titleEllipsis:{control:"boolean"}};e.argTypes=m;e.args=O;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0"}};var i,l,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
    template: '<section-header' + ' :is-expandable="isExpandable"' + ' :hide-slot-when-collapsed="hideSlotWhenCollapsed"' + ' :icon-left="ICONS[iconLeft]"' + ' :icon-left-color="iconLeftColor"' + ' :icon-right="ICONS[iconRight]"' + ' :icon-right-color="iconRightColor"' + ' :is-expanded="isExpanded"' + ' :size="size"' + ' :info="info"' + ' :title="title"' + ' :title-ellipsis="titleEllipsis"' + ' :eyebrow="eyebrow"' + ' :has-divider="hasDivider"' + ' :mobile-layout="mobileLayout"' + ' :supportingText="supportingText"' + ' @update:isExpanded="onIsExpandedUpdated"' + '>' + '<template v-if="titleLeadingSlot" #titleLeading><slot-placeholder :label="titleLeadingSlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template>' + '<template v-if="titleTrailingSlot" #titleTrailing><slot-placeholder :label="titleTrailingSlot" :size="SLOT_PLACEHOLDER_SIZES.SMALL" /></template>' + '<slot-placeholder v-if="defaultSlot" :label="defaultSlot" :size="SLOT_PLACEHOLDER_SIZES.MEDIUM" />' + '</section-header>'
  };
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const z=["Interactive"];export{e as Interactive,z as __namedExportsOrder,H as default};
