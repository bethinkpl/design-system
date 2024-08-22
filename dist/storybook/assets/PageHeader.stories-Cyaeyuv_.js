import{P as t,a}from"./PageHeader-B5RboYRk.js";import"./Divider-Ba-XwrF-.js";import"./vue.esm-bundler-Bq1ZKmuF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/Headers/PageHeader",component:t},r=o=>({components:{PageHeader:t},setup(){return o},template:'<page-header :page-title="pageTitle" :supporting-info="supportingInfo" :mobile-layout="mobileLayout" :divider="divider"><template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template><template v-if="actions" #actions><div v-html="actions" /></template></page-header>'}),e=r.bind({}),i={breadcrumbs:"",actions:"",pageTitle:"Page title",supportingInfo:"Supporting info write here",divider:!0,mobileLayout:a.VERTICAL},s={breadcrumbs:{control:"text"},actions:{control:"text"},pageTitle:{control:"text"},supportingInfo:{control:"text"},divider:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(a)}};e.argTypes=s;e.args=i;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=6984-129711&t=ivzu5dM9vSgW20Re-0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    PageHeader
  },
  setup() {
    return args;
  },
  template: '<page-header' + ' :page-title="pageTitle"' + ' :supporting-info="supportingInfo"' + ' :mobile-layout="mobileLayout"' + ' :divider="divider"' + '>' + '<template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template>' + '<template v-if="actions" #actions><div v-html="actions" /></template>' + '</page-header>'
})`,...e.parameters?.docs?.source}}};const c=["Interactive"];export{e as Interactive,c as __namedExportsOrder,l as default};
