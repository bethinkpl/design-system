import{S as r}from"./StatsLayout-DT9JgO95.js";import{_ as S}from"./StatsSectionHeader-B36AUzwh.js";import{_ as g}from"./StatsResetBanner-DC2dW5F9.js";import{S as s}from"./SlotPlaceholder-CuZiU-PR.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./Card-Bj_cr04p.js";import"./Divider-BPKGZVAH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-Cx-Ypbur.js";import"./ContainerRibbon-R0rvokiL.js";import"./StatsErrorBanner-DLP2frLN.js";import"./Icon-sA9NtGkq.js";import"./Banner-D9AdIxrq.js";import"./Button-Chm9wFwa.js";import"./IconButton-Crd4JefZ.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-DyrPtZ0T.js";import"./useLegacyI18n-DK3QJ9_8.js";import"./SpinnerLoading-ChCPMdCp.js";import"./SectionHeader-CuC2EHHX.js";import"./StatsFiltersDropdown-4eX_6f18.js";import"./Dropdown-wFC1DUBi.js";import"./vue-popper-CjuaM6Jg.js";import"./SelectList--Khxt9pR.js";import"./SelectListItem-Duhk-hu5.js";import"./Modal-Mve9xzFy.js";import"./HelpButton-XVX8aUBp.js";import"./Tooltip-CFsl4BrK.js";const n=(e=5,t="<slot-placeholder/>")=>Array.from({length:e},(k,h)=>`<template v-slot:["statsItem-${h}"]>${t}</template>`).join(""),q={title:"Components/StatsLayout/StatsLayout",component:r,render:e=>({components:{StatsLayout:r,SlotPlaceholder:s},setup(){return{args:e}},template:`
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
        `}),args:{hasGridHeader:!0,hasRightColumn:!0,leftColumnLabel:"Zakres",rightColumnLabel:"Wyniki",statsItemsHeaderLabel:"{Nazwa użytej taksonomii}",isLoading:!1,hasError:!1},argTypes:{hasGridHeader:{control:"boolean"},hasRightColumn:{control:"boolean"},leftColumnLabel:{control:"text"},rightColumnLabel:{control:"text"},statsItemsHeaderLabel:{control:"text"},isLoading:{control:"boolean"},hasError:{control:"boolean"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},a={},l={render:e=>({components:{StatsLayout:r,StatsSectionHeader:S,StatsResetBanner:g,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
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
                ${n()}
            </stats-layout>
`})},o={render:e=>{const t='<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>';return{components:{StatsLayout:r,StatsSectionHeader:S,StatsResetBanner:g,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
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
                    <stats-reset-banner infoModalTitle="Info modal title">
                        <template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template>
                        <template #infoModalContent><p>Info content for reset banner</p></template>
                    </stats-reset-banner>
                </template>
                ${n(5,t)}
            </stats-layout>`}}};var m,i,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,c,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var u,y,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const K=["Raw","WithHeaders","MultipleColumns"];export{o as MultipleColumns,a as Raw,l as WithHeaders,K as __namedExportsOrder,q as default};
