import{b as i,a as s,S as o,c as n}from"./SectionHeader-BlqMWTUw.js";import{I as t}from"./Icon-CVHceNst.js";import"./IconButton-o4H-Dbj2.js";import"./Button-Cbw2_9er.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Ba-XwrF-.js";const S={title:"Components/Headers/SectionHeader",component:i},d=(l,{updateArgs:a})=>({components:{SectionHeader:i},setup(){return l},data(){return{ICONS:Object.freeze(t)}},methods:{onIsExpandedUpdated(r){a({isExpanded:r})}},template:'<section-header :is-expandable="isExpandable" :hide-slot-when-collapsed="hideSlotWhenCollapsed" :icon-left="ICONS[iconLeft]" :icon-left-color="iconLeftColor" :icon-right="ICONS[iconRight]" :icon-right-color="iconRightColor" :is-expanded="isExpanded" :size="size" :info="info" :title="title" :title-ellipsis="titleEllipsis" :eyebrow="eyebrow" :has-divider="hasDivider" :mobile-layout="mobileLayout" :supportingText="supportingText" @update:isExpanded="onIsExpandedUpdated"><div style="border: 1px solid;">Slot content</div></section-header>'}),e=d.bind({}),p={size:s.MEDIUM,title:"Section Header",titleEllipsis:!1,supportingText:"Supporting text. Et doloribus aspernatur suscipit provident maiores. Natus natus et pariatur. Eligendi illo quo esse. Tenetur ad neque veniam.",eyebrow:"eyebrow text",iconLeft:null,iconLeftColor:o.NEUTRAL,iconRight:null,iconRightColor:o.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!1,hideSlotWhenCollapsed:!1,mobileLayout:n.VERTICAL},c={iconLeft:{control:"select",options:[null,...Object.keys(t)]},iconLeftColor:{control:"select",options:[null,...Object.values(o)]},iconRight:{control:"select",options:[null,...Object.keys(t)]},iconRightColor:{control:"select",options:[null,...Object.values(o)]},size:{control:"select",options:Object.values(s)},hasDivider:{control:"boolean"},info:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(n)},titleEllipsis:{control:"boolean"}};e.argTypes=c;e.args=p;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => ({
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
})`,...e.parameters?.docs?.source}}};const x=["Interactive"];export{e as Interactive,x as __namedExportsOrder,S as default};
