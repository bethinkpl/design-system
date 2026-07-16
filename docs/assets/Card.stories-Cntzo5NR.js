import{D as n,C as r,a as s,b as l,c as i,d}from"./Card-Bj_cr04p.js";import{L as p}from"./LoadingBar-Cx-Ypbur.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./Divider-BPKGZVAH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ContainerRibbon-R0rvokiL.js";const R={title:"Components/Cards/Card",component:n},m=c=>({components:{Card:n},setup(){return{args:c}},template:`
        <card v-bind="args">
            <template v-if="args.header" #header>
                <div v-html="args.header" />
            </template>
            <template v-if="args.content" #content>
                <div v-html="args.content" />
            </template>
            <template v-if="args.footer" #footer>
                <div v-html="args.footer" />
            </template>
            <template v-if="args.experimentalContent" #experimentalContent>
                <div v-html="args.experimentalContent" />
            </template>
        </card>`}),e=m.bind({}),g={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",experimentalContent:"",contentHasPadding:!0,headerHasPadding:!1,footerHasPadding:!1,paddingSize:d.SMALL,dividerUnderHeader:!1,hasRibbon:!1,hasRadius:!0,backgroundColor:i.DEFAULT,ribbonPosition:l.TOP,ribbonSize:s.MEDIUM,ribbonColor:r.NEUTRAL_HEAVY,hasRibbonRadius:!1,hasLoadingBar:!1,loadingBarColor:p.NEUTRAL_HEAVY,loadingBarTime:"0",isFlat:!1,isContentScrollable:!1},v={header:{control:"text"},content:{control:"text"},footer:{control:"text"},experimentalContent:{control:"text"},backgroundColor:{control:"select",options:Object.values(i)},ribbonPosition:{control:"select",options:Object.values(l)},ribbonSize:{control:"select",options:Object.values(s)},ribbonColor:{control:"select",options:Object.values(r)},hasRibbonRadius:{control:"boolean"},loadingBarColor:{control:"select",options:Object.values(p)},paddingSize:{control:"select",options:Object.values(d)}};e.argTypes=v;e.args=g;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <card v-bind="args">
            <template v-if="args.header" #header>
                <div v-html="args.header" />
            </template>
            <template v-if="args.content" #content>
                <div v-html="args.content" />
            </template>
            <template v-if="args.footer" #footer>
                <div v-html="args.footer" />
            </template>
            <template v-if="args.experimentalContent" #experimentalContent>
                <div v-html="args.experimentalContent" />
            </template>
        </card>\`
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,R as default};
