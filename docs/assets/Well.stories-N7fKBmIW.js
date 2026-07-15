import{W as m,a as p,b as s,c as e,d as o,e as t,f as B}from"./Well-BOphAZvj.js";import{C as N,a as P}from"./Chip-CBRL9qTU.js";import"./vue.esm-bundler-CjwGEpld.js";import"./ContainerRibbon-CKkoNLjG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-Dl-HN0v2.js";import"./Icon-CyG6-QCe.js";import"./IconButton-Z2JnqBV8.js";import"./device-mzBmLsxe.js";const H={title:"Components/Well",component:m,render:u=>({components:{Well:m},setup(){return{args:u}},template:'<well v-bind="args"><div v-html="args.content" /></well>'}),argTypes:{padding:{control:"select",options:[null,...Object.values(t)]},color:{control:"select",options:Object.values(B)},hasRadius:{control:"boolean"},hasBorder:{control:"boolean"},hasRibbon:{control:"boolean"},ribbonPosition:{control:"select",options:Object.values(o)},ribbonSize:{control:"select",options:Object.values(s)},ribbonColor:{control:"select",options:Object.values(e)},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},i={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasBorder:!1,hasRibbon:!1,ribbonPosition:o.TOP,ribbonColor:e.NEUTRAL_HEAVY,ribbonSize:s.MEDIUM,color:p}},r={render:u=>({components:{Chip:N,Well:m},setup(){return{args:u,CHIP_RADIUSES:P,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'}},template:`<well v-bind="args">
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
            </well>`}),args:{padding:t.SMALL,hasRadius:!0,hasBorder:!1,hasRibbon:!1,ribbonPosition:o.TOP,ribbonColor:e.NEUTRAL_HEAVY,ribbonSize:s.MEDIUM,color:p}},a={args:{padding:t.MEDIUM,hasRibbon:!0,ribbonPosition:o.TOP,ribbonColor:e.PRIMARY,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasBorder:!1,color:p}},n={args:{padding:t.MEDIUM,hasRadius:!1,hasRibbon:!0,ribbonPosition:o.LEFT,ribbonColor:e.SUCCESS,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasBorder:!1,ribbonSize:s.MEDIUM,color:p}},l={args:{padding:t.MEDIUM,hasBorder:!0,color:B.PRIMARY,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasRadius:!0,hasRibbon:!1,ribbonPosition:o.TOP,ribbonColor:e.NEUTRAL_HEAVY,ribbonSize:s.MEDIUM}};var d,c,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var L,R,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var h,I,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,_,C;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(_=n.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var g,A,D;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const x=["Interactive","WithMultipleChips","WithRibbon","WithLeftRibbonNoRadius","WithBorder"];export{i as Interactive,l as WithBorder,n as WithLeftRibbonNoRadius,r as WithMultipleChips,a as WithRibbon,x as __namedExportsOrder,H as default};
