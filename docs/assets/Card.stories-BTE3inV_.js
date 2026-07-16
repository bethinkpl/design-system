import{D as r,C as n,a as s,b as i,c as l,d}from"./Card-CpP2RJHQ.js";import{L as c}from"./LoadingBar-Cx-Ypbur.js";import"./vue.esm-bundler-yuXcNhMB.js";import"./Divider-BPKGZVAH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ContainerRibbon-R0rvokiL.js";const R={title:"Components/Cards/Card",component:r},m=p=>({components:{Card:r},setup(){return{args:p}},template:`
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
        </card>`}),e=m.bind({}),g={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",contentHasPadding:!0,headerHasPadding:!1,footerHasPadding:!1,paddingSize:d.SMALL,dividerUnderHeader:!1,hasRibbon:!1,hasRadius:!0,backgroundColor:l.DEFAULT,ribbonPosition:i.TOP,ribbonSize:s.MEDIUM,ribbonColor:n.NEUTRAL_HEAVY,hasRibbonRadius:!1,hasLoadingBar:!1,loadingBarColor:c.NEUTRAL_HEAVY,loadingBarTime:"0",isFlat:!1,isContentScrollable:!1},b={header:{control:"text"},content:{control:"text"},footer:{control:"text"},backgroundColor:{control:"select",options:Object.values(l)},ribbonPosition:{control:"select",options:Object.values(i)},ribbonSize:{control:"select",options:Object.values(s)},ribbonColor:{control:"select",options:Object.values(n)},hasRibbonRadius:{control:"boolean"},loadingBarColor:{control:"select",options:Object.values(c)},paddingSize:{control:"select",options:Object.values(d)}};e.argTypes=b;e.args=g;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
        </card>\`
})`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const S=["Interactive"];export{e as Interactive,S as __namedExportsOrder,R as default};
