import{f as I,c as i,a as n,G as r,k as a,j as m,l as _,u as t,N as d,L as b,o as l,K as k,t as D}from"./vue.esm-bundler-S9zc6Wpc.js";import{d as h,_ as O}from"./Button-C24VVysr.js";import{b as B,a as R,D as H}from"./Divider-Cfx8bFqy.js";import{c as E,I as T}from"./IconButton-BP3MsFJS.js";import{D as N}from"./Chip-B885g_GX.js";import{I as p,b as A,a as U,c as q}from"./Icon-BCNBiMEg.js";import{u as z}from"./useLegacyI18n-V_RMslSR.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as M,a as P}from"./SlotPlaceholder-DGwCsFz7.js";import"./device-mzBmLsxe.js";import"./fontawesome-CXWUXLFT.js";const f={NEUTRAL_STRONG:"neutralStrong",NEUTRAL_WEAK:"neutralWeak"},c={NONE:"none",DEFAULT:"default"},x={class:"ds-drawerHeader__headerWrapper"},Z={class:"ds-drawerHeader__titleWrapper"},F={class:"ds-drawerHeader__textWrapper"},W={class:"ds-drawerHeader__title"},G=["title"],V={key:3},K={key:1,class:"ds-drawerHeader__actions"},C=I({__name:"DrawerHeader",props:{eyebrowText:{default:null},isInteractiveEyebrow:{type:Boolean,default:!1},eyebrowEllipsis:{type:Boolean,default:!1},isEyebrowTextUppercase:{type:Boolean,default:!0},title:{default:null},titleEllipsis:{type:Boolean,default:!1},isTitleTextUppercase:{type:Boolean,default:!1},titleColor:{default:()=>f.NEUTRAL_STRONG},leftIcon:{default:null},chipLabel:{default:null},isClosable:{type:Boolean,default:!0},hasDivider:{type:Boolean,default:!1},isSecondLevel:{type:Boolean,default:!1},hasBackButton:{type:Boolean,default:!1},backgroundColor:{default:()=>c.NONE}},emits:["backClicked","close","eyebrowClicked"],setup(y){const{t:g}=z();return(e,o)=>(l(),i("div",{class:d(["ds-drawerHeader",{"-ds-backgroundDefault":e.backgroundColor===t(c).DEFAULT}])},[n("div",x,[n("div",Z,[e.isSecondLevel?(l(),r(t(O),{key:0,"icon-left":t(p).FA_CHEVRON_LEFT,type:t(h).TEXT,class:"ds-drawerHeader__secondLevel",onClick:o[0]||(o[0]=u=>e.$emit("backClicked"))},{default:_(()=>[k(b(t(g)("ds.globals.back")),1)]),_:1},8,["icon-left","type"])):a("",!0),n("div",{class:d([{"-ds-hidden":e.isSecondLevel},"ds-drawerHeader__firstLevel"])},[e.hasBackButton?(l(),r(t(T),{key:0,size:t(E).MEDIUM,icon:t(p).FA_CHEVRON_LEFT,onClick:o[1]||(o[1]=u=>e.$emit("backClicked"))},null,8,["size","icon"])):a("",!0),n("div",F,[e.eyebrowText?(l(),i("span",{key:0,class:d([{"-ds-isInteractive":e.isInteractiveEyebrow,"-ds-ellipsis":e.eyebrowEllipsis,"-ds-uppercase":e.isEyebrowTextUppercase},"ds-drawerHeader__eyebrow"]),onClick:o[2]||(o[2]=u=>e.isInteractiveEyebrow&&e.$emit("eyebrowClicked"))},b(e.eyebrowText),3)):a("",!0),n("div",W,[e.leftIcon?(l(),r(t(U),{key:0,icon:e.leftIcon,size:t(A).X_SMALL,class:"ds-drawerHeader__leftIcon"},null,8,["icon","size"])):a("",!0),e.title?(l(),i("span",{key:1,class:d(["ds-drawerHeader__titleText",{"-ds-ellipsis":e.titleEllipsis,"-ds-uppercase":e.isTitleTextUppercase,[`-ds-${e.titleColor}`]:!0}]),title:e.titleEllipsis?e.title:void 0},b(e.title),11,G)):a("",!0),e.chipLabel?(l(),r(t(N),{key:2,label:e.chipLabel},null,8,["label"])):a("",!0),e.$slots.titleTrailing?(l(),i("div",V,[m(e.$slots,"titleTrailing",{},void 0,!0)])):a("",!0)])])],2),e.$slots.actions?(l(),i("div",K,[m(e.$slots,"actions",{},void 0,!0)])):a("",!0),e.isClosable?(l(),r(t(T),{key:2,color:t(q).NEUTRAL,icon:t(p).FA_XMARK,size:t(E).MEDIUM,onClick:o[3]||(o[3]=u=>e.$emit("close"))},null,8,["color","icon","size"])):a("",!0)]),m(e.$slots,"supporting",{},void 0,!0)]),e.hasDivider?(l(),r(t(H),{key:0,size:t(R).L,prominence:t(B).WEAK},null,8,["size","prominence"])):a("",!0)],2))}}),v=$(C,[["__scopeId","data-v-b3da9231"]]);C.__docgenInfo={exportName:"default",displayName:"DrawerHeader",description:"",tags:{},props:[{name:"eyebrowText",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"isInteractiveEyebrow",required:!1,type:{name:"boolean"}},{name:"eyebrowEllipsis",required:!1,type:{name:"boolean"}},{name:"isEyebrowTextUppercase",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"titleEllipsis",required:!1,type:{name:"boolean"}},{name:"isTitleTextUppercase",required:!1,type:{name:"boolean"}},{name:"titleColor",required:!1,type:{name:"DrawerHeaderTitleColor"}},{name:"leftIcon",required:!1,type:{name:"union",elements:[{name:"IconItem"},{name:"null"}]}},{name:"chipLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"isClosable",required:!1,type:{name:"boolean"}},{name:"hasDivider",required:!1,type:{name:"boolean"}},{name:"isSecondLevel",required:!1,type:{name:"boolean"}},{name:"hasBackButton",required:!1,type:{name:"boolean"}},{name:"backgroundColor",required:!1,type:{name:"DrawerHeaderBackgroundColor"}}],events:[{name:"backClicked"},{name:"eyebrowClicked"},{name:"close"}],slots:[{name:"titleTrailing"},{name:"actions"},{name:"supporting"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Drawer/DrawerHeader/DrawerHeader.vue"]};const pe={title:"Components/Drawer/DrawerHeader",component:v},j=y=>({components:{DrawerHeader:v,SlotPlaceholder:M},setup(){return{...D(y),ICONS:p,SLOT_PLACEHOLDER_SIZES:P}},template:`
        <drawer-header
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
            :is-title-text-uppercase="isTitleTextUppercase"
            :title="title"
            :has-back-button="hasBackButton"
            :background-color="backgroundColor"
        >
            <template #actions v-if="actions">
                <slot-placeholder :label="actions" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <slot-placeholder :label="titleTrailing" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #supporting v-if="supporting">
                <slot-placeholder :label="supporting" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
        </drawer-header>`}),s=j.bind({}),Q={eyebrowText:"eyebrow",isInteractiveEyebrow:!1,eyebrowEllipsis:!1,isEyebrowTextUppercase:!0,title:"Header Title",titleEllipsis:!1,isTitleTextUppercase:!1,titleColor:f.NEUTRAL_STRONG,leftIcon:null,chipLabel:"chip",isClosable:!0,hasDivider:!1,isSecondLevel:!1,actions:"actions slot",titleTrailing:"trailing slot",supporting:"supporting slot",hasBackButton:!1,backgroundColor:c.NONE},X={eyebrowText:{control:"text"},isInteractiveEyebrow:{control:"boolean"},eyebrowEllipsis:{control:"boolean"},isEyebrowTextUppercase:{control:"boolean"},title:{control:"text"},titleEllipsis:{control:"boolean"},isTitleTextUppercase:{control:"boolean"},titleColor:{control:"select",options:Object.values(f)},leftIcon:{control:"select",options:[...Object.keys(p),null]},chipLabel:{control:"text"},hasDivider:{control:"boolean"},isSecondLevel:{control:"boolean"},isClosable:{control:"boolean"},actions:{control:"text"},titleTrailing:{control:"text"},supporting:{control:"text"},hasBackButton:{control:"boolean"},backgroundColor:{control:"select",options:Object.values(c)}};s.argTypes=X;s.args=Q;s.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4"}};var w,L,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    DrawerHeader,
    SlotPlaceholder
  },
  setup() {
    return {
      ...toRefs(args),
      ICONS,
      SLOT_PLACEHOLDER_SIZES
    };
  },
  template: \`
        <drawer-header
            :eyebrow-ellipsis="eyebrowEllipsis"
            :is-eyebrow-text-uppercase="isEyebrowTextUppercase"
            :eyebrow-text="eyebrowText"
            :has-divider="hasDivider"
            :is-closable="isClosable"
            :is-interactive-eyebrow="isInteractiveEyebrow"
            :is-second-level="isSecondLevel"
            :left-icon="ICONS[leftIcon]"
            :chip-label="chipLabel"
            :title-color="titleColor"
            :title-ellipsis="titleEllipsis"
            :is-title-text-uppercase="isTitleTextUppercase"
            :title="title"
            :has-back-button="hasBackButton"
            :background-color="backgroundColor"
        >
            <template #actions v-if="actions">
                <slot-placeholder :label="actions" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #titleTrailing v-if="titleTrailing">
                <slot-placeholder :label="titleTrailing" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
            <template #supporting v-if="supporting">
                <slot-placeholder :label="supporting" :size="SLOT_PLACEHOLDER_SIZES.SMALL" />
            </template>
        </drawer-header>\`
})`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const de=["Interactive"];export{s as Interactive,de as __namedExportsOrder,pe as default};
