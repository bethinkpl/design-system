import{f as D,Y as W,d as q,c as t,j as l,h as n,l as E,o as a,a as r,k as f,L as y,u as L,F as S,H as G}from"./vue.esm-bundler-S9zc6Wpc.js";import{D as j}from"./Card-DXLn1iri.js";import{D as N}from"./Divider-Cfx8bFqy.js";import{_ as F}from"./StatsErrorBanner-BTIpeCuH.js";import{S as O}from"./SpinnerLoading-BguJA69o.js";import{u as P}from"./useLegacyI18n-V_RMslSR.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./StatsSectionHeader-D5hDNbPo.js";import{_ as T}from"./StatsResetBanner-BPdAj51n.js";import{S as h}from"./SlotPlaceholder-DGwCsFz7.js";import"./LoadingBar-CjG84nig.js";import"./ContainerRibbon-CwDaG5Dq.js";import"./Banner-DBrnx5vO.js";import"./Button-C24VVysr.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";import"./IconButton-BP3MsFJS.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-CCm0-VHM.js";import"./SectionHeader-BCRcQ__g.js";import"./StatsFiltersDropdown-BjrCeFwt.js";import"./Dropdown-B14FGbTx.js";import"./PopoverTriggerReference-B8D-PfSb.js";import"./Primitive-DZpX8QWU.js";import"./index-Dm7VD4DC.js";import"./PopperContent-Q46ZxJO6.js";import"./Presence-BVs8m1Yx.js";import"./SelectList-DDs0Y1IW.js";import"./SelectListItem-BSUo8-oj.js";import"./Modal-3-iKun9o.js";import"./HelpButton-AOedB5Rv.js";import"./Tooltip-DGxAUyqd.js";const Q={class:"ds-statsLayout"},Y={key:0,class:"ds-statsLayout__loading"},A={key:1,class:"ds-statsLayout__error"},J={key:2,class:"ds-statsLayout__content"},Z={class:"ds-statsLayout__wrapper"},K={class:"ds-statsLayout__summary"},U={key:0,class:"ds-statsLayout__gridHeader"},X={class:"ds-statsLayout__gridHeaderLeftColumn"},x={key:0,class:"ds-statsLayout__gridHeaderRightColumn"},ee={class:"ds-statsLayout__overallStats"},te={class:"ds-statsLayout__stats"},ae={key:0,class:"ds-statsLayout__gridHeader"},se={class:"ds-statsLayout__gridHeaderLeftColumn"},oe={class:"ds-statsLayout__statsList"},R=D({__name:"StatsLayout",props:{hasGridHeader:{type:Boolean,default:!0},hasRightColumn:{type:Boolean,default:!0},leftColumnLabel:{default:null},rightColumnLabel:{default:null},statsItemsHeaderLabel:{default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1}},emits:["retryClicked"],setup(s){const{t:o}=P(),_=W(),c=q(()=>Object.keys(_).filter(e=>e.startsWith("statsItem-")));return(e,b)=>(a(),t("div",Q,[l(e.$slots,"sectionHeader",{},void 0,!0),n(j,null,{content:E(()=>[e.isLoading?(a(),t("div",Y,[n(O)])):e.hasError?(a(),t("div",A,[n(F,{onButtonClicked:b[0]||(b[0]=u=>e.$emit("retryClicked"))})])):(a(),t("div",J,[r("div",Z,[r("div",K,[e.hasGridHeader?(a(),t("div",U,[r("div",X,y(e.leftColumnLabel||L(o)("ds.statsLayout.default.leftColumnLabel")),1),e.hasRightColumn?(a(),t("div",x,y(e.rightColumnLabel||L(o)("ds.statsLayout.default.rightColumnLabel")),1)):f("",!0)])):f("",!0),r("div",ee,[l(e.$slots,"overallStatsItem",{},void 0,!0)])]),r("div",te,[e.hasGridHeader?(a(),t("div",ae,[r("div",se,y(e.statsItemsHeaderLabel),1)])):f("",!0),r("div",oe,[(a(!0),t(S,null,G(c.value,u=>(a(),t(S,{key:u},[l(e.$slots,u,{},void 0,!0),n(N,{class:"ds-statsLayout__statsDivider"})],64))),128))])])]),l(e.$slots,"resetBanner",{},void 0,!0)]))]),_:3})]))}}),p=V(R,[["__scopeId","data-v-92a6f319"]]);R.__docgenInfo={exportName:"default",displayName:"StatsLayout",description:"",tags:{},props:[{name:"hasGridHeader",required:!1,type:{name:"boolean"}},{name:"hasRightColumn",required:!1,type:{name:"boolean"}},{name:"leftColumnLabel",required:!1,type:{name:"string"}},{name:"rightColumnLabel",required:!1,type:{name:"string"}},{name:"statsItemsHeaderLabel",required:!1,type:{name:"string"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"hasError",required:!1,type:{name:"boolean"}}],events:[{name:"retryClicked"}],slots:[{name:"sectionHeader"},{name:"overallStatsItem"},{name:"slotName",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"resetBanner"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/StatsLayout/StatsLayout.vue"]};const g=(s=5,o="<slot-placeholder/>")=>Array.from({length:s},(_,c)=>`<template v-slot:["statsItem-${c}"]>${o}</template>`).join(""),Ee={title:"Components/StatsLayout/StatsLayout",component:p,render:s=>({components:{StatsLayout:p,SlotPlaceholder:h},setup(){return{args:s}},template:`
        <stats-layout v-bind="args">
            <template #sectionHeader>
               <slot-placeholder label="Slot nagłówka sekcji" />
            </template>
            <template #overallStatsItem><slot-placeholder /></template>
            <template #resetBanner>
               <slot-placeholder label="Slot banera resetu" />
            </template>
            ${g()}
        </stats-layout>
        `}),args:{hasGridHeader:!0,hasRightColumn:!0,leftColumnLabel:"Zakres",rightColumnLabel:"Wyniki",statsItemsHeaderLabel:"{Nazwa użytej taksonomii}",isLoading:!1,hasError:!1},argTypes:{hasGridHeader:{control:"boolean"},hasRightColumn:{control:"boolean"},leftColumnLabel:{control:"text"},rightColumnLabel:{control:"text"},statsItemsHeaderLabel:{control:"text"},isLoading:{control:"boolean"},hasError:{control:"boolean"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},i={},m={render:s=>({components:{StatsLayout:p,StatsSectionHeader:$,StatsResetBanner:T,SlotPlaceholder:h},setup(){return{args:s,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem><slot-placeholder /></template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${g()}
            </stats-layout>
`})},d={render:s=>{const o='<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>';return{components:{StatsLayout:p,StatsSectionHeader:$,StatsResetBanner:T,SlotPlaceholder:h},setup(){return{args:s,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem>
                ${o}
                </template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${g(5,o)}
            </stats-layout>`}}};var k,v,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var C,H,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return {
      components: {
        StatsLayout,
        StatsSectionHeader,
        StatsResetBanner,
        SlotPlaceholder
      },
      setup() {
        return {
          args,
          filterItems: [{
            key: 'all',
            label: 'Wszystkie'
          }, {
            key: 'week',
            label: 'Tydzień'
          }, {
            key: 'month',
            label: 'Miesiąc'
          }]
        };
      },
      template: \`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem><slot-placeholder /></template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate()}
            </stats-layout>
\`
    };
  }
}`,...(B=(H=m.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var M,w,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const itemTemplate = \`<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>\`;
    return {
      components: {
        StatsLayout,
        StatsSectionHeader,
        StatsResetBanner,
        SlotPlaceholder
      },
      setup() {
        return {
          args,
          filterItems: [{
            key: 'all',
            label: 'Wszystkie'
          }, {
            key: 'week',
            label: 'Tydzień'
          }, {
            key: 'month',
            label: 'Miesiąc'
          }]
        };
      },
      template: \`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem>
                \${itemTemplate}
                </template>
                <template #resetBanner>
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate(5, itemTemplate)}
            </stats-layout>\`
    };
  }
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const Ge=["Raw","WithHeaders","MultipleColumns"];export{d as MultipleColumns,i as Raw,m as WithHeaders,Ge as __namedExportsOrder,Ee as default};
