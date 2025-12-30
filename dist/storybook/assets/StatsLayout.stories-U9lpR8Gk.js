import{S as r}from"./StatsLayout-C2FA-9Hv.js";import{_ as h}from"./StatsSectionHeader-Bhq6GV2L.js";import{_ as S}from"./StatsResetBanner-DivoO8SW.js";import{d as _,a as v,y as M,o as C}from"./vue.esm-bundler-ByLATHYC.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Card-BhsbUJmS.js";import"./Divider-BuSkM_S-.js";import"./LoadingBar-BFdA2k9I.js";import"./ContainerRibbon-DUYZHMNL.js";import"./StatsErrorBanner-BsUi2rpg.js";import"./Icon-CcU0ohUz.js";import"./Banner-DgFTsAgA.js";import"./Button-DZhdNmod.js";import"./IconButton-T11_QcZ4.js";import"./device-9fgosCm4.js";import"./FeatureIcon-BR4a0irH.js";import"./useLegacyI18n-Lhj0cz5x.js";import"./SpinnerLoading-CCtUlakx.js";import"./SectionHeader-ks1RjojD.js";import"./StatsFiltersDropdown-DT7xnZ7g.js";import"./Dropdown-CFZXuRhf.js";import"./vue-popper-Ba4T36Lb.js";import"./SelectList-D2-4t1B8.js";import"./SelectListItem-BBxghzdK.js";import"./Modal-BfxjIRUM.js";import"./HelpButton-niPCnwSz.js";import"./Tooltip-BwXTnuuq.js";const w={class:"ds-slotPlaceholder"},k=_({__name:"SlotPlaceholder",props:{label:{}},setup(e){return(t,I)=>(C(),v("div",w,M(t.label||"Slot"),1))}}),s=T(k,[["__scopeId","data-v-ee1c31c1"]]);k.__docgenInfo={exportName:"default",displayName:"SlotPlaceholder",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}}],sourceFiles:["/Users/kvas/code/bethink/design-system/.storybook/SlotPlaceholder/SlotPlaceholder.vue"]};const n=(e=5,t="<slot-placeholder/>")=>Array.from({length:e},(I,g)=>`<template v-slot:["statsItem-${g}"]>${t}</template>`).join(""),te={title:"Components/StatsLayout/StatsLayout",component:r,render:e=>({components:{StatsLayout:r,SlotPlaceholder:s},setup(){return{args:e}},template:`
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
        `}),args:{hasGridHeader:!0,hasRightColumn:!0,leftColumnLabel:"Zakres",rightColumnLabel:"Wyniki",statsItemsHeaderLabel:"{Nazwa użytej taksonomii}",isLoading:!1,hasError:!1},argTypes:{hasGridHeader:{control:"boolean"},hasRightColumn:{control:"boolean"},leftColumnLabel:{control:"text"},rightColumnLabel:{control:"text"},statsItemsHeaderLabel:{control:"text"},isLoading:{control:"boolean"},hasError:{control:"boolean"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev"}}},a={},l={render:e=>({components:{StatsLayout:r,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
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
`})},o={render:e=>{const t='<div><slot-placeholder label="Slot left" /></div><div><slot-placeholder label="Slot" /></div>';return{components:{StatsLayout:r,StatsSectionHeader:h,StatsResetBanner:S,SlotPlaceholder:s},setup(){return{args:e,filterItems:[{key:"all",label:"Wszystkie"},{key:"week",label:"Tydzień"},{key:"month",label:"Miesiąc"}]}},template:`
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
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,b,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ae=["Raw","WithHeaders","MultipleColumns"];export{o as MultipleColumns,a as Raw,l as WithHeaders,ae as __namedExportsOrder,te as default};
