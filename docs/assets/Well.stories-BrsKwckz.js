import{W as o,a as n}from"./Well-CpzjqLZO.js";import{I as p}from"./Icon-BwVjcU7x.js";import{a as r,b as l,c}from"./Chip-DmTjjc3D.js";import{D as m,B as d}from"./Banner-CfLk6Ur9.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-9hl2_9kQ.js";import"./IconButton-D-Enp2kA.js";import"./device-9fgosCm4.js";import"./Divider-CsYapLKZ.js";import"./FeatureIcon-CCjhNX88.js";function u(e){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${e}
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" /></div>
`}const _={title:"Components/Well",component:o,render:e=>({components:{Well:o,DsBanner:m},setup(){return{args:e,ICONS:p,BANNER_COLORS:d}},template:u('<well v-bind="args" :chip-left-icon="ICONS[args.chipLeftIcon]"><div v-html="args.content" /></well>'),computed:{invalidUsage(){return e.hasChip&&!e.padding}}}),argTypes:{padding:{control:"select",options:[null,...Object.values(n)]},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},t={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasChip:!1,chipLabel:"Chip z labelem",chipLabelUppercase:!1,chipLeftIcon:null,chipRadius:l.ROUNDED,color:r,colorHex:""}},h={chipLeftIcon:{control:"select",options:[null,...Object.keys(p)]},chipColor:{control:"select",options:Object.values(c)},chipRadius:{control:"select",options:Object.values(l)}};t.argTypes=h;var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["Interactive"];export{t as Interactive,y as __namedExportsOrder,_ as default};
