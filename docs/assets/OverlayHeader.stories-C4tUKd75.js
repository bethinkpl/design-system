import{I as A,d as R,a as C,c as h}from"./IconButton-BP3MsFJS.js";import{D,b as k}from"./Divider-Cfx8bFqy.js";import{_ as H,a as U}from"./Dropdown-B14FGbTx.js";import{D as B}from"./Skeleton-Dph7qEcf.js";import{T as V,a as $}from"./Tooltip-DGxAUyqd.js";import{u as j}from"./useLegacyI18n-V_RMslSR.js";import{f as z,I as P,c as t,k as r,h as a,j as n,a as d,N as u,L as O,F as T,l as m,J as c,o}from"./vue.esm-bundler-S9zc6Wpc.js";import{I as p}from"./Icon-BCNBiMEg.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./index-CPvnfNuQ.js";import"./fontawesome-CXWUXLFT.js";const y={NEUTRAL_GHOST:"neutralGhost",NEUTRAL:"neutral",SUCCESS:"success",FAIL:"fail",WARNING:"warning"},l={DEFAULT:"default",LOADING:"loading"},G=e=>(e==null?void 0:e.tagName)==="INPUT"||(e==null?void 0:e.tagName)==="SELECT"||(e==null?void 0:e.tagName)==="TEXTAREA"||!!(e!=null&&e.isContentEditable),w=z({name:"OverlayHeader",components:{DsIconButton:A,DsDivider:D,DsDropdown:H,DsSkeleton:B,DsTooltip:V},props:{title:{type:String,required:!0},shortTitle:{type:String,default:null},eyebrowText:{type:String,default:null},borderColor:{type:String,default:y.NEUTRAL_GHOST,validator:e=>Object.values(y).includes(e)},isTitleInteractive:{type:Boolean,default:!1},areKeyboardShortcutsDisabled:{type:Boolean,default:!1},state:{type:String,default:l.DEFAULT,validator(e){return Object.values(l).includes(e)}},dropdownIcon:{type:Object,default:()=>p.FA_ELLIPSIS_VERTICAL,validator(e){return Object.values(p).includes(P(e))}}},emits:{close:()=>!0,titleClick:()=>!0},setup(){const{t:e}=j();return{t:e}},data(){return{ICON_BUTTON_SIZES:Object.freeze(h),ICON_BUTTON_COLORS:Object.freeze(C),ICON_BUTTON_STATES:Object.freeze(R),ICONS:Object.freeze(p),DIVIDER_PROMINENCES:Object.freeze(k),OVERLAY_HEADER_BORDER_COLORS:Object.freeze(y),OVERLAY_HEADER_STATES:Object.freeze(l),DROPDOWN_ALIGNS:Object.freeze(U),TOOLTIP_PLACEMENTS:Object.freeze($)}},computed:{isLoading(){return this.state===l.LOADING}},beforeUnmount(){window.removeEventListener("keydown",this.onKeydown)},mounted(){window.addEventListener("keydown",this.onKeydown)},methods:{onKeydown(e){if(!this.areKeyboardShortcutsDisabled&&!G(e.target))switch(e.key){case"q":case"Q":e.stopPropagation(),this.$emit("close");break}},onTitleClick(){this.isTitleInteractive&&this.$emit("titleClick")}}}),M={key:0,class:"ds-overlayHeader__loadingWrapper"},Y={key:1,class:"ds-overlayHeader__accessory"},W={key:2,class:"ds-overlayHeader__content"},K={key:0,class:"ds-overlayHeader__eyebrow"},Z=["title"],q={key:1,class:"ds-overlayHeader__eyebrowAccessory"},Q={class:"ds-overlayHeader__main"},J={key:0,class:"ds-overlayHeader__titleLeading"},X=["title"],x={class:"ds-overlayHeader__title -ds-desktop"},ee={class:"ds-overlayHeader__title -ds-mobile"},te={key:2,class:"ds-overlayHeader__titleTrailingWrapper"},oe={class:"ds-overlayHeader__titleTrailing"},re={class:"ds-overlayHeader__actions"};function ae(e,v,le,de,ce,pe){const g=c("ds-skeleton"),S=c("ds-divider"),_=c("ds-icon-button"),L=c("ds-dropdown"),N=c("ds-tooltip");return o(),t("div",{class:u(["ds-overlayHeader",{"-ds-borderNeutral":e.borderColor===e.OVERLAY_HEADER_BORDER_COLORS.NEUTRAL,"-ds-borderSuccess":e.borderColor===e.OVERLAY_HEADER_BORDER_COLORS.SUCCESS,"-ds-borderFail":e.borderColor===e.OVERLAY_HEADER_BORDER_COLORS.FAIL,"-ds-borderWarning":e.borderColor===e.OVERLAY_HEADER_BORDER_COLORS.WARNING}])},[e.isLoading?(o(),t("div",M,[a(g,{width:"50%",height:"12px"}),a(g,{class:"ds-overlayHeader__loadingBar -ds-desktop",width:"100%",height:"20px"}),a(g,{class:"ds-overlayHeader__loadingBar -ds-mobile",width:"100%",height:"18px"})])):r("",!0),!e.isLoading&&e.$slots.accessory?(o(),t("div",Y,[n(e.$slots,"accessory",{},void 0,!0)])):r("",!0),e.isLoading?r("",!0):(o(),t("div",W,[e.eyebrowText||e.$slots.eyebrowAccessory?(o(),t("div",K,[e.eyebrowText?(o(),t("div",{key:0,class:u(["ds-overlayHeader__eyebrowText",{"-ds-withRightMargin":e.$slots.eyebrowAccessory}]),title:e.eyebrowText},O(e.eyebrowText),11,Z)):r("",!0),e.$slots.eyebrowAccessory?(o(),t("div",q,[n(e.$slots,"eyebrowAccessory",{},void 0,!0)])):r("",!0)])):r("",!0),d("div",Q,[e.$slots.titleLeading?(o(),t("div",J,[n(e.$slots,"titleLeading",{},void 0,!0)])):r("",!0),e.title||e.shortTitle?(o(),t("div",{key:1,class:u(["ds-overlayHeader__titleWrapper",{"-ds-interactive":e.isTitleInteractive}]),title:e.title,onClick:v[0]||(v[0]=(...i)=>e.onTitleClick&&e.onTitleClick(...i))},[d("div",x,O(e.title),1),d("div",ee,O(e.shortTitle||e.title),1)],10,X)):r("",!0),e.$slots.titleTrailing?(o(),t("div",te,[d("div",oe,[n(e.$slots,"titleTrailing",{},void 0,!0)])])):r("",!0)])])),!e.isLoading&&e.$slots.actions?(o(),t(T,{key:3},[d("div",re,[n(e.$slots,"actions",{},void 0,!0)]),a(S,{class:"ds-overlayHeader__divider",prominence:e.DIVIDER_PROMINENCES.STRONG,"is-vertical":""},null,8,["prominence"])],64)):r("",!0),!e.isLoading&&e.$slots.dropdown?(o(),t(T,{key:4},[a(L,{align:e.DROPDOWN_ALIGNS.END},{reference:m(({isOpen:i})=>[a(_,{"touchable-deprecated":"",icon:e.dropdownIcon,size:e.ICON_BUTTON_SIZES.MEDIUM,color:e.ICON_BUTTON_COLORS.NEUTRAL,state:i?e.ICON_BUTTON_STATES.HOVERED:e.ICON_BUTTON_STATES.DEFAULT},null,8,["icon","size","color","state"])]),default:m(({close:i})=>[n(e.$slots,"dropdown",{close:i},void 0,!0)]),_:3},8,["align"]),a(S,{class:"ds-overlayHeader__divider",prominence:e.DIVIDER_PROMINENCES.STRONG,"is-vertical":""},null,8,["prominence"])],64)):r("",!0),a(N,{"is-pointer-visible":!1,placement:e.TOOLTIP_PLACEMENTS.LEFT,text:e.t("ds.overlayHeader.close")},{default:m(()=>[a(_,{"touchable-deprecated":"","data-test-selector":"overlay-header-close-button",icon:e.ICONS.FA_XMARK,size:e.ICON_BUTTON_SIZES.MEDIUM,color:e.ICON_BUTTON_COLORS.NEUTRAL,onClick:v[1]||(v[1]=i=>e.$emit("close"))},null,8,["icon","size","color"])]),_:1},8,["placement","text"])],2)}const I=F(w,[["render",ae],["__scopeId","data-v-279473b8"]]);w.__docgenInfo={displayName:"OverlayHeader",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"shortTitle",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"eyebrowText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"borderColor",type:{name:"string"},defaultValue:{func:!1,value:"OVERLAY_HEADER_BORDER_COLORS.NEUTRAL_GHOST"}},{name:"isTitleInteractive",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"areKeyboardShortcutsDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"state",type:{name:"string"},defaultValue:{func:!1,value:"OVERLAY_HEADER_STATES.DEFAULT"}},{name:"dropdownIcon",type:{name:"object"},defaultValue:{func:!0,value:"() => ICONS.FA_ELLIPSIS_VERTICAL"}}],events:[{name:"close"},{name:"titleClick"}],slots:[{name:"accessory"},{name:"eyebrowAccessory"},{name:"titleLeading"},{name:"titleTrailing"},{name:"actions"},{name:"dropdown",scoped:!0,bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Headers/OverlayHeader/OverlayHeader.vue"]};const Ce={title:"Components/Headers/OverlayHeader",component:I},se=e=>({components:{OverlayHeader:I},setup(){return{args:e}},methods:{onClose(){console.log("OverlayHeader emitted close event")}},data(){return{ICONS:Object.freeze(p)}},template:`
        <div style="height: 300px">
            <overlay-header v-bind=args :dropdown-icon="ICONS[args.dropdownIcon]" @close="onClose">
                <template v-if="args.accessorySlot" #accessory>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.accessorySlot }}</div>
                </template>
                <template v-if="args.eyebrowAccessorySlot" #eyebrowAccessory>
                    <div style="background: var(--raw-gray-300); font-size: 10px">{{ args.eyebrowAccessorySlot }}</div>
                </template>
                <template v-if="args.titleLeadingSlot" #titleLeading>
                    <div style="background: var(--raw-gray-300);">{{ args.titleLeadingSlot }}</div>
                </template>
                <template v-if="args.titleTrailingSlot" #titleTrailing>
                    <div style="background: var(--raw-gray-300); white-space: nowrap">{{ args.titleTrailingSlot }}</div>
                </template>
                <template v-if="args.actionsSlot" #actions>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.actionsSlot }}</div>
                </template>
                <template v-if="args.dropdownSlot" #dropdown="{ close }">
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                </template>
            </overlay-header>
        </div>`}),s=se.bind({}),ie={title:"Zadanie #123",shortTitle:"#123",eyebrowText:"Eyebrow",accessorySlot:"accessory",actionsSlot:"actions slot",dropdownSlot:"dropdown slot",dropdownIcon:"FA_ELLIPSIS_VERTICAL",eyebrowAccessorySlot:"eyebrowAccessory",titleLeadingSlot:"leading",titleTrailingSlot:"trailing",isTitleInteractive:!1,areKeyboardShortcutsDisabled:!1,borderColor:y.NEUTRAL_GHOST,state:l.DEFAULT},ne={borderColor:{control:"select",options:Object.values(y)},state:{control:"select",options:Object.values(l)},dropdownIcon:{control:"select",options:Object.keys(p)}};s.argTypes=ne;s.args=ie;s.parameters={layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=5867%3A99215&t=gnx09suYyI8a6jHh-0"}};var E,b,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    OverlayHeader
  },
  setup() {
    return {
      args
    };
  },
  methods: {
    onClose() {
      console.log('OverlayHeader emitted close event');
    }
  },
  data() {
    return {
      ICONS: Object.freeze(ICONS)
    };
  },
  template: \`
        <div style="height: 300px">
            <overlay-header v-bind=args :dropdown-icon="ICONS[args.dropdownIcon]" @close="onClose">
                <template v-if="args.accessorySlot" #accessory>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.accessorySlot }}</div>
                </template>
                <template v-if="args.eyebrowAccessorySlot" #eyebrowAccessory>
                    <div style="background: var(--raw-gray-300); font-size: 10px">{{ args.eyebrowAccessorySlot }}</div>
                </template>
                <template v-if="args.titleLeadingSlot" #titleLeading>
                    <div style="background: var(--raw-gray-300);">{{ args.titleLeadingSlot }}</div>
                </template>
                <template v-if="args.titleTrailingSlot" #titleTrailing>
                    <div style="background: var(--raw-gray-300); white-space: nowrap">{{ args.titleTrailingSlot }}</div>
                </template>
                <template v-if="args.actionsSlot" #actions>
                    <div style="background: var(--raw-gray-300); height: 100%">{{ args.actionsSlot }}</div>
                </template>
                <template v-if="args.dropdownSlot" #dropdown="{ close }">
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                    <div style="background: var(--raw-gray-300);">{{ args.dropdownSlot }}</div>
                </template>
            </overlay-header>
        </div>\`
})`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const he=["Interactive"];export{s as Interactive,he as __namedExportsOrder,Ce as default};
