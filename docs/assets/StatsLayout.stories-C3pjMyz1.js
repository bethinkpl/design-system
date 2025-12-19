import{S as o}from"./StatsLayout-CREuh_pP.js";import{_ as h}from"./StatsSectionHeader-shdC1dQf.js";import{_ as S}from"./StatsResetBanner-DfpQr_jl.js";import{d as _,a as v,y as M,o as C}from"./vue.esm-bundler-ByLATHYC.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Card-DyE0xWNU.js";import"./Divider-DibbBBgz.js";import"./LoadingBar-DlzzOPbB.js";import"./ContainerRibbon-BiooT6dl.js";import"./StatsErrorBanner-PxHy8A_Z.js";import"./Icon-Ckttn8dh.js";import"./Banner-BAu12LG_.js";import"./Button-OSvI427C.js";import"./IconButton-CeqIxvjf.js";import"./device-9fgosCm4.js";import"./FeatureIcon-BeaXs2A_.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./SpinnerLoading-DepH5hA3.js";import"./SectionHeader-BLFxkQG3.js";import"./StatsFiltersDropdown-_H-ONvc1.js";import"./Dropdown-J1w4syz7.js";import"./vue-popper-Ba4T36Lb.js";import"./SelectList-BMW_ehXo.js";import"./SelectListItem-D7t6rLZT.js";import"./Modal-BiftwG9j.js";import"./HelpButton-DtsrhIng.js";import"./Tooltip-B2ZtAco5.js";const T={class:"ds-slotPlaceholder"},k=_({__name:"SlotPlaceholder",props:{label:{}},setup(e){return(t,I)=>(C(),v("div",T,M(t.label||"Slot"),1))}}),s=w(k,[["__scopeId","data-v-ee1c31c1"]]);k.__docgenInfo={exportName:"default",displayName:"SlotPlaceholder",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/design-system/design-system/.storybook/SlotPlaceholder/SlotPlaceholder.vue"]};const n=(e=5,t="<slot-placeholder/>")=>Array.from({length:e},(I,g)=>`<template v-slot:["statsItem-${g}"]>${t}</template>`).join(""),te={title:"Components/StatsLayout/StatsLayout",component:o,render:e=>({components:{StatsLayout:o,SlotPlaceholder:s},setup(){return{args:e}},template:`
        <stats-layout v-bind="args">
            <template #sectionHeader>
               <slot-placeholder label="Slot nagłówka sekcji" />
            </template>
            <template #overallStatsItem><slot-placeholder /></template>
            <template #resetBanner>
               <slot-placeholder label="Slot banera resetu" />
            </template>
            ${n()}
        </stats-layout>
        `}),args:{hasGridHeader:!0,hasRightColumn:!0,leftColumnLabel:"Zakres",rightColumnLabel:"Wyniki",statsItemsHeaderLabel:"{Nazwa użytej taksonomii}",isLoading:!1,hasError:!1},argTypes:{hasGridHeader:{control:"boolean"},hasRightColumn:{control:"boolean"},leftColumnLabel:{control:"text"},rightColumnLabel:{control:"text"},statsItemsHeaderLabel:{control:"text"},isLoading:{control:"boolean"},hasError:{control:"boolean"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},a={},l={render:e=>({components:{StatsLayout:o,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem><slot-placeholder /></template>
                <template #resetBanner>
                    <stats-reset-banner timeMarker="2 czerwca 2025" infoModalTitle="Info modal title">
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${n()}
            </stats-layout>
`})},r={render:e=>{const t='<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>';return{components:{StatsLayout:o,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
            <stats-layout v-bind="args">
                <template #sectionHeader>
                    <stats-section-header :filter-items="filterItems" selected-filter-key="all">
                        <template #infoModalContent><span>Info content for filter</span></template>
                    </stats-section-header>
                </template>
                <template #overallStatsItem>
                ${t}
                </template>
                <template #resetBanner>
                    <stats-reset-banner timeMarker="2 czerwca 2025" infoModalTitle="Info modal title">
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${n(5,t)}
            </stats-layout>`}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
                    <stats-reset-banner timeMarker="2 czerwca 2025" infoModalTitle="Info modal title">
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate()}
            </stats-layout>
\`
    };
  }
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
                    <stats-reset-banner timeMarker="2 czerwca 2025" infoModalTitle="Info modal title">
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                \${prepareItemsTemplate(5, itemTemplate)}
            </stats-layout>\`
    };
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const ae=["Raw","WithHeaders","MultipleColumns"];export{r as MultipleColumns,a as Raw,l as WithHeaders,ae as __namedExportsOrder,te as default};
