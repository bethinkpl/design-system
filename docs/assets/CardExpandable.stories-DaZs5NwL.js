import{f,G as h,M as v,l as d,J as r,o as s,a as o,h as C,L as b,j as n,c as I,k as g}from"./vue.esm-bundler-S9zc6Wpc.js";import{D as y}from"./Card-DXLn1iri.js";import{a as T,b as _,I as w}from"./Icon-BCNBiMEg.js";import{u as S}from"./useLegacyI18n-V_RMslSR.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Divider-Cfx8bFqy.js";import"./LoadingBar-CjG84nig.js";import"./ContainerRibbon-CwDaG5Dq.js";import"./fontawesome-CXWUXLFT.js";const x=f({name:"CardExpandable",components:{DsCard:y,DsIcon:T},props:{isExpanded:{type:Boolean,default:!1},isExpanderVisible:{type:Boolean,default:!0},expanderTextCollapsed:{type:String,default:null},expanderTextExpanded:{type:String,default:null},headerHasPadding:{type:Boolean,default:!1},dividerUnderHeader:{type:Boolean,default:!1}},emits:{"update:isExpanded":e=>!0},setup(){const{t:e}=S();return{t:e}},data(){return{isExpandedInternal:!1,ICONS:Object.freeze(w),ICON_SIZES:Object.freeze(_)}},computed:{resolvedExpanderTextCollapsed(){var e;return(e=this.expanderTextCollapsed)!=null?e:this.t("ds.cardExpandable.expand")},resolvedExpanderTextExpanded(){var e;return(e=this.expanderTextExpanded)!=null?e:this.t("ds.cardExpandable.collapse")},chevronRotation(){return this.isExpandedInternal?180:null}},watch:{isExpanded:{handler(e){e!==this.isExpandedInternal&&(this.isExpandedInternal=e)},immediate:!0}},methods:{onExpanderClick(){this.isExpandedInternal=!this.isExpandedInternal,this.$emit("update:isExpanded",this.isExpandedInternal)}}}),V={key:0,class:"ds-cardExpandable__expandedContent"},H={class:"ds-cardExpandable__expanderLabel"};function N(e,t,D,$,L,P){const m=r("ds-icon"),u=r("ds-card");return s(),h(u,{class:"ds-cardExpandable","header-has-padding":e.headerHasPadding,"divider-under-header":e.dividerUnderHeader},v({header:d(()=>[n(e.$slots,"header",{},void 0,!0)]),content:d(()=>[n(e.$slots,"content",{isExpanded:e.isExpandedInternal},void 0,!0),e.isExpandedInternal?(s(),I("div",V,[n(e.$slots,"expandedContent",{},void 0,!0)])):g("",!0)]),_:2},[e.isExpanderVisible?{name:"footer",fn:d(()=>[o("div",{class:"ds-cardExpandable__expander",onClick:t[0]||(t[0]=(...E)=>e.onExpanderClick&&e.onExpanderClick(...E))},[o("span",H,b(e.isExpandedInternal?e.resolvedExpanderTextExpanded:e.resolvedExpanderTextCollapsed),1),C(m,{class:"ds-cardExpandable__expanderIcon",icon:e.ICONS.FA_CHEVRON_DOWN,rotation:e.chevronRotation,size:e.ICON_SIZES.X_SMALL},null,8,["icon","rotation","size"])])]),key:"0"}:void 0]),1032,["header-has-padding","divider-under-header"])}const c=k(x,[["render",N],["__scopeId","data-v-9b14d378"]]);x.__docgenInfo={displayName:"CardExpandable",exportName:"default",description:"",tags:{},props:[{name:"isExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isExpanderVisible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"expanderTextCollapsed",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"expanderTextExpanded",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"headerHasPadding",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dividerUnderHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:isExpanded",type:{names:["undefined"]}}],slots:[{name:"header"},{name:"content",scoped:!0,bindings:[{name:"is-expanded",title:"binding"}]},{name:"expandedContent"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Cards/CardExpandable/CardExpandable.vue"]};const Q={title:"Components/Cards/CardExpandable",component:c},z=e=>({components:{CardExpandable:c},setup(){return e},template:`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed !== '' ? expanderTextCollapsed : null"
                                             :expander-text-expanded="expanderTextExpanded !== '' ? expanderTextExpanded : null" :is-expanded="isExpanded"
                                             :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template #content="{ isExpanded: isExpandedInternal }">
                <div v-html="content" />
                <div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
            </template>
            <template #expandedContent>
                <div v-html="expandedContent"></div>
            </template>
            </card-expandable>`}),a=z.bind({}),O={header:"header slot",content:"content slot that supports <b>HTML markup</b>",expandedContent:"Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu",isExpanderVisible:!0,expanderTextCollapsed:"Rozwiń",expanderTextExpanded:"Zwiń",isExpanded:!1,headerHasPadding:!1,dividerUnderHeader:!1},B={header:{control:"text"},content:{control:"text"},expandedContent:{control:"text"}};a.argTypes=B;a.args=O;a.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var p,l,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    CardExpandable
  },
  setup() {
    return args;
  },
  template: \`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed !== '' ? expanderTextCollapsed : null"
                                             :expander-text-expanded="expanderTextExpanded !== '' ? expanderTextExpanded : null" :is-expanded="isExpanded"
                                             :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
            <template v-if="header" #header>
                <div v-html="header" />
            </template>
            <template #content="{ isExpanded: isExpandedInternal }">
                <div v-html="content" />
                <div v-if="isExpandedInternal">Dodatkowa treść w slocie <code>content</code> widoczna po rozwinięciu</div>
            </template>
            <template #expandedContent>
                <div v-html="expandedContent"></div>
            </template>
            </card-expandable>\`
})`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const W=["Interactive"];export{a as Interactive,W as __namedExportsOrder,Q as default};
