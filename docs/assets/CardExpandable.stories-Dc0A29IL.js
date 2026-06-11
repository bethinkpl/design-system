import{C as n}from"./CardExpandable-B2mz9cdj.js";import"./vue.esm-bundler-KKLRPfRG.js";import"./Card-Cqj4aKF5.js";import"./Divider-Cv_Se4zt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-BunR9MCe.js";import"./ContainerRibbon-DP0rnZE8.js";import"./Icon-q3A7t-gx.js";import"./useLegacyI18n-D1OoysyW.js";const C={title:"Components/Cards/CardExpandable",component:n},p=r=>({components:{CardExpandable:n},setup(){return r},template:`
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
            </card-expandable>`}),e=p.bind({}),i={header:"header slot",content:"content slot that supports <b>HTML markup</b>",expandedContent:"Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu",isExpanderVisible:!0,expanderTextCollapsed:"Rozwiń",expanderTextExpanded:"Zwiń",isExpanded:!1,headerHasPadding:!1,dividerUnderHeader:!1},o={header:{control:"text"},content:{control:"text"},expandedContent:{control:"text"}};e.argTypes=o;e.args=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var d,a,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const w=["Interactive"];export{e as Interactive,w as __namedExportsOrder,C as default};
