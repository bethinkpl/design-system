import{B as c,a as r,b as t,c as s}from"./Badge-CNM-wkWR.js";import{I as A}from"./Icon-CdUzGdbx.js";import{D as w,B as O}from"./Banner-BsxiVwBE.js";import{L as y}from"./logo-badge-BJZHaZGL.js";import"./vue.esm-bundler-BjwGMXGm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-DXBV2lSl.js";import"./Divider-Bk_mEbdR.js";import"./IconButton-QdkwLB9f.js";import"./device-mzBmLsxe.js";import"./FeatureIcon-zAUFxSrq.js";function _(l){return`<div style="display: inline-flex; background: #ccc; padding: 16px; line-height: 0; margin-bottom: 16px;">${l}</div>
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" />
`}function B(l,L=!1){return e=>({components:{Badge:c,DsBanner:w,LogoBadge:y},setup(){return{BANNER_COLORS:O}},computed:{invalidUsage(){const x=(e.size===t.X_SMALL||e.size===t.SMALL)&&e.label,E=e.size===t.X_SMALL&&(e.icon||e.imageUrl||L);return x||E},props(){return{...e,icon:A[e.icon]}}},template:_(l)})}const Y={title:"Components/Badges/Badge",component:c,render:B('<Badge v-bind="props" />'),argTypes:{color:{control:"select",options:Object.values(s)},size:{control:"select",options:Object.values(t)},icon:{control:"select",options:[null,...Object.keys(A)]},elevation:{control:"select",options:Object.values(r)}}},o={args:{color:s.PRIMARY,size:t.SMALL,label:"",icon:void 0,imageUrl:"",elevation:r.X_SMALL}};o.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=12364-10601&m=dev"}};const n={args:{color:s.PRIMARY,size:t.SMALL,label:"",icon:void 0,imageUrl:"https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg",elevation:r.X_SMALL}},a={render:B('<Badge v-bind="props"><template #image><logo-badge /></template></Badge>',!0),args:{color:s.PRIMARY,size:t.MEDIUM,label:"",icon:void 0,imageUrl:"",elevation:r.X_SMALL}},R=[{label:"landscape 64x27",viewBox:"0 0 64 27",width:64,height:27},{label:"square 64x64",viewBox:"0 0 64 64",width:64,height:64},{label:"portrait 27x64",viewBox:"0 0 27 64",width:27,height:64}],i={render:()=>({components:{Badge:c},setup(){return{ratios:R,sizes:Object.values(t)}},template:`<table style="border-collapse: collapse;">
    <thead>
        <tr>
            <th></th>
            <th v-for="size in sizes" :key="size" style="padding: 8px 16px; font: 12px sans-serif;">{{ size }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="ratio in ratios" :key="ratio.label">
            <th style="padding: 8px 16px; font: 12px sans-serif; text-align: right;">{{ ratio.label }}</th>
            <td v-for="size in sizes" :key="size" style="padding: 16px; background: #ccc; border: 1px solid #fff; line-height: 0;">
                <Badge :size="size">
                    <template #image>
                        <svg :viewBox="ratio.viewBox" xmlns="http://www.w3.org/2000/svg">
                            <rect :width="ratio.width" :height="ratio.height" fill="#4400a4" />
                        </svg>
                    </template>
                </Badge>
            </td>
        </tr>
    </tbody>
</table>`}),argTypes:{color:{control:!1},size:{control:!1},label:{control:!1},icon:{control:!1},elevation:{control:!1}}};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: BADGE_COLORS.PRIMARY,
    size: BADGE_SIZES.SMALL,
    label: '',
    icon: undefined,
    imageUrl: '',
    elevation: BADGE_ELEVATIONS.X_SMALL
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: BADGE_COLORS.PRIMARY,
    size: BADGE_SIZES.SMALL,
    label: '',
    icon: undefined,
    imageUrl: 'https://lek.wiecejnizlek.pl/images/lek/logo-badge.svg',
    elevation: BADGE_ELEVATIONS.X_SMALL
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,b,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: createRender('<Badge v-bind="props"><template #image><logo-badge /></template></Badge>', true),
  args: {
    color: BADGE_COLORS.PRIMARY,
    size: BADGE_SIZES.MEDIUM,
    label: '',
    icon: undefined,
    imageUrl: '',
    elevation: BADGE_ELEVATIONS.X_SMALL
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,u,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    setup() {
      return {
        ratios: SIZING_RATIOS,
        sizes: Object.values(BADGE_SIZES)
      };
    },
    template: \`<table style="border-collapse: collapse;">
    <thead>
        <tr>
            <th></th>
            <th v-for="size in sizes" :key="size" style="padding: 8px 16px; font: 12px sans-serif;">{{ size }}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="ratio in ratios" :key="ratio.label">
            <th style="padding: 8px 16px; font: 12px sans-serif; text-align: right;">{{ ratio.label }}</th>
            <td v-for="size in sizes" :key="size" style="padding: 16px; background: #ccc; border: 1px solid #fff; line-height: 0;">
                <Badge :size="size">
                    <template #image>
                        <svg :viewBox="ratio.viewBox" xmlns="http://www.w3.org/2000/svg">
                            <rect :width="ratio.width" :height="ratio.height" fill="#4400a4" />
                        </svg>
                    </template>
                </Badge>
            </td>
        </tr>
    </tbody>
</table>\`
  }),
  argTypes: {
    color: {
      control: false
    },
    size: {
      control: false
    },
    label: {
      control: false
    },
    icon: {
      control: false
    },
    elevation: {
      control: false
    }
  }
}`,...(z=(u=i.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};const Z=["Interactive","InteractiveWithImage","InteractiveWithImageSlot","ImageSlotSizing"];export{i as ImageSlotSizing,o as Interactive,n as InteractiveWithImage,a as InteractiveWithImageSlot,Z as __namedExportsOrder,Y as default};
