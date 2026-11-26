import{a as i,b as t,D as b,S as h}from"./SectionHeader-BCRcQ__g.js";import{f as C,I as o,c as r,G as I,k as d,M as L,l as y,j as c,J as _,o as l,t as v}from"./vue.esm-bundler-S9zc6Wpc.js";import{I as a}from"./Icon-BCNBiMEg.js";import{c as R,a as D}from"./IconButton-BP3MsFJS.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as T,a as w}from"./SlotPlaceholder-DGwCsFz7.js";import"./Divider-Cfx8bFqy.js";import"./fontawesome-CXWUXLFT.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";const E=C({name:"DrawerSection",components:{DsSectionHeader:b},props:{isExpandable:{type:Boolean,default:!1},iconLeft:{type:Object,default:null,validator(e){return Object.values(a).includes(o(e))}},iconLeftColor:{type:String,default:t.NEUTRAL_WEAK,validator(e){return Object.values(t).includes(o(e))}},iconRight:{type:Object,default:null,validator(e){return Object.values(a).includes(o(e))}},iconRightColor:{type:String,default:t.NEUTRAL_WEAK,validator(e){return Object.values(t).includes(o(e))}},isExpanded:{type:Boolean,default:!0},info:{type:Boolean,default:!1},size:{type:String,default:i.XX_SMALL,validator(e){return Object.values(i).includes(e)}},title:{type:String,default:null},titleEllipsis:{type:Boolean,default:!1},eyebrow:{type:String,default:""},supportingText:{type:String,default:null},hasDivider:{type:Boolean,default:!0}},emits:["info-click","update:isExpanded"],setup(){return{ICON_BUTTON_COLORS:D,ICON_BUTTON_SIZES:R,ICONS:a,SECTION_HEADER_MOBILE_LAYOUTS:h}},data(){return{isExpandedInternal:this.isExpanded}},watch:{isExpanded:{handler(e){e!==this.isExpandedInternal&&(this.isExpandedInternal=e)},immediate:!0}},methods:{onExpandableHeaderClick(e){this.isExpandedInternal=e,this.$emit("update:isExpanded",e)},onInfoClick(){this.$emit("info-click")}}}),x={class:"ds-drawerSection"},k={key:1},N={key:2};function H(e,g,p,s,V,B){const O=_("ds-section-header");return l(),r("div",x,[e.title?(l(),I(O,{key:0,"icon-left":e.iconLeft,"icon-left-color":e.iconLeftColor,"icon-right":e.iconRight,"icon-right-color":e.iconRightColor,"is-expandable":e.isExpandable,"is-expanded":e.isExpandedInternal,info:e.info,size:e.size,title:e.title,"title-ellipsis":e.titleEllipsis,eyebrow:e.eyebrow,"supporting-text":e.supportingText,"has-divider":e.hasDivider,"mobile-layout":e.SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,onInfoClick:e.onInfoClick,"onUpdate:isExpanded":e.onExpandableHeaderClick},L({_:2},[e.$slots.sectionHeaderDefault?{name:"default",fn:y(()=>[c(e.$slots,"sectionHeaderDefault")]),key:"0"}:void 0]),1032,["icon-left","icon-left-color","icon-right","icon-right-color","is-expandable","is-expanded","info","size","title","title-ellipsis","eyebrow","supporting-text","has-divider","mobile-layout","onInfoClick","onUpdate:isExpanded"])):d("",!0),e.isExpandedInternal||!e.isExpandable?(l(),r("div",k,[c(e.$slots,"default")])):d("",!0),e.$slots.uncollapsible?(l(),r("div",N,[c(e.$slots,"uncollapsible")])):d("",!0)])}const S=A(E,[["render",H]]);E.__docgenInfo={displayName:"DrawerSection",exportName:"default",description:"",tags:{},props:[{name:"isExpandable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconLeft",type:{name:"Object as () => IconItem"},defaultValue:{func:!1,value:"null"}},{name:"iconLeftColor",type:{name:"String as () => SectionHeaderIconColor"},defaultValue:{func:!1,value:"SECTION_HEADER_ICON_COLORS.NEUTRAL_WEAK"}},{name:"iconRight",type:{name:"Object as () => IconItem"},defaultValue:{func:!1,value:"null"}},{name:"iconRightColor",type:{name:"String as () => SectionHeaderIconColor"},defaultValue:{func:!1,value:"SECTION_HEADER_ICON_COLORS.NEUTRAL_WEAK"}},{name:"isExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"info",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"SECTION_HEADER_SIZES.XX_SMALL"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"titleEllipsis",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"eyebrow",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"supportingText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasDivider",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"info-click"},{name:"update:isExpanded",type:{names:["undefined"]}}],slots:[{name:"sectionHeaderDefault"},{name:"default"},{name:"uncollapsible"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Drawer/DrawerSection/DrawerSection.vue"]};const{useArgs:U}=__STORYBOOK_MODULE_PREVIEW_API__,Q={title:"Components/Drawer/DrawerSection",component:S},j=e=>{const[g,p]=U();return{components:{DrawerSection:S,SlotPlaceholder:T},setup(){return{...v(e),ICONS:a,SLOT_PLACEHOLDER_SIZES:w}},methods:{infoClicked(){console.log("info clicked")},isExpandedUpdated(s){p({isExpanded:s})}},template:`
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
            </drawer-section>`}},n=j.bind({}),z={size:i.MEDIUM,title:"Drawer Section Header",titleEllipsis:!1,supportingText:"",eyebrow:"",iconLeft:null,iconLeftColor:t.NEUTRAL,iconRight:null,iconRightColor:t.NEUTRAL,info:!1,hasDivider:!0,isExpandable:!1,isExpanded:!0},M={iconLeft:{control:"select",options:[null,...Object.keys(a)]},iconLeftColor:{control:"select",options:[null,...Object.values(t)]},iconRight:{control:"select",options:[null,...Object.keys(a)]},iconRightColor:{control:"select",options:[null,...Object.values(t)]},size:{control:"select",options:Object.values(i)},hasDivider:{control:"boolean"},info:{control:"boolean"}};n.argTypes=M;n.args=z;n.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4"}};var u,f,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(m=(f=n.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const q=["Interactive"];export{n as Interactive,q as __namedExportsOrder,Q as default};
