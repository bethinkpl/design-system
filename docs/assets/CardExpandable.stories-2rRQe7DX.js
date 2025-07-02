import{C as t}from"./CardExpandable-BG-s4dB8.js";import"./vue.esm-bundler-F3F7hH0X.js";import"./Card-AdD5NLsr.js";import"./Divider-CVSnQKGH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoadingBar-F3NzMWvh.js";import"./Icon-7s2OvWdI.js";const E={title:"Components/Cards/CardExpandable",component:t},p=r=>({components:{CardExpandable:t},setup(){return r},template:`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed"
                                             :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded"
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
            </card-expandable>`}),e=p.bind({}),i={header:"header slot",content:"content slot that supports <b>HTML markup</b>",expandedContent:"Dodatkowa treść w slocie <code>expandedContent</code> widoczna po rozwinięciu",isExpanderVisible:!0,expanderTextCollapsed:"Rozwiń",expanderTextExpanded:"Zwiń",isExpanded:!1,headerHasPadding:!1,dividerUnderHeader:!1},o={header:{control:"text"},content:{control:"text"},expandedContent:{control:"text"}};e.argTypes=o;e.args=i;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var d,a,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    CardExpandable
  },
  setup() {
    return args;
  },
  template: \`
            <card-expandable :is-expander-visible="isExpanderVisible" :expander-text-collapsed="expanderTextCollapsed"
                                             :expander-text-expanded="expanderTextExpanded" :is-expanded="isExpanded"
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
})`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const C=["Interactive"];export{e as Interactive,C as __namedExportsOrder,E as default};
