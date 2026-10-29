import{P as b,a as u}from"./PageHeader-CzN9kSv6.js";import{w}from"./decorator-CcL-F-0p.js";import"./Divider-CbFkO93G.js";import"./vue.esm-bundler-DeRiNcSr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-4XZ63LWV-laKUlqim.js";import"./v4-CwV2VaSl.js";const x={title:"Components/Headers/PageHeader",component:b,decorators:[w]},o=y=>({components:{PageHeader:b},setup(){return y},template:'<page-header :page-title="pageTitle" :eyebrow="eyebrow" :supporting-info="supportingInfo" :mobile-layout="mobileLayout" :divider="divider"><template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template><template v-if="actions" #actions><div v-html="actions" /></template></page-header>'}),e=o.bind({}),v={breadcrumbs:"",actions:"",pageTitle:"Page title",eyebrow:"Eyebrow text",supportingInfo:"Supporting info write here",divider:!0,mobileLayout:u.VERTICAL},a={breadcrumbs:{control:"text"},actions:{control:"text"},pageTitle:{control:"text"},eyebrow:{control:"text"},supportingInfo:{control:"text"},divider:{control:"boolean"},mobileLayout:{control:"select",options:Object.values(u)}};e.argTypes=a;e.args=v;e.parameters={actions:{handles:["click"]},design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13668-258372&p=f&m=dev"}};const t=o.bind({});t.argTypes=a;t.args={...v,eyebrow:"Interna",pageTitle:"Kardiologia 1",supportingInfo:"Lekcja 26 / Powitanie",actions:"<button>Action</button>"};t.parameters=e.parameters;const r=o.bind({});r.argTypes=a;r.args={...t.args,eyebrow:"Interna – choroby układu sercowo-naczyniowego, oddechowego, pokarmowego i moczowego oraz endokrynologia, hematologia i reumatologia"};r.parameters=e.parameters;var i,s,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    PageHeader
  },
  setup() {
    return args;
  },
  template: '<page-header' + ' :page-title="pageTitle"' + ' :eyebrow="eyebrow"' + ' :supporting-info="supportingInfo"' + ' :mobile-layout="mobileLayout"' + ' :divider="divider"' + '>' + '<template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template>' + '<template v-if="actions" #actions><div v-html="actions" /></template>' + '</page-header>'
})`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,m,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    PageHeader
  },
  setup() {
    return args;
  },
  template: '<page-header' + ' :page-title="pageTitle"' + ' :eyebrow="eyebrow"' + ' :supporting-info="supportingInfo"' + ' :mobile-layout="mobileLayout"' + ' :divider="divider"' + '>' + '<template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template>' + '<template v-if="actions" #actions><div v-html="actions" /></template>' + '</page-header>'
})`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    PageHeader
  },
  setup() {
    return args;
  },
  template: '<page-header' + ' :page-title="pageTitle"' + ' :eyebrow="eyebrow"' + ' :supporting-info="supportingInfo"' + ' :mobile-layout="mobileLayout"' + ' :divider="divider"' + '>' + '<template v-if="breadcrumbs" #breadcrumbs><div v-html="breadcrumbs" /></template>' + '<template v-if="actions" #actions><div v-html="actions" /></template>' + '</page-header>'
})`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const H=["Interactive","WithEyebrow","WithLongEyebrow"];export{e as Interactive,t as WithEyebrow,r as WithLongEyebrow,H as __namedExportsOrder,x as default};
