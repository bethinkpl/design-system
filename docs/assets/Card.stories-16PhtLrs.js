import{C as a,a as n,b as s,c as l,d}from"./Card-7BNJhV7j.js";import{L as i}from"./LoadingBar-D6RhehAD.js";import"./vue.esm-bundler-C98R7Ujk.js";import"./Divider-B4IxPXqZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ContainerRibbon-CT6T0S2o.js";const C={title:"Components/Cards/Card",component:a},p=c=>({components:{Card:a},setup(){return{args:c}},template:`
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
        </card>`}),e=p.bind({}),m={header:"header slot",content:"content slot that supports <b>HTML markup</b>",footer:"footer slot",contentHasPadding:!0,headerHasPadding:!1,footerHasPadding:!1,paddingSize:d.SMALL,dividerUnderHeader:!1,hasBorder:!1,borderPosition:l.TOP,borderSize:s.LARGE,borderColor:n.NEUTRAL_HEAVY,hasRibbonRadius:!1,hasLoadingBar:!1,loadingBarColor:i.NEUTRAL_HEAVY,loadingBarTime:"0",isFlat:!1,isContentScrollable:!1},g={header:{control:"text"},content:{control:"text"},footer:{control:"text"},borderPosition:{control:"select",options:Object.values(l)},borderSize:{control:"select",options:Object.values(s)},borderColor:{control:"select",options:Object.values(n)},hasRibbonRadius:{control:"boolean"},loadingBarColor:{control:"select",options:Object.values(i)},paddingSize:{control:"select",options:Object.values(d)}};e.argTypes=g;e.args=m;e.parameters={design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959"}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const O=["Interactive"];export{e as Interactive,O as __namedExportsOrder,C as default};
