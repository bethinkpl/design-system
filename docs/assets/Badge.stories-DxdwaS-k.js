import{B as r,a as t,b as o,c as a}from"./Badge-B8eFbzRx.js";import{I as s}from"./Icon-DUeXRUm6.js";import{B as A,a as v}from"./Banner-D5riYdGJ.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-XuK8IxnR.js";import"./Divider-NOTDPuJ1.js";import"./IconButton-Cn83Zk5-.js";import"./device-9fgosCm4.js";import"./FeatureIcon-DY5WvpPf.js";function I(e){return`<div style="display: inline-flex; background: #ccc; padding: 16px; line-height: 0; margin-bottom: 16px;">${e}</div>
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" />
`}const k={title:"Components/Badges/Badge",component:r,render:e=>({components:{Badge:r,DsBanner:A},setup(){return{BANNER_COLORS:v}},computed:{invalidUsage(){const L=(e.size===o.X_SMALL||e.size===o.SMALL)&&e.label,S=e.size===o.X_SMALL&&(e.icon||e.imageUrl);return L||S},props(){return{...e,icon:s[e.icon]}}},template:I('<Badge v-bind="props" />')}),argTypes:{color:{control:"select",options:Object.values(a)},size:{control:"select",options:Object.values(o)},icon:{control:"select",options:[null,...Object.keys(s)]},elevation:{control:"select",options:Object.values(t)}}},n={args:{color:a.PRIMARY,size:o.SMALL,label:"",icon:void 0,imageUrl:"",elevation:t.X_SMALL}};n.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-10601&m=dev"}};const i={args:{color:a.PRIMARY,size:o.SMALL,label:"",icon:void 0,imageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg",elevation:t.X_SMALL}};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: BADGE_COLORS.PRIMARY,
    size: BADGE_SIZES.SMALL,
    label: '',
    icon: undefined,
    imageUrl: '',
    elevation: BADGE_ELEVATIONS.X_SMALL
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: BADGE_COLORS.PRIMARY,
    size: BADGE_SIZES.SMALL,
    label: '',
    icon: undefined,
    imageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
    elevation: BADGE_ELEVATIONS.X_SMALL
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const D=["Interactive","InteractiveWithImage"];export{n as Interactive,i as InteractiveWithImage,D as __namedExportsOrder,k as default};
