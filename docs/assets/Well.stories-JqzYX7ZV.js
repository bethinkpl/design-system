import{W as a,a as m,b as c}from"./Well-wN6yji8L.js";import{C as u,a as d}from"./Chip-C8ozRUDP.js";import"./vue.esm-bundler-BTN_IDVo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-C2ChXNG3.js";import"./Icon-ChIuCbLg.js";import"./IconButton-B0hQornV.js";import"./device-mzBmLsxe.js";const A={title:"Components/Well",component:a,render:s=>({components:{Well:a},setup(){return{args:s}},template:'<well v-bind="args"><div v-html="args.content" /></well>'}),argTypes:{padding:{control:"select",options:[null,...Object.values(m)]},color:{control:"select",options:Object.values(c)},content:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev"}}},e={args:{padding:null,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'}},t={render:s=>({components:{Chip:u,Well:a},setup(){return{args:s,CHIP_RADIUSES:d,content:'<h3 style="margin-top: 0">Content</h3>Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'}},template:`<well v-bind="args">
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
            </well>`}),args:{padding:m.SMALL}};var i,r,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    padding: null,
    content: '<h3 style="margin-top: 0">Content</h3>' + 'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.'
  } as Args
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var p,l,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const R=["Interactive","WithMultipleChips"];export{e as Interactive,t as WithMultipleChips,R as __namedExportsOrder,A as default};
