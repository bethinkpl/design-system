import{W as o,a as l}from"./Well-DD7XyqEq.js";import{I as n}from"./Icon-7s2OvWdI.js";import{a as r,b as p,c}from"./Chip-BD-nnb0R.js";import{B as m,a as d}from"./Banner-DcbjnlOB.js";import"./vue.esm-bundler-F3F7hH0X.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CS50J7iM.js";import"./IconButton-6OUfwdA4.js";import"./device-9fgosCm4.js";import"./Divider-CVSnQKGH.js";import"./FeatureIcon-B2q4syOZ.js";function u(e){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${e}
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" /></div>
`}const _={title:"Components/Well",component:o,render:e=>({components:{Well:o,DsBanner:m},setup(){return{args:e,ICONS:n,BANNER_COLORS:d}},template:u('<well v-bind="args" :chip-left-icon="ICONS[args.chipLeftIcon]"><div v-html="args.content" /></well>'),computed:{invalidUsage(){return e.hasChip&&!e.padding}}}),argTypes:{padding:{control:"select",options:[null,...Object.values(l)]},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},t={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasChip:!1,chipLabel:"Chip z labelem",chipLabelUppercase:!1,chipLeftIcon:null,chipRadius:p.ROUNDED,color:r,colorHex:""}},h={chipLeftIcon:{control:"select",options:[null,...Object.keys(n)]},chipColor:{control:"select",options:Object.values(c)},chipRadius:{control:"select",options:Object.values(p)}};t.argTypes=h;var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    padding: null,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
    hasChip: false,
    chipLabel: 'Chip z labelem',
    chipLabelUppercase: false,
    chipLeftIcon: null,
    chipRadius: CHIP_RADIUSES.ROUNDED,
    color: CHIP_DEFAULT_COLOR,
    colorHex: ''
  } as Args
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,_ as default};
