import{f as z,d as b,c as R,k as h,a as w,h as G,j as O,N as Y,u as l,o as E}from"./vue.esm-bundler-S9zc6Wpc.js";import{c as j,b as k,D as Z,a as S,C as L}from"./ContainerRibbon-CwDaG5Dq.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{D as $,b as Q}from"./Chip-B885g_GX.js";import"./IconButton-BP3MsFJS.js";import"./Icon-BCNBiMEg.js";import"./fontawesome-CXWUXLFT.js";import"./Button-C24VVysr.js";import"./device-mzBmLsxe.js";const t={SMALL:"small",MEDIUM:"medium",LARGE:"large"},o={ACCENT:"accent",PRIMARY:"primary",FAIL:"fail",HIGHLIGHT:"highlight",INFO:"info",INVERTED:"inverted",NEUTRAL:"neutral",SUCCESS:"success",WARNING:"warning"},n=o.NEUTRAL,i=k,r=j,s={TOP:"top",LEFT:"left"},J={key:0,class:"ds-well__ribbon"},K={key:1,class:"ds-well__accessorySlot"},X={class:"ds-well__content"},q=z({__name:"Well",props:{padding:{default:null},color:{default:()=>n},hasRadius:{type:Boolean,default:!0},hasBorder:{type:Boolean,default:!1},hasRibbon:{type:Boolean,default:!1},ribbonPosition:{default:()=>s.TOP},ribbonSize:{default:()=>r.MEDIUM},ribbonColor:{default:()=>i.NEUTRAL_HEAVY}},setup(a){const H=b(()=>({[o.ACCENT]:"-ds-accent",[o.PRIMARY]:"-ds-primary",[o.FAIL]:"-ds-fail",[o.HIGHLIGHT]:"-ds-highlight",[o.INFO]:"-ds-info",[o.INVERTED]:"-ds-inverted",[o.NEUTRAL]:"-ds-neutral",[o.SUCCESS]:"-ds-success",[o.WARNING]:"-ds-warning"})[a.color]),V=b(()=>({[s.TOP]:S.HORIZONTAL,[s.LEFT]:S.VERTICAL})[a.ribbonPosition]),F=b(()=>{const e={[s.TOP]:L.BOTTOM,[s.LEFT]:L.RIGHT};return a.hasRadius?L.NONE:e[a.ribbonPosition]});return(e,ee)=>(E(),R("div",{class:Y(["ds-well",[H.value,{"-ds-large":l(t).LARGE===e.padding,"-ds-medium":l(t).MEDIUM===e.padding,"-ds-small":l(t).SMALL===e.padding,"-ds-noRadius":!e.hasRadius,"-ds-hasBorder":e.hasBorder,"-ds-leftRibbon":e.hasRibbon&&e.ribbonPosition===l(s).LEFT}]])},[e.hasRibbon?(E(),R("div",J,[G(Z,{size:e.ribbonSize,color:e.ribbonColor,layout:V.value,radius:F.value},null,8,["size","color","layout","radius"])])):h("",!0),e.$slots.accessory?(E(),R("div",K,[O(e.$slots,"accessory",{},void 0,!0)])):h("",!0),w("div",X,[O(e.$slots,"default",{},void 0,!0)])],2))}}),I=x(q,[["__scopeId","data-v-83464aea"]]);q.__docgenInfo={exportName:"default",displayName:"Well",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"union",elements:[{name:"WellPadding"},{name:"null"}]}},{name:"color",required:!1,type:{name:"WellColor"}},{name:"hasRadius",required:!1,type:{name:"boolean"}},{name:"hasBorder",required:!1,type:{name:"boolean"}},{name:"hasRibbon",required:!1,type:{name:"boolean"}},{name:"ribbonPosition",required:!1,type:{name:"WellRibbonPosition"}},{name:"ribbonSize",required:!1,type:{name:"WellRibbonSize"}},{name:"ribbonColor",required:!1,type:{name:"WellRibbonColor"}}],slots:[{name:"accessory"},{name:"default"}],sourceFiles:["/home/runner/work/design-system/design-system/lib/js/components/Well/Well.vue"]};const ue={title:"Components/Well",component:I,render:a=>({components:{Well:I},setup(){return{args:a}},template:'<well v-bind="args"><div v-html="args.content" /></well>'}),argTypes:{padding:{control:"select",options:[null,...Object.values(t)]},color:{control:"select",options:Object.values(o)},hasRadius:{control:"boolean"},hasBorder:{control:"boolean"},hasRibbon:{control:"boolean"},ribbonPosition:{control:"select",options:Object.values(s)},ribbonSize:{control:"select",options:Object.values(r)},ribbonColor:{control:"select",options:Object.values(i)},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},d={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasBorder:!1,hasRibbon:!1,ribbonPosition:s.TOP,ribbonColor:i.NEUTRAL_HEAVY,ribbonSize:r.MEDIUM,color:n}},u={render:a=>({components:{Chip:$,Well:I},setup(){return{args:a,CHIP_RADIUSES:Q,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'}},template:`<well v-bind="args">
                <template #accessory>
                    <chip
                        label="First Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                    <chip
                        label="Second Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                    <chip
                        label="Third Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                </template>
                <div v-html="content" />
            </well>`}),args:{padding:t.SMALL,hasRadius:!0,hasBorder:!1,hasRibbon:!1,ribbonPosition:s.TOP,ribbonColor:i.NEUTRAL_HEAVY,ribbonSize:r.MEDIUM,color:n}},p={args:{padding:t.MEDIUM,hasRibbon:!0,ribbonPosition:s.TOP,ribbonColor:i.PRIMARY,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasBorder:!1,color:n}},c={args:{padding:t.MEDIUM,hasRadius:!1,hasRibbon:!0,ribbonPosition:s.LEFT,ribbonColor:i.SUCCESS,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasBorder:!1,ribbonSize:r.MEDIUM,color:n}},m={args:{padding:t.MEDIUM,hasBorder:!0,color:o.PRIMARY,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasRibbon:!1,ribbonPosition:s.TOP,ribbonColor:i.NEUTRAL_HEAVY,ribbonSize:r.MEDIUM}};var C,_,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: null,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
    hasRadius: true,
    hasBorder: false,
    hasRibbon: false,
    ribbonPosition: WELL_RIBBON_POSITIONS.TOP,
    ribbonColor: WELL_RIBBON_COLORS.NEUTRAL_HEAVY,
    ribbonSize: WELL_RIBBON_SIZES.MEDIUM,
    color: WELL_DEFAULT_COLOR
  } as Args
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var A,g,B;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    return {
      components: {
        Chip,
        Well
      },
      setup() {
        return {
          args,
          CHIP_RADIUSES,
          content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'
        };
      },
      template: \`<well v-bind="args">
                <template #accessory>
                    <chip
                        label="First Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                    <chip
                        label="Second Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                    <chip
                        label="Third Chip"
                        :radius="CHIP_RADIUSES.ROUNDED"
                    />
                </template>
                <div v-html="content" />
            </well>\`
    };
  },
  args: {
    padding: WELL_PADDINGS.SMALL,
    hasRadius: true,
    hasBorder: false,
    hasRibbon: false,
    ribbonPosition: WELL_RIBBON_POSITIONS.TOP,
    ribbonColor: WELL_RIBBON_COLORS.NEUTRAL_HEAVY,
    ribbonSize: WELL_RIBBON_SIZES.MEDIUM,
    color: WELL_DEFAULT_COLOR
  }
}`,...(B=(g=u.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var f,D,T;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    padding: WELL_PADDINGS.MEDIUM,
    hasRibbon: true,
    ribbonPosition: WELL_RIBBON_POSITIONS.TOP,
    ribbonColor: WELL_RIBBON_COLORS.PRIMARY,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
    hasRadius: true,
    hasBorder: false,
    color: WELL_DEFAULT_COLOR
  } as Args
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var P,M,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    padding: WELL_PADDINGS.MEDIUM,
    hasRadius: false,
    hasRibbon: true,
    ribbonPosition: WELL_RIBBON_POSITIONS.LEFT,
    ribbonColor: WELL_RIBBON_COLORS.SUCCESS,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
    hasBorder: false,
    ribbonSize: WELL_RIBBON_SIZES.MEDIUM,
    color: WELL_DEFAULT_COLOR
  } as Args
}`,...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,y,v;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    padding: WELL_PADDINGS.MEDIUM,
    hasBorder: true,
    color: WELL_COLORS.PRIMARY,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
    hasRadius: true,
    hasRibbon: false,
    ribbonPosition: WELL_RIBBON_POSITIONS.TOP,
    ribbonColor: WELL_RIBBON_COLORS.NEUTRAL_HEAVY,
    ribbonSize: WELL_RIBBON_SIZES.MEDIUM
  } as Args
}`,...(v=(y=m.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const pe=["Interactive","WithMultipleChips","WithRibbon","WithLeftRibbonNoRadius","WithBorder"];export{d as Interactive,m as WithBorder,c as WithLeftRibbonNoRadius,u as WithMultipleChips,p as WithRibbon,pe as __namedExportsOrder,ue as default};
