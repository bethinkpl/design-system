import{b as r,c as l,S as t,a}from"./SectionHeader-isKXGfjn.js";import{I as o}from"./Icon-DUeXRUm6.js";import{w as u}from"./decorator-B_8W69Nd.js";import"./IconButton-Cn83Zk5-.js";import"./Button-XuK8IxnR.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./device-9fgosCm4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-NOTDPuJ1.js";import"./v4-CwV2VaSl.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Components/Headers/SectionHeader",component:r,decorators:[u]},E=d=>{const[b,p]=m();return{components:{SectionHeader:r},setup(){return d},data(){return{ICONS:Object.freeze(o)}},methods:{onIsExpandedUpdated(c){p({isExpanded:c})}},template:'<section-header :is-expandable="isExpandable" :hide-slot-when-collapsed="hideSlotWhenCollapsed" :icon-left="ICONS[iconLeft]" :icon-left-color="iconLeftColor" :icon-right="ICONS[iconRight]" :icon-right-color="iconRightColor" :is-expanded="isExpanded" :size="size" :info="info" :title="title" :title-ellipsis="titleEllipsis" :eyebrow="eyebrow" :has-divider="hasDivider" :mobile-layout="mobileLayout" :supportingText="supportingText" @update:isExpanded="onIsExpandedUpdated"><div style="border: 1px solid;">Slot content</div></section-header>'}},e=E.bind({}),g={size:a.MEDIUM,title:"Section Header",titleEllipsis:!1,supportingText:"Supporting text. Et doloribus aspernatur suscipit provident maiores. Natus natus et pariatur. Eligendi illo quo esse. Tenetur ad neque veniam.",eyebrow:"eyebrow text",iconLeft:null,iconLeftColor:t.NEUTRAL,iconRight:null,iconRightColor:t.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!1,hideSlotWhenCollapsed:!1,mobileLayout:l.VERTICAL},h={iconLeft:{control:"select",options:[null,...Object.keys(o)]},iconLeftColor:{control:"select",options:[null,...Object.values(t)]},iconRight:{control:"select",options:[null,...Object.keys(o)]},iconRightColor:{control:"select",options:[null,...Object.values(t)]},size:{control:"select",options:Object.values(a)},hasDivider:{control:"boolean"},info:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(l)},titleEllipsis:{control:"boolean"}};e.argTypes=h;e.args=g;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0"}};var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [_, updateArgs] = useArgs();
  return {
    components: {
      SectionHeader
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
      onIsExpandedUpdated(isExpanded) {
        updateArgs({
          isExpanded
        });
      }
    },
    template: '<section-header' + ' :is-expandable="isExpandable"' + ' :hide-slot-when-collapsed="hideSlotWhenCollapsed"' + ' :icon-left="ICONS[iconLeft]"' + ' :icon-left-color="iconLeftColor"' + ' :icon-right="ICONS[iconRight]"' + ' :icon-right-color="iconRightColor"' + ' :is-expanded="isExpanded"' + ' :size="size"' + ' :info="info"' + ' :title="title"' + ' :title-ellipsis="titleEllipsis"' + ' :eyebrow="eyebrow"' + ' :has-divider="hasDivider"' + ' :mobile-layout="mobileLayout"' + ' :supportingText="supportingText"' + ' @update:isExpanded="onIsExpandedUpdated"' + '>' + '<div style="border: 1px solid;">Slot content</div>' + '</section-header>'
  };
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const T=["Interactive"];export{e as Interactive,T as __namedExportsOrder,R as default};
