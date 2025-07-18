import{a,F as t}from"./FormFieldMessage-ChTeKEHb.js";import{a as c,b as I,I as l}from"./Icon-Sov23HR0.js";import"./vue.esm-bundler-DcRN7CPI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={title:"Components/Form/FormFieldMessage",component:a,render:n=>({components:{FormFieldMessage:a},setup(){return{args:n}},template:`<FormFieldMessage v-bind="args">
            <div v-html="args.default" />
        </FormFieldMessage>`}),argTypes:{state:{control:"select",options:Object.values(t)},messageId:{control:"text"},default:{control:"text",description:"Default slot content for the message."}}},e={args:{default:"Message",messageId:"message-id",state:t.DEFAULT}};e.parameters={design:{type:"figma",url:"https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13364-13669&m=dev"}};const s={args:{messageId:"message-id",state:t.DEFAULT},render:n=>({components:{FormFieldMessage:a,Icon:c},setup(){return{args:n,ICONS:l,ICON_SIZES:I}},template:`<FormFieldMessage v-bind="args">
            Message with inline <Icon :icon="ICONS.FA_ADDRESS_CARD" :size="ICON_SIZES.XX_SMALL" /> icon
        </FormFieldMessage>`})};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    default: 'Message',
    messageId: 'message-id',
    state: FORM_FIELD_STATES.DEFAULT
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,d,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    messageId: 'message-id',
    state: FORM_FIELD_STATES.DEFAULT
  },
  render: args => ({
    components: {
      FormFieldMessage,
      Icon
    },
    setup() {
      return {
        args,
        ICONS,
        ICON_SIZES
      };
    },
    template: \`<FormFieldMessage v-bind="args">
            Message with inline <Icon :icon="ICONS.FA_ADDRESS_CARD" :size="ICON_SIZES.XX_SMALL" /> icon
        </FormFieldMessage>\`
  })
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const _=["Interactive","WithInlineIcons"];export{e as Interactive,s as WithInlineIcons,_ as __namedExportsOrder,M as default};
