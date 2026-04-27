import{W as s,a as m}from"./Well-BTOy1XeB.js";import{I as d}from"./Icon-Dc6Aac-o.js";import{a as h,b as a,C,c as g}from"./Chip-od_vejVf.js";import{D as I,B as D}from"./Banner-BC-YgW95.js";import"./vue.esm-bundler-BEu-HfQJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-6_BUlSlI.js";import"./IconButton-CXXp2TER.js";import"./device-mzBmLsxe.js";import"./Divider-Cj9DnfEY.js";import"./FeatureIcon-CljNW9rU.js";function S(e){return`<div style="display: inline-flex; flex-direction: column; width: 100%; gap: 20px;">${e}
<ds-banner :color="BANNER_COLORS.WARNING" title="Taka kombinacja jest niezgodna z design systemem!" v-if="invalidUsage" /></div>
`}const y={title:"Components/Well",component:s,render:e=>({components:{Well:s,DsBanner:I},setup(){return{args:e,ICONS:d,BANNER_COLORS:D}},template:S('<well v-bind="args" :chip-left-icon="ICONS[args.chipLeftIcon]"><div v-html="args.content" /></well>'),computed:{invalidUsage(){return e.hasChip&&!e.padding}}}),argTypes:{padding:{control:"select",options:[null,...Object.values(m)]},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},t={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',hasChip:!1,chipLabel:"Chip z labelem",chipLabelUppercase:!1,chipLeftIcon:null,chipRadius:a.ROUNDED,color:h,colorHex:""}},u={chipLeftIcon:{control:"select",options:[null,...Object.keys(d)]},chipColor:{control:"select",options:Object.values(g)},chipRadius:{control:"select",options:Object.values(a)}};t.argTypes=u;const i={render:e=>({components:{Chip:C,Well:s},setup(){return{args:e,CHIP_RADIUSES:a,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'}},template:`<well v-bind="args">
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
            </well>`}),args:{padding:m.SMALL}};i.argTypes=u;var o,p,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(p=t.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var l,n,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    padding: WELL_PADDINGS.SMALL
  }
}`,...(c=(n=i.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const H=["Interactive","WithMultipleChips"];export{t as Interactive,i as WithMultipleChips,H as __namedExportsOrder,y as default};
